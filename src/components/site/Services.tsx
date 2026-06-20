import { motion } from "motion/react";
import { Code2, Smartphone, Palette, Cloud, Brain, LineChart, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Smartphone, title: "Mobile development", desc: "Native iOS, Android & cross-platform apps engineered for App Store quality.", tags: ["Swift", "Kotlin", "React Native"] },
  { icon: Code2, title: "Web platforms", desc: "Scalable SaaS, marketplaces and dashboards with a relentless attention to UX.", tags: ["Next.js", "TanStack", "Node"] },
  { icon: Brain, title: "AI & ML", desc: "From RAG copilots to recommendation engines — productionised, observable, fast.", tags: ["LLMs", "Vector DB", "Agents"] },
  { icon: Palette, title: "Product design", desc: "Design systems, brand and interfaces that make complex products feel effortless.", tags: ["Figma", "DS", "Motion"] },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Edge-first infrastructure, CI/CD and observability so you ship every day.", tags: ["AWS", "Cloudflare", "K8s"] },
  { icon: LineChart, title: "Growth engineering", desc: "Analytics, experimentation and SEO baked into the product from day one.", tags: ["A/B", "GA4", "SEO"] },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-lime">Services</span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-balance">
              Everything you need, under one roof.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            One senior team, end-to-end ownership — from the first whiteboard
            sketch to your first million users.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative bg-background p-8 transition-colors hover:bg-surface"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-surface-2 transition-colors group-hover:bg-lime group-hover:text-lime-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-lime group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted-foreground">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
