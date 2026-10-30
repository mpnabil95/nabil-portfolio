import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Header, Footer, SectionLabel } from "@/components/portfolio";
import { ProjectArchive } from "@/components/project-archive";
import { projects, github } from "@/lib/portfolio-data";

export const metadata = {
  title: "Projects",
  description:
    "Explore Nabil’s projects in business analytics, predictive modeling, and Indonesian natural language processing.",
  openGraph: {
    title: "Projects | Nabil",
    description:
      "Selected data science projects, with the process and evidence behind them.",
    type: "website",
  },
};

export default function Projects() {
  return (
    <div id="top">
      <Header />
      <main id="main-content" className="wrap archive">
        <section className="archive-hero">
          <SectionLabel number="INDEX">PROJECTS &amp; EXPLORATIONS</SectionLabel>
          <h1>
            A few questions.<br />
            <em>A body of work.</em>
          </h1>
          <p className="archive-intro">
            From understanding a business to interpreting language.
            <br />
            Selected projects, with the process and the evidence behind them.
          </p>
          <div className="archive-meta">
            <span>04 SELECTED CASE STUDIES</span>
            <span>DATA / MODELS / EVIDENCE</span>
          </div>
        </section>

        <ProjectArchive projects={projects} />

        <section className="other-work" data-reveal>
          <span className="small-label">COURSEWORK / OTHER EXPLORATIONS</span>
          <h2>A little beyond data science.</h2>
          <p>A few academic builds outside my current focus in data science.</p>
          <div>
            <a href={`${github}/Web-Pomodoro-and-Grow`} target="_blank" rel="noreferrer">
              <span>
                <small>WEB DEVELOPMENT</small>
                <strong>Pomodoro &amp; Grow</strong>
              </span>
              <ArrowUpRight size={17} />
            </a>
            <a href={`${github}/KostMeal_Kotlin`} target="_blank" rel="noreferrer">
              <span>
                <small>ANDROID · KOTLIN</small>
                <strong>KostMeal</strong>
              </span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <Link href="/" className="text-link archive-back">
          <ArrowLeft size={15} /> Back to home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
