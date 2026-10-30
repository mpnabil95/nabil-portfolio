import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import {
  CaseStudyToc,
  Footer,
  Header,
  ProjectVisual,
  SourceImage,
} from "@/components/portfolio";
import { projects } from "@/lib/portfolio-data";

const caseSections = [
  { id: "question", label: "The question" },
  { id: "data", label: "The data" },
  { id: "approach", label: "The approach" },
  { id: "findings", label: "The findings" },
  { id: "limitations", label: "The boundaries" },
  { id: "sources", label: "Sources & next steps" },
];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project?.title ?? "Project not found",
    description: project?.description,
    openGraph: {
      title: project ? `${project.title} | Nabil` : "Project not found",
      description: project?.description,
      type: "article",
    },
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const currentIndex = projects.indexOf(project);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <div id="top">
      <Header />
      <main id="main-content">
        <section className="wrap case-hero">
          <Link href="/projects/" className="back-link">
            ← All projects
          </Link>

          <div className="case-hero-top">
            <div className="project-category">
              <span>{project.category}</span>
            </div>
            <span className="case-number">CASE STUDY / {project.number}</span>
          </div>

          <h1>{project.title}</h1>
          <p className="case-intro">{project.intro}</p>

          <div className="case-actions">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Explore the repository <ArrowUpRight size={16} />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Open application <ArrowUpRight size={15} />
              </a>
            )}
          </div>

          <div className="case-facts">
            <div>
              <span>FOCUS</span>
              <strong>{project.category.split(" · ")[0].toLowerCase()}</strong>
            </div>
            <div>
              <span>TOOLKIT</span>
              <strong>{project.tools.join(" · ")}</strong>
            </div>
            <div>
              <span>FORMAT</span>
              <strong>{project.format ?? "Independent project"}</strong>
            </div>
          </div>

          <div className="case-hero-visual" data-reveal>
            <ProjectVisual project={project} />
          </div>
        </section>

        <div className="wrap case-layout">
          <CaseStudyToc sections={caseSections} />

          <article className="case-content">
            <section id="question" data-reveal>
              <div className="case-section-index">
                <span>01</span>
                <span>THE QUESTION</span>
              </div>
              <h2>Start with the problem.</h2>
              <p>{project.problem}</p>
            </section>

            <section id="data" data-reveal>
              <div className="case-section-index">
                <span>02</span>
                <span>THE DATA</span>
              </div>
              <h2>Know what the data represents.</h2>
              <p>{project.dataset}</p>
            </section>

            <section id="approach" data-reveal>
              <div className="case-section-index">
                <span>03</span>
                <span>THE APPROACH</span>
              </div>
              <h2>From question to application.</h2>
              <div className="approach-list">
                {project.approach.map((step, index) => (
                  <article key={step.title}>
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="findings" data-reveal>
              <div className="case-section-index">
                <span>04</span>
                <span>THE FINDINGS</span>
              </div>
              <h2>The results, in context.</h2>

              <div className="metrics-grid">
                {project.results.map((result) => (
                  <div key={result.label}>
                    <strong>{result.value}</strong>
                    <h3>{result.label}</h3>
                    <p>{result.context}</p>
                  </div>
                ))}
              </div>

              {project.insights.map((insight) => (
                <article className="insight" key={insight.title}>
                  <h3>{insight.title}</h3>
                  <p>{insight.text}</p>
                </article>
              ))}

              {project.image && (
                <SourceImage
                  src={project.image}
                  alt={project.imageAlt ?? "Project figure"}
                  source={project.source}
                />
              )}
            </section>

            <section id="limitations" className="limitations" data-reveal>
              <div className="case-section-index">
                <span>05</span>
                <span>THE BOUNDARIES</span>
              </div>
              <h2>What this work doesn&apos;t claim.</h2>
              <ul>
                {project.limitations.map((limitation) => (
                  <li key={limitation}>{limitation}</li>
                ))}
              </ul>
            </section>

            <section id="sources" data-reveal>
              <div className="case-section-index">
                <span>06</span>
                <span>KEEP EXPLORING</span>
              </div>
              <h2>The next useful question.</h2>
              <p>{project.nextSteps}</p>

              <div className="source-links">
                <a href={project.source} target="_blank" rel="noreferrer">
                  Project documentation &amp; evidence <ArrowUpRight size={14} />
                </a>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  Source code <ArrowUpRight size={14} />
                </a>
              </div>

              {project.number === "01" && (
                <p className="source-note">
                  Data: Brazilian E-Commerce Public Dataset by Olist (2016–2018),
                  licensed CC BY-NC-SA 4.0. Project code: MIT. Metrics are from the
                  project&apos;s documented delivered-order baseline.
                </p>
              )}

              {project.number === "02" && (
                <p className="source-note">
                  Data:{" "}
                  <a
                    href="https://doi.org/10.24432/C5MC89"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Predict Students&apos; Dropout and Academic Success, UCI
                  </a>
                  , licensed CC BY 4.0. Project code: MIT. Results describe
                  retrospective historical evaluation.
                </p>
              )}

              {project.number === "03" && (
                <p className="source-note">
                  This is a legacy AMCC prototype. Most modeling labels were
                  generated through assisted and model-based labeling; the reported
                  historical evaluation should not be read as independent human-label
                  validation.
                </p>
              )}

              {project.number === "04" && (
                <p className="source-note">
                  The sentiment targets are lexicon-generated pseudo-labels.
                  Reported model metrics describe agreement with those generated
                  labels, not independently annotated human sentiment.
                </p>
              )}
            </section>
          </article>
        </div>

        <section className="wrap next-project" data-reveal>
          <div>
            <span className="small-label">NEXT CASE STUDY</span>
            <Link href={`/projects/${next.slug}/`}>
              <h2>{next.title}</h2>
            </Link>
          </div>
          <Link href={`/projects/${next.slug}/`} aria-label={`Next project: ${next.title}`}>
            <ArrowUpRight size={31} />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
