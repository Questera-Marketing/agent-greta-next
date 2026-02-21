"use client";

import { blogs, BlogItem } from '@/components/blog/blogData';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Calendar, ArrowUpRight, Tag } from 'lucide-react';
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import CTA from "@/components/site-new/CTA";
import { motion } from "framer-motion";
import { useState, useMemo } from 'react';
import Image from 'next/image';

const POSTS_PER_PAGE = 12;

// Sort blogs by date (latest first)
function sortBlogsByDate(blogList: BlogItem[]): BlogItem[] {
  return [...blogList].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export default function BlogPageClient() {
  const [currentPage, setCurrentPage] = useState(1);

  const sortedBlogs = useMemo(() => sortBlogsByDate(blogs), []);
  const totalPages = Math.ceil(sortedBlogs.length / POSTS_PER_PAGE);

  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return sortedBlogs.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [sortedBlogs, currentPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-black text-white px-4 pt-32 pb-16">
          {/* Background Gradient Orbs */}
          <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium uppercase tracking-wider text-gray-400 mb-8"
            >
              Insights & Guides
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
            >
              <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/60">
                The Greta Blog
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Explore the latest insights on AI-powered development, growth engineering, and building production-ready applications with Greta.
            </motion.p>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              key={`page-${currentPage}`}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {paginatedBlogs.map((blog, index) => (
                <motion.div
                  key={blog.slug}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="group block h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/[0.07] relative overflow-hidden"
                  >
                    {/* Hover glow effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-white/10 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Blog Image */}
                    {blog.image && (
                      <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden bg-white/5">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    <div className="relative z-10">
                      {/* Category Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-gray-300 mb-4">
                        {blog.category}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gray-100 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {blog.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {blog.category}
                        </span>
                      </div>

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 mt-4 text-sm font-medium text-white group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2 mt-16"
              >
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-gray-400 hover:bg-white/10 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:hover:text-gray-400"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Prev
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                        currentPage === page
                          ? 'bg-white text-black'
                          : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-gray-400 hover:bg-white/10 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:hover:text-gray-400"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}

