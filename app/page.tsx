import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  BrainCircuit,
  ChartNoAxesCombined,
  ScanText,
} from "lucide-react";
import {
  DataField,
  Footer,
  Header,
  ProjectCard,
  SectionLabel,
} from "@/components/portfolio";
import { projects } from "@/lib/portfolio-data";
import { profile } from "@/lib/profile";

const toolkit = [
  {
    icon: Braces,
    title: "Data & analysis",
    text: "Collecting and exploring data to find patterns worth investigating.",
    tools: ["Python", "Pandas", "NumPy", "SciPy", "Google Play Scraper"],
  },
  {
    icon: BrainCircuit,
    title: "Machine learning",
    text: "Comparing baseline and predictive models with careful evaluation.",
    tools: ["Scikit-learn", "PyTorch", "Joblib"],
  },
  {
    icon: ScanText,
    title: "Language & NLP",
    text: "Preparing Indonesian text and exploring language and sentiment patterns.",
    tools: ["IndoBERT", "Transformers", "TF-IDF", "Sastrawi"],
  },
  {
    icon: ChartNoAxesCombined,
    title: "Insight & delivery",
    text: "Turning analytical findings into clear visualizations and shareable dashboards.",
    tools: ["Streamlit", "Plotly", "Altair", "Folium", "Matplotlib", "Seaborn"],
  },
];

const methods = [
  {
    title: "Data & business analytics",
    evidence: "OLIST E-COMMERCE INTELLIGENCE",
    items: [
      "EDA & data profiling",
      "KPI design & metric validation",
      "RFM & repeat-purchase analysis",
      "Cohort retention & geospatial analysis",
    ],
  },
  {
    title: "Predictive modeling",
    evidence: "STUDENT SUCCESS PREDICTION",
    items: [
      "Feature preprocessing pipelines",
      "Stratified cross-validation & model selection",
      "Probability calibration",
      "Threshold-based review policies",
    ],
  },
  {
    title: "NLP & sentiment analysis",
    evidence: "GOJEK / KURIKULUM MERDEKA",
    items: [
      "Text cleaning & slang normalization",
      "Lexicon-based pseudo-labeling",
      "TF-IDF & Bag-of-Words",
      "LinearSVC, Logistic Regression & BiLSTM",
      "IndoBERT inference",
    ],
  },
  {
    title: "Evaluation & reliability",
    evidence: "OLIST / STUDENT SUCCESS / GOJEK",
    items: [
      "Macro F1 & per-class metrics",
      "Confusion matrices, Brier score & average precision",
      "Bootstrap confidence intervals",
      "Subgroup error analysis",
      "Data validation & regression tests",
    ],
  },
];

const selectedPrograms = [
  {
    number: "01",
    title: "GCI World April 2026",
    issuer: "Matsuo-Iwasawa Lab · U-Tokyo",
    dateLabel: "Issued Aug 2026",
    credentials: ["Certificate of Completion", "Certificate of Honor"],
  },
  {
    number: "02",
    title: "IDCamp 2025 · Data Science Cohort",
    issuer: "Indosat Ooredoo Hutchison",
    dateLabel: "Issued May 2026",
    credentials: ["Data Science Expert Level"],
  },
  {
    number: "03",
    title: "AWS Academy",
    issuer: "Amazon Web Services",
    dateLabel: "Ongoing learning",
    credentials: ["Generative AI Foundations · Graduate Training Badge · Sep 2026"],
    courses: [
      "Cloud Foundations",
      "Data Engineering",
      "Machine Learning for Natural Language Processing",
    ],
  },
];

