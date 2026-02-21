"use client";

import { motion } from "framer-motion";
import { Check, Lock, BarChart3, Layers, Building2, Tag } from "lucide-react";
import { useState } from "react";

const pricingPlans = [
    {
        name: "Starter",
        icon: Lock,
        price: {
            monthly: "50",
            yearly: "50",
            monthlyButton: "Free",
            yearlyButton: "Free"
        },
        period: { monthly: "month", yearly: "month" },
        description: "A simple and enjoyable choice for hobbyists and those exploring casually.",
        features: [
            "Supabase Backend",
            "Github Connection"
        ],
        popular: false
    },
    {
        name: "Growth",
        icon: BarChart3,
        price: {
            monthly: "250",
            yearly: "3000",
            monthlyButton: "$20",
            yearlyButton: "$240"
        },
        period: { monthly: "month", yearly: "year" },
        description: "Effective choice for startup founders and indie hackers exploring growth opportunities.",
        features: [
            "Supabase Backend",
            "Github Connection"
        ],
        popular: false
    },
    {
        name: "Scale",
        icon: Layers,
        price: {
            monthly: "750",
            yearly: "9000",
            monthlyButton: "$50",
            yearlyButton: "$600"
        },
        period: { monthly: "month", yearly: "year" },
        description: "Reliable choice for businesses scaling rapidly with confidence and efficiency.",
        features: [
            "Supabase Backend",
            "Github Connection",
            "Custom Domain",
            "Stripe Integration"
        ],
        popular: false
    },
    {
        name: "Enterprise",
        icon: Building2,
        price: {
            monthly: "3000",
            yearly: "36000",
            monthlyButton: "$200",
            yearlyButton: "$2400"
        },
        period: { monthly: "month", yearly: "year" },
        description: "Custom solutions for businesses needing advanced features, dedicated support, and scalability.",
        features: [
            "Supabase Backend",
            "Github Connection",
            "Custom Domain",
            "Stripe Integration"
        ],
        popular: false
    }
];

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            {/* Animated Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-1/4 w-150 h-150 bg-violet-600/20 rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 right-1/4 w-125 h-125 bg-blue-600/20 rounded-full blur-[150px]"
                />
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-widest text-gray-400"
                    >
                        <Tag className="w-2.5 h-2.5 fill-current" />
                        Pricing
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight"
                    >
                        Flexible Plans for <span className="italic font-serif opacity-80">Everyone</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto"
                    >
                        Choose a plan that fits your goals and scale as you grow
                    </motion.p>
                </div>

                {/* Billing Toggle */}
                <div className="flex flex-col items-center mb-12">
                    <div className="flex items-center gap-4">
                        <span className={`text-sm font-medium transition-colors ${billingCycle === "monthly" ? "text-white" : "text-gray-500"}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                            className="relative w-14 h-7 rounded-full bg-gray-800 border border-white/10 transition-colors"
                        >
                            <motion.div
                                className="absolute top-1 w-5 h-5 rounded-full bg-violet-500"
                                animate={{ left: billingCycle === "monthly" ? "4px" : "calc(100% - 24px)" }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <span className={`text-sm font-medium transition-colors ${billingCycle === "yearly" ? "text-violet-400" : "text-gray-500"}`}>
                            Yearly
                        </span>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {pricingPlans.map((plan, index) => {
                        const IconComponent = plan.icon;
                        return (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                                viewport={{ once: true }}
                                className="relative group p-6 rounded-2xl bg-[#0a0a0c] border border-white/5 transition-all duration-500 flex flex-col"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center mb-6">
                                    <IconComponent className="w-6 h-6 text-violet-400" />
                                </div>

                                {/* Plan Name */}
                                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                                    {plan.name}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 text-sm mb-6 min-h-15">
                                    {plan.description}
                                </p>

                                {/* Price */}
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-violet-400 text-lg">✦</span>
                                    <span className="text-2xl font-bold text-white tracking-tight">
                                        {billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                                    </span>
                                    <span className="text-gray-500 text-sm">
                                        / {billingCycle === "monthly" ? plan.period.monthly : plan.period.yearly}
                                    </span>
                                </div>

                                {/* Features */}
                                <div className="space-y-3 mb-6 grow">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-violet-400" />
                                            <span className="text-gray-400 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <button 
                                    className={`w-full py-3 rounded-xl border font-medium text-sm transition-all ${
                                        plan.name === "Starter"
                                            ? "bg-violet-600 text-white border-violet-600 hover:bg-violet-700"
                                            : "bg-transparent text-white border-white/20 hover:border-violet-500/50"
                                    }`}
                                    onClick={() => window.open("https://greta.questera.ai/pricing", "_blank")}
                                >
                                    {billingCycle === "monthly" ? plan.price.monthlyButton : plan.price.yearlyButton}
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
