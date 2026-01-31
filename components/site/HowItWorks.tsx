'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-32 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl">
                    <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-20">
                        Designed for the <br /> 
                        <span className="text-zinc-600">new era of growth.</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div className="space-y-12">
                            <div className="pt-8 border-t border-zinc-900">
                                <div className="text-white font-bold text-sm uppercase tracking-widest mb-4">01. Prompt Intent</div>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    Describe your growth strategy in natural language. Greta translates the 'vibe' into infrastructure.
                                </p>
                            </div>
                            <div className="pt-8 border-t border-zinc-900">
                                <div className="text-white font-bold text-sm uppercase tracking-widest mb-4">02. Auto-Engineer</div>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    Automatic integration of databases, analytics, and CRM events without manual configuration.
                                </p>
                            </div>
                            <div className="pt-8 border-t border-zinc-900">
                                <div className="text-white font-bold text-sm uppercase tracking-widest mb-4">03. Global Deployment</div>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    One-click deployment to AWS/Netlify. Your growth engine is live in seconds.
                                </p>
                            </div>
                        </div>

                        <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 relative overflow-hidden flex items-center justify-center min-h-[400px]">
                            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent" />
                            <div className="font-mono text-[10px] text-zinc-500 space-y-2">
                                <p className="text-white">$ greta build --target conversion-loop</p>
                                <p className="pl-4 border-l border-zinc-800">Analyzing growth pattern...</p>
                                <p className="pl-4 border-l border-zinc-800">Generating analytics_manifest.json</p>
                                <p className="pl-4 border-l border-zinc-800">Stripe session initialized...</p>
                                <p className="text-emerald-500 font-bold mt-4">✓ Deployment Optimized</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