function SilverMedalIcon() {
  return (
    <span className="foundation-award-icon" aria-hidden="true">
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none" focusable="false">
        <path d="M11 6h10l8 17-9 5L11 6Z" fill="#d2dbe7" stroke="#64758c" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M27 6h10L28 28l-9-5 8-17Z" fill="#e5ebf2" stroke="#64758c" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="24" cy="32" r="11" fill="#f4f6fa" stroke="#64758c" strokeWidth="2" />
        <text x="24" y="37" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="700" fill="#40536d">2</text>
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main id="main-content">
        <section className="hero wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="role-label">
                <span />
                DATA SCIENTIST <i>·</i> YOGYAKARTA, INDONESIA
              </div>
              <h1>
                Turning complex<br />
                data into <em>clearer</em><br />
                decisions.
              </h1>
              <p>
                I explore business questions, build predictive models, and work with
                Indonesian language data—grounded in careful evaluation.
              </p>
              <div className="hero-actions">
                <Link href="/projects/" className="button button-primary">
                  Explore selected work <ArrowRight size={16} />
                </Link>
                <a
                  href={profile.resume}
                  download={profile.resumeFilename}
                  className="button button-ghost"
                >
                  Download CV <ArrowDown size={15} />
                </a>
              </div>
              <div className="hero-meta">
                <span><i className="status-dot" /> FOCUS: ANALYSIS · MODELING · NLP</span>
                <span>PORTFOLIO / 2026</span>
              </div>
            </div>
            <DataField />
          </div>

          <div className="hero-bottom">
            <span>
              BUSINESS ANALYTICS <i /> MACHINE LEARNING <i /> INDONESIAN NLP
            </span>
            <a href="#about">SCROLL TO EXPLORE <ArrowDown size={13} /></a>
          </div>
        </section>

        <section className="section wrap about-section" id="about">
          <SectionLabel number="01">A LITTLE CONTEXT</SectionLabel>
          <div className="about-grid" data-reveal>
            <h2>
              Curiosity starts it.<br />
              <span>Evidence shapes it.</span>
            </h2>
            <div className="about-copy">
              <p>
                I&apos;m Nabil, a data scientist and Information Systems student at
                Universitas AMIKOM Yogyakarta.
              </p>
              <p>
                I enjoy the part where a messy dataset becomes a meaningful question—and
                where a model becomes something people can actually use. My work spans
                business analytics, machine learning, and Indonesian natural language
                processing.
              </p>
              <p>
                My approach is simple: understand the context, build carefully, and be
                honest about what the evidence can tell us.
              </p>
              <div className="about-facts">
                <div>
                  <span>BASED IN</span>
                  <strong>Yogyakarta, Indonesia</strong>
                </div>
                <div>
                  <span>CURRENTLY</span>
                  <strong>Studying & building</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section toolkit-section" id="toolkit">
          <div className="wrap">
            <SectionLabel number="02">MY TOOLKIT</SectionLabel>
            <div className="section-heading" data-reveal>
              <h2>The tools follow<br />the question.</h2>
              <p>
                Tools for exploring data, comparing models, working with language,
                and communicating findings.
              </p>
            </div>

            <div className="toolkit-grid">
              {toolkit.map(({ icon: Icon, title, text, tools }, index) => (
                <article className="toolkit-item" key={title} data-reveal data-tilt>
                  <div className="toolkit-icon">
                    <Icon size={23} strokeWidth={1.45} />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="tool-list">
                    {tools.map((tool) => <span key={tool}>{tool}</span>)}
                  </div>
                </article>
              ))}
            </div>

            <div className="methods-practice" data-reveal>
              <div className="methods-heading">
                <span className="methods-label">METHODS IN PRACTICE</span>
                <p>
                  A closer look at the methods used across selected data, machine
                  learning, and NLP projects.
                </p>
              </div>
              <div className="methods-grid">
                {methods.map((group, index) => (
                  <article className="methods-group" key={group.title} data-tilt>
                    <div className="methods-group-top">
                      <span>0{index + 1}</span>
                      <span className="methods-evidence">{group.evidence}</span>
                    </div>
                    <h4>{group.title}</h4>
                    <div className="methods-tags">
                      {group.items.map((item) => <span key={item}>{item}</span>)}
                    </div>
                  </article>
                ))}
              </div>
              <div className="workflow-line">
                <span>BEHIND THE WORK</span>
                <p>
                  Git &amp; GitHub <i /> Reproducible workflows <i /> Dataset validation
                  <i /> Unit tests / pytest <i /> Clear documentation
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap work-section" id="work">
          <SectionLabel number="03">SELECTED WORK</SectionLabel>
          <div className="section-heading" data-reveal>
            <h2>Questions worth<br />looking into.</h2>
            <Link href="/projects/" className="text-link">
              View all projects <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                featured={index === 0}
              />
            ))}
          </div>
        </section>

        <section className="section wrap experience-section" id="experience">
          <SectionLabel number="04">BEYOND THE NOTEBOOK</SectionLabel>
          <div className="experience-grid" data-reveal>
            <h2>
              Learning. Building.<br />
              <span>Giving back.</span>
            </h2>
            <div className="timeline">
              <article>
                <div className="timeline-date">2026</div>
                <div>
                  <h3>CODE 6.0</h3>
                  <span className="timeline-role">Event committee</span>
                  <p>
                    Part of the events division for a national seminar and competitions
                    in competitive programming and software development.
                  </p>
                </div>
                <ArrowUpRight size={19} />
              </article>
              <article>
                <div className="timeline-date">2024</div>
                <div>
                  <h3>Informatics mentoring</h3>
                  <span className="timeline-role">Junior OSN preparation</span>
                  <p>
                    Sharing problem-solving approaches with junior students preparing
                    for the Informatics Olympiad.
                  </p>
                </div>
                <ArrowUpRight size={19} />
              </article>
            </div>
          </div>
        </section>

        <section className="section wrap education-section">
          <SectionLabel number="05">THE FOUNDATION</SectionLabel>
          <div className="education-grid">
            <div className="foundation-education" data-reveal>
              <span className="small-label">EDUCATION</span>
              <h3>Information Systems</h3>
              <p>Universitas AMIKOM Yogyakarta</p>
              <span className="muted">2025 — Present</span>

              <div className="foundation-award">
                <span className="small-label">RECOGNITION</span>
                <div className="foundation-award-heading">
                  <SilverMedalIcon />
                  <div>
                    <strong>AMCC Member Training 2025/26</strong>
                    <p>2nd place · Data Science division · Jul 2026</p>
                  </div>
                </div>
                <div className="foundation-award-heading">
                  <SilverMedalIcon />
                  <div>
                    <strong>OSN-K Informatics</strong>
                    <p>2nd place · Tanah Datar · 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="programs-panel" data-reveal>
              <div className="programs-heading">
                <span className="small-label">SELECTED PROGRAMS &amp; CREDENTIALS</span>
                <span>2025 — 2026</span>
              </div>
              <div className="program-list">
                {selectedPrograms.map((program) => (
                  <article className="program-item" key={program.number}>
                    <span className="program-number" aria-hidden="true">{program.number}</span>
                    <div className="program-content">
                      <div className="program-title-row">
                        <h3>{program.title}</h3>
                        <span>{program.dateLabel}</span>
                      </div>
                      <p>{program.issuer}</p>
                      <div className="program-tags">
                        {program.credentials.map((credential) => (
                          <span key={credential}>{credential}</span>
                        ))}
                      </div>
                      {program.courses && (
                        <div className="program-coursework">
                          <span>OTHER AWS ACADEMY COURSES</span>
                          <ul>
                            {program.courses.map((course) => <li key={course}>{course}</li>)}
                          </ul>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
              <a
                className="programs-link"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                View all credentials on LinkedIn <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
