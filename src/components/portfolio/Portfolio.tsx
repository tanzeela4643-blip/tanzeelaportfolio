import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowUp, ArrowUpRight, BarChart3, Bot, BrainCircuit, BriefcaseBusiness, Check,
  ChevronRight, Code2, Database, Download, ExternalLink, Github, Globe2, GraduationCap,
  Layers3, Linkedin, LoaderCircle, Mail, MapPin, Menu, Moon, Send, ServerCog,
  Sparkles, Sun, TerminalSquare, UserRound, X, Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { experience, projects, skillGroups, technologies, type ProjectCategory } from "./portfolio-data";
import { usePortfolio } from "./use-portfolio";

const EMAIL = "tanzeela4643@gmail.com";
const GITHUB = "https://github.com/tanzeela4643-blip";
const LINKEDIN = "https://linkedin.com/in/tanzeela-data-scientist";
const nav = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];
const filters: ProjectCategory[] = ["All", "Data Science", "AI/ML", "Python", "Web Development"];

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="icon-link">{children}</a>;
}

function SectionHeading({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <div className="section-heading" data-reveal>
      <p className="section-kicker"><span />{kicker}</p>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

function Header({ theme, setTheme, active }: { theme: "light" | "dark"; setTheme: (theme: "light" | "dark") => void; active: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Tanzeela Nawaz, home">
          <span className="brand-mark">TN</span><span>Tanzeela <strong>Nawaz</strong></span>
        </a>
        <nav className={cn("nav-links", open && "is-open")} aria-label="Primary navigation">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className={active === item.toLowerCase() ? "active" : ""} onClick={() => setOpen(false)}>{item}</a>)}
          <div className="mobile-actions">
            <a className="btn btn-secondary" href="/resume.pdf" download><Download /> Download Resume</a>
          </div>
        </nav>
        <div className="header-actions">
          <IconLink href={GITHUB} label="Visit GitHub"><Github /></IconLink>
          <IconLink href={LINKEDIN} label="Visit LinkedIn"><Linkedin /></IconLink>
          <Button variant="ghost" size="icon" className="theme-button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <a className="btn btn-primary resume" href="/resume.pdf" download><Download /> Resume</a>
          <Button variant="ghost" size="icon" className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-pad">
      <div className="hero-grid container-wide">
        <div className="hero-copy" data-reveal>
          <div className="eyebrow"><Sparkles /> BS Data Science Student <i /> AI & Python Developer</div>
          <h1>Hi, I’m <span>Tanzeela Nawaz</span></h1>
          <p className="hero-role">Data Science & AI Enthusiast</p>
          <p className="hero-intro">I build intelligent, data-driven and user-focused solutions using Python, AI, machine learning and modern web technologies.</p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-large" href="#projects">View My Projects <ArrowUpRight /></a>
            <a className="btn btn-secondary btn-large" href="#contact">Let’s Connect <ChevronRight /></a>
          </div>
          <div className="hero-meta">
            <span><MapPin /> Lahore, Pakistan</span>
            <div><IconLink href={GITHUB} label="Tanzeela on GitHub"><Github /></IconLink><IconLink href={LINKEDIN} label="Tanzeela on LinkedIn"><Linkedin /></IconLink></div>
          </div>
        </div>
        <div className="profile-stage" data-reveal>
          <div className="data-orbit orbit-one" /><div className="data-orbit orbit-two" />
          <div className="profile-frame">
            <div className="profile-grid" aria-hidden="true" />
            <div className="avatar-placeholder" role="img" aria-label="Profile photo placeholder for Tanzeela Nawaz">
              <UserRound />
              <span>TN</span>
              <small>Profile photo</small>
            </div>
          </div>
          <div className="float-pill pill-python"><TerminalSquare /> Python</div>
          <div className="float-pill pill-ai"><BrainCircuit /> AI / ML</div>
          <div className="float-pill pill-data"><BarChart3 /> Data Science</div>
        </div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to About section"><span>Scroll to explore</span><i /></a>
    </section>
  );
}

