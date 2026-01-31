'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';

const plans = [
    {
        name: "Starter",
        price: "$0",
        period: "forever",
        description: "Perfect for exploring and building simple sites.",
        features: [
            "1 Active Project",
            "100 AI Credits / month",
            "Netlify Deployment",
            "Basic Components",
            "Community Support"
        ],
        cta: "Get Started",
        highlight: false
    },
    {
        name: "Pro",
        price: "$19",
        period: "per month",
        description: "For founders and growth engineers building serious products.",
        features: [
            "Unlimited Projects",
            "2,000 AI Credits / month",
            "Custom Domain Support",
            "Advanced Growth Modules",
            "Priority Support",
            "GitHub Sync"
        ],
        cta: "Upgrade to Pro",
        highlight: true
    },
    {
        name: "Elite",
        price: "Custom",
        period: "contact us",
        description: "Tailored solutions for high-growth companies and agencies.",
        features: [
            "Unlimited Projects & Teams",
            "Custom Credit Limits",
            "White-label options",
            "Direct Engineering Support",
            "Advanced API Access",
            "Enterprise Security"
        ],
        cta: "Contact Sales",
        highlight: false
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-accent font-bold tracking-widest text-xs uppercase mb-4">Pricing</h2>
                    <h3 className="text-4xl md:text-5xl font-black mb-6">Simple pricing for serious scale.</h3>
                    <p className="text-muted text-lg">
                        Start for free and scale as your traffic grows. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-8 rounded-3xl border flex flex-col ${
                                plan.highlight 
                                ? 'bg-background border-accent shadow-[0_0_40px_-10px_rgba(124,58,237,0.4)] relative' 
                                : 'bg-card border-border'
                            }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-5xl font-black">{plan.price}</span>
                                    <span className="text-muted text-sm">{plan.period}</span>
                                </div>
                                <p className="text-muted text-sm leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex items-center gap-3">
                                        <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-accent/20 text-accent' : 'bg-muted/20 text-muted'}`}>
                                            <Check className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                                plan.highlight
                                ? 'bg-accent text-white hover:bg-accent/90 shadow-xl shadow-accent/20'
                                : 'bg-foreground text-background hover:bg-foreground/90'
                            }`}>
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 text-muted text-sm bg-muted/5 border border-border px-4 py-2 rounded-full">
                        <Info className="w-4 h-4" />
                        <span>All plans include encryption at rest, daily backups, and regular security audits.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
