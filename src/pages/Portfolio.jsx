import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Rocket,
  ShieldCheck,
  X,
  Zap,
} from "lucide-react";

/**
 * Dhanesh Sathe — Premium Freelance Portfolio
 * React + Tailwind CSS + lucide-react
 *
 * Place profile image at:
 * /public/Images/self5-removebg-preview2.png
 */

const navItems = [
  ["home", "Home"],
  ["services", "What I Build"],
  ["clients", "Client Work"],
  ["work", "Projects"],
  ["experience", "Experience"],
  ["about", "About"],
];

const services = [
  { number: "01", icon: Globe2, title: "Websites & Digital Experiences", text: "Responsive business websites, landing pages, content updates, forms, integrations and deployment.", tags: ["React", "JavaScript", "Responsive UI"] },
  { number: "02", icon: Layers3, title: "Web Applications", text: "Custom dashboards, portals and workflow-driven applications designed around real business requirements.", tags: ["React", "Django", "MERN"] },
  { number: "03", icon: Database, title: "Backend & APIs", text: "REST APIs, authentication, databases, integrations and backend systems for connected products.", tags: ["Django REST", "Node.js", "PostgreSQL"] },
  { number: "04", icon: ShieldCheck, title: "QA & Test Automation", text: "API automation, browser automation and reusable frameworks focused on reliable releases and regression coverage.", tags: ["Playwright", "Karate", "Postman"] },
  { number: "05", icon: Code2, title: "UI/UX Implementation", text: "Turning business requirements and designs into polished, responsive and maintainable interfaces.", tags: ["UI Systems", "Tailwind", "Responsive"] },
  { number: "06", icon: Rocket, title: "Deployment & Technical Support", text: "Practical support across hosting, deployment, integrations, troubleshooting and ongoing product improvements.", tags: ["Deployment", "Integrations", "Support"] },
];

const clientWork = [
  {
    title: "Talent Bridge Solution", eyebrow: "Active client engagement",
    description: "A real business engagement focused on website development, digital implementation and ongoing technical support.",
    primary: ["Website development & maintenance", "UI/UX and content implementation", "Technical support & deployment", "Digital integrations"],
    secondary: ["Google Business & local visibility support", "LinkedIn/company presence", "Recruitment-platform research", "Business communication & digital assets"],
    accent: "cyan",
  },
  {
    title: "Firuya.com", eyebrow: "Active client engagement",
    description: "Current website development engagement covering website work, content updates, frontend improvements and ongoing technical support.",
    primary: ["Website development & maintenance", "Content implementation", "Frontend improvements", "Ongoing technical support"],
    secondary: [],
    accent: "violet",
  },
];

