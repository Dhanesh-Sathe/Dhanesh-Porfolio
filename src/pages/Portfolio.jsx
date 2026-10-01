import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Linkedin, Mail, Menu, MessageCircle, Phone, Search, X } from "lucide-react";

/**
 * Dhanesh Sathe — Freelance portfolio for non-technical clients.
 * React + Tailwind CSS + lucide-react. Profile image: /public/Images/self5-removebg-preview2.png
 * Structure inspired by leadskale.com: hero system, trust marquee, pain points, pillars,
 * animated customer journey, case studies, timeline, industries, FAQ, final CTA.
 */

const WHATSAPP = "918855833583";
const EMAIL = "dds.satana@gmail.com";

const nav = [["services", "What I do"], ["work", "My work"], ["process", "How we work"], ["about", "About me"], ["faq", "FAQ"]];

const path = [
  ["Idea", "You share the goal"], ["Plan", "Pages, wording, scope"], ["Design", "A preview to react to"], ["Build", "Phone and desktop ready"],
  ["Test", "Checked like a customer"], ["Launch", "Live and handed over"], ["Grow", "Updates and support"],
];

const trusted = ["Firuya", "True Pencil", "Talent Bridge Solution", "Cytel", "R4C Tech", "TensorBuilds"];

const stats = [[3, "", "businesses I've worked with"], [4, "", "website ideas designed for local businesses"], [500, "+", "registrations supported"], [200, "+", "automated checks protecting every release"]];

const problems = [
  ["Your website looks outdated", "Visitors judge a business in seconds. An old design sends them away before they read a word."],
  ["Customers can't reach you easily", "Hidden phone numbers and long forms quietly cost you enquiries."],
  ["Developers who talk in jargon", "When you can't follow the explanation, you can't tell what you're paying for."],
  ["Developers who disappear", "After launch, nobody answers your messages when something needs changing."],
];

const pillars = [
  ["Look professional", "First impressions that build trust.", ["Business websites", "Design that feels easy", "Brand presence support"], "A site that looks right on every phone"],
  ["Work smoothly", "Tools that replace scattered spreadsheets.", ["Custom web tools", "Dashboards and portals", "Connected systems and logins"], "One place to manage your work"],
  ["Launch with confidence", "I check it the way customers will use it.", ["Testing before launch", "Automated safety checks", "Publishing and handover"], "Fewer surprises on launch day"],
  ["Stay supported", "You're never left alone after go-live.", ["Updates and new content", "Fixes and improvements", "Friendly technical help"], "Someone to call when you need changes"],
];

const funnel = [["Searches", "Finds your business"], ["Lands", "Your site opens fast"], ["Understands", "Knows what you offer in seconds"], ["Trusts", "Sees a clear, professional site"], ["Contacts you", "Taps call or WhatsApp"]];

const work = [
  { name: "Firuya.com", kind: "Ongoing client website", needed: "A business website kept fresh, fast, and looking right.", did: ["Regular website updates", "New content and pages", "Front-end improvements", "Technical support"], link: "https://firuya.com/", cta: "Visit the website", color: "#6B5BD2" },
  { name: "True Pencil", kind: "Live product", needed: "Real features built from the team's requirements, with users in mind.", did: ["Built product features", "Turned requirements into screens", "User-focused front-end work", "Product support"], link: "http://truepencil.com/", cta: "View the product", color: "#2F8FCB" },
  { name: "Talent Bridge Solution", kind: "Business and digital support", needed: "A professional online presence to help a recruitment business grow.", did: ["Website and UI work", "Google Business and LinkedIn setup", "Business communication assets", "Recruitment market research"], link: null, cta: "Ask about a similar project", color: "#2E9966" },
];

