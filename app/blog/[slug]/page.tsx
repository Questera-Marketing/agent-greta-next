import { blogs } from '@/components/blog/blogData';
import { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  const baseUrl = 'https://www.greta.sh'; // Canonical domain updated to greta.sh
  const url = `${baseUrl}/blog/${slug}`;

  return {
    title: blog.title,
    description: blog.description || blog.excerpt,
    keywords: blog.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: blog.title,
      description: blog.description || blog.excerpt,
      url: url,
      type: 'article',
      images: blog.image ? [{ url: blog.image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description || blog.excerpt,
      images: blog.image ? [blog.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}
