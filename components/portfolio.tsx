"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Database,
  GitBranch,
  Mail,
  Menu,
  MessageSquareText,
  X,
} from "lucide-react";
import { github, type Project } from "@/lib/portfolio-data";
import { profile } from "@/lib/profile";

const navigation = [
  { label: "Projects", href: "/projects/" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];


function GitHubMark() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 .297a12 12 0 0 0-3.793 23.386c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.333-5.467-5.932 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.49 11.49 0 0 1 6.006 0c2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.221 0 4.61-2.807 5.625-5.48 5.922.43.372.814 1.102.814 2.222v3.294c0 .319.216.694.825.576A12.001 12.001 0 0 0 12 .297z" />
    </svg>
  );
}

function LinkedInMark() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap nav-inner">
        <Link href="/" className="wordmark" aria-label="Nabil home">
          nabil<span>.</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-socials" aria-label="Social links">
          <a href={`mailto:${profile.email}`} aria-label="Send email">
            <Mail size={16} />
          </a>
          <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubMark />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInMark />
          </a>
        </div>

        <button
          className="mobile-menu"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav-panel" id="mobile-navigation" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.label} onClick={() => setMenuOpen(false)}>
              {item.label}
              <ArrowUpRight size={16} />
            </Link>
          ))}
          <a href={github} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            GitHub <ArrowUpRight size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            LinkedIn <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}

export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label" data-reveal>
      <span>{number}</span>
      {children}
    </div>
  );
}

