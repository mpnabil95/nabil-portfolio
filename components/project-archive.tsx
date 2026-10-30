"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { ProjectCard } from "@/components/portfolio";
import type { Project } from "@/lib/portfolio-data";

const filters = [
  { id: "all", label: "All work" },
  { id: "analytics", label: "Analytics" },
  { id: "machine-learning", label: "Machine learning" },
  { id: "nlp", label: "NLP" },
] as const;

type FilterId = (typeof filters)[number]["id"];

export function ProjectArchive({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const [query, setQuery] = useState("");

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const category = project.category.toLowerCase();
      const matchesFilter =
        activeFilter === "all" ||
        (activeFilter === "analytics" && category.includes("business intelligence")) ||
        (activeFilter === "machine-learning" && category.includes("machine learning")) ||
        (activeFilter === "nlp" && category.includes("natural language processing"));

      const searchable = [
        project.title,
        project.shortTitle,
        project.category,
        project.description,
        ...project.tools,
      ].join(" ").toLowerCase();

      return matchesFilter && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeFilter, projects, query]);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".archive-browser .project-card");
    const frame = requestAnimationFrame(() => {
      cards.forEach((card, index) => {
        card.classList.add("is-visible");
        card.style.transitionDelay = `${Math.min(index * 65, 260)}ms`;
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [visibleProjects]);

  return (
    <section className="archive-browser" aria-label="Browse projects" data-reveal>
      <div className="archive-controls">
        <div className="archive-filter-wrap">
          <span className="archive-filter-icon"><SlidersHorizontal size={14} /> FILTER</span>
          <div className="archive-filters" role="group" aria-label="Filter projects by category">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                aria-pressed={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <label className="archive-search">
          <Search size={15} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects or tools..."
            aria-label="Search projects or tools"
          />
        </label>
      </div>

      <p className="archive-count">
        SHOWING <strong>{String(visibleProjects.length).padStart(2, "0")}</strong> OF{" "}
        {String(projects.length).padStart(2, "0")} PROJECTS
      </p>

      {visibleProjects.length > 0 ? (
        <div className="project-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="archive-empty">
          <span>NO MATCHING PROJECTS</span>
          <p>Try another keyword or reset the category filter.</p>
          <button
            type="button"
            onClick={() => {
              setActiveFilter("all");
              setQuery("");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
