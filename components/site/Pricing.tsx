'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Developer",
        price: "$0",
        period: "per user / month",
        description: "Everything you need to build and prototype.",
        features: ["1 Active Project", "Growth Schema Mapping", "Basic Analytics"],
        cta: "Sign up for Free",
    },
    {
        name: "Pro",
        price: "$20",
        period: "per user / month",
        description: "Scale your growth engine with advanced agents.",
        features: ["Unlimited Projects", "Custom Domain", "Priority Events", "GitHub Git-Sync"],
        cta: "Get Started with Pro",
        main: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "tailored to you",
        description: "Compliance and security for large scale ops.",
        features: ["SSO & SAML", "White-glove engineering", "Unlimited Credits"],
        cta: "Contact Sales",
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-32 bg-black border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`p-16 border-r border-zinc-900 flex flex-col justify-between min-h-[500px] ${plan.main ? 'bg-zinc-900/10' : ''}`}
                        >
                            <div>
                                <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-12">{plan.name}</h4>
                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-5xl font-bold text-white tracking-tighter">{plan.price}</span>
                                    <span className="text-zinc-600 text-xs">{plan.period}</span>
                                </div>
                                <p className="text-zinc-500 text-sm leading-relaxed mb-12">{plan.description}</p>
                                
                                <ul className="space-y-4">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-zinc-400 text-xs">
                                            <div className="w-1 h-1 bg-zinc-700 rounded-full" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className={`w-full py-4 rounded-full text-xs font-bold transition-all mt-16 ${plan.main ? 'bg-white text-black' : 'text-white border border-zinc-800 hover:bg-zinc-900'}`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
