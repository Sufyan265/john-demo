import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/CTA";
import { ServicesPageClient } from "@/components/site/services/ServicesPageClient";
import "./services-page.css";

export const metadata: Metadata = {
  title: "Services — John Studio | Software, Web & Mobile Development",
  description:
    "From mobile apps to AI-powered platforms — John is a full-service product studio delivering end-to-end design, engineering, and growth for ambitious brands.",
  openGraph: {
    title: "Services — John Studio",
    description:
      "End-to-end product design, engineering, and growth. Mobile, Web, AI, Cloud & more.",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ServicesPageClient />
      <Footer />
    </main>
  );
}
