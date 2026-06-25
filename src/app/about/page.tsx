import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/CTA";
import { AboutPageClient } from "@/components/site/about/AboutPageClient";
import "./about-page.css";

export const metadata: Metadata = {
  title: "About Us — John Studio",
  description:
    "We're a global product studio of senior designers and engineers. Learn about our story, our team, and our core principles.",
  openGraph: {
    title: "About Us — John Studio",
    description:
      "We're a global product studio of senior designers and engineers. Learn about our story, our team, and our core principles.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <AboutPageClient />
      <Footer />
    </main>
  );
}
