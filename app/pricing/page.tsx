import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Pricing from "@/components/site-new/Pricing";
import CTA from "@/components/site-new/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing - Greta AI App Builder Plans & Features",
    description: "Choose your Greta plan. Free starter tier, Growth at $20/mo, Scale at $50/mo, or Enterprise. Build AI-powered apps with flexible pricing.",
    keywords: [
        "Greta pricing",
        "AI agent pricing",
        "vibe coding plans",
        "growth engineering pricing",
        "AI development platform cost",
        "no-code app builder pricing",
        "Lovable alternative pricing",
        "AI software engineer pricing"
    ],
    alternates: {
        canonical: "https://www.greta.sh/pricing",
    },
    openGraph: {
        title: "Pricing - Greta AI App Builder Plans",
        description: "Flexible pricing for AI app development. Start free, scale as you grow with Greta.",
        url: "https://www.greta.sh/pricing",
        siteName: "Greta.sh",
        type: "website",
        images: [
            {
                url: "/Gretanewlogo.svg",
                width: 1200,
                height: 630,
                alt: "Greta Pricing - AI App Builder Plans",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Pricing - Greta AI App Builder Plans",
        description: "Flexible pricing for AI app development. Start free, scale as you grow.",
        images: ["/Gretanewlogo.svg"],
    },
};

export default function PricingPage() {
    return (
        <div className="bg-black text-white selection:bg-white selection:text-black">
            <Navbar />
            <main>
                <Pricing />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
