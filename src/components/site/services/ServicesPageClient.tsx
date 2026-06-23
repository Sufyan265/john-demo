"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Brain,
  LineChart,
  ArrowUpRight,
  ArrowDown,
  Zap,
  Globe,
  Database,
  Cpu,
  PenTool,
  Server,
  BarChart3,
  Layers,
  GitBranch,
  Shield,
} from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { BorderBeam } from "@/components/ui/border-beam";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { TextReveal } from "@/components/ui/text-reveal";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { ShineBorder } from "@/components/ui/shine-border";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const services = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Native iOS, Android & cross-platform apps engineered for App Store quality. Performance-obsessed from the first frame.",
    tags: ["Swift", "Kotlin", "React Native", "Flutter"],
    color: "oklch(0.75 0.18 160)",
  },
  {
    icon: Code2,
    title: "Web Platforms",
    desc: "Scalable SaaS, marketplaces and dashboards with a relentless attention to UX. Server-first, edge-ready.",
    tags: ["Next.js", "React", "TanStack", "Node.js"],
    color: "oklch(0.7 0.2 250)",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "From RAG copilots to recommendation engines — productionised, observable, fast. Real AI, not wrappers.",
    tags: ["LLMs", "Vector DB", "Agents", "MLOps"],
    color: "oklch(0.75 0.22 310)",
  },
  {
    icon: Palette,
    title: "Product Design",
    desc: "Design systems, brand and interfaces that make complex products feel effortless. Research-backed craft.",
    tags: ["Figma", "Design Systems", "Motion", "UX Research"],
    color: "oklch(0.8 0.18 80)",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Edge-first infrastructure, CI/CD and observability so you ship every day. Zero-downtime deploys.",
    tags: ["AWS", "Cloudflare", "K8s", "Terraform"],
    color: "oklch(0.7 0.15 200)",
  },
  {
    icon: LineChart,
    title: "Growth Engineering",
    desc: "Analytics, experimentation and SEO baked into the product from day one. Growth isn't a phase — it's a feature.",
    tags: ["A/B Testing", "GA4", "SEO", "CRO"],
    color: "oklch(0.8 0.2 50)",
  },
];

const processSteps = [
  {
    number: 1,
    title: "Discover",
    desc: "We start with deep research — workshops, audits and a razor-sharp product brief. We pressure-test the idea before a single pixel is drawn.",
    details: ["Stakeholder interviews", "Market analysis", "Technical audit", "Product brief"],
  },
  {
    number: 2,
    title: "Design",
    desc: "Brand, flows, prototypes — iterated weekly with your team in the loop. We don't just make it pretty, we make it work.",
    details: ["Wireframes", "Visual design", "Prototyping", "Design system"],
  },
  {
    number: 3,
    title: "Build",
    desc: "Cross-functional pods ship to staging every Friday. No black boxes, no surprises — just clean, tested code.",
    details: ["Agile sprints", "Code reviews", "CI/CD pipeline", "QA automation"],
  },
  {
    number: 4,
    title: "Launch & Scale",
    desc: "Go-to-market, observability, growth experiments. We stay in the trenches long after launch day.",
    details: ["Performance tuning", "Monitoring", "Growth loops", "Post-launch support"],
  },
];

const stats = [
  { value: 320, suffix: "+", label: "Products launched" },
  { value: 1.4, suffix: "B", prefix: "$", label: "Client funding raised", decimals: 1 },
  { value: 48, suffix: "", label: "Countries served" },
  { value: 12, suffix: "+", label: "Years shipping" },
];

const techStack = [
  { name: "React", icon: Code2, category: "Frontend" },
  { name: "Next.js", icon: Globe, category: "Frontend" },
  { name: "TypeScript", icon: Layers, category: "Frontend" },
  { name: "Node.js", icon: Server, category: "Backend" },
  { name: "PostgreSQL", icon: Database, category: "Backend" },
  { name: "GraphQL", icon: GitBranch, category: "Backend" },
  { name: "TensorFlow", icon: Cpu, category: "AI" },
  { name: "Python", icon: Brain, category: "AI" },
  { name: "AWS", icon: Cloud, category: "Cloud" },
  { name: "Kubernetes", icon: Shield, category: "Cloud" },
  { name: "Figma", icon: PenTool, category: "Design" },
  { name: "Analytics", icon: BarChart3, category: "Growth" },
];

