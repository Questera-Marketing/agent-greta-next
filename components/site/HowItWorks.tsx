'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Sparkles, Rocket, ArrowRight } from 'lucide-react';

const steps = [
    {
        title: "Prompt your vision",
        description: "Describe the growth feature or application you want to build. 'Create a waiting list with viral referral mechanics.'",
        icon: MessageSquare,
        color: "bg-blue-500"
    },
    {
        title: "Greta engineers the growth",
        description: "She doesn't just build the UI. She integrates the database, sets up the triggers, and embeds the tracking events.",
        icon: Sparkles,
        color: "bg-accent"
    },
    {
        title: "Ship and Scale",
        description: "Deploy to Netlify or GitHub with one click. Use the built-in dashboard to monitor your metrics and iterate at light speed.",
        icon: Rocket,
        color: "bg-emerald-500"
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-card/30 border-y border-border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-accent font-bold tracking-widest text-xs uppercase mb-4">Workflow</h2>
                        <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">From Vibe to <br />Production in minutes.</h3>
                        <p className="text-muted text-lg mb-12">
                            Traditional development separates building and growth. Greta unifies them into a single, cohesive experience. No more disconnected tools or fragmented data.
                        </p>

                        <div className="space-y-10">
                            {steps.map((step, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="flex gap-6"
                                >
                                    <div className={`shrink-0 w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white shadow-lg`}>
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                                        <p className="text-muted leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative w-full">
                        <div className="aspect-square bg-gradient-to-br from-accent/20 to-blue-500/10 rounded-full blur-[100px] absolute inset-0 -z-10 animate-pulse" />
                        <div className="relative border border-border bg-background rounded-3xl overflow-hidden shadow-2xl">
                             {/* Mock Shell / Terminal with code typed out */}
                             <div className="p-6 font-mono text-sm">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    className="space-y-4"
                                >
                                    <p className="text-blue-400"># User prompt</p>
                                    <p className="text-foreground">"I need a SaaS dashboard with a pricing table and Stripe integration."</p>
                                    <p className="text-accent mt-6"># Greta GPT-4o working...</p>
                                    <div className="pl-4 border-l border-accent/30 space-y-1 overflow-hidden">
                                        <motion.p initial={{ x: -100 }} whileInView={{ x: 0 }} className="text-muted/60">Creating dashboard.tsx...</motion.p>
                                        <motion.p initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ delay: 0.1 }} className="text-muted/60">Integrating checkout.js...</motion.p>
                                        <motion.p initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ delay: 0.2 }} className="text-muted/60">Adding tracking_events v1...</motion.p>
                                        <motion.p initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ delay: 0.3 }} className="text-emerald-500">Deployment successful!</motion.p>
                                    </div>
                                    
                                    <div className="mt-8 flex items-center gap-2 bg-emerald-500/10 text-emerald-500 p-3 rounded-xl border border-emerald-500/20">
                                        <ArrowRight className="w-4 h-4" />
                                        <span>Live at https://my-startup.greta.ai</span>
                                    </div>
                                </motion.div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
