'use client';

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    "ACME CORP",
    "VELOCITY",
    "PULSE",
    "ETHER",
    "ZENITH",
    "VERTEX"
];

const Logos = () => {
    return (
        <section className="py-12 border-y border-border/50 bg-card/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-muted mb-10">
                    Trusted by growth teams at
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-xl md:text-2xl font-black tracking-tighter"
                        >
                            {logo}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logos;
