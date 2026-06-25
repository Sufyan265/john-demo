"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Target, ShieldCheck, Zap, Users } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { BorderBeam } from "@/components/ui/border-beam";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { TextReveal } from "@/components/ui/text-reveal";
import { ShineBorder } from "@/components/ui/shine-border";
import { MouseTiltCard } from "@/components/site/MouseTiltCard";

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const values = [
  {
    icon: Target,
    title: "Craft Over Speed",
    desc: "We don't cut corners. We believe in building things right the first time, obsessing over every pixel and every line of code.",
  },
  {
    icon: Users,
    title: "Senior-Only Teams",
    desc: "No juniors learning on your dime. Every product is built by battle-tested engineers and designers who have shipped at scale.",
  },
  {
    icon: ShieldCheck,
    title: "Own the Outcome",
    desc: "We don't just hand over a repository and walk away. We take extreme ownership of the product's success in the market.",
  },
  {
    icon: Zap,
    title: "Ship Weekly",
    desc: "Continuous momentum. We work in tight, iterative cycles to get working software in your hands as fast as possible.",
  },
];

const team = [
  { name: "Eleanor Vance", role: "Design Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" },
  { name: "Marcus Chen", role: "Technical Lead", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
  { name: "Sarah Jenkins", role: "Product Manager", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
  { name: "David Alaba", role: "Senior Engineer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
  { name: "Lena Rostova", role: "UX Researcher", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
  { name: "James Wilson", role: "Growth Engineer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
];

const timeline = [
  { year: 2014, title: "Founded in New York", desc: "Started as a small team of 3 designers with a passion for digital craft." },
  { year: 2016, title: "First $1M Client", desc: "Delivered our first major enterprise platform, putting us on the map." },
  { year: 2019, title: "100th Product Launched", desc: "Crossed a major milestone in our journey of building digital experiences." },
  { year: 2022, title: "Global Expansion", desc: "Opened offices in Lisbon and Singapore to serve global clients 24/7." },
  { year: 2025, title: "320+ Products", desc: "Recognized as a leading global product studio for ambitious brands." },
];

const stats = [
  { value: 12, suffix: "+", label: "Years shipping" },
  { value: 320, suffix: "", label: "Products launched" },
  { value: 48, suffix: "", label: "Countries served" },
  { value: 1.4, suffix: "B", prefix: "$", label: "Client funding raised", decimals: 1 },
];

const awards = [
  "Awwwards Site of the Day", "FWA of the Day", "Webby Award Winner",
  "CSS Design Awards SOTD", "Red Dot Design Award", "Apple App of the Day"
];

const gallery = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
];

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */

export function AboutPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const originRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const horizontalInnerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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
          stagger: 0.02,
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
          stagger: 0.1,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.9,
        });
      }

      /* ── 2. Origin Image Parallax ── */
      const originImg = originRef.current?.querySelector(".origin-image");
      if (originImg) {
        gsap.to(originImg, {
          scrollTrigger: {
            trigger: originRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
          y: -40,
          ease: "none",
        });
      }

      /* ── 3. Values Grid Stagger ── */
      const valueCards = valuesRef.current?.querySelectorAll(".value-card-wrapper");
      if (valueCards?.length) {
        gsap.from(valueCards, {
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 60,
          rotateX: -10,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          clearProps: "transform",
        });
      }

      /* ── 4. Team Stagger Reveal ── */
      const teamCards = teamRef.current?.querySelectorAll(".team-card");
      if (teamCards?.length) {
        gsap.from(teamCards, {
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          rotationZ: () => Math.random() * 4 - 2, // Slight random rotation
          stagger: 0.08,
          duration: 0.8,
          ease: "back.out(1.2)",
          clearProps: "transform",
        });
      }

      /* ── 5. Pinned Horizontal Scroll (Timeline) ── */
      if (horizontalRef.current && horizontalInnerRef.current) {
        const panels = horizontalInnerRef.current.querySelectorAll(".horizontal-scroll-panel");
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

      /* ── 6. Stats counter ── */
      const statItems = statsRef.current?.querySelectorAll(".stat-item");
      if (statItems?.length) {
        gsap.to(statItems, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
        });
      }

      /* ── 8. Culture Gallery Stagger ── */
      const galleryCards = galleryRef.current?.querySelectorAll(".gallery-card");
      if (galleryCards?.length) {
        gsap.from(galleryCards, {
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          scale: 0.9,
          y: 40,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform",
        });
      }

      /* ── 9. CTA entrance ── */
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
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-20"
      >
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color="#d4ff00"
          size={0.4}
        />
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] z-0" />

        <div className="relative z-10 mb-8">
          <div className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-4 py-2 text-xs text-muted-foreground backdrop-blur hero-fade-up opacity-0 translate-y-4">
            <Users className="h-3.5 w-3.5 text-lime" />
            About John Studio
            <BorderBeam
              size={60}
              duration={8}
              colorFrom="#d4ff00"
              colorTo="#8aff00"
              borderWidth={1}
            />
          </div>
        </div>

        <h1 className="relative z-10 text-center font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] max-w-6xl">
          {splitText("We're the studio ")}
          <span className="italic text-lime">{splitText("ambitious ")}</span>
          {splitText("brands call first.")}
        </h1>

        <p className="relative z-10 mt-8 max-w-2xl text-center text-lg text-muted-foreground md:text-xl hero-fade-up opacity-0 translate-y-4">
          A collective of designers, engineers, and strategists obsessed with building digital products that push the boundaries of what's possible on the web.
        </p>

        <div className="absolute bottom-10 z-10 scroll-indicator">
          <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground">
            <span>Scroll to explore</span>
            <ArrowDown className="h-4 w-4" />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          SECTION 2 — STORY / ORIGIN
          ═══════════════════════════════════════ */}
      <section ref={originRef} className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-lime">Our Story</span>
              <div className="mt-8">
                <TextReveal className="text-white text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-snug">
                  Founded in 2014 out of a tiny New York apartment, we set out to build a studio that cares as much about the code quality as the pixel perfection. Today, we're a global team partnering with the world's most innovative companies.
                </TextReveal>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-surface/50">
              <Image
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=80"
                alt="Our team collaborating"
                fill
                className="origin-image object-cover scale-[1.1]"
              />
              <div className="absolute inset-0 bg-background/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3 — VALUES GRID
          ═══════════════════════════════════════ */}
      <section ref={valuesRef} className="py-24 md:py-32 bg-surface/30 border-y border-white/10">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-lime">Core Principles</span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-balance">
              How we operate.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="value-card-wrapper">
                <MouseTiltCard
                  maxTilt={5}
                  perspective={1000}
                  className="value-card h-full rounded-3xl border border-white/10 bg-background p-8 md:p-10"
                >
                  <ShineBorder shineColor={["#d4ff00", "#8aff00"]} borderWidth={1} duration={12} />
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface text-lime">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">{v.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{v.desc}</p>
                </MouseTiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 4 — TEAM
          ═══════════════════════════════════════ */}
      <section ref={teamRef} className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-lime">The Collective</span>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-balance">
                Meet the experts.
              </h2>
            </div>
            <a href="#contact" className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold hover:bg-surface transition-colors">
              Join the team <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="team-card group relative aspect-[4/5] bg-surface">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="team-card-overlay">
                  <h3 className="font-display text-2xl font-semibold">{member.name}</h3>
                  <p className="text-lime text-sm mb-4">{member.role}</p>
                  <div className="flex items-center gap-3 font-display text-xs font-semibold">
                    <a href="#" className="text-white/60 hover:text-white transition-colors">GH</a>
                    <a href="#" className="text-white/60 hover:text-white transition-colors">X</a>
                    <a href="#" className="text-white/60 hover:text-white transition-colors">IN</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roles Marquee */}
        <div className="mt-20 overflow-hidden">
          <Marquee className="[--duration:40s] [--gap:3rem]">
            {["Designers", "Engineers", "Strategists", "Researchers", "Product Managers", "Animators"].map((role) => (
              <span key={role} className="font-display text-4xl font-semibold text-white/5 uppercase tracking-wider">
                {role}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          SECTION 5 — TIMELINE (HORIZONTAL)
          ═══════════════════════════════════════ */}
      <section ref={horizontalRef} className="relative overflow-hidden">
        <div ref={horizontalInnerRef} className="horizontal-scroll-container">
          {timeline.map((step, i) => (
            <div key={step.year} className="horizontal-scroll-panel">
              <div className="container-x flex h-full w-full max-w-5xl flex-col justify-center">
                {i === 0 && (
                  <span className="mb-4 text-xs uppercase tracking-[0.2em] text-lime">Our Journey</span>
                )}
                <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12">
                  <span className="font-display text-7xl font-bold text-lime/20 md:text-[140px] lg:text-[180px] leading-none">
                    <NumberTicker value={step.year} className="text-lime/20" delay={0.5 + i * 0.2} />
                  </span>
                  <div className="max-w-xl">
                    <h3 className="font-display text-3xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                      {step.title}
                    </h3>
                    <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="progress-bar-track">
          <div ref={progressBarRef} className="progress-bar-fill" />
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          SECTION 6 — STATS
          ═══════════════════════════════════════ */}
      <section ref={statsRef} className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="stat-item text-center">
                <div className="font-display text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                  <span className="bg-gradient-to-br from-white to-white/30 bg-clip-text text-transparent">
                    {s.prefix || ""}
                    <NumberTicker value={s.value} className="text-inherit" decimalPlaces={s.decimals || 0} delay={0.3} />
                    {s.suffix}
                  </span>
                </div>
                <div className="mt-4 text-sm text-lime uppercase tracking-widest font-semibold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 7 — AWARDS MARQUEE
          ═══════════════════════════════════════ */}
      <section className="py-12 bg-lime text-lime-foreground overflow-hidden">
        <Marquee className="[--duration:30s] [--gap:3rem]">
          {awards.map((award) => (
            <span key={award} className="flex items-center gap-4 font-display text-2xl font-bold uppercase tracking-wide">
              {award} <span className="h-2 w-2 rounded-full bg-lime-foreground/30" />
            </span>
          ))}
        </Marquee>
        <div className="mt-4">
          <Marquee reverse className="[--duration:35s] [--gap:3rem]">
            {awards.reverse().map((award) => (
              <span key={award} className="flex items-center gap-4 font-display text-2xl font-bold uppercase tracking-wide opacity-50">
                {award} <span className="h-2 w-2 rounded-full bg-lime-foreground/30" />
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 8 — CULTURE GALLERY
          ═══════════════════════════════════════ */}
      <section ref={galleryRef} className="py-24 md:py-32">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-lime">Studio Life</span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Where the magic happens.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {gallery.map((img, i) => (
              <div 
                key={i} 
                className={`gallery-card relative overflow-hidden rounded-3xl bg-surface ${
                  i === 0 || i === 3 ? "aspect-square md:aspect-[4/3]" : "aspect-[4/3] md:aspect-square"
                }`}
              >
                <Image
                  src={img}
                  alt={`Studio culture ${i + 1}`}
                  fill
                  className="gallery-image object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 9 — CTA
          ═══════════════════════════════════════ */}
      <section ref={ctaRef} className="py-24 md:py-32">
        <div className="container-x">
          <div className="cta-entrance relative overflow-hidden rounded-[2rem] bg-surface p-10 md:p-20 border border-white/10 text-center">
            <div className="floating-blob bg-lime/20 h-96 w-96 -top-20 -left-20" />
            <div className="floating-blob bg-purple-500/10 h-80 w-80 -bottom-20 -right-20" style={{ animationDelay: '-5s' }} />
            
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">Next Steps</span>
              <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl max-w-2xl text-balance">
                Ready to build something extraordinary?
              </h2>
              <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-lime-foreground transition-transform hover:scale-[1.03]">
                  Start a project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </a>
                <a href="#careers" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/50 px-8 py-4 text-sm font-semibold hover:bg-white/5 backdrop-blur">
                  View open roles
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