const concepts = [
  ["Hotel Sai Sakshi", "Hotel website idea", "Menu, services, location, and a direct enquiry button in one simple page.", "https://dhanesh-sathe.github.io/Hotel-Sai-Sakshi-Demo/", "#E07B2E"],
  ["Hotel Anand Lodging", "Lodging website idea", "Clear stay information and a phone-friendly enquiry experience.", "https://dhanesh-sathe.github.io/Hotel-Anand-Lodging-Demo/", "#2A7C9E"],
  ["Hotel Dream", "Hospitality website idea", "Food storytelling and strong branding that invites direct bookings.", "https://dhanesh-sathe.github.io/Hotel-Dream-Demo/", "#8A4EBB"],
  ["Stella Enterprises", "Industrial business idea", "A wide range of services made clean, trustworthy, and easy to explore.", null, "#3F8F5E"],
];

const steps = [
  ["Listen", "I learn about your business, your customers, and what a good result looks like for you.", "A short summary of your goals, in plain words"],
  ["Shape", "I turn your needs into a clear direction: the pages, the message, and the feel.", "A simple plan you can approve"],
  ["Design", "I design how it looks and how people move through it, before anything is built.", "A preview you can react to"],
  ["Build", "I build the approved design so it works smoothly on phones and computers.", "Progress you can open and try yourself"],
  ["Launch", "I test everything, publish it, hand it over, and stay available for changes.", "Your project live, with support after"],
];

const industries = ["Hotels and lodging", "Recruitment", "Business websites", "Product startups", "Industrial services", "Restaurants and food"];

const reasons = [
  ["I explain things in plain words", "No jargon. You always know what's happening next."],
  ["Design and build in one place", "Nothing gets lost between a designer and a developer."],
  ["I test like a professional", "I test software for a living, so I catch problems early."],
  ["I stay after launch", "Changes don't mean starting over with a stranger."],
];

const jobs = [["Software Quality Engineer, Cytel", "Jan 2026 to now"], ["Software Development Intern, R4C Tech", "Jun 2025 to Feb 2026"], ["Frontend Developer Intern, TensorBuilds", "Sep 2024 to Nov 2024"]];
const tools = ["React", "JavaScript", "Tailwind CSS", "Python", "Django", "Node.js", "PostgreSQL", "MongoDB", "Playwright", "Postman", "Docker", "Git"];

const faqs = [
  ["Do I need any technical knowledge?", "No. I explain everything in plain language and ask only for things you already know: your business, your customers, and your goals."],
  ["How long will my project take?", "It depends on the size. After our first conversation I send a clear plan and timeline, so you can decide before committing to anything."],
  ["What do you need from me?", "A short description of your business, any logo or photos you have, and a few examples of sites you like. I help with the rest, including wording."],
  ["Can you improve my existing website?", "Yes. I can update content, fix mobile layout or speed, and add pages without rebuilding from scratch."],
  ["Will you help after the website is live?", "Yes. I hand everything over clearly and stay available for updates, fixes, and new ideas."],
  ["Can you guarantee Google rankings?", "No honest developer can. I build a fast, clear, well-structured foundation that gives your business a fair chance to be found."],
];

const needs = [["new", "I need a website", "get a new website for my business"], ["fix", "My website needs work", "improve my existing website"], ["tool", "I want a tool for my team", "build a custom tool for my team"], ["unsure", "I'm not sure yet", "talk through an idea I'm not sure about yet"]];

