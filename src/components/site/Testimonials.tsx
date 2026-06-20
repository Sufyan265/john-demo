import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <span className="text-xs uppercase tracking-[0.2em] text-lime">Loved by founders</span>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-balance">
          The kind of work people
          <br />
          write home about.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-surface p-8"
            >
              <blockquote className="font-display text-xl leading-snug tracking-tight text-balance">
                <span className="text-lime">"</span>
                {q.quote}
                <span className="text-lime">"</span>
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
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
