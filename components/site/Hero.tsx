'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden lg:pt-48 lg:pb-32 min-h-screen flex flex-col justify-center">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse delay-700" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-purple-500/10 blur-[120px] rounded-full animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        <Sparkles className="w-3 h-3" />
                        The World's First Growth Tech Agent
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] mb-10"
                    >
                        Vibe code your <br />
                        <span className="gradient-text drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]">growth agent.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Greta is the "vibe coding" agent for growth engineers. Stop just building features. Start engineering scale with built-in analytics, onboarding, and engagement flows.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="https://greta.questera.ai"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:shadow-accent/40 transition-all hover:-translate-y-1 active:scale-95 group"
                        >
                            Start Building Now
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-card hover:bg-card-hover border border-border px-8 py-4 rounded-2xl text-lg font-bold transition-all hover:-translate-y-1 active:scale-95">
                            <Play className="w-5 h-5 text-accent fill-accent" />
                            Watch Demo
                        </button>
                    </motion.div>
                </div>
                
                {/* Hero UI Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 50, rotateX: 10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 relative mx-auto max-w-5xl rounded-3xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden shadow-[0_0_80px_-15px_rgba(124,58,237,0.3)] perspective-1000"
                >
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/50">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>
                        <div className="mx-auto bg-background/80 px-4 py-0.5 rounded-lg text-xs text-muted font-medium border border-border">
                            greta.questera.ai
                        </div>
                    </div>
                    
                    <div className="p-4 md:p-8 aspect-[16/9] flex items-center justify-center relative bg-gradient-to-br from-card to-background">
                         <div className="max-w-md w-full space-y-6">
                            <div className="flex items-start gap-4 animate-bounce-slow">
                                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                                    <Sparkles className="text-white w-5 h-5" />
                                </div>
                                <div className="bg-muted/10 border border-border p-4 rounded-2xl rounded-tl-none text-sm">
                                    "Build me a checkout page with a high-converting referral loop and custom GA4 events for tracking drop-offs."
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-3 pl-14">
                                <div className="h-4 w-3/4 bg-accent/20 rounded animate-pulse" />
                                <div className="h-4 w-1/2 bg-accent/10 rounded animate-pulse delay-75" />
                                <div className="h-32 w-full bg-border/20 rounded-xl mt-4 border border-border/50 flex items-center justify-center overflow-hidden">
                                     <div className="grid grid-cols-2 gap-4 w-full p-4">
                                         <div className="h-16 bg-card border border-border rounded-lg" />
                                         <div className="h-16 bg-card border border-border rounded-lg" />
                                     </div>
                                </div>
                            </div>
                         </div>

                         {/* Floating labels */}
                         <div className="absolute top-10 right-10 flex flex-col gap-2 items-end">
                            <div className="flex items-center gap-2 bg-green-500/10 text-green-500 border border-green-500/20 px-3 py-1.5 rounded-full text-xs font-bold animate-float">
                                <TrendingUp className="w-3 h-3" />
                                Conversion optimized
                            </div>
                            <div className="bg-background/80 backdrop-blur-md border border-border p-3 rounded-xl shadow-xl flex gap-3 items-center">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">System Active</span>
                            </div>
                         </div>
                         <div className="absolute bottom-10 left-10 flex items-center gap-2 bg-blue-500/10 text-blue-500 border border-blue-500/20 px-3 py-1.5 rounded-full text-xs font-bold animate-float-delayed">
                            <Zap className="w-3 h-3" />
                            Vibe coding active
                         </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
