'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden lg:pt-64 lg:pb-32 min-h-screen flex flex-col justify-center bg-black">
            <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
                <div className="text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20 group"
                    >
                         {/* Resend Style Breadcrumbs for Hero */}
                         <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
                             <Link href="/" className="hover:text-white transition-colors">Home</Link>
                             <span className="text-zinc-800">/</span>
                             <Link href="/learninghub" className="hover:text-white transition-colors">Protocol</Link>
                             <span className="text-zinc-800">/</span>
                             <span className="text-zinc-400">v1.0</span>
                         </div>
                         
                         <div className="hidden md:block w-px h-4 bg-zinc-900 mx-2" />

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em]">
                            <Sparkles className="w-3 h-3 text-white animate-pulse" />
                             Growth Engineering Protocol
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[4rem] sm:text-7xl md:text-8xl lg:text-[11rem] font-bold tracking-[-0.08em] leading-[0.9] sm:leading-[0.75] mb-12 sm:mb-16 text-white"
                    >
                        Vibe code your <br />
                        <span className="text-white brightness-[0.95]">growth agent.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-zinc-500 text-xl md:text-2xl max-w-3xl mx-auto mb-20 leading-relaxed font-medium tracking-tight"
                    >
                        Greta is the specialized tech agent for growth. <br className="hidden md:block" />
                        Autonomous protocol. Real-scale architecture. Zero complexity.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link
                            href="https://greta.questera.ai"
                            className="bg-white text-black px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all active:scale-95 shadow-2xl shadow-white/5"
                        >
                            Deploy Protocol
                        </Link>
                        <Link
                            href="/learninghub"
                            className="text-zinc-400 border border-zinc-800 bg-zinc-900/20 px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:text-white hover:border-zinc-700 transition-all active:scale-95"
                        >
                            Documentation
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="mt-48 relative mx-auto max-w-5xl"
                >
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
                    <div className="aspect-[21/9] bg-zinc-950/50 border-x border-zinc-900 relative overflow-hidden flex items-center justify-center group">
                        <div className="w-[80%] h-px bg-zinc-900 absolute top-10" />
                        <div className="w-[80%] h-px bg-zinc-900 absolute bottom-10" />
                        <div className="w-96 h-96 rounded-full bg-white/[0.02] blur-[120px] absolute group-hover:bg-white/[0.04] transition-all duration-1000" />
                        <div className="text-zinc-800 font-mono text-[9px] tracking-[0.8em] uppercase select-none">
                             Greta Growth Engine initialized...
                        </div>
                    </div>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
