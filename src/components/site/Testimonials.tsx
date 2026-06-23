"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

gsap.registerPlugin(ScrollTrigger);

const quotes = [
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

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* 3D stagger: cards rotate in from -5deg */
      const cards = sectionRef.current?.querySelectorAll("[data-testimonial]");
      if (cards?.length) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: sectionRef.current?.querySelector("[data-testimonials-grid]"),
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          rotateX: -8,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform",
        });
      }

      /* Animated quote marks */
      const quoteMarks = sectionRef.current?.querySelectorAll("[data-quote-mark]");
      if (quoteMarks?.length) {
        gsap.from(quoteMarks, {
          scrollTrigger: {
            trigger: sectionRef.current?.querySelector("[data-testimonials-grid]"),
            start: "top 80%",
            toggleActions: "play none none none",
          },
          scale: 0,
          opacity: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "back.out(2)",
          delay: 0.3,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="container-x">
        <span data-gsap-label className="text-xs uppercase tracking-[0.2em] text-lime">Loved by founders</span>
        <h2 data-gsap-heading className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-balance">
          The kind of work people
          <br />
          write home about.
        </h2>

        <div data-testimonials-grid className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              data-testimonial
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-lime/20 hover:shadow-lg hover:shadow-lime/5"
              style={{ perspective: "800px" }}
            >
              <blockquote className="font-display text-xl leading-snug tracking-tight text-balance">
                <span data-quote-mark className="inline-block text-lime text-2xl">&ldquo;</span>
                {q.quote}
                <span data-quote-mark className="inline-block text-lime text-2xl">&rdquo;</span>
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
  );
}
