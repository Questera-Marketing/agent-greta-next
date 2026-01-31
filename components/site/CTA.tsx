'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-accent rounded-[3rem] p-12 md:p-20 overflow-hidden text-center"
                >
                    {/* Decorative background for CTA */}
                    <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-black/10 blur-[80px] rounded-full" />

                    <div className="max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            <Sparkles className="w-3 h-3" />
                            Ready to vibe?
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                            Start engineering your growth today.
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl mb-12 max-w-xl mx-auto">
                            Join over 2,000+ growth engineers and founders who are building the future with Greta.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="https://greta.questera.ai"
                                className="w-full sm:w-auto bg-white text-accent px-10 py-5 rounded-2xl text-xl font-bold hover:bg-zinc-100 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                            >
                                Get Started for Free
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-full sm:w-auto bg-black/20 text-white border border-white/20 hover:bg-white/10 px-10 py-5 rounded-2xl text-xl font-bold transition-all"
                            >
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
