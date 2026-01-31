'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
    Zap, 
    TrendingUp, 
    Layout, 
    Users, 
    Codesandbox, 
    LineChart
} from 'lucide-react';

const features = [
    {
        title: "Vibe Coding Protocol",
        description: "Zero-latency intent translation for growth funnels.",
        icon: Zap,
    },
    {
        title: "Growth Engineering",
        description: "Embedded analytics and onboarding from line one.",
        icon: TrendingUp,
    },
    {
        title: "Atomic Components",
        description: "Specialized building blocks for modern SaaS.",
        icon: Layout,
    },
    {
        title: "Autonomous Agents",
        description: "Multi-agent systems working alongside your team.",
        icon: Users,
    },
    {
        title: "VS-Grade Control",
        description: "Full-stack editing with visual styling engine.",
        icon: Codesandbox,
    },
    {
        title: "Unified Reporting",
        description: "Actionable growth insights inside your workspace.",
        icon: LineChart,
    }
];

const Features = () => {
    return (
        <section id="features" className="py-32 bg-black border-y border-zinc-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-12 border-b border-r border-zinc-900 group hover:bg-zinc-900/10 transition-colors"
                        >
                            <div className="text-white mb-8 group-hover:scale-110 transition-transform duration-500">
                                <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-white">{feature.title}</h4>
                            <p className="text-zinc-500 text-sm leading-relaxed max-w-[240px]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