const projects = [
  {
    title: "FinSentinel",
    label: "Financial Intelligence Platform",
    description:
      "A full-stack financial news and sentiment platform combining market APIs, sentiment analysis and interactive dashboards.",
    points: [
      "Django REST backend with JWT authentication",
      "PostgreSQL data layer and API integrations",
      "React dashboard for market insights",
    ],
    tech: ["Django", "DRF", "React", "PostgreSQL", "APIs"],
    github: "https://github.com/Dhanesh-Sathe/Fintech-Backend",
  },
  {
    title: "Helpdesk",
    label: "MERN Support Platform",
    description:
      "A role-based helpdesk application for managing customers, support agents, tickets and administrative workflows.",
    points: [
      "REST APIs for users and ticket management",
      "Authentication and CRUD workflows",
      "Modular services designed for maintainability",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/Dhanesh-Sathe/HelpDesk",
  },
];

const experience = [
  {
    role: "Software Quality Engineer I",
    company: "Cytel",
    date: "Jan 2026 — Present",
    summary:
      "Working across API automation, data validation and reusable test-framework development for complex product workflows.",
    bullets: [
      "Own end-to-end API automation for two products, including legacy workflows and release regression.",
      "Built reusable, data-driven Playwright automation for structured validation across environments.",
      "Developed framework capabilities for dynamic payloads, authentication, environment management, uploads, validation, reporting and debugging.",
      "Automated 200+ test scenarios and supported weekly automation planning and testing productivity initiatives.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "R4C Tech LLC",
    date: "Jun 2025 — Feb 2026",
    summary:
      "Worked across backend development, machine learning, databases, frontend integration, testing and deployment.",
    bullets: [
      "Developed backend components for a keystroke-dynamics-based plagiarism detection system using Python.",
      "Developed and tested statistical and machine-learning models for pattern recognition and anomaly detection.",
      "Designed database components and built React frontend components integrated with backend systems.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "TensorBuilds",
    date: "Sep 2024 — Nov 2024",
    summary:
      "Built responsive React interfaces integrated with REST APIs using reusable components and Tailwind CSS.",
    bullets: [
      "Developed dynamic React.js interfaces.",
      "Integrated frontend components with REST APIs.",
      "Used Tailwind CSS for responsive and consistent UI.",
    ],
  },
];

const stackGroups = [
  ["Frontend", ["React.js", "JavaScript", "HTML/CSS", "Tailwind CSS"]],
  ["Backend", ["Python", "Django", "DRF", "Node.js", "Express"]],
  ["Data", ["PostgreSQL", "MongoDB", "MySQL"]],
  ["Quality", ["Playwright", "Karate", "Postman", "API Validation"]],
  ["Engineering", ["Git", "GitHub", "Docker", "CI/CD"]],
];

const stats = [
  ["2", "active client engagements"],
  ["200+", "test scenarios automated"],
  ["6", "developers led"],
  ["500+", "participant registrations supported"],
];

const process = [
  ["01", "Discover", "Understand the business, audience and actual problem."],
  ["02", "Design", "Turn requirements into a clear experience and technical plan."],
  ["03", "Build", "Develop the interface, application, APIs and integrations."],
  ["04", "Validate", "Test functionality, data, responsiveness and release quality."],
  ["05", "Launch", "Deploy, hand over and continue supporting the solution."],
];

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-300">
      <span className="h-px w-7 bg-cyan-300/60" />
      {children}
    </div>
  );
}

function Reveal({ children, className = "" }) {
  return <div className={`animate-[fadeUp_.7s_ease-out_both] ${className}`}>{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [buildMode, setBuildMode] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [active, setActive] = useState("home");
  const selectedService = services[activeService] ?? services[0];

  useEffect(() => {
    if (activeService >= services.length) setActiveService(0);
  }, [activeService]);

  const sections = useMemo(() => ["home", "services", "clients", "work", "experience", "about", "contact"], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-22% 0px -60% 0px", threshold: [0.05, 0.2, 0.5] }
    );
    sections.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05070c] text-white selection:bg-cyan-300 selection:text-black">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        @keyframes pulseLine { 0%,100% { opacity:.25; transform:scaleX(.8) } 50% { opacity:1; transform:scaleX(1) } }
        @keyframes scan { 0% { transform:translateY(-100%) } 100% { transform:translateY(600%) } }
        .noise { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.08'/%3E%3C/svg%3E"); }
      `}</style>

      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,.09),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(139,92,246,.10),transparent_25%),linear-gradient(180deg,#05070c,#070a11_55%,#05070c)]" />
      <div className="noise pointer-events-none fixed inset-0 -z-10 opacity-20" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#05070c]/70 backdrop-blur-2xl">
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <button onClick={() => scrollTo("home")} className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/20 bg-white/[0.04] text-sm font-black text-cyan-200 transition group-hover:border-cyan-300/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,.12)]">DS</span>
            <span className="hidden text-sm font-semibold tracking-tight text-white/85 sm:block">Dhanesh Sathe</span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className={`rounded-full px-4 py-2 text-[13px] transition ${active === id ? "bg-white/[0.08] text-white" : "text-white/45 hover:bg-white/[0.04] hover:text-white"}`}>
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => setBuildMode((v) => !v)} className={`hidden items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold transition sm:flex ${buildMode ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-200" : "border-white/10 bg-white/[0.03] text-white/55 hover:text-white"}`}>
              <Zap className="h-3.5 w-3.5" />
              Build Mode
            </button>
            <button onClick={() => scrollTo("contact")} className="hidden rounded-full bg-white px-5 py-2.5 text-xs font-black text-black transition hover:-translate-y-0.5 hover:bg-cyan-200 md:block">Start a Project</button>
            <button className="rounded-xl border border-white/10 p-2 text-white/70 md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </nav>
        {menuOpen && (
          <div className="border-t border-white/[0.07] bg-[#05070c]/95 px-5 py-4 backdrop-blur-2xl md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navItems.map(([id, label]) => <button key={id} onClick={() => scrollTo(id)} className="rounded-xl px-4 py-3 text-left text-sm text-white/60 hover:bg-white/[0.05] hover:text-white">{label}</button>)}
              <button onClick={() => setBuildMode((v) => !v)} className="mt-2 flex items-center gap-2 rounded-xl border border-cyan-300/15 px-4 py-3 text-left text-sm text-cyan-200"><Zap className="h-4 w-4" /> {buildMode ? "Exit Build Mode" : "Explore Build Mode"}</button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative min-h-screen px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.03fr_.97fr]">
            <Reveal>
              <SectionLabel>Software Engineer · Digital Builder</SectionLabel>
              <h1 className="max-w-4xl text-[clamp(3.4rem,7vw,6.9rem)] font-black leading-[.91] tracking-[-.055em]">
                I turn ideas into
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent">reliable digital</span>
                <span className="block text-white/35">products.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-7 text-white/48 sm:text-lg sm:leading-8">
                Software Engineer focused on full-stack development, backend systems, automation and quality engineering — turning real requirements into reliable digital products.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => scrollTo("clients")} className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200">
                  Explore real work <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
                <button onClick={() => scrollTo("contact")} className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/[0.07]">Start a conversation</button>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-bold uppercase tracking-[.18em] text-white/30">
                <span>Web</span><span>Applications</span><span>APIs</span><span>Automation</span><span>Quality Engineering</span>
              </div>
            </Reveal>

            <Reveal className="[animation-delay:.15s]">
              <div className="relative mx-auto max-w-[540px]">
                <div className="absolute -inset-10 rounded-[4rem] bg-cyan-300/[0.06] blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0e17]/85 p-3 shadow-2xl shadow-black/50 backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-white/[0.07] px-3 py-3">
                    <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="h-2.5 w-2.5 rounded-full bg-white/15" /></div>
                    <div className="rounded-full border border-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[.2em] text-white/30">engineering.system</div>
                    <div className="text-[9px] text-cyan-300/60">LIVE</div>
                  </div>
                  <div className="relative p-5 sm:p-7">
                    <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-300/20 to-transparent" />
                    <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
                    <div className="grid grid-cols-2 gap-3">
                      {["FRONTEND", "API LAYER", "DATA", "QUALITY"].map((label, i) => (
                        <div key={label} className={`relative rounded-2xl border p-4 transition duration-500 ${buildMode ? "border-cyan-300/35 bg-cyan-300/[0.07] shadow-[0_0_30px_rgba(34,211,238,.08)]" : "border-white/10 bg-white/[0.025]"}`} style={{ animation: `float ${4 + i * .6}s ease-in-out infinite`, animationDelay: `${i * .2}s` }}>
                          <div className="flex items-center justify-between"><span className="text-[9px] font-black tracking-[.2em] text-white/35">0{i + 1}</span><span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.8)]" /></div>
                          <div className="mt-7 text-xs font-black tracking-[.14em] text-white/80">{label}</div>
                          <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.06]"><div className="h-full w-2/3 origin-left bg-cyan-300/60" style={{ animation: "pulseLine 2.2s ease-in-out infinite" }} /></div>
                        </div>
                      ))}
                    </div>
                    <div className="mx-auto my-5 max-w-[220px] rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-3 text-center shadow-[0_0_50px_rgba(34,211,238,.07)]">
                      <div className="text-[9px] font-bold uppercase tracking-[.25em] text-cyan-300/60">BUILD CORE</div>
                      <div className="mt-1 text-sm font-black">Dhanesh Sathe</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {["BUILD", "TEST", "SHIP"].map((x) => <div key={x} className="rounded-xl border border-white/[0.07] bg-white/[0.02] py-2 text-center text-[9px] font-bold tracking-[.2em] text-white/35">{x}</div>)}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between px-2 text-[10px] uppercase tracking-[.2em] text-white/25"><span>Systems thinking</span><span>{buildMode ? "Build mode active" : "Hover-free · scroll to explore"}</span></div>
              </div>
            </Reveal>
          </div>
          <button onClick={() => scrollTo("services")} className="absolute bottom-7 left-1/2 grid -translate-x-1/2 place-items-center rounded-full border border-white/10 p-3 text-white/35 transition hover:border-cyan-300/30 hover:text-cyan-200" aria-label="Scroll to capabilities"><ArrowDownRight className="h-4 w-4" /></button>
        </section>

        <section className="border-y border-white/[0.07] bg-white/[0.018]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
            {stats.map(([number, label], i) => <div key={label} className={`px-5 py-7 sm:py-9 ${i > 0 ? "border-l border-white/[0.07]" : ""}`}><div className="text-2xl font-black tracking-tight sm:text-3xl">{number}</div><div className="mt-2 max-w-[150px] text-[10px] font-bold uppercase leading-4 tracking-[.16em] text-white/30">{label}</div></div>)}
          </div>
        </section>

        <section id="services" className="px-5 py-28 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <SectionLabel>Capabilities</SectionLabel>
                <h2 className="max-w-xl text-4xl font-black tracking-[-.04em] sm:text-5xl">One developer.<br /><span className="text-white/35">Multiple ways to solve the problem.</span></h2>
                <p className="mt-6 max-w-md leading-7 text-white/42">From a business website to backend APIs and test automation, I can work across the product instead of treating every requirement as a separate problem.</p>
                <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                  <div className="text-[10px] font-bold uppercase tracking-[.22em] text-white/30">Selected capability</div>
                  <div className="mt-3 flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-300/10 text-cyan-300"><Zap className="h-4 w-4" /></span><span className="font-bold">{selectedService.title}</span></div>
                  <p className="mt-3 text-sm leading-6 text-white/40">{selectedService.text}</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  const selected = activeService === index;
                  return <button key={service.title} onMouseEnter={() => setActiveService(index)} onFocus={() => setActiveService(index)} className={`group relative overflow-hidden rounded-3xl border p-6 text-left transition duration-500 ${selected ? "border-cyan-300/25 bg-cyan-300/[0.045]" : "border-white/[0.08] bg-white/[0.018] hover:border-white/15 hover:bg-white/[0.035]"}`}>
                    <div className="flex items-start justify-between"><span className={`text-[10px] font-black tracking-[.2em] ${selected ? "text-cyan-300" : "text-white/20"}`}>{service.number}</span><Icon className={`h-5 w-5 transition ${selected ? "text-cyan-300" : "text-white/30 group-hover:text-white/70"}`} /></div>
                    <h3 className="mt-10 text-xl font-black tracking-tight">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/38">{service.text}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">{service.tags.map((tag) => <span key={tag} className="rounded-full bg-white/[0.045] px-2.5 py-1 text-[10px] font-semibold text-white/35">{tag}</span>)}</div>
                    <div className={`absolute bottom-0 left-0 h-px bg-cyan-300 transition-all duration-500 ${selected ? "w-full" : "w-0"}`} />
                  </button>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="border-y border-white/[0.07] bg-[#080b12] px-5 py-28 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><SectionLabel>Selected client work</SectionLabel><h2 className="max-w-3xl text-4xl font-black tracking-[-.045em] sm:text-6xl">Real work.<br /><span className="text-white/35">Real business context.</span></h2></div><p className="max-w-md text-sm leading-6 text-white/35">These are ongoing engagements. The details shown are intentionally limited to work you have actually shared.</p></div>

            <div className="mt-14 space-y-5">
              {clientWork.map((client, index) => <article key={client.title} className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.02] transition duration-500 hover:border-white/15">
                <div className={`absolute right-0 top-0 h-72 w-72 rounded-full blur-3xl ${client.accent === "cyan" ? "bg-cyan-300/[0.06]" : "bg-violet-400/[0.06]"}`} />
                <div className="relative grid lg:grid-cols-[.72fr_1.28fr]">
                  <div className="border-b border-white/[0.07] p-7 sm:p-10 lg:border-b-0 lg:border-r">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.2em] text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,.7)]" /> {client.eyebrow}</div>
                    <div className="mt-12 text-[10px] font-bold tracking-[.2em] text-white/20">0{index + 1}</div>
                    <h3 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">{client.title}</h3>
                    <p className="mt-5 max-w-lg leading-7 text-white/40">{client.description}</p>
                    <button onClick={() => scrollTo("contact")} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white/75 transition hover:text-cyan-200">Discuss a similar project <ArrowRight className="h-4 w-4" /></button>
                  </div>
                  <div className="p-7 sm:p-10">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-white/25"><Layers3 className="h-4 w-4" /> What I handle</div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="grid gap-3 sm:grid-cols-2">{client.primary.map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.025] p-4 text-sm leading-5 text-white/65 transition group-hover:border-cyan-300/20"><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />{item}</div>)}</div>
                      {client.secondary.length > 0 && <div className="mt-7 border-t border-white/[0.07] pt-6"><div className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white/30">Additional client support</div><div className="grid gap-2 sm:grid-cols-2">{client.secondary.map((item) => <div key={item} className="text-sm text-white/40">{item}</div>)}</div></div>}
                    </div>
                  </div>
                </div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="work" className="px-5 py-28 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Engineering projects</SectionLabel>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="max-w-3xl text-4xl font-black tracking-[-.045em] sm:text-6xl">Proof of engineering depth.</h2><p className="max-w-md text-sm leading-6 text-white/35">Client work shows business delivery. These projects show the engineering behind it.</p></div>
            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {projects.map((project, index) => <article key={project.title} className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.035] to-white/[0.012] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/20 sm:p-9">
                <div className="absolute right-[-50px] top-[-50px] h-48 w-48 rounded-full bg-cyan-300/[0.05] blur-3xl transition group-hover:bg-cyan-300/[0.09]" />
                <div className="relative">
                  <div className="flex items-center justify-between"><span className="text-[10px] font-black uppercase tracking-[.2em] text-cyan-300/70">0{index + 1} · {project.label}</span><a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`} className="rounded-full border border-white/10 p-2.5 text-white/40 transition hover:border-cyan-300/30 hover:text-cyan-200"><Github className="h-4 w-4" /></a></div>
                  <h3 className="mt-14 text-4xl font-black tracking-[-.04em]">{project.title}</h3>
                  <p className="mt-4 max-w-xl leading-7 text-white/40">{project.description}</p>
                  <div className="mt-7 space-y-3">{project.points.map((point) => <div key={point} className="flex gap-3 text-sm text-white/55"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />{point}</div>)}</div>
                  <div className="mt-8 flex flex-wrap gap-2">{project.tech.map((tag) => <span key={tag} className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] font-bold text-white/35">{tag}</span>)}</div>
                </div>
              </article>)}
            </div>
            <div className="mt-5 rounded-3xl border border-dashed border-white/10 bg-white/[0.015] p-5 text-center text-xs text-white/30">More engineering work can be added here as polished case studies become ready.</div>
          </div>
        </section>

        <section id="experience" className="border-y border-white/[0.07] bg-white/[0.018] px-5 py-28 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
              <div><SectionLabel>Experience</SectionLabel><h2 className="text-4xl font-black tracking-[-.04em] sm:text-5xl">Engineering experience that strengthens the freelance work.</h2><p className="mt-6 max-w-md leading-7 text-white/38">Development is only part of reliable delivery. My professional experience also includes automation, validation, testing and team collaboration.</p></div>
              <div className="space-y-4">
                {experience.map((item, index) => <article key={`${item.company}-${item.role}`} className="rounded-[1.7rem] border border-white/[0.08] bg-[#080b12]/70 p-6 sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"><div><div className="text-[10px] font-black uppercase tracking-[.2em] text-cyan-300">0{index + 1}</div><h3 className="mt-2 text-xl font-black">{item.role}</h3><div className="mt-1 font-semibold text-white/45">{item.company}</div></div><div className="text-xs font-bold text-white/25">{item.date}</div></div>
                  <p className="mt-5 leading-6 text-white/42">{item.summary}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">{item.bullets.map((bullet) => <div key={bullet} className="flex gap-2 text-sm leading-6 text-white/50"><Check className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />{bullet}</div>)}</div>
                </article>)}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-5 py-28 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-cyan-300/[0.06] to-violet-400/[0.05] blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-3">
                  <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#0a0e17]"><img src="/Images/self5-removebg-preview2.png" alt="Dhanesh Sathe" className="h-full w-full object-cover object-top" /></div>
                  <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-[#070b12]/85 p-4 backdrop-blur-xl"><div className="flex items-center justify-between"><div><div className="text-sm font-bold">Dhanesh Sathe</div><div className="mt-1 text-[10px] uppercase tracking-[.18em] text-white/35">Software Engineer</div></div><div className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_15px_rgba(110,231,183,.8)]" /></div></div>
                </div>
              </div>
              <div>
                <SectionLabel>About</SectionLabel>
                <h2 className="max-w-3xl text-4xl font-black tracking-[-.045em] sm:text-6xl">More than a developer.<br /><span className="text-white/35">A technology partner.</span></h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/48">I’m Dhanesh Sathe, a Computer Engineering graduate with hands-on experience across full-stack development, backend APIs, frontend engineering and software quality.</p>
                <p className="mt-5 max-w-2xl leading-7 text-white/38">I enjoy turning requirements into clean, usable software while paying attention to the details that make a product reliable after it is deployed.</p>
                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {[["Business-minded", "Start with the problem and desired outcome."], ["Full-stack", "Frontend, backend, APIs and databases."], ["Quality-focused", "Testing is part of delivery, not an afterthought."], ["Collaborative", "Experience leading and working with development teams."]].map(([title, text]) => <div key={title} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4"><div className="font-bold">{title}</div><div className="mt-1 text-xs leading-5 text-white/32">{text}</div></div>)}
                </div>
              </div>
            </div>

            <div className="mt-24 border-t border-white/[0.07] pt-16">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><SectionLabel>Toolbox</SectionLabel><h3 className="text-3xl font-black tracking-[-.03em] sm:text-4xl">The stack behind the work.</h3></div><p className="max-w-md text-sm leading-6 text-white/32">Tools are useful. Knowing where to use them is more important.</p></div>
              <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
                {stackGroups.map(([group, items]) => <div key={group} className="rounded-2xl border border-white/[0.08] bg-white/[0.018] p-5"><div className="text-[10px] font-black uppercase tracking-[.2em] text-white/30">{group}</div><div className="mt-5 space-y-2">{items.map((item) => <div key={item} className="flex items-center gap-2 text-sm text-white/55"><span className="h-1 w-1 rounded-full bg-cyan-300" />{item}</div>)}</div></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/[0.07] bg-[#080b12] px-5 py-28 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>How I work</SectionLabel>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="max-w-3xl text-4xl font-black tracking-[-.045em] sm:text-6xl">From requirement<br /><span className="text-white/35">to reliable delivery.</span></h2><p className="max-w-md text-sm leading-6 text-white/35">Clear steps, visible progress and quality checks built into the process.</p></div>
            <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.08] md:grid-cols-5">
              {process.map(([n, title, text], i) => <div key={n} className="bg-[#080b12] p-6 sm:p-7"><div className="flex items-center justify-between"><span className="text-[10px] font-black tracking-[.2em] text-cyan-300">{n}</span>{i < process.length - 1 && <ChevronRight className="hidden h-4 w-4 text-white/15 md:block" />}</div><h3 className="mt-12 text-lg font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-white/32">{text}</p></div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-20 pt-28 sm:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-300/[0.09] via-white/[0.025] to-violet-400/[0.08] p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-300/[0.08] blur-3xl" />
            <div className="relative grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
              <div><SectionLabel>Start a project</SectionLabel><h2 className="max-w-4xl text-5xl font-black tracking-[-.055em] sm:text-7xl">Have a problem worth building a solution for?</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-white/42">Tell me what you’re trying to build, improve or launch. Let’s turn the requirement into a practical digital solution.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="mailto:dds.satana@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-black transition hover:bg-cyan-200"><Mail className="h-4 w-4" /> Email me</a><a href="https://wa.me/918855833583" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/[0.08]"><MessageCircle className="h-4 w-4" /> WhatsApp</a></div></div>
              <div className="space-y-2">
                {[['Email', 'dds.satana@gmail.com', Mail, 'mailto:dds.satana@gmail.com'], ['Phone', '+91 88558 33583', Phone, 'tel:+918855833583'], ['LinkedIn', 'Connect with me', Linkedin, 'https://www.linkedin.com/in/dhanesh-sathe-2b28b0256'], ['GitHub', 'View repositories', Github, 'https://github.com/Dhanesh-Sathe']].map(([label, value, Icon, href]) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#070b12]/65 p-4 transition hover:border-cyan-300/20 hover:bg-[#070b12]/85"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.05] text-cyan-300"><Icon className="h-4 w-4" /></span><div><div className="text-[10px] font-bold uppercase tracking-[.18em] text-white/25">{label}</div><div className="mt-1 text-sm font-semibold text-white/75">{value}</div></div><ExternalLink className="ml-auto h-4 w-4 text-white/15" /></a>)}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.07] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-center text-[11px] font-bold uppercase tracking-[.16em] text-white/25 sm:flex-row sm:items-center sm:justify-between sm:text-left"><span>© 2026 Dhanesh Sathe</span><span>Software · Web · APIs · Automation</span></div>
      </footer>
    </div>
  );
}

export default App;
