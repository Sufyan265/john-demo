import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const work = [
  {
    title: "Orbital Bank",
    category: "Fintech · Mobile + Web",
    year: "2025",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "A next-gen neobank app processing $400M in monthly transactions.",
  },
  {
    title: "Helios Health",
    category: "Healthtech · Platform",
    year: "2025",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    desc: "HIPAA-compliant care coordination platform used by 12k clinicians.",
  },
  {
    title: "Foundry Commerce",
    category: "Retail · Marketplace",
    year: "2024",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    desc: "Headless commerce powering 80 storefronts across EMEA.",
  },
  {
    title: "Pulse AI",
    category: "AI · Copilot",
    year: "2024",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    desc: "Real-time sales copilot reducing rep ramp time by 64%.",
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-lime">Selected work</span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-balance">
              Products people
              <br />
              actually love.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold hover:bg-surface"
          >
            View all case studies <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {work.map((w, i) => (
            <motion.a
              href="#"
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-surface"
            >
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={w.img}
                  alt={`${w.title} preview`}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-background via-background/80 to-transparent p-7">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {w.category} · {w.year}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {w.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">{w.desc}</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-lime text-lime-foreground transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
