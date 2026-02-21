
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Database, BarChart3, ArrowRight, Bot } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Discover & Analyze",
        description: "We audit your existing workflows, tools, and customer data to uncover inefficiencies and automation opportunities. Every system is mapped for clarity.",
    },
    {
        id: 2,
        title: "Build & Automate",
        description: "Our AI agents construct your custom application, connecting databases, setting up APIs, and generating the frontend interface automatically.",
    },
    {
        id: 3,
        title: "Scale & Optimize",
        description: "Launch your application and let our AI continuously monitor performance, suggesting optimizations and scaling resources as needed.",
    },
];

export default function Process() {
    const [activeStep, setActiveStep] = useState(1);

    return (
        <section id="how-it-works" className="py-24 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium uppercase tracking-wider text-gray-400">
                        Process
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Our Simple & <span className="font-serif italic text-gray-400">Smart Process</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Everything you need to collaborate, create, and scale, all in one place.
                    </p>
                </div>

                {/* Steps Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {steps.map((step) => (
                        <button
                            key={step.id}
                            onClick={() => setActiveStep(step.id)}
                            className={`cursor-pointer p-4 rounded-xl border transition-all text-left group ${activeStep === step.id
                                ? "bg-white/10 border-white/20"
                                : "bg-transparent border-white/5 hover:bg-white/5"
                                }`}
                        >
                            <span className={`text-xs font-bold uppercase tracking-wider mb-2 block ${activeStep === step.id ? "text-white" : "text-gray-500"
                                }`}>
                                Step {step.id}
                            </span>
                            <span className="font-medium text-sm text-gray-300 group-hover:text-white transition-colors">
                                {step.title}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Dynamic Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Visual Side */}
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative h-[400px] bg-[#0A0A0B] rounded-2xl border border-white/10 p-6 overflow-hidden flex items-center justify-center group"
                    >
                        {/* Background Blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                        {activeStep === 1 && (
                            <div className="relative w-full max-w-sm space-y-4">
                                <div className="flex gap-4">
                                    <div className="flex-1 bg-[#121214] p-4 rounded-xl border border-white/5">
                                        <p className="text-xs text-gray-500 mb-1">Customers</p>
                                        <p className="text-2xl font-bold">-32%</p>
                                        <div className="h-8 mt-2 opacity-50"><WaveGraphic /></div>
                                    </div>
                                    <div className="flex-1 bg-[#121214] p-4 rounded-xl border border-white/5">
                                        <p className="text-xs text-gray-500 mb-1">Cost Mgmt</p>
                                        <p className="text-2xl font-bold">-54%</p>
                                        <div className="h-8 mt-2 opacity-50"><WaveGraphic /></div>
                                    </div>
                                </div>
                                <div className="bg-[#121214] p-4 rounded-xl border border-white/5">
                                    <p className="text-xs text-gray-500 mb-3">Weakest Systems</p>
                                    <div className="space-y-3">
                                        <SystemRow icon={BarChart3} name="Marketing & ads" score="32%" />
                                        <SystemRow icon={Database} name="AI Automation" score="14%" />
                                        <SystemRow icon={Search} name="Money & Finance" score="44%" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeStep === 2 && (
                            <div className="relative w-full max-w-sm flex items-center justify-center">
                                <div className="animate-[spin_10s_linear_infinite] absolute inset-0 rounded-full border border-dashed border-white/20" />
                                <div className="bg-white/10 p-8 rounded-full backdrop-blur-md border border-white/20 relative z-10">
                                    <Bot className="w-12 h-12 text-white" />
                                </div>
                                <div className="absolute top-4 right-10 bg-[#121214] px-3 py-1 rounded-full text-xs border border-white/10 animate-bounce">
                                    Backend Generated
                                </div>
                                <div className="absolute bottom-10 left-4 bg-[#121214] px-3 py-1 rounded-full text-xs border border-white/10 animate-pulse">
                                    Connecting API...
                                </div>
                            </div>
                        )}

                        {activeStep === 3 && (
                            <div className="relative w-full max-w-sm">
                                <div className="bg-[#121214] p-6 rounded-xl border border-white/5">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-sm font-medium">System Optimized</span>
                                        </div>
                                        <span className="text-xs text-gray-500">Just now</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-2 bg-linear-to-r from-blue-500 to-purple-500 rounded-full w-full" />
                                        <div className="h-2 bg-white/10 rounded-full w-3/4" />
                                        <div className="h-2 bg-white/10 rounded-full w-5/6" />
                                    </div>
                                    <div className="mt-6 flex justify-end">
                                        <button className="cursor-pointer text-xs bg-white text-black px-3 py-1.5 rounded-lg font-medium flex items-center gap-1">
                                            View Report <ArrowRight className="w-3 h-3" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Text Side */}
                    <div className="space-y-6">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="text-8xl font-bold text-white/5 mb-4">
                                0{activeStep}
                            </div>
                            <h3 className="text-3xl font-bold mb-4">
                                {steps.find(s => s.id === activeStep)?.title}
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {steps.find(s => s.id === activeStep)?.description}
                            </p>
                        </motion.div>

                        <button className="cursor-pointer text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors">
                            Learn more about our process
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WaveGraphic() {
    return (
        <svg viewBox="0 0 100 20" className="w-full h-full fill-none stroke-current text-gray-500">
            <path d="M0 10 C 20 0 40 0 50 10 C 60 20 80 20 100 10" vectorEffect="non-scaling-stroke" strokeWidth="2" />
        </svg>
    );
}

function SystemRow({ icon: Icon, name, score }: { icon: any, name: string, score: string }) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-gray-400" />
                </div>
                <span className="text-sm text-gray-300">{name}</span>
            </div>
            <div className="flex items-center gap-2 w-24">
                <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-white/30" style={{ width: score }} />
                </div>
                <span className="text-xs text-gray-500 font-mono w-8 text-right">{score}</span>
            </div>
        </div>
    );
}
