"use client";

import { motion } from "motion/react";

const steps = [
  { n: "01", title: "Discover", desc: "Workshops, audits and a sharp product brief. We pressure-test the idea before a pixel is drawn." },
  { n: "02", title: "Design", desc: "Brand, flows, prototypes — iterated weekly with your team in the loop." },
  { n: "03", title: "Build", desc: "Cross-functional pods ship to staging every Friday. No black boxes." },
  { n: "04", title: "Launch & scale", desc: "Go-to-market, observability, growth experiments. We stay in the trenches." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-lime">How we work</span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-balance">
            A process tuned for momentum.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-8 md:p-10"
            >
              <div className="font-display text-5xl font-semibold text-lime">{s.n}</div>
              <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
