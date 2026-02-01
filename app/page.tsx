import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Logos from "@/components/site/Logos";
import Features from "@/components/site/Features";
import HowItWorks from "@/components/site/HowItWorks";
import Pricing from "@/components/site/Pricing";
import FAQ from "@/components/site/FAQ";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import BreadcrumbSchema from "@/components/site/BreadcrumbSchema";

export default function Home() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black scroll-smooth">
      <BreadcrumbSchema />
      <h1 className="sr-only">Greta.sh - Growth Engineering Tech Agent Protocol</h1>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Logos />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}