const testimonials = []; // Add real client quotes: { quote: "...", name: "...", role: "..." }

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return setSeen(true);
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, seen] = useInView(0.15);
  return (
    <div ref={ref} className={`transition duration-700 ease-out ${seen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Count({ to, suffix }) {
  const [ref, seen] = useInView(0.5);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return setN(to);
    let f;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / 1400, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) f = requestAnimationFrame(tick);
    };
    f = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(f);
  }, [seen, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function Mock({ color, title }) {
  return (
    <div className="p-4" style={{ background: `${color}22` }} aria-hidden="true">
      <div className="overflow-hidden rounded-lg border border-black/10 bg-white">
        <div className="flex gap-1 border-b border-black/10 px-2.5 py-1.5">{[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-black/20" />)}</div>
        <div className="px-4 py-5" style={{ background: color }}>
          <div className="display text-lg font-bold leading-tight text-white">{title}</div>
          <div className="mt-2 h-2 w-2/3 rounded bg-white/40" />
          <div className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-[11px] font-bold transition group-hover:scale-110" style={{ color }}>Contact us</div>
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-2.5">{[0, 1, 2].map((i) => <div key={i} className="h-6 rounded transition-transform duration-500 group-hover:-translate-y-1" style={{ background: `${color}22`, transitionDelay: `${i * 80}ms` }} />)}</div>
      </div>
    </div>
  );
}

function SearchDemo() {
  const q = "hotel with good food near me";
  const [ref, seen] = useInView(0.4);
  const [n, setN] = useState(0);
  const [st, setSt] = useState(-1);
  useEffect(() => {
    if (!seen) return;
    const t = setInterval(() => setN((v) => Math.min(v + 1, q.length)), 70);
    return () => clearInterval(t);
  }, [seen]);
  useEffect(() => {
    if (n < q.length) return;
    const t = setInterval(() => setSt((v) => (v >= funnel.length ? -1 : v + 1)), 1000);
    return () => clearInterval(t);
  }, [n]);
  return (
    <div ref={ref} className="rounded-3xl border-2 border-[#14241F] bg-white p-6 shadow-[8px_8px_0_#14241F] sm:p-8">
      <div className="flex items-center gap-3 rounded-full border-2 border-[#14241F] bg-[#F3F5EE] px-4 py-3 text-sm font-medium">
        <Search className="h-4 w-4" />
        <span>{q.slice(0, n)}<span className="caret" /></span>
      </div>
      <ol className="mt-5 space-y-2">
        {funnel.map(([t, s], i) => (
          <li key={t} className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-500 ${i <= st ? "translate-x-2 bg-[#FFB300]" : "bg-[#14241F]/5 opacity-60"}`}>
            <span className="display grid h-7 w-7 place-items-center rounded-full bg-[#14241F] text-xs font-bold text-white">{i <= st ? <Check className="h-4 w-4" /> : i + 1}</span>
            <span><b>{t}</b> <span className="text-sm text-[#14241F]/70">{s}</span></span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Step({ i, t, d, s, last }) {
  const [ref, seen] = useInView(0.4);
  return (
    <li ref={ref} className="relative grid grid-cols-[3rem_1fr] gap-4 pb-10">
      {!last && <span className="absolute bottom-0 left-[1.375rem] top-12 w-1 rounded bg-[#14241F]/15"><span className={`block w-full bg-[#14241F] transition-all duration-1000 ${seen ? "h-full" : "h-0"}`} /></span>}
      <span className={`display z-10 grid h-12 w-12 place-items-center rounded-full border-2 border-[#14241F] text-lg font-extrabold transition-colors duration-500 ${seen ? "bg-[#FFB300]" : "bg-white"}`}>{i + 1}</span>
      <div className={`rounded-2xl border-2 border-[#14241F] bg-white p-5 transition-all duration-700 ${seen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}>
        <h3 className="display text-2xl font-extrabold">{t}</h3>
        <p className="mt-2 leading-7">{d}</p>
        <p className="mt-3 text-sm font-bold text-[#0F3D3A]">You'll see: {s}</p>
      </div>
    </li>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lit, setLit] = useState(0);
  const [open, setOpen] = useState(0);
  const [progress, setProgress] = useState(0);
  const [needId, setNeedId] = useState("new");
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    const t = setInterval(() => setLit((v) => (v + 1) % path.length), 1500);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const on = () => setProgress(window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight));
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const need = needs.find((n) => n[0] === needId);
  const message = `Hi Dhanesh, I'm ${name.trim() || "a business owner"}. I'd like to ${need[2]}. ${details.trim()}`.trim();
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  const btn = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition hover:-translate-y-0.5";
  const h2 = "display text-4xl font-extrabold sm:text-5xl";

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F3F5EE] text-[#14241F] selection:bg-[#FFB300]" style={{ fontFamily: "'Figtree', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Figtree:wght@400;500;700&display=swap');
        html { scroll-behavior: smooth; }
        .display { font-family: 'Bricolage Grotesque', 'Figtree', sans-serif; letter-spacing: -0.03em; }
        @keyframes rise { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
        @keyframes marq { to { transform: translateX(-50%); } }
        @keyframes drift { 0%,100% { transform: translate(0,0); } 50% { transform: translate(14px,-18px); } }
        @keyframes blink { 50% { opacity: 0; } }
        .rise { animation: rise .8s cubic-bezier(.2,.7,.2,1) both; }
        .marq { animation: marq 30s linear infinite; }
        .marq:hover { animation-play-state: paused; }
        .drift { animation: drift 7s ease-in-out infinite; }
        .caret { display: inline-block; width: 2px; height: 1em; margin-left: 2px; vertical-align: -2px; background: #14241F; animation: blink 1s steps(2) infinite; }
        a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible, summary:focus-visible { outline: 3px solid #FFB300; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } html { scroll-behavior: auto; } }
      `}</style>

      <div className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-[#FFB300]" style={{ transform: `scaleX(${progress})` }} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#14241F]/10 bg-[#F3F5EE]/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <button onClick={() => go("top")} className="display flex items-center gap-2 text-lg font-extrabold"><span className="h-3 w-3 rounded-full bg-[#FFB300]" /> Dhanesh Sathe</button>
          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            {nav.map(([id, label]) => <button key={id} onClick={() => go(id)} className="text-[#14241F]/70 hover:text-[#14241F]">{label}</button>)}
            <button onClick={() => go("contact")} className="rounded-full bg-[#FFB300] px-5 py-2.5 font-bold transition hover:bg-[#ffc233]">Start a project</button>
          </div>
          <button className="p-2 md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </nav>
        {menuOpen && (
          <div className="flex flex-col border-t border-[#14241F]/10 bg-[#F3F5EE] px-5 py-3 md:hidden">
            {[...nav, ["contact", "Contact"]].map(([id, label]) => <button key={id} onClick={() => go(id)} className="py-3 text-left font-medium">{label}</button>)}
          </div>
        )}
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden px-5 pb-20 pt-28 lg:pt-36">
          <div className="drift pointer-events-none absolute -left-16 top-40 h-56 w-56 rounded-full bg-[#FFB300]/30" aria-hidden="true" />
          <div className="drift pointer-events-none absolute -right-10 bottom-10 h-40 w-40 rounded-full border-[18px] border-[#0F3D3A]/15" style={{ animationDelay: "-3s" }} aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <div className="rise flex items-center gap-3">
                <span className="h-12 w-12 overflow-hidden rounded-full bg-[#FFB300]"><img src="/Images/self5-removebg-preview2.png" alt="Dhanesh Sathe" className="h-full w-full object-cover object-top" onError={(e) => (e.currentTarget.style.display = "none")} /></span>
                <p className="font-medium text-[#14241F]/75">Hi, I'm Dhanesh, a freelance web designer and developer.</p>
              </div>
              <h1 className="display mt-6 text-6xl font-extrabold leading-[.98] sm:text-7xl lg:text-8xl">
                {["Get noticed.", "Get trusted.", "Get enquiries."].map((line, i) => <span key={line} className="rise block" style={{ animationDelay: `${0.15 + i * 0.18}s` }}>{line}</span>)}
              </h1>
              <p className="rise mt-6 max-w-xl text-lg leading-8 text-[#14241F]/70" style={{ animationDelay: ".75s" }}>
                I build the website or tool your business needs, and I guide you in plain words from the first idea to launch day and after.
              </p>
              <div className="rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: ".9s" }}>
                <button onClick={() => go("contact")} className={`${btn} bg-[#FFB300]`}>Start a project <ArrowRight className="h-4 w-4" /></button>
                <button onClick={() => go("process")} className={`${btn} border-2 border-[#14241F]`}>See how we'd work together</button>
              </div>
            </div>

            <div className="rise rounded-3xl border-2 border-[#14241F] bg-white p-5 shadow-[8px_8px_0_#14241F] sm:p-7" style={{ animationDelay: ".5s" }}>
              <div className="flex items-baseline justify-between">
                <h2 className="display text-xl font-extrabold">My project path</h2>
                <span className="text-xs font-medium text-[#14241F]/60">Idea to growth</span>
              </div>
              <ul className="mt-4 space-y-1.5">
                {path.map(([t, s], i) => (
                  <li key={t} className={`flex items-center gap-3 rounded-xl border-2 px-3 py-2 transition-all duration-500 ${i === lit ? "scale-[1.03] border-[#14241F] bg-[#FFB300]" : i < lit ? "border-transparent bg-[#DDEBDF]" : "border-transparent bg-[#F3F5EE]"}`}>
                    <span className="display grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#14241F] text-sm font-bold text-white">{i < lit ? <Check className="h-4 w-4" /> : i + 1}</span>
                    <span className="leading-tight"><b className="block">{t}</b><span className="text-xs text-[#14241F]/70">{s}</span></span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#14241F]/10"><div className="h-full bg-[#14241F] transition-all duration-700" style={{ width: `${((lit + 1) / path.length) * 100}%` }} /></div>
            </div>
          </div>
        </section>

        {/* TRUST MARQUEE */}
        <section className="border-y border-[#14241F]/10 py-6" aria-label="Teams and businesses I've worked with">
          <p className="mb-4 text-center text-sm font-medium text-[#14241F]/60">Businesses and teams I've worked with</p>
          <div className="overflow-hidden">
            <div className="marq flex w-max gap-12 pr-12">
              {[...trusted, ...trusted, ...trusted, ...trusted].map((t, i) => <span key={i} className="display whitespace-nowrap text-2xl font-extrabold text-[#14241F]/40">{t}</span>)}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-[#FFB300]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
            {stats.map(([n, suffix, label]) => (
              <div key={label}>
                <div className="display text-5xl font-extrabold"><Count to={n} suffix={suffix} /></div>
                <div className="mt-1 max-w-[190px] text-sm font-medium leading-5">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal><h2 className={`${h2} max-w-3xl`}>Your customers are looking. Is your business ready to be found?</h2></Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {problems.map(([t, d], i) => (
                <Reveal key={t} delay={i * 100}>
                  <div className="h-full rounded-2xl border-2 border-[#14241F] bg-white p-6 transition hover:-translate-y-1.5 hover:shadow-[6px_6px_0_#FFB300]">
                    <h3 className="display text-xl font-bold leading-snug">{t}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#14241F]/70">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10"><p className="display text-2xl font-bold text-[#0F3D3A]">That's where I come in. Here's how I help.</p></Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-[#DDEBDF] px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal><h2 className={`${h2} max-w-3xl`}>One freelancer for the whole journey</h2></Reveal>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#14241F]/70">You don't need to know the technical side. Tell me the goal and I'll handle the rest.</p>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {pillars.map(([t, sub, items, get], i) => (
                <Reveal key={t} delay={(i % 2) * 120}>
                  <div className="group h-full rounded-3xl border-2 border-[#14241F] bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-[8px_8px_0_#14241F]">
                    <span className="display grid h-10 w-10 place-items-center rounded-full bg-[#14241F] font-bold text-white transition group-hover:bg-[#FFB300] group-hover:text-[#14241F]">{i + 1}</span>
                    <h3 className="display mt-5 text-2xl font-extrabold">{t}</h3>
                    <p className="mt-1 text-[#14241F]/70">{sub}</p>
                    <ul className="mt-5 space-y-2">
                      {items.map((it) => <li key={it} className="flex gap-2 text-sm font-medium"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0F3D3A]" />{it}</li>)}
                    </ul>
                    <p className="mt-5 border-t border-[#14241F]/15 pt-4 text-sm font-bold text-[#0F3D3A]">You get: {get}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CUSTOMER JOURNEY */}
        <section className="px-5 py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
            <div>
              <h2 className={h2}>I start with your customer, not the code.</h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-[#14241F]/70">Before I design anything, I think about what a real visitor searches, what they need to see, and what makes them reach out. Every page is built around that path.</p>
              <button onClick={() => go("contact")} className={`${btn} mt-8 bg-[#14241F] text-white`}>Plan yours with me <ArrowRight className="h-4 w-4" /></button>
            </div>
            <SearchDemo />
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="bg-[#0F3D3A] px-5 py-24 text-white">
          <div className="mx-auto max-w-6xl">
            <Reveal><h2 className={`${h2} max-w-3xl`}>Projects I've worked on with real businesses</h2></Reveal>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">For each one: what the business needed, and what I did about it.</p>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {work.map((w, i) => (
                <Reveal key={w.name} delay={i * 120}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#F3F5EE] text-[#14241F] transition duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0_#FFB300]">
                    <Mock color={w.color} title={w.name} />
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-sm font-bold text-[#0F3D3A]">{w.kind}</p>
                      <h3 className="display mt-1 text-2xl font-extrabold">{w.name}</h3>
                      <p className="mt-4 text-sm font-bold">What they needed</p>
                      <p className="mt-1 text-sm leading-6 text-[#14241F]/75">{w.needed}</p>
                      <p className="mt-4 text-sm font-bold">What I did</p>
                      <ul className="mt-2 flex flex-wrap gap-2">{w.did.map((d) => <li key={d} className="rounded-full bg-[#14241F]/10 px-3 py-1 text-xs font-medium">{d}</li>)}</ul>
                      {w.link ? <a href={w.link} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold underline underline-offset-4">{w.cta} <ArrowUpRight className="h-4 w-4" /></a>
                        : <button onClick={() => go("contact")} className="mt-auto pt-6 text-left text-sm font-bold underline underline-offset-4">{w.cta}</button>}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <h3 className="display mt-20 text-3xl font-extrabold">Website ideas I designed on my own</h3>
            <p className="mt-3 max-w-xl text-white/75">Not client jobs, but examples of how I'd present a business online. Open the live ones on your phone.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {concepts.map(([t, label, text, link, color], i) => (
                <Reveal key={t} delay={i * 100}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-white/10 transition duration-300 hover:-translate-y-1.5 hover:bg-white/15">
                    <Mock color={color} title={t} />
                    <div className="flex flex-1 flex-col p-5">
                      <h4 className="display text-lg font-bold">{t}</h4>
                      <p className="text-xs font-medium text-white/60">{label}</p>
                      <p className="mt-3 flex-1 text-sm leading-6 text-white/80">{text}</p>
                      {link ? <a href={link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#FFB300]">Open live demo <ArrowUpRight className="h-4 w-4" /></a>
                        : <button onClick={() => go("contact")} className="mt-4 text-left text-sm font-bold text-[#FFB300]">Ask for something similar</button>}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="px-5 py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 className={h2}>Getting started is simple</h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-[#14241F]/70">Five clear steps. You always know where your project stands and what comes next.</p>
            </div>
            <ol>{steps.map(([t, d, s], i) => <Step key={t} i={i} t={t} d={d} s={s} last={i === steps.length - 1} />)}</ol>
          </div>
        </section>

        {/* INDUSTRIES + TESTIMONIALS */}
        <section className="bg-[#DDEBDF] px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal><h2 className="display text-3xl font-extrabold sm:text-4xl">Industries I've worked in or designed for</h2></Reveal>
            <div className="mt-8 flex flex-wrap gap-3">
              {industries.map((t) => <span key={t} className="rounded-full border-2 border-[#14241F] bg-white px-5 py-2.5 text-sm font-bold transition hover:-translate-y-1 hover:bg-[#FFB300]">{t}</span>)}
            </div>
            {testimonials.length > 0 && (
              <div className="mt-14 grid gap-5 md:grid-cols-3">
                {testimonials.map((q) => (
                  <figure key={q.name} className="rounded-2xl border-2 border-[#14241F] bg-white p-6">
                    <blockquote className="leading-7">“{q.quote}”</blockquote>
                    <figcaption className="mt-4 text-sm font-bold">{q.name}<span className="block font-medium text-[#14241F]/60">{q.role}</span></figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="px-5 py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border-2 border-[#14241F] bg-[#FFB300] shadow-[8px_8px_0_#14241F]">
              <img src="/Images/self5-removebg-preview2.png" alt="Dhanesh Sathe" className="aspect-[4/5] w-full object-cover object-top" />
            </div>
            <div>
              <h2 className={h2}>A developer who talks like a person</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#14241F]/75">I'm Dhanesh Sathe, a Computer Engineering graduate who builds websites and tools for businesses. I care less about fancy technology and more about whether your customers trust what they see and find what they need.</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {reasons.map(([t, d]) => <div key={t} className="border-l-4 border-[#FFB300] pl-4"><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm leading-6 text-[#14241F]/70">{d}</p></div>)}
              </div>
              <details className="mt-10 rounded-xl border border-[#14241F]/20 bg-white px-5 py-4">
                <summary className="cursor-pointer font-bold">For the curious: my experience and tools</summary>
                <ul className="mt-4 space-y-2 text-sm">{jobs.map(([r, d]) => <li key={r} className="flex flex-wrap justify-between gap-2"><span className="font-medium">{r}</span><span className="text-[#14241F]/60">{d}</span></li>)}</ul>
                <div className="mt-4 flex flex-wrap gap-2">{tools.map((t) => <span key={t} className="rounded-full bg-[#14241F]/10 px-3 py-1 text-xs font-medium">{t}</span>)}</div>
              </details>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-[#DDEBDF] px-5 py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className={h2}>Questions people ask me</h2>
            <div className="mt-10 space-y-3">
              {faqs.map(([q, a], i) => (
                <div key={q} className="rounded-2xl border-2 border-[#14241F] bg-white">
                  <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold">
                    {q}<ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden"><p className="px-5 pb-5 leading-7 text-[#14241F]/75">{a}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-[#14241F] px-5 py-24 text-white">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <div>
              <h2 className="display text-5xl font-extrabold sm:text-6xl">Ready to get noticed, trusted, and contacted?</h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-white/75">A few lines is enough. No pressure to decide anything today.</p>
              <div className="mt-8 space-y-3">
                {[[Mail, EMAIL, `mailto:${EMAIL}`], [Phone, "+91 88558 33583", "tel:+918855833583"], [Linkedin, "Connect on LinkedIn", "https://www.linkedin.com/in/dhanesh-sathe-2b28b0256"]].map(([Icon, label, href]) => (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-3 font-medium text-white/90 hover:text-[#FFB300]"><Icon className="h-5 w-5" /> {label}</a>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-[#F3F5EE] p-6 text-[#14241F] sm:p-8">
              <label className="block text-sm font-bold" htmlFor="c-name">Your name</label>
              <input id="c-name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-xl border-2 border-[#14241F] bg-white px-4 py-3" />
              <label className="mt-4 block text-sm font-bold" htmlFor="c-need">I'd like help with</label>
              <select id="c-need" value={needId} onChange={(e) => setNeedId(e.target.value)} className="mt-1 w-full rounded-xl border-2 border-[#14241F] bg-white px-4 py-3">{needs.map(([id, label]) => <option key={id} value={id}>{label}</option>)}</select>
              <label className="mt-4 block text-sm font-bold" htmlFor="c-details">Anything else I should know? (optional)</label>
              <textarea id="c-details" rows={3} value={details} onChange={(e) => setDetails(e.target.value)} className="mt-1 w-full rounded-xl border-2 border-[#14241F] bg-white px-4 py-3" />
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" className={`${btn} flex-1 bg-[#FFB300]`}><MessageCircle className="h-4 w-4" /> Send on WhatsApp</a>
                <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("New project enquiry")}&body=${encodeURIComponent(message)}`} className={`${btn} flex-1 border-2 border-[#14241F]`}><Mail className="h-4 w-4" /> Send by email</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#14241F] px-5 pb-24 text-sm text-white/60 md:pb-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-white/15 pt-6 sm:flex-row sm:justify-between">
          <span>© 2026 Dhanesh Sathe</span><span>Websites and tools for growing businesses</span>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-[#14241F]/15 bg-[#F3F5EE] p-3 md:hidden">
        <button onClick={() => go("contact")} className={`${btn} flex-1 bg-[#FFB300] py-3`}>Start a project</button>
        <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className={`${btn} border-2 border-[#14241F] px-4 py-3`}><MessageCircle className="h-5 w-5" /></a>
      </div>
    </div>
  );
}
