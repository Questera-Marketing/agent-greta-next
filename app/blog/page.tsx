'use client';

import { blogs } from '@/components/blog/blogData';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/components/ThemeProvider';
import { Moon, Sun, ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const TopBar = () => {
    const router = useRouter();
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="h-[60px] border-b border-black/5 dark:border-white/5 flex items-center justify-between px-6 bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-xl fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center gap-4">
                <div className="logo-container flex gap-[5px] items-end justify-center relative shrink-0 cursor-pointer" onClick={() => router.push("/")}>
                    <div className="relative shrink-0 ml-16">
                        <Image alt="Greta Logo" width={24} height={24} src="/Gretanewlogo.svg" className="dark:invert-0 invert" />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-6 text-[13px] text-gray-600 dark:text-gray-400 font-medium">
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <Link href="/learninghub" className="hover:text-black dark:hover:text-white transition-colors">Learning Hub</Link>
                <button onClick={() => window.open("https://greta.questera.ai/home", "_blank")} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 text-[12px] rounded-[8px]">App</button>
            </div>
        </div>
    );
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white transition-colors duration-300">
      <TopBar />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4">The Greta Blog</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Insights on vibe coding, growth engineering, and building the AI ecosystem of tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link 
              key={blog.slug} 
              href={`/blog/${blog.slug}`}
              className="group flex flex-col p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-purple-500 px-2 py-1 rounded bg-purple-500/10 w-fit">
                  {blog.category}
                </span>
                <span className="text-[12px] text-gray-400">{blog.date}</span>
              </div>
              <h2 className="text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors">
                {blog.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                {blog.excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-purple-500">
                Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
