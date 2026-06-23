"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Smartphone, Palette, Cloud, Brain, LineChart, ArrowUpRight } from "lucide-react";
import { MouseTiltCard } from "@/components/site/MouseTiltCard";
import { ShineBorder } from "@/components/ui/shine-border";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Smartphone, title: "Mobile development", desc: "Native iOS, Android & cross-platform apps engineered for App Store quality.", tags: ["Swift", "Kotlin", "React Native"] },
  { icon: Code2, title: "Web platforms", desc: "Scalable SaaS, marketplaces and dashboards with a relentless attention to UX.", tags: ["Next.js", "TanStack", "Node"] },
  { icon: Brain, title: "AI & ML", desc: "From RAG copilots to recommendation engines — productionised, observable, fast.", tags: ["LLMs", "Vector DB", "Agents"] },
  { icon: Palette, title: "Product design", desc: "Design systems, brand and interfaces that make complex products feel effortless.", tags: ["Figma", "DS", "Motion"] },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Edge-first infrastructure, CI/CD and observability so you ship every day.", tags: ["AWS", "Cloudflare", "K8s"] },
  { icon: LineChart, title: "Growth engineering", desc: "Analytics, experimentation and SEO baked into the product from day one.", tags: ["A/B", "GA4", "SEO"] },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Cards stagger with rotation (Dimaac proof-of-work style) */
      const cards = gridRef.current?.querySelectorAll("[data-service-card]");
      if (cards?.length) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 60,
          rotateX: -10,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
          clearProps: "transform",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span data-gsap-label className="text-xs uppercase tracking-[0.2em] text-lime">Services</span>
            <h2 data-gsap-heading className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-balance">
              Everything you need, under one roof.
            </h2>
          </div>
          <p data-gsap-desc className="max-w-md text-muted-foreground">
            One senior team, end-to-end ownership — from the first whiteboard
            sketch to your first million users.
          </p>
        </div>

        <div ref={gridRef} className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <MouseTiltCard
              key={s.title}
              maxTilt={6}
              perspective={800}
              glare
              maxGlare={0.1}
              className="group relative bg-background p-8 transition-colors hover:bg-surface"
            >
              <div data-service-card>
                <ShineBorder
                  shineColor={["#d4ff00", "#8aff00"]}
                  borderWidth={1}
                  duration={12}
                />
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-surface-2 transition-all duration-300 group-hover:bg-lime group-hover:text-lime-foreground group-hover:scale-110">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-lime group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover:border-lime/30 group-hover:text-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </MouseTiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
