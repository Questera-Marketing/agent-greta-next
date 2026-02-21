"use client";

import { motion } from "framer-motion";
import { Check, X, Orbit, Sparkles, Layers } from "lucide-react";

const features = [
    "Full-stack projects, not just pretty UI components",
    "Agent Mode that plans, builds & executes on its own",
    "One-click deployment via Netlify & GitHub",
    "Built-in database, auth & backend with Supabase",
    "Direct code & visual editing — no wasted credits",
    "Team collaboration with roles & access control",
    "Rollback, clone & version management — anytime",
    "Stripe payments & GA4 analytics, out of the box",
    "Marketplace ecosystem — more tools, one platform",
    "Knowledge Base & custom instructions that stick"
];

const competitors = [
    "Frontend-only mockups with no real functionality",
    "No deployment workflow — figure it out yourself",
    "Backend? You're on your own",
    "No version control — one mistake and it's gone",
    "Zero collaboration — built for solo tinkering",
    "Locked to one AI model, one way of working",
    "No marketplace, no ecosystem, no growth path",
    "Built for demos. Not for products that actually ship."
];

export default function Comparison() {
    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6"
                    >
                        <Orbit className="w-4 h-4" />
                        <span>COMPARISON</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-4 font-serif"
                    >
                        Other Tools Help You Start. <span className="italic font-normal text-gray-400">Greta Helps You Ship.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Anyone can generate a UI. Not everyone can take it live, scale it, and manage it like a real product. That's the difference.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Us */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl blur-xl" />
                        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                                    <Sparkles className="w-4 h-4" />
                                </div>
                                <h3 className="text-2xl font-serif italic">With Greta</h3>
                            </div>
                            <p className="text-gray-400 text-sm mb-6">You're not just building — you're launching.</p>

                            <ul className="space-y-6">
                                {features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-gray-200">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Others */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 h-full opacity-60 hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                    <Layers className="w-4 h-4" />
                                </div>
                                <h3 className="text-2xl font-serif italic text-gray-400">With Other AI Tools</h3>
                            </div>
                            <p className="text-gray-500 text-sm mb-6">Great for demos. Not built for the real world.</p>

                            <ul className="space-y-6">
                                {competitors.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                                            <X className="w-3 h-3" />
                                        </div>
                                        <span className="text-gray-400">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


