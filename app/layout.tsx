import type { Metadata } from "next";
import { Figtree, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "_EXYEJ9fg375DrIpEMph-XSdXMMhT4bmfISFGZfI8JM",
  },
  keywords: ["vibe coding", "growth engineering", "AI agent", "autonomous marketing", "Greta AI", "Lovable alternative", "no-code app builder", "AI software engineer"],
  metadataBase: new URL('https://www.greta.sh'),
  openGraph: {
    title: "Greta.sh | Growth Engineering Tech Agent",
    description: "The AI agent for Growth Engineers. Vibe code your way to success.",
    url: "https://www.greta.sh",
    siteName: "Greta.sh",
    type: "website",
    images: [
      {
        url: "/Gretanewlogo.svg",
        width: 1200,
        height: 630,
        alt: "Greta.sh - Growth Engineering Tech Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greta.sh | Growth Engineering Tech Agent",
    description: "The AI agent for Growth Engineers. Vibe code your way to success.",
    images: ["/Gretanewlogo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WETKHV0DBQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WETKHV0DBQ');
          `}
        </Script>
      </head>
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
