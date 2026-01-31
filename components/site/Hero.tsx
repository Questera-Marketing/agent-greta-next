'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden lg:pt-48 lg:pb-32 min-h-[90vh] flex flex-col justify-center bg-black">
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-12"
                    >
                        <Sparkles className="w-3 h-3 text-white" />
                        Infrastructure for Growth
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-12 text-white"
                    >
                        Engineer your <br />
                        growth at scale.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed font-medium"
                    >
                        Greta is the specialized tech agent for growth engineering. <br className="hidden md:block" />
                        Move fast. Build autonomously. Grow without boundaries.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="https://greta.questera.ai"
                            className="bg-white text-black px-10 py-4 rounded-full text-sm font-bold hover:bg-zinc-200 transition-all active:scale-95"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/learninghub"
                            className="text-white border border-zinc-800 bg-zinc-900/50 px-10 py-4 rounded-full text-sm font-bold hover:bg-zinc-800 transition-all active:scale-95"
                        >
                            Documentation
                        </Link>
                    </motion.div>
                </div>

                {/* Resend-style Glowing Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                    className="mt-32 relative mx-auto max-w-4xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent blur-3xl opacity-20" />
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
                    <div className="aspect-[2/1] bg-zinc-950 border-x border-zinc-900 relative overflow-hidden flex items-center justify-center">
                        <div className="w-64 h-64 rounded-full bg-white/5 blur-[100px] absolute animate-pulse" />
                        <div className="text-zinc-800 font-mono text-[10px] tracking-[0.5em] uppercase pointer-events-none select-none">
                             Growth Agent Protocol v1.0
                        </div>
                    </div>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
