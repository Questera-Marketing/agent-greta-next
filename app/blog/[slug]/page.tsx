import { Metadata } from 'next';
import { blogs } from '@/components/blog/blogData';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) return { title: 'Post Not Found' };

  return {
    title: `${blog.title} | Greta Blog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      url: `https://greta.questera.ai/blog/${slug}`,
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const slug = (await params).slug;
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white transition-colors duration-300">
      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-8">
           <span className="text-purple-500 font-semibold">{blog.category}</span>
           <h1 className="text-4xl font-bold mt-2">{blog.title}</h1>
           <div className="text-gray-500 mt-4 flex gap-4">
             <span>{blog.date}</span>
             <span>By {blog.author}</span>
           </div>
        </div>
        <article className="prose dark:prose-invert max-w-none">
          {blog.content}
        </article>
      </main>
    </div>
  );
}
