import "./App.css";

const projects = [
  {
    number: "01",
    name: "SkillFORGE",
    type: "AI · Career development",
    description:
      "A career-planning platform that compares a student's profile with a target role, surfaces skill gaps, and turns the next steps into a trackable learning roadmap.",
    stack: ["React", "Node.js", "Express", "Firebase", "Gemini API"],
    href: "https://github.com/axay-gamedev/SkillForge",
    action: "Explore project",
    featured: true,
  },
  {
    number: "02",
    name: "Photobooth",
    type: "Real-time · WebRTC",
    description:
      "A two-person virtual photobooth with private rooms, synchronized capture, a four-shot session, playful edits, and browser-based photo saving.",
    stack: ["React", "WebRTC", "Socket.IO", "Canvas API"],
    href: "https://photobooth-zenm.onrender.com/",
    action: "Visit live project",
  },
  {
    number: "03",
    name: "AI WebAssistant",
    type: "Browser extension · Applied AI",
    description:
      "A Chrome extension concept that turns web pages, YouTube videos, and PDFs into useful summaries and quick quizzes.",
    stack: ["JavaScript", "Manifest V3", "Gemini API"],
    href: "https://github.com/axay-gamedev",
    action: "Browse GitHub",
  },
];

const skills = [
  { label: "Languages", values: "C++ · Java · Python · JavaScript" },
  { label: "Web", values: "React · Next.js · Node.js · Express · Tailwind CSS" },
  { label: "Data & services", values: "MongoDB · Firebase · REST APIs" },
  { label: "Workflow", values: "Git · GitHub · debugging · testing" },
];