const whatIDo = [
  [BarChart3, "Data Analysis"], [BrainCircuit, "Machine Learning"], [Bot, "AI Applications"],
  [TerminalSquare, "Python Development"], [Globe2, "Web Development"], [ServerCog, "REST APIs"],
] as const;

function About() {
  const stats = [["3rd Semester", "BS Data Science"], ["6+", "Projects"], ["2+", "Internship Experiences"], ["2029", "Expected Graduation"]];
  return (
    <section id="about" className="section-pad section-muted">
      <div className="container-wide">
        <SectionHeading kicker="Get to know me" title="About Me" />
        <div className="about-grid">
          <div className="about-copy" data-reveal>
            <p className="lead">I’m Tanzeela Nawaz, a BS Data Science student at The Superior University, Lahore. I enjoy solving real-world problems using Python, data analysis, artificial intelligence, machine learning and modern web technologies.</p>
            <p>Through internships and hands-on projects, I’ve developed practical experience building Python applications, REST APIs, AI-powered web applications and machine learning solutions. I’m continuously learning and improving my skills to become a strong Data Science and AI professional.</p>
            <div className="education-line"><GraduationCap /><div><strong>BS Data Science</strong><span>The Superior University, Lahore</span></div></div>
          </div>
          <div className="service-grid" data-reveal>
            {whatIDo.map(([Icon, name]) => <div className="service-item" key={name}><Icon /><span>{name}</span></div>)}
          </div>
        </div>
        <div className="stats-grid" data-reveal>{stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-narrow">
        <SectionHeading kicker="My journey" title="Experience" intro="Practical learning through internships and hands-on development." />
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item" key={item.organization} data-reveal>
              <div className="timeline-index">0{index + 1}</div>
              <div className="timeline-card">
                <div className="timeline-top"><div><span className="company">{item.organization}</span><h3>{item.role}</h3></div><BriefcaseBusiness /></div>
                <p>{item.description}</p>
                {item.tasks.length > 0 && <ul>{item.tasks.map((task) => <li key={task}><Check />{task}</li>)}</ul>}
                {item.github && <a href={item.github} target="_blank" rel="noreferrer" className="text-link"><Github /> View work on GitHub <ArrowUpRight /></a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const visible = useMemo(() => filter === "All" ? projects : projects.filter((project) => project.categories.includes(filter)), [filter]);
  return (
    <section id="projects" className="section-pad section-muted">
      <div className="container-wide">
        <SectionHeading kicker="Selected work" title="Projects" intro="A selection of data, AI, Python and web experiences built through practical exploration." />
        <div className="filters" role="group" aria-label="Filter projects by category" data-reveal>
          {filters.map((name) => <Button key={name} variant={filter === name ? "default" : "ghost"} onClick={() => setFilter(name)} aria-pressed={filter === name}>{name}</Button>)}
        </div>
        <div className="project-grid" aria-live="polite">
          {visible.map((project) => (
            <article className="project-card" key={project.title} data-reveal>
              <div className="project-image"><img src={project.image} alt={project.alt} width={960} height={640} loading="lazy" /></div>
              <div className="project-body">
                <div className="project-number">PROJECT / {String(projects.indexOf(project) + 1).padStart(2, "0")}</div>
                <h3>{project.title}</h3><p>{project.description}</p>
                {project.features && <ul className="feature-list">{project.features.map((feature) => <li key={feature}><Check />{feature}</li>)}</ul>}
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {(project.live || project.github) && <div className="project-actions">
                  {project.live && <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer"><ExternalLink /> Live Demo</a>}
                  {project.github && <a className="btn btn-secondary" href={project.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>}
                </div>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const skillIcons = [BrainCircuit, Code2, TerminalSquare, Layers3];
function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-wide">
        <SectionHeading kicker="My toolkit" title="Skills & Technologies" intro="Tools and concepts I use to turn ideas and data into practical solutions." />
        <div className="skills-grid">
          {skillGroups.map((group, index) => { const Icon = skillIcons[index]; return <article className="skill-card" key={group.title} data-reveal><div className="skill-icon"><Icon /></div><h3>{group.title}</h3><div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>; })}
        </div>
      </div>
      <div className="marquee" aria-label="Technology toolkit"><div className="marquee-track">{[...technologies, ...technologies].map((item, index) => <span key={`${item}-${index}`}><i />{item}</span>)}</div></div>
    </section>
  );
}

function WhatIBring() {
  const items = [
    [BrainCircuit, "Problem Solving", "I enjoy breaking complex problems into practical and understandable solutions."],
    [Zap, "Continuous Learning", "I’m constantly improving my Data Science, AI, Python and development skills."],
    [Code2, "Practical Projects", "I focus on building real projects rather than learning only through theory."],
    [Layers3, "Adaptable", "I’m comfortable exploring new technologies and learning tools required for a project."],
  ] as const;
  return <section className="section-pad section-muted"><div className="container-wide"><SectionHeading kicker="How I work" title="What I Bring" /><div className="bring-grid">{items.map(([Icon, title, text], index) => <article key={title} data-reveal><span>0{index + 1}</span><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

function Contact() {
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Record<string, string> = {};
    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (!message) next.message = "Please add a short message.";
    setErrors(next);
    if (Object.keys(next).length) { toast.error("Please check the highlighted fields."); return; }
    setSending(true);
    window.setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setSending(false);
      toast.success("Your email app is ready with the message.");
    }, 500);
  };
  return (
    <section id="contact" className="section-pad contact-section">
      <div className="container-wide contact-grid">
        <div className="contact-copy" data-reveal>
          <p className="section-kicker"><span />Start a conversation</p>
          <h2>Let’s Build Something <em>Great Together</em></h2>
          <p>I’m open to internships, junior opportunities, freelance projects and collaborations in Data Science, AI, Python and Web Development.</p>
          <a className="email-link" href={`mailto:${EMAIL}`}><span><Mail /></span><div><small>Email me at</small><strong>{EMAIL}</strong></div><ArrowUpRight /></a>
          <div className="social-cards"><a href={GITHUB} target="_blank" rel="noreferrer"><Github /><span><strong>GitHub</strong><small>Explore my code</small></span><ArrowUpRight /></a><a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin /><span><strong>LinkedIn</strong><small>Let’s connect</small></span><ArrowUpRight /></a></div>
        </div>
        <form className="contact-form" onSubmit={submit} noValidate data-reveal>
          <div className="form-heading"><Send /><div><h3>Send a message</h3><p>I’ll get back to you by email.</p></div></div>
          <label htmlFor="contact-name">Name</label><Input id="contact-name" name="name" maxLength={100} placeholder="Your name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
          <label htmlFor="contact-email">Email</label><Input id="contact-email" name="email" type="email" maxLength={255} placeholder="you@example.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
          <label htmlFor="contact-message">Message</label><Textarea id="contact-message" name="message" maxLength={1200} placeholder="Tell me about the opportunity or project..." rows={6} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />{errors.message && <span className="field-error" id="message-error">{errors.message}</span>}
          <Button type="submit" disabled={sending} className="submit-button">{sending ? <LoaderCircle className="spin" /> : <Send />}{sending ? "Preparing email..." : "Send Message"}</Button>
          <p className="form-note">This form securely opens your default email app. No information is stored.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return <footer><div className="footer-top container-wide"><a className="brand" href="#home"><span className="brand-mark">TN</span><span>Tanzeela <strong>Nawaz</strong></span></a><nav aria-label="Footer navigation">{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav><div><IconLink href={GITHUB} label="GitHub"><Github /></IconLink><IconLink href={LINKEDIN} label="LinkedIn"><Linkedin /></IconLink></div></div><div className="footer-bottom container-wide"><span>© 2026 Tanzeela Nawaz. All rights reserved.</span><span>Built with React & Tailwind CSS</span></div></footer>;
}

export function Portfolio() {
  const { theme, setTheme, activeSection, showTop } = usePortfolio();
  return (
    <div className="portfolio-shell">
      <Header theme={theme} setTheme={setTheme} active={activeSection} />
      <main><Hero /><About /><Experience /><Projects /><Skills /><WhatIBring /><Contact /></main>
      <Footer />
      <Button size="icon" className={cn("scroll-top", showTop && "show")} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top"><ArrowUp /></Button>
      <Toaster position="bottom-right" richColors />
    </div>
  );
}