"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-x">
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-background/70 px-4 py-2.5 backdrop-blur-xl md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-lime text-lime-foreground font-display font-bold">J</span>
            <span className="font-display text-lg font-semibold tracking-tight">John<span className="text-lime">.</span></span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </Link>
            ))}
          </nav>
          <a href="#contact" className="hidden items-center gap-1.5 rounded-full bg-lime px-4 py-2 text-sm font-semibold text-lime-foreground transition-transform hover:scale-[1.03] md:inline-flex">
            Start a project <ArrowUpRight className="h-4 w-4" />
          </a>
          <button onClick={() => setOpen(true)} className="md:hidden p-2" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-x flex h-full flex-col">
              <div className="mt-4 flex items-center justify-between">
                <span className="font-display text-lg font-semibold">John<span className="text-lime">.</span></span>
                <button onClick={() => setOpen(false)} className="p-2" aria-label="Close menu">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="mt-16 flex flex-col gap-6">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href} href={l.href} onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="font-display text-4xl font-semibold tracking-tight"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
