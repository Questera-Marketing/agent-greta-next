'use client';

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    "ACME CORP",
    "VELOCITY",
    "PULSE",
    "ETHER",
    "ZENITH",
    "VERTEX",
    "ORBIT",
    "SYNERGY"
];

const Logos = () => {
    return (
        <section className="py-20 bg-black border-y border-zinc-900 border-dashed overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-600 mb-12">
                    Trusted by growth teams worldwide
                </p>
                
                <div className="relative flex overflow-hidden group">
                    <div className="flex gap-16 animate-marquee whitespace-nowrap px-4 py-2">
                        {[...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className="text-xl md:text-2xl font-bold tracking-tighter text-zinc-500 opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-default"
                            >
                                {logo}
                            </div>
                        ))}
                    </div>

                    {/* Gradient Fade for Marquee */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
                </div>
            </div>
        </section>
    );
};

export default Logos;
