'use client';

import { blogs } from '@/components/blog/blogData';
import Image from 'next/image';
import { ChevronLeft, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

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
      {/* Top Protocol Bar */}
      <header className="h-[64px] border-b border-zinc-900 flex items-center justify-between px-6 bg-black fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/" className="cursor-pointer">
            <Image alt="Greta Logo" width={90} height={25} src="/Gretanewlogo.svg" className="invert brightness-[1.5]" />
          </Link>
        </div>
        <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
          <Link href="/blog" className="hover:text-white transition-all flex items-center gap-2">
            <ChevronLeft size={12} /> Back to Log
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-48 pb-32">
        {/* Entry Metadata */}
        <div className="mb-16 border-l border-zinc-900 pl-10">
          <div className="flex items-center gap-6 text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
            <div className="flex items-center gap-2">
               <Calendar size={12} /> {blog.date}
            </div>
            <div className="flex items-center gap-2">
               <User size={12} /> {blog.author}
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
          <div className="whitespace-pre-line leading-[1.6] text-zinc-400 text-lg font-normal tracking-tight space-y-4 prose prose-invert prose-zinc max-w-none">
            <ReactMarkdown
              components={{
                h2: ({ ...props }) => <h2 className="text-3xl font-bold text-white mt-12 mb-6" {...props} />,
                h3: ({ ...props }) => <h3 className="text-xl font-bold text-white mt-8 mb-4" {...props} />,
                p: ({ ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
                ul: ({ ...props }) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
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

        {/* Protocol CTA */}
        <section className="mt-48 text-center bg-zinc-950 border border-zinc-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#111111_0%,transparent_70%)] opacity-50" />
             <div className="relative z-10">
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8">Ready to engineer <br /> your growth?</h3>
                <p className="text-zinc-500 text-lg mb-12 max-w-sm mx-auto">Join the new era of autonomous development protocol today.</p>
                <button 
                  onClick={() => window.open('https://greta.questera.ai/home', '_blank')}
                  className="bg-white text-black px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/5 inline-flex items-center gap-3"
                >
                  Apply Protocol <ArrowRight size={14} />
                </button>
             </div>
        </section>
      </main>

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </div>
  );
}
