'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
    Zap, 
    TrendingUp, 
    Layout, 
    Users, 
    Codesandbox, 
    LineChart, 
    MousePointer2,
    ShieldCheck
} from 'lucide-react';

const features = [
    {
        title: "Vibe Coding Experience",
        description: "Transform your high-level ideas into production-ready growth funnels through simple conversational prompts.",
        icon: Zap,
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        title: "Growth-First Architecture",
        description: "Analytics, onboarding, and engagement flows are embedded into your code from line one, not bolted on as an afterthought.",
        icon: TrendingUp,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        title: "100+ Pro Components",
        description: "Access a specialized library of battle-tested components designed specifically for SaaS growth and user conversion.",
        icon: Layout,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Agent-Led Collaboration",
        description: "Work alongside Greta in real-time. Invite your team and watch as she translates your collective vision into functional code.",
        icon: Users,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        title: "Full-Stack Control",
        description: "Seamlessly switch between AI generation and manual editing with our built-in VS-Code grade editor and visual text styler.",
        icon: Codesandbox,
        color: "text-rose-500",
        bg: "bg-rose-500/10"
    },
    {
        title: "Built-in Reporting",
        description: "Automatically generate dashboards that track meaningful growth metrics, converting raw data into actionable insights.",
        icon: LineChart,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10"
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-accent font-bold tracking-widest text-xs uppercase mb-4">Features</h2>
                    <h3 className="text-4xl md:text-5xl font-black mb-6">Engineered for the next generation of builders.</h3>
                    <p className="text-muted text-lg">
                        Greta doesn't just write code; she understands the nuances of user behavior and business success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-card border border-border hover:border-accent/40 transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{feature.title}</h4>
                            <p className="text-muted leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
