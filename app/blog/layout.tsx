import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Greta AI - Insights & Guides',
  description: 'Explore the latest insights on AI-powered development, growth engineering, and building production-ready applications with Greta.',
  alternates: {
    canonical: 'https://www.greta.sh/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

