import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Hero from "@/components/site-new/Hero";
import Benefits from "@/components/site-new/Benefits";
import Services from "@/components/site-new/Services";
import Features from "@/components/site-new/Features";
import Process from "@/components/site-new/Process";
import Integrations from "@/components/site-new/Integrations";
import Testimonials from "@/components/site-new/Testimonials";
import FAQ from "@/components/site-new/FAQ";
import Comparison from "@/components/site-new/Comparison";
import CTA from "@/components/site-new/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Greta - AI App Builder & Vibe Coding Platform",
  description: "Build production-ready apps with AI. Greta is your growth engineering platform for vibe coding - automate marketing, sales & development instantly.",
  keywords: [
    "vibe coding",
    "growth engineering",
    "AI agent",
    "autonomous marketing",
    "Greta AI",
    "Lovable alternative",
    "no-code app builder",
    "AI software engineer",
    "AI website builder",
    "growth tech agent",
    "autonomous development",
    "AI-powered coding",
    "marketing automation",
    "sales automation"
  ],
  alternates: {
    canonical: "https://www.greta.sh",
  },
  openGraph: {
    title: "Greta - AI App Builder & Vibe Coding Platform",
    description: "Build production-ready apps with AI. Your growth engineering platform for vibe coding - ship faster with Greta.",
    url: "https://www.greta.sh",
    siteName: "Greta.sh",
    type: "website",
    images: [
      {
        url: "/Gretanewlogo.svg",
        width: 1200,
        height: 630,
        alt: "Greta - AI App Builder & Vibe Coding Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greta - AI App Builder & Vibe Coding Platform",
    description: "Build production-ready apps with AI. Your growth engineering platform for vibe coding.",
    images: ["/Gretanewlogo.svg"],
  },
};

export default function Home() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Features />
        <Integrations />
        {/* <Process /> */}
        <Comparison />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
