import Link from 'next/link';
import {Braces,BrainCircuit,ScanText,ChartNoAxesCombined,ArrowUpRight,ArrowDown} from 'lucide-react';
import {Header,Footer,SectionLabel,DataField,ProjectCard} from '@/components/portfolio';
import {projects} from '@/lib/portfolio-data';
import {profile} from '@/lib/profile';
const toolkit=[{icon:Braces,title:'Data & analysis',text:'From raw tables to questions worth answering.',tools:['Python','Pandas','NumPy','SciPy']},{icon:BrainCircuit,title:'Machine learning',text:'Models built with evaluation and context in mind.',tools:['Scikit-learn','PyTorch','Joblib']},{icon:ScanText,title:'Language & NLP',text:'Finding structure and meaning in Indonesian text.',tools:['IndoBERT','Transformers','TF-IDF','Sastrawi']},{icon:ChartNoAxesCombined,title:'Insight & delivery',text:'Making the work clear, interactive, and usable.',tools:['Streamlit','Plotly','Altair','Folium','Matplotlib','Seaborn']}];
const selectedPrograms: {number:string;title:string;issuer:string;dateLabel:string;credentials:string[];courses?:string[]}[] = [
  {number:'01',title:'GCI World April 2026',issuer:'Matsuo-Iwasawa Lab · U-Tokyo',dateLabel:'Issued Aug 2026',credentials:['Certificate of Completion','Certificate of Honor']},
  {number:'02',title:'IDCamp 2025 · Data Science Cohort',issuer:'Indosat Ooredoo Hutchison',dateLabel:'Issued May 2026',credentials:['Data Science Expert Level']},
  {number:'03',title:'AWS Academy',issuer:'Amazon Web Services',dateLabel:'Ongoing learning',credentials:['Generative AI Foundations · Graduate Training Badge · Sep 2026'],courses:['Cloud Foundations','Data Engineering','Machine Learning for Natural Language Processing']},
];
export default function Home(){return <div id="top"><Header/><main id="main-content"><section className="hero wrap"><div className="hero-eyebrow"><span>MUHAMMAD PANGERAN NABIL</span><span>BASED IN YOGYAKARTA, ID</span></div><div className="hero-grid"><div className="hero-copy"><div className="role-label"><span/>DATA SCIENTIST</div><h1>Finding clarity<br/>in complex<br/><em>data.</em></h1><p>I turn questions into analysis, models into tools,<br className="desktop-break"/> and data into a clearer way forward.</p><div className="hero-actions"><a href="#work" className="button button-blue">Explore my work <ArrowDown size={17}/></a><a href={profile.resume} download={profile.resumeFilename} className="text-link resume-link">Download CV <ArrowDown size={16}/></a></div></div><DataField/></div><div className="hero-bottom"><span>DATA ANALYSIS <i/> MACHINE LEARNING <i/> NATURAL LANGUAGE PROCESSING</span><a href="#about">SCROLL TO DISCOVER <ArrowDown size={13}/></a></div></section><section className="section wrap about-section" id="about"><SectionLabel number="01">A LITTLE CONTEXT</SectionLabel><div className="about-grid"><h2>Curiosity starts it.<br/><span>Evidence shapes it.</span></h2><div className="about-copy"><p>I’m Nabil, a data scientist and Information Systems student at Universitas AMIKOM Yogyakarta.</p><p>I enjoy the part where a messy dataset becomes a meaningful question—and where a model becomes something people can actually use. My work spans business analytics, machine learning, and Indonesian natural language processing.</p><p>My approach is simple: understand the context, build carefully, and be honest about what the evidence can tell us.</p><div className="about-facts"><div><span>BASED IN</span><strong>Yogyakarta, Indonesia</strong></div><div><span>CURRENTLY</span><strong>Studying & building</strong></div></div></div></div></section><section className="toolkit-section section" id="toolkit"><div className="wrap"><SectionLabel number="02">MY TOOLKIT</SectionLabel><div className="section-heading"><h2>The tools follow<br/>the question.</h2><p>A practical toolkit for exploring data,<br/>testing ideas, and sharing the result.</p></div><div className="toolkit-grid">{toolkit.map(({icon:Icon,title,text,tools},i)=><article key={title} className="toolkit-item"><div className="toolkit-icon"><Icon size={25} strokeWidth={1.4}/><span>0{i+1}</span></div><h3>{title}</h3><p>{text}</p><div className="tool-list">{tools.map(t=><span key={t}>{t}</span>)}</div></article>)}</div><div className="workflow-line"><span>BEHIND THE WORK</span><p>Git & GitHub <i/> Reproducible workflows <i/> Clear documentation</p></div></div></section><section className="section wrap work-section" id="work"><SectionLabel number="03">SELECTED WORK</SectionLabel><div className="section-heading"><h2>Questions worth<br/>looking into.</h2><Link href="/projects" className="text-link">View all projects <ArrowUpRight size={18}/></Link></div><div className="project-grid">{projects.map((p,i)=><ProjectCard key={p.slug} project={p} featured={i===0}/>)}</div></section><section className="section wrap experience-section" id="experience"><SectionLabel number="04">BEYOND THE NOTEBOOK</SectionLabel><div className="experience-grid"><h2>Learning. Building.<br/><span>Giving back.</span></h2><div className="timeline"><article><div className="timeline-date">2026</div><div><h3>CODE 6.0</h3><span className="timeline-role">Event committee</span><p>Part of the events division for a national seminar and competitions in competitive programming and software development.</p></div><ArrowUpRight size={20}/></article><article><div className="timeline-date">2024</div><div><h3>Informatics mentoring</h3><span className="timeline-role">Junior OSN preparation</span><p>Sharing problem-solving approaches with junior students preparing for the Informatics Olympiad.</p></div><ArrowUpRight size={20}/></article></div></div></section><section className="section wrap education-section">
  <SectionLabel number="05">THE FOUNDATION</SectionLabel>
  <div className="education-grid">
    <div className="foundation-education">
      <span className="small-label">EDUCATION</span>
      <h3>Information Systems</h3>
      <p>Universitas AMIKOM Yogyakarta</p>
      <span className="muted">2025 — Present</span>
      <div className="foundation-award">
        <span className="small-label">RECOGNITION</span>
        <div className="foundation-award-heading">
          <span className="foundation-award-icon" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none" focusable="false">
              <path d="M11 6h10l8 17-9 5L11 6Z" fill="#d2dbe7" stroke="#64758c" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M27 6h10L28 28l-9-5 8-17Z" fill="#e5ebf2" stroke="#64758c" strokeWidth="1.5" strokeLinejoin="round"/>
              <circle cx="24" cy="32" r="11" fill="#f4f6fa" stroke="#64758c" strokeWidth="2"/>
              <text x="24" y="37" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="700" fill="#40536d">2</text>
            </svg>
          </span>
          <div><strong>OSN-K Informatics</strong><p>2nd place · Tanah Datar · 2023</p></div>
        </div>
      </div>
    </div>
    <div className="programs-panel">
      <div className="programs-heading">
        <span className="small-label">SELECTED PROGRAMS &amp; CREDENTIALS</span>
        <span>2025 — 2026</span>
      </div>
      <div className="program-list">
        {selectedPrograms.map(program=><article className="program-item" key={program.number}>
          <span className="program-number" aria-hidden="true">{program.number}</span>
          <div className="program-content">
            <div className="program-title-row"><h3>{program.title}</h3><span>{program.dateLabel}</span></div>
            <p>{program.issuer}</p>
            <div className="program-tags">{program.credentials.map(credential=><span key={credential}>{credential}</span>)}</div>
            {program.courses && <div className="program-coursework"><span>OTHER AWS ACADEMY COURSES</span><ul>{program.courses.map(course=><li key={course}>{course}</li>)}</ul></div>}
          </div>
        </article>)}
      </div>
      <a className="programs-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">View all credentials on LinkedIn <ArrowUpRight size={16}/></a>
    </div>
  </div>
</section></main><Footer/></div>}
