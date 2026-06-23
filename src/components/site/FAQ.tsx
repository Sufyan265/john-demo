"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: "How long does a typical engagement last?", a: "Most products go from kickoff to public launch in 10–16 weeks. We then continue on a monthly retainer for growth and iteration." },
  { q: "What does it cost?", a: "Discovery sprints start at $12k. Full product builds typically range from $80k to $400k depending on scope, integrations and platforms." },
  { q: "Do you work fixed-price or time & materials?", a: "Both. We scope a fixed-price MVP and then move into weekly sprints with a transparent burn-down once we have signal." },
  { q: "Who owns the code and IP?", a: "You do. Always. We hand over everything on a private GitHub org from day one." },
  { q: "Where is the team based?", a: "We're a distributed team across New York, Lisbon and Singapore — so something is always shipping." },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Section entrance */
      const faqItems = sectionRef.current?.querySelectorAll("[data-faq-item]");
      if (faqItems?.length) {
        gsap.from(faqItems, {
          scrollTrigger: {
            trigger: sectionRef.current?.querySelector("[data-faq-list]"),
            start: "top 82%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: 30,
          stagger: 0.06,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <span data-gsap-label className="text-xs uppercase tracking-[0.2em] text-lime">FAQ</span>
          <h2 data-gsap-heading className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
            Questions, answered.
          </h2>
          <p data-gsap-desc className="mt-5 text-muted-foreground">
            Can&apos;t find what you&apos;re looking for? <a href="#contact" className="text-lime underline-offset-4 hover:underline">Ask us directly</a>.
          </p>
        </div>

        <div data-faq-list className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} data-faq-item>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-display text-lg font-semibold tracking-tight md:text-xl transition-colors group-hover:text-lime">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 transition-colors group-hover:border-lime/30 group-hover:bg-lime/10"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