export function DataField() {
  const focusAreas = [
    { icon: Database, label: "Business intelligence & analytics" },
    { icon: BrainCircuit, label: "Predictive modeling" },
    { icon: MessageSquareText, label: "Indonesian NLP & sentiment analysis" },
    { icon: ChartNoAxesCombined, label: "Model evaluation & communication" },
  ];

  return (
    <aside className="focus-panel" aria-label="Focus areas" data-reveal>
      <div className="focus-panel-top">
        <span>Focus areas</span>
        <span>01 — 04</span>
      </div>

      <ul className="focus-list">
        {focusAreas.map(({ icon: Icon, label }) => (
          <li key={label}>
            <span aria-hidden="true" />
            <Icon size={15} aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>

      <div className="focus-panel-bottom">
        <div className="signal-mark" aria-hidden="true">
          {Array.from({ length: 6 }, (_, index) => <i key={index} />)}
        </div>
        <p>FROM RAW DATA<br />TO DECISION-READY INSIGHT</p>
      </div>
    </aside>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="contact-section">
      <div className="wrap">
        <SectionLabel number="06">LET&apos;S CONNECT</SectionLabel>

        <div className="contact-grid" data-reveal>
          <h2>
            Good questions.<br />
            <span>Better together.</span>
          </h2>

          <div>
            <p>
              Have an interesting problem,<br />
              a project idea, or a new perspective?<br />
              I&apos;d love to connect.
            </p>
            <a className="button button-white" href={`mailto:${profile.email}`}>
              Let&apos;s talk by email <ArrowUpRight size={17} />
            </a>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className="contact-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={14} />
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={14} />
              </a>
              <a href={profile.resume} download={profile.resumeFilename}>
                Download CV <ArrowDown size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Muhammad Pangeran Nabil</p>
          <span>Built with curiosity. Grounded in evidence.</span>
          <a href="#top">Back to top <ArrowUp size={14} /></a>
        </div>
      </div>
    </footer>
  );
}

export function ProjectVisual({ project: p }: { project: Project }) {
  const isOlist = p.number === "01";
  const isStudent = p.number === "02";
  const isGojek = p.number === "04";

  const heading = isOlist
    ? ["OLIST / ANALYTICAL SNAPSHOT", "2016—2018"]
    : isStudent
      ? ["STUDENT SUCCESS / REVIEW POLICY", "HISTORICAL HOLDOUT"]
      : isGojek
        ? ["GOJEK / SENTIMENT ANALYSIS", "GOOGLE PLAY REVIEWS"]
        : ["INDOBERT / TEXT TO SIGNAL", "INDONESIAN NLP"];

  return (
    <div className={`project-visual ${p.color}`}>
      <div className="visual-heading">
        <span>{heading[0]}</span>
        <span>{heading[1]}</span>
      </div>

      {isOlist ? (
        <div className="visual-body">
          <div className="visual-hero-stat">
            <span>DELIVERED ORDERS</span>
            <strong>96,478</strong>
            <small>Brazilian e-commerce dataset</small>
          </div>
          <div className="visual-bars">
            <div className="visual-bar-row">
              <div><span>Product GMV</span><strong>R$13.22M</strong></div>
              <div className="visual-bar-track"><i style={{ width: "85.75%" }} /></div>
            </div>
            <div className="visual-bar-row">
              <div><span>Order value, incl. freight</span><strong>R$15.42M</strong></div>
              <div className="visual-bar-track"><i style={{ width: "100%" }} /></div>
            </div>
          </div>
        </div>
      ) : isStudent ? (
        <div className="visual-body visual-student">
          <div className="visual-gauge">
            <div>
              <strong>88.03%</strong>
              <span>DROPOUT RECALL</span>
            </div>
          </div>
          <div className="visual-side-stat">
            <span>SELECTED REVIEW POLICY</span>
            <strong>250 / 284</strong>
            <p>Historical dropout cases detected at the selected threshold.</p>
            <small>THRESHOLD 0.19 · HUMAN REVIEW</small>
          </div>
        </div>
      ) : (
        <div className="visual-body visual-nlp">
          <div className="visual-token-row">
            {isGojek ? (
              <>
                <span>ulasan aplikasi</span>
                <span>pengalaman pengguna</span>
                <span>sentimen</span>
              </>
            ) : (
              <>
                <span>kurikulum</span>
                <span>pembelajaran</span>
                <span>opini publik</span>
              </>
            )}
          </div>
          <div className="visual-model-node">
            <GitBranch size={19} />
            <strong>{isGojek ? "3 model approaches" : "IndoBERT"}</strong>
            <small>{isGojek ? "TF-IDF · BoW · BiLSTM" : "contextual text inference"}</small>
          </div>
          <div className="visual-output-row">
            <span>Positive</span>
            <span>Neutral</span>
            <span>Negative</span>
          </div>
        </div>
      )}

      <div className="visual-foot">
        <span>
          {isOlist
            ? "Delivered-order baseline · GMV excludes freight"
            : isStudent
              ? "Recall shown with precision and workload in the case study"
              : isGojek
                ? "15,000 raw reviews · 3 sentiment classes"
                : "Three-class inference · legacy AMCC prototype"}
        </span>
        <span>↗</span>
      </div>
    </div>
  );
}

export function ProjectCard({
  project: p,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`project-card project-${p.color}${featured ? " featured" : ""}`}
      data-reveal
      data-tilt
    >
      <Link
        href={`/projects/${p.slug}/`}
        className="project-image-link"
        aria-label={`Read ${p.title} case study`}
      >
        <ProjectVisual project={p} />
        <span className="project-open" aria-hidden="true">
          <ArrowUpRight size={22} />
        </span>
      </Link>

      <div className="project-card-body">
        <div className="project-category">
          <span>{p.category}</span>
          <span>/{p.number}</span>
        </div>
        <Link href={`/projects/${p.slug}/`}>
          <h3>{p.shortTitle}</h3>
        </Link>
        <p>{p.description}</p>
        <div className="project-meta">
          <div className="tags">
            {p.tools.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
          <Link href={`/projects/${p.slug}/`} className="text-link">
            Case study <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function SourceImage({
  src,
  alt,
  source,
}: {
  src: string;
  alt: string;
  source: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="source-figure" data-reveal>
      {!failed && (
        // The source figures live in the project repositories; static export uses a plain image URL.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      )}
      <figcaption>
        <span>
          {failed
            ? "The figure could not be loaded here. Open the project repository to inspect the original artifact."
            : alt}
        </span>
        <a href={source} target="_blank" rel="noreferrer">
          View source <ArrowUpRight size={13} />
        </a>
      </figcaption>
    </figure>
  );
}

export function CaseStudyToc({
  sections,
}: {
  sections: { id: string; label: string }[];
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const targets = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element instanceof HTMLElement);

    if (!targets.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: "-18% 0px -66% 0px",
        threshold: [0, 0.15, 0.35],
      },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [sections]);

  const activeIndex = Math.max(0, sections.findIndex((section) => section.id === activeId));

  return (
    <aside className="case-toc" aria-label="Case study contents">
      <span>IN THIS CASE STUDY</span>
      <nav className="case-toc-links">
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={activeId === section.id ? "location" : undefined}
          >
            <small>0{index + 1}</small>
            {section.label}
          </a>
        ))}
      </nav>
      <span className="case-toc-progress" aria-hidden="true">
        <i style={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }} />
      </span>
    </aside>
  );
}

