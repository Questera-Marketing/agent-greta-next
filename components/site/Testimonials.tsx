'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Alex Rivera",
        role: "Founder @ Stealth Startup",
        content: "Greta didn't just build my landing page; she integrated the entire referral funnel in minutes. Vibe coding is real, and it's a game changer.",
        avatar: "AR"
    },
    {
        name: "Sarah Chen",
        role: "Growth Lead @ Fintech Plus",
        content: "We've tried Lovable and Bolt, but Greta's specialized focus on growth engineering is what we needed to scale our onboarding flow.",
        avatar: "SC"
    },
    {
        name: "Marcus Wright",
        role: "Product Designer",
        content: "The bridge between design and code has finally been crossed. Greta understands the 'vibe' and executes with precision.",
        avatar: "MW"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-accent font-bold tracking-widest text-xs uppercase mb-4">Testimonials</h2>
                    <h3 className="text-4xl font-black">Building the future, together.</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-card border border-border relative group hover:border-accent/40 transition-all"
                        >
                            <Quote className="absolute top-6 right-8 w-12 h-12 text-accent/5 -scale-x-100" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, starI) => (
                                    <Star key={starI} className="w-4 h-4 fill-accent text-accent" />
                                ))}
                            </div>
                            <p className="text-lg leading-relaxed mb-8 italic text-foreground/90">
                                "{t.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-bold text-accent">
                                    {t.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold">{t.name}</h4>
                                    <p className="text-xs text-muted font-medium">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
