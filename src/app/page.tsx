import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { HomeAnimations } from "@/components/site/HomeAnimations";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTA, Footer } from "@/components/site/CTA";

export const metadata: Metadata = {
  title: "John — Software, Web & Mobile Development Studio",
  description:
    "John is a premium product studio of senior designers and engineers building software, web and mobile experiences for ambitious brands.",
  openGraph: {
    title: "John — Premium Product Studio",
    description:
      "We design and engineer software, web and mobile products that scale.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HomeAnimations>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </HomeAnimations>
    </main>
  );
}
