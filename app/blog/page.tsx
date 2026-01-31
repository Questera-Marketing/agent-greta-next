'use client';

import { blogs } from '@/components/blog/blogData';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const TopBar = () => {
    const router = useRouter();

    return (
        <div className="h-[64px] border-b border-zinc-900 flex items-center justify-between px-8 bg-black fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center gap-4">
                <div className="cursor-pointer" onClick={() => router.push("/")}>
                    <Image alt="Greta Logo" width={90} height={25} src="/Gretanewlogo.svg" className="invert brightness-[1.2]" />
                </div>
            </div>
            <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                <Link href="/learninghub" className="hover:text-white transition-all">Documentation</Link>
                <button onClick={() => window.open("https://greta.questera.ai/home", "_blank")} className="bg-white text-black px-5 py-2 rounded-full hover:bg-zinc-200 transition-all">Launch App</button>
            </div>
        </div>
    );
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <TopBar />
      <main className="max-w-6xl mx-auto px-8 pt-48 pb-32">
        <div className="mb-32 border-l border-zinc-900 pl-10">
          <div className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Engineering Log v1.0</div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8">Protocol <br />Updates.</h1>
          <p className="text-zinc-500 text-xl max-w-2xl leading-relaxed">
            The latest insights on vibe coding, growth engineering, and technical protocols from the Greta core team.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-zinc-900">
          {blogs.map((blog) => (
            <Link 
              key={blog.slug} 
              href={`/blog/${blog.slug}`}
              className="group bg-black flex flex-col md:flex-row md:items-center justify-between p-12 hover:bg-zinc-900/40 transition-all"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-8 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                    {blog.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-700">{blog.date}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-zinc-200 group-hover:text-white transition-colors mb-4">
                  {blog.title}
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 md:mb-0">
                  {blog.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-700 group-hover:text-white transition-all">
                Access Log <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Grid line overlay for technical feel */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </div>
  );
}
