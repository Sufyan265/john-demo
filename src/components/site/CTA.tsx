import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-lime p-10 text-lime-foreground md:p-20"
        >
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-black/10 blur-3xl" />
          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Let's talk</span>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-[1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-balance">
              Have an idea?<br />Let's build it.
            </h2>
            <p className="mt-6 max-w-xl text-lg opacity-80">
              Tell us about your project. We reply within one business day with
              a recommended next step.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="mailto:hello@john.studio" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-transform hover:scale-[1.03]">
                hello@john.studio
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-black/20 px-7 py-4 text-sm font-semibold hover:bg-black/5">
                Book a 30-min intro call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  const cols = [
    { title: "Studio", links: ["About", "Careers", "Press", "Contact"] },
    { title: "Services", links: ["Mobile", "Web", "AI", "Design", "Cloud"] },
    { title: "Work", links: ["Case studies", "Industries", "Awards"] },
    { title: "Social", links: ["Twitter", "LinkedIn", "Dribbble", "GitHub"] },
  ];
  return (
    <footer className="border-t border-white/10 bg-surface/40 pt-20 pb-10">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-lime text-lime-foreground font-display text-lg font-bold">J</span>
              <span className="font-display text-2xl font-semibold tracking-tight">John<span className="text-lime">.</span></span>
            </div>
            <p className="mt-6 max-w-sm text-muted-foreground">
              A product studio engineering the next generation of software, web
              and mobile experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">{c.title}</h4>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}><a href="#" className="text-sm hover:text-lime">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} John Studio. All rights reserved.</p>
          <p>New York · Lisbon · Singapore</p>
        </div>

        <div aria-hidden className="pointer-events-none mt-10 select-none overflow-hidden">
          <div className="font-display text-[20vw] font-bold leading-[0.85] tracking-tighter text-foreground/[0.04]">
            JOHN STUDIO
          </div>
        </div>
      </div>
    </footer>
  );
}
