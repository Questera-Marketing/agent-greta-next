import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Logos from "@/components/site/Logos";
import Features from "@/components/site/Features";
import Testimonials from "@/components/site/Testimonials";
import HowItWorks from "@/components/site/HowItWorks";
import Pricing from "@/components/site/Pricing";
import FAQ from "@/components/site/FAQ";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground selection:bg-accent/30 selection:text-white">
      {/* Search Engine Optimization - Hidden H1 for crawler but semantic */}
      <h1 className="sr-only">Greta.sh - The Premier Growth Engineering Tech Agent and Vibe Coding Tool</h1>
      
      <Navbar />
      
      <main>
        <Hero />
        <Logos />
        <Features />
        <Testimonials />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}
