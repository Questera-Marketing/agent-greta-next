import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
    title: "Blog - Greta AI Development & Vibe Coding Insights",
    description: "Explore AI app development tutorials, vibe coding guides, and growth engineering insights. Learn to build production-ready apps with Greta.",
    keywords: [
        "AI development blog",
        "vibe coding tutorials",
        "growth engineering insights",
        "AI agent guides",
        "no-code development",
        "marketing automation tips",
        "Greta AI tutorials",
        "build apps with AI",
        "AI software engineering",
        "production-ready AI apps"
    ],
    alternates: {
        canonical: "https://www.greta.sh/blog",
    },
    openGraph: {
        title: "Blog - Greta AI Development Insights",
        description: "AI app development tutorials, vibe coding guides, and growth engineering tips.",
        url: "https://www.greta.sh/blog",
        siteName: "Greta.sh",
        type: "website",
        images: [
            {
                url: "/Gretanewlogo.svg",
                width: 1200,
                height: 630,
                alt: "Greta Blog - AI Development Insights",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog - Greta AI Development Insights",
        description: "AI app development tutorials, vibe coding guides, and growth engineering tips.",
        images: ["/Gretanewlogo.svg"],
    },
};

export default function BlogIndexPage() {
    return <BlogPageClient />;
}
