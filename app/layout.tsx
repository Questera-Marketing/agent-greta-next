import type { Metadata } from "next";
import { Figtree, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SoftwareSchema from "@/components/site/SoftwareSchema";
import BreadcrumbSchema from "@/components/site/BreadcrumbSchema";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Greta.sh | Growth Engineering Tech Agent & Vibe Coding Tool",
  description: "Greta (Growth Engineering Tech Agent) is the next-gen vibe coding tool for autonomous growth, marketing, and sales operations. Build, automate, and scale with Greta.sh.",
  keywords: ["vibe coding", "growth engineering", "AI agent", "autonomous marketing", "Greta AI", "Lovable alternative", "no-code app builder", "AI software engineer"],
  metadataBase: new URL('https://www.greta.sh'),
  openGraph: {
    title: "Greta.sh | Growth Engineering Tech Agent",
    description: "The AI agent for Growth Engineers. Vibe code your way to success.",
    url: "https://www.greta.sh",
    siteName: "Greta.sh",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${figtree.variable} ${geistMono.variable} antialiased font-[Figtree]`}
      >
        <ThemeProvider>
          <SoftwareSchema />
          <BreadcrumbSchema />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
