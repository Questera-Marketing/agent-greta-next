
"use client";

import { motion } from "framer-motion";
import { Zap, Paintbrush, Bot, Rocket, Users, Plug } from "lucide-react";
import SpotlightCard from '../SpotlightCard';

const features = [
    {
        title: "Build Anything, Instantly",
        description: "Build From Prompt to Product in Minutes. Describe what you need, pick a template, add components, and preview before you publish. Greta handles the code — you just build.",
        icon: Zap,
    },
    {
        title: "Design Without Limits",
        description: "Design Click It. Change It. Ship It. Edit text, colors, and layouts directly on your page with Greta's visual editor. No prompts, no CSS — just point, click, and it's done.",
        icon: Paintbrush,
    },
    {
        title: "AI That Thinks With You",
        description: "AI More Than a Generator — a Real Co-Builder. Brainstorm in Discussion Mode, paste screenshots for context, switch AI models, or let Agent Mode build entire features autonomously.",
        icon: Bot,
    },
    {
        title: "Deploy With One Click",
        description: "Deploy Live in Seconds. Rolled Back in One Click. Connect GitHub, deploy via Netlify, manage environment variables, and restore any previous version — all without touching a terminal.",
        icon: Rocket,
    },
    {
        title: "Built for Teams",
        description: "Collaborate Everyone In. Everything Organized. Invite teammates, assign roles, manage multiple projects, clone existing ones, and keep your workspace clean with folders.",
        icon: Users,
    },
    {
        title: "Integrate & Grow",
        description: "Grow Your Whole Stack, Already Connected. Supabase, Stripe, GitHub, Netlify, GA4, Open Router BYOK — plug in your tools and scale without the setup headache.",
        icon: Plug,
    },
];

export default function Features() {

    return (
        <section id="features" className="py-24 bg-black text-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium uppercase tracking-wider text-gray-400">
                        Features
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        One Platform. <span className="font-serif italic text-gray-400">Built to Do It All.</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Every tool you need to go from idea to live product — design, build, deploy, collaborate, and grow — all inside Greta.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <SpotlightCard
                                className="h-full flex flex-col items-center text-center rounded-2xl! bg-[#0A0A0B]! border-white/10! hover:border-white/20!"
                                spotlightColor="rgba(0, 229, 255, 0.2)"
                            >
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/10">
                                    <feature.icon className="w-6 h-6 text-white/80" />
                                </div>
                                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
