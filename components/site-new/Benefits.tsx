
"use client";

import { motion } from "framer-motion";
import { Zap, Sparkles, Layers } from "lucide-react";

const benefits = [
    {
        title: "Instant App Generation",
        description: "Turn a simple prompt into a working full-stack app — complete with UI, backend logic, authentication, and database setup. No scaffolding. No boilerplate. No waiting.",
        icon: Zap,
    },
    {
        title: "AI That Understands Product",
        description: "Greta doesn't just generate screens — it understands flows, logic, edge cases, and real product structure. You get usable apps, not demos.",
        icon: Sparkles,
    },
    {
        title: "Production-Ready by Default",
        description: "Secure architecture. Scalable infrastructure. Clean code. Build once. Launch confidently.",
        icon: Layers,
    },
];

export default function Benefits() {
    return (
        <section className="py-24 bg-black text-white relative">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium uppercase tracking-wider text-gray-400">
                        Benefits
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Why Builders Choose <span className="font-serif italic text-gray-400">Greta</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Because speed matters. Because complexity shouldn't block creativity. Because ideas deserve to ship.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/[0.07] relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-white/10 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-all duration-500" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <benefit.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
