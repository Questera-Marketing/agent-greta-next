'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const CTA = () => {
    return (
        <section className="py-48 bg-black relative overflow-hidden border-t border-zinc-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#111111_0%,transparent_50%)]" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-12">
                    Integrate this <br />
                    <span className="text-zinc-600">into your stack.</span>
                </h2>
                
                <p className="text-zinc-500 text-lg md:text-xl max-w-xl mx-auto mb-16 leading-relaxed">
                    Greta works seamlessly with GitHub, Supabase, Stripe, and AWS. <br />
                    Start building the future of growth today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        href="https://greta.questera.ai"
                        className="bg-white text-black px-12 py-5 rounded-full text-sm font-bold hover:bg-zinc-200 transition-all hover:scale-105"
                    >
                        Sign up for free
                    </Link>
                    <Link
                        href="#"
                        className="text-white bg-zinc-900/50 border border-zinc-800 px-12 py-5 rounded-full text-sm font-bold hover:bg-zinc-800 transition-all"
                    >
                        Contact Sales
                    </Link>
                </div>

                <div className="mt-48 flex justify-center items-center gap-12 grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                    <span className="text-xs font-bold tracking-widest text-white">GITHUB</span>
                    <span className="text-xs font-bold tracking-widest text-white">SUPABASE</span>
                    <span className="text-xs font-bold tracking-widest text-white">STRIPE</span>
                    <span className="text-xs font-bold tracking-widest text-white">AWS</span>
                </div>
            </div>
        </section>
    );
};

export default CTA;