const experience = [
  {
    date: "AUG 2026",
    role: "Open Source Contributor",
    place: "CyberChef · Remote",
    text: "Investigated a parsing issue in fromDecimal.mjs and submitted a unit-tested fix for Auto delimiter detection, aligned with the project's existing parser behaviour.",
    link: "https://github.com/gchq/CyberChef/pull/2670",
    linkText: "Pull request #2670 ↗",
  },
  {
    date: "MAR 2022 — FEB 2023",
    role: "Tech Team Core Member",
    place: "St Mary's Academy · Meerut",
    text: "Helped run the school's COSMA technology festival through event logistics, technical setup, promotional video production, and presentation design.",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Akshay Mishra, home">
          <span className="wordmark-mark">AM</span>
          <span>Akshay Mishra</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="nav-contact">Get in touch <Arrow diagonal /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-meta"><span className="status-dot" /> OPEN TO INTERNSHIPS <span className="meta-divider">/</span> KANPUR, INDIA</div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">DEVELOPER · BUILDER · CURIOUS BY DEFAULT</p>
              <h1>Making useful things<br />for the <em>real world.</em></h1>
              <p className="hero-intro">
                I'm Akshay — a first-year Computer Science student focused on full-stack development and applied AI. I like turning rough ideas into thoughtful, working products.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#work">Explore my work <Arrow /></a>
                <a className="text-link" href="mailto:akshaymishra200701@gmail.com">Let's talk <Arrow diagonal /></a>
              </div>
              <div className="hero-footnote"><span>01 / 03</span><span>BUILDING AT THE INTERSECTION OF WEB + AI</span></div>
            </div>
            <aside className="hero-note" aria-label="Profile summary">
              <div className="note-top"><span>FIELD NOTES</span><span>2026—30</span></div>
              <div className="note-monogram">A<span>.</span></div>
              <p className="note-caption">Currently learning by shipping — from real-time web experiences to AI-assisted tools.</p>
              <div className="note-rule" />
              <div className="note-row"><span>STUDYING</span><strong>Computer Science · AI & ML</strong></div>
              <div className="note-row"><span>UNIVERSITY</span><strong>HBTU, Kanpur</strong></div>
              <div className="note-row"><span>CGPA</span><strong>8.0 / 10</strong></div>
              <div className="note-stamp">IN PROGRESS<br />ALWAYS</div>
            </aside>
          </div>
          <div className="ticker" aria-label="Areas of interest">
            <span>FULL-STACK DEVELOPMENT</span><i>✳</i><span>APPLIED AI</span><i>✳</i><span>REAL-TIME SYSTEMS</span><i>✳</i><span>OPEN SOURCE</span><i>✳</i>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div><p className="eyebrow">SELECTED WORK / 2025—26</p><h2>Projects with<br /><em>a purpose.</em></h2></div>
            <p className="section-aside">A few things I've built, broken, improved, and shipped. Each project started with a problem worth solving.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card ${project.featured ? "project-featured" : ""}`} key={project.number}>
                <div className="project-index">{project.number}</div>
                <div className="project-content">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.action} <Arrow diagonal /></a>
                </div>
                <div className="project-art" aria-hidden="true">
                  {project.number === "01" && <div className="art-roadmap"><div className="roadmap-node node-one">01 <small>PROFILE</small></div><div className="roadmap-line" /><div className="roadmap-node node-two">02 <small>SKILLS</small></div><div className="roadmap-line" /><div className="roadmap-node node-three">03 <small>GROW</small></div><span className="art-label">YOUR NEXT CHAPTER ↗</span></div>}
                  {project.number === "02" && <div className="art-camera"><div className="camera-flash" /><div className="camera-lens" /><div className="camera-caption">SAY CHEESE!</div><div className="photo-strip"><span /><span /><span /><span /></div></div>}
                  {project.number === "03" && <div className="art-browser"><div className="browser-top"><i /><i /><i /><span>page-notes.ai</span></div><div className="browser-lines"><b /><b /><b /><b /></div><div className="browser-result"><span>✳</span><strong>Quick summary</strong><small>Ideas, distilled.</small></div><div className="browser-chip">GENERATE QUIZ ↗</div></div>}
                </div>
              </article>
            ))}
          </div>
          <div className="more-work"><span>MORE EXPERIMENTS, COMMITS & SMALL WINS</span><a href="https://github.com/axay-gamedev" target="_blank" rel="noreferrer">Explore GitHub <Arrow diagonal /></a></div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-grid">
            <div className="about-title"><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Curiosity is<br />my <em>workflow.</em></h2><div className="about-asterisk">✳</div></div>
            <div className="about-body">
              <p className="about-lead">I enjoy the full journey: understanding a problem, designing a clear experience, building the system behind it, and refining the details until it feels right.</p>
              <p>I'm currently pursuing a B.Tech in Computer Science and Engineering (AI & ML) at Harcourt Butler Technical University. Outside coursework, I spend time building products, exploring AI integrations, and contributing fixes to open-source software.</p>
              <div className="education-card"><span className="education-icon">H</span><div><strong>Harcourt Butler Technical University</strong><span>B.Tech · Computer Science & Engineering (AI & ML)</span></div><span className="education-years">2026—2030</span></div>
            </div>
          </div>
        </section>

        <section className="capabilities section-wrap">
          <div className="section-heading compact-heading">
            <div><p className="eyebrow">TOOLS I REACH FOR</p><h2>My working<br /><em>toolkit.</em></h2></div>
            <p className="section-aside">A practical stack for building and shipping across the frontend, backend, and AI-enabled experiences.</p>
          </div>
          <div className="skill-table">{skills.map((skill, index) => <div className="skill-row" key={skill.label}><span className="skill-number">0{index + 1}</span><h3>{skill.label}</h3><p>{skill.values}</p><span className="skill-plus">↗</span></div>)}</div>
          <div className="skill-foot">ALWAYS ADDING TO THE TOOLBOX <span>✳</span> NEVER DONE LEARNING</div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-wrap experience-grid">
            <div className="experience-intro"><p className="eyebrow">BEYOND THE BUILD</p><h2>Learning by<br /><em>doing.</em></h2><p>Experience is more than a job title. It's the problems you learn to untangle and the people you learn to build with.</p></div>
            <div className="timeline">{experience.map((item, index) => <article className="timeline-item" key={item.role}><div className="timeline-marker">{index + 1}</div><div className="timeline-content"><span className="timeline-date">{item.date}</span><h3>{item.role}</h3><p className="timeline-place">{item.place}</p><p className="timeline-text">{item.text}</p>{item.link && <a href={item.link} target="_blank" rel="noreferrer" className="timeline-link">{item.linkText}</a>}</div></article>)}</div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-top"><p className="eyebrow">HAVE A GOOD PROBLEM?</p><span>AVAILABLE FOR THE RIGHT OPPORTUNITY ↗</span></div>
          <h2>Let's make<br /><em>something matter.</em></h2>
          <div className="contact-bottom"><a className="contact-email" href="mailto:akshaymishra200701@gmail.com">akshaymishra200701@gmail.com <Arrow diagonal /></a><p>Open to internships, collaborations, and ideas worth exploring.</p></div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="wordmark footer-wordmark" href="#top"><span className="wordmark-mark">AM</span><span>Akshay Mishra</span></a>
        <span>DESIGNED WITH INTENTION · BUILT WITH CODE</span>
        <div className="footer-links"><a href="https://github.com/axay-gamedev" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href="mailto:akshaymishra200701@gmail.com">Email <Arrow diagonal /></a><a href="#top">Back to top ↑</a></div>
        <small>© {new Date().getFullYear()} Akshay Mishra</small>
      </footer>
    </div>
  );
}

export default App;