const testimonials = [
  {
    quote:
      "John shipped what our internal team couldn't in a year — in 11 weeks. They feel like a co-founder, not a vendor.",
    name: "Maya Okafor",
    role: "CEO, Orbital Bank",
    avatar: "https://i.pravatar.cc/160?img=32",
  },
  {
    quote:
      "The craft bar is unreal. Every release made our App Store rating climb. Worth every dollar.",
    name: "Daniel Reyes",
    role: "VP Product, Helios",
    avatar: "https://i.pravatar.cc/160?img=12",
  },
  {
    quote: "Senior people doing senior work. No hand-offs, no slideware. Just product.",
    name: "Priya Shah",
    role: "CTO, Foundry",
    avatar: "https://i.pravatar.cc/160?img=47",
  },
];

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */

export function ServicesPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const horizontalInnerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  /* Mouse-tracking for service cards */
  const handleCardMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
    },
    []
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /* ── 1. Hero text reveal ── */
      const chars = heroRef.current?.querySelectorAll(".char-reveal");
      if (chars?.length) {
        gsap.to(chars, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.025,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.3,
        });
      }

      const heroSub = heroRef.current?.querySelectorAll(".hero-fade-up");
      if (heroSub?.length) {
        gsap.to(heroSub, {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.9,
        });
      }

      /* ── 3. Service cards stagger ── */
      const cards = cardsRef.current?.querySelectorAll(".service-card");
      if (cards?.length) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 60,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
        });
      }

      /* ── 4. Pinned horizontal scroll ── */
      if (horizontalRef.current && horizontalInnerRef.current) {
        const panels =
          horizontalInnerRef.current.querySelectorAll(".horizontal-scroll-panel");
        const totalWidth = (panels.length - 1) * window.innerWidth;

        gsap.to(horizontalInnerRef.current, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: horizontalRef.current,
            pin: true,
            scrub: 1,
            end: () => "+=" + totalWidth,
            onUpdate: (self) => {
              if (progressBarRef.current) {
                progressBarRef.current.style.width = `${self.progress * 100}%`;
              }
            },
          },
        });
      }

      /* ── 5. Stats counter ── */
      const statItems = statsRef.current?.querySelectorAll(".stat-item");
      if (statItems?.length) {
        gsap.to(statItems, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: "power2.out",
        });
      }

      /* ── 7. Testimonials stagger ── */
      const testimonialCards =
        testimonialsRef.current?.querySelectorAll(".testimonial-card");
      if (testimonialCards?.length) {
        gsap.from(testimonialCards, {
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 40,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
        });
      }

      /* ── 8. CTA entrance ── */
      if (ctaRef.current) {
        gsap.to(ctaRef.current.querySelector(".cta-entrance"), {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  /* ── Text-split helper ── */
  const splitText = (text: string) => {
    return text.split(" ").map((word, wi) => (
      <span key={wi} className="word-wrapper">
        {word.split("").map((char, ci) => (
          <span key={ci} className="char-reveal">
            {char}
          </span>
        ))}
        {wi < text.split(" ").length - 1 && (
          <span className="char-reveal char-space">&nbsp;</span>
        )}
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ═══════════════════════════════════════
          SECTION 1 — CINEMATIC HERO
          ═══════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5"
      >
        {/* Blobs */}
        <div className="hero-blob hero-blob--lime" />
        <div className="hero-blob hero-blob--purple" />

        {/* Particles */}
        <Particles
          className="absolute inset-0 z-0"
          quantity={120}
          ease={80}
          color="#d4ff00"
          size={0.5}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] z-0" />

        {/* Badge */}
        <div className="relative z-10 mb-8">
          <div className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-4 py-2 text-xs text-muted-foreground backdrop-blur hero-fade-up opacity-0 translate-y-4">
            <Zap className="h-3.5 w-3.5 text-lime" />
            Full-service digital product studio
            <BorderBeam
              size={60}
              duration={8}
              colorFrom="#d4ff00"
              colorTo="#8aff00"
              borderWidth={1}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="relative z-10 text-center font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-[104px] max-w-5xl">
          {splitText("Services built")}
          <br />
          {splitText("for the ")}
          <span className="italic text-lime">{splitText("future")}</span>
          <span className="text-lime">{splitText(".")}</span>
        </h1>

        {/* Subtitle */}
        <p className="relative z-10 mt-8 max-w-2xl text-center text-lg text-muted-foreground md:text-xl hero-fade-up opacity-0 translate-y-4">
          From concept to scale — we design, engineer, and grow digital products
          that users love and markets demand.
        </p>

        {/* CTA Buttons */}
        <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4 hero-fade-up opacity-0 translate-y-4">
          <a
            href="#services-grid"
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 text-sm font-semibold text-lime-foreground transition-transform hover:scale-[1.03]"
          >
            Explore services
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-surface/50 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur hover:bg-surface"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 z-10 scroll-indicator">
          <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground">
            <span>Scroll to explore</span>
            <ArrowDown className="h-4 w-4" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2 — SERVICES MARQUEE
          ═══════════════════════════════════════ */}
      <section className="relative border-y border-white/10 bg-surface/30 py-6 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s] [--gap:2rem]">
          {services.map((s, i) => (
            <span
              key={s.title}
              className={`flex items-center gap-3 whitespace-nowrap font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl ${
                i % 2 === 0 ? "text-foreground" : "text-lime"
              }`}
            >
              <s.icon className="h-8 w-8 opacity-50" />
              {s.title}
              <span className="mx-4 text-muted-foreground/30">•</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3 — SERVICES GRID
          ═══════════════════════════════════════ */}
      <section id="services-grid" className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-lime">
                What we do
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-balance">
                Everything you need,
                <br />
                under one roof.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              One senior team, end-to-end ownership — from the first whiteboard
              sketch to your first million users.
            </p>
          </div>

          <div
            ref={cardsRef}
            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s) => (
              <div
                key={s.title}
                className="service-card group relative rounded-2xl border border-white/10 bg-surface/50 p-8 backdrop-blur"
                onMouseMove={handleCardMouseMove}
              >
                <ShineBorder
                  shineColor={["#d4ff00", "#8aff00"]}
                  borderWidth={1}
                  duration={10}
                />
                <div className="flex items-start justify-between">
                  <div
                    className="grid h-14 w-14 place-items-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${s.color}20`, color: s.color }}
                  >
                    <s.icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-lime group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:border-lime/30 group-hover:text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          SECTION 4 — PINNED HORIZONTAL SCROLL
          ═══════════════════════════════════════ */}
      <section ref={horizontalRef} className="relative overflow-hidden">
        <div
          ref={horizontalInnerRef}
          className="horizontal-scroll-container"
        >
          {processSteps.map((step, i) => (
            <div key={step.number} className="horizontal-scroll-panel">
              <div className="container-x flex h-full w-full max-w-5xl flex-col justify-center">
                {i === 0 && (
                  <span className="mb-4 text-xs uppercase tracking-[0.2em] text-lime">
                    How we deliver
                  </span>
                )}
                <div className="flex items-baseline gap-6">
                  <span className="font-display text-8xl font-bold text-lime/20 md:text-[120px] lg:text-[160px]">
                    <NumberTicker
                      value={step.number}
                      className="text-lime/20"
                      delay={0.5 + i * 0.2}
                    />
                  </span>
                  <div className="max-w-xl">
                    <h3 className="font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                      {step.desc}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      {step.details.map((d) => (
                        <span
                          key={d}
                          className="rounded-full border border-white/10 bg-surface/60 px-4 py-2 text-sm text-muted-foreground"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="progress-bar-track">
          <div ref={progressBarRef} className="progress-bar-fill" />
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          SECTION 5 — TEXT REVEAL + STATS
          ═══════════════════════════════════════ */}
      <section className="py-8">
        <TextReveal className="text-white">
          320 products launched. $1.4 billion in client funding raised. 48 countries served. 12 years of relentless craft.
        </TextReveal>
      </section>

      {/* Stats counters */}
      <section ref={statsRef} className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="stat-item text-center">
                <div className="font-display text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                  <span className="text-lime">{s.prefix || ""}</span>
                  <NumberTicker
                    value={s.value}
                    className="text-foreground"
                    decimalPlaces={s.decimals || 0}
                    delay={0.3}
                  />
                  <span className="text-lime">{s.suffix}</span>
                </div>
                <div className="mt-3 text-sm text-muted-foreground md:text-base">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          SECTION 6 — TECH STACK (ANIMATED BEAM)
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-lime">
              Technology
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Our tech arsenal
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
              We pick the right tool for every job — not the trendiest. Here's
              what powers our products.
            </p>
          </div>

          <TechStackBeam />
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          SECTION 7 — TESTIMONIALS
          ═══════════════════════════════════════ */}
      <section ref={testimonialsRef} className="py-24 md:py-32">
        <div className="container-x">
          <span className="text-xs uppercase tracking-[0.2em] text-lime">
            Loved by founders
          </span>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-balance">
            The kind of work people
            <br />
            write home about.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((q) => (
              <figure
                key={q.name}
                className="testimonial-card flex flex-col justify-between rounded-3xl border border-white/10 bg-surface p-8"
              >
                <blockquote className="font-display text-xl leading-snug tracking-tight text-balance">
                  <span className="text-lime">&ldquo;</span>
                  {q.quote}
                  <span className="text-lime">&rdquo;</span>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <Avatar className="h-10 w-10 border border-white/10">
                    <AvatarImage src={q.avatar} alt={q.name} />
                    <AvatarFallback className="bg-lime font-display font-bold text-lime-foreground">
                      {q.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-semibold">{q.name}</div>
                    <div className="text-xs text-muted-foreground">{q.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 8 — CTA
          ═══════════════════════════════════════ */}
      <section ref={ctaRef} id="contact" className="py-24 md:py-32">
        <div className="container-x">
          <div className="cta-entrance relative overflow-hidden rounded-[2rem] bg-lime p-10 text-lime-foreground md:p-20">
            <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-black/10 blur-3xl" />
            <div className="absolute -left-10 -top-10 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">
                Let&apos;s talk
              </span>
              <h2 className="mt-4 font-display text-5xl font-semibold leading-[1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-balance">
                Have an idea?
                <br />
                Let&apos;s build it.
              </h2>
              <p className="mt-6 max-w-xl text-lg opacity-80">
                Tell us about your project. We reply within one business day with
                a recommended next step.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:hello@john.studio"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
                >
                  hello@john.studio
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-black/20 px-7 py-4 text-sm font-semibold hover:bg-black/5"
                >
                  Book a 30-min intro call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════
   TECH STACK BEAM COMPONENT
   ═══════════════════════════════════════════ */

function TechStackBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  // Create refs for each tech item
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Positions for a radial layout around center
  const positions = [
    { top: "5%", left: "15%" },
    { top: "5%", left: "50%", transform: "translateX(-50%)" },
    { top: "5%", right: "15%" },
    { top: "40%", left: "2%" },
    { top: "40%", right: "2%" },
    { top: "75%", left: "10%" },
    { top: "75%", left: "38%" },
    { top: "75%", right: "38%" },
    { top: "75%", right: "10%" },
    { bottom: "2%", left: "20%" },
    { bottom: "2%", left: "50%", transform: "translateX(-50%)" },
    { bottom: "2%", right: "20%" },
  ];

  return (
    <div
      ref={containerRef}
      className="beam-container mt-16 relative"
      style={{ minHeight: 480 }}
    >
      {/* Center hub */}
      <div
        ref={centerRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-surface shadow-lg shadow-lime/10 badge-pulse"
      >
        <span className="font-display text-2xl font-bold text-lime">J</span>
      </div>

      {/* Tech items */}
      {techStack.map((tech, i) => (
        <div
          key={tech.name}
          ref={(el) => { itemRefs.current[i] = el; }}
          className="absolute z-10 flex flex-col items-center gap-1.5"
          style={positions[i] as React.CSSProperties}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-surface/80 backdrop-blur transition-all hover:border-lime/30 hover:scale-110">
            <tech.icon className="h-5 w-5 text-muted-foreground" />
          </div>
          <span className="text-[10px] text-muted-foreground whitespace-nowrap">
            {tech.name}
          </span>
        </div>
      ))}

      {/* Animated beams from each item to center */}
      {techStack.map((tech, i) => (
        <AnimatedBeam
          key={`beam-${tech.name}`}
          containerRef={containerRef as React.RefObject<HTMLElement>}
          fromRef={{ current: itemRefs.current[i] } as React.RefObject<HTMLElement>}
          toRef={centerRef as React.RefObject<HTMLElement>}
          curvature={i % 2 === 0 ? 30 : -30}
          pathColor="rgba(255,255,255,0.06)"
          pathWidth={1}
          gradientStartColor="#d4ff00"
          gradientStopColor="#8aff00"
          duration={3 + i * 0.4}
          delay={i * 0.3}
        />
      ))}
    </div>
  );
}
