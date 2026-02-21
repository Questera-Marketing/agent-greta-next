'use client';

import { blogs } from '@/components/blog/blogData';
import Image from 'next/image';
import { ChevronLeft, Calendar, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import Navbar from '@/components/site/Navbar';
import CTA from '@/components/site-new/CTA';
import Footer from '@/components/site/Footer';

export default function BlogPostClient({ slug }: { slug: string }) {
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center font-mono uppercase text-xs tracking-widest px-6 text-center">
        Protocol error: 404 entry not found in engineering log.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Back Button */}
      <div className="fixed top-20 left-6 z-40">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition-all text-[10px] font-bold uppercase tracking-[0.2em] bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full border border-white/5"
        >
          <ChevronLeft size={12} /> Back to Blog
        </Link>
      </div>

      <main className="max-w-4xl mx-auto px-6 pt-40 pb-32">
        {/* Entry Metadata */}
        <div className="mb-16 border-l border-zinc-900 pl-10">
          <div className="flex items-center gap-6 text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
            <div className="flex items-center gap-2">
               <Calendar size={12} /> {blog.date}
            </div>
             <div className="flex items-center gap-2 text-white">
               <Tag size={12} /> {blog.category}
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-10 leading-[0.95]">
            {blog.title}
          </h1>
          
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl font-medium tracking-tight">
            {blog.excerpt}
          </p>
        </div>

        {/* Hero Image */}
        {blog.image && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-24 border border-zinc-900 bg-zinc-950 group">
            <Image 
              src={blog.image} 
              alt={blog.title} 
              fill 
              priority
              className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            />
          </div>
        )}

        {/* Content Section */}
        <article className="max-w-3xl mx-auto">
          <div className="whitespace-pre-line leading-[1.6] text-zinc-400 text-lg font-normal tracking-tight prose prose-invert prose-zinc max-w-none">
            <ReactMarkdown
              components={{
                h2: ({ ...props }) => <h2 className="text-3xl font-bold text-white mt-6" {...props} />,
                h3: ({ ...props }) => <h3 className="text-xl font-bold text-white mt-4" {...props} />,
                p: ({ ...props }) => <p className="leading-relaxed" {...props} />,
                ul: ({ ...props }) => <ul className="list-disc list-inside space-y-2" {...props} />,
                li: ({ ...props }) => <li className="text-zinc-400" {...props} />,
                img: ({ ...props }) => (
                    <div className="my-12">
                        <img className="rounded-xl border border-zinc-900 w-full" {...props} />
                    </div>
                ),
                strong: ({ ...props }) => <strong className="text-white font-bold" {...props} />,
                a: ({ ...props }) => <a className="text-white underline hover:text-zinc-300 transition-colors" {...props} />,
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
          
          {/* End Mark */}
          <div className="mt-32 pt-12 border-t border-zinc-900 flex justify-between items-center text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
            <span>End of Log Entry</span>
            <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="cursor-pointer hover:text-white transition-colors flex items-center gap-2">
              <span className="mb-0.5">↑</span> Return to Top
            </div>
          </div>
        </article>

      </main>

      <CTA />
      <Footer />

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </div>
  );
}
