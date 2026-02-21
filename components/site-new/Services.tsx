"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, Layers, BarChart3, Cpu, PenLine, Wand2, Eye, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ReactLogo, NodeJSLogo, ExpressLogo, MongoDBLogo, GitHubLogo, StripeLogo, SupabaseLogo } from "./Integrations";
import g_icon from "@/assets/g_logo.svg"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15
        }
    }
};

export default function Services() {
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
                <div className="text-center mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-violet-500/10 to-blue-500/10 border border-white/10 text-xs font-semibold uppercase tracking-widest text-violet-300"
                    >
                        <Sparkles className="w-3 h-3" />
                        Core Capabilities
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold tracking-tight"
                    >
                        This Isn't Just AI.{" "}
                        <span className="bg-linear-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            This Is Your New Dev Team
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Greta comes loaded with everything a senior developer would build — except it's all done for you, automatically, in seconds.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {/* Card 1: Instant App Generation - Stack with Mouse Cursor */}
                    <motion.div
                        variants={cardVariants}
                        // whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                        className="group relative p-8 rounded-3xl bg-[#09090B] border border-white/8 shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-500 min-h-105 flex flex-col justify-between overflow-hidden"
                    >
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl" />
                        </div>

                        {/* Animated Stack Loader */}
                        <div className="relative h-48 mb-6 flex flex-col justify-center">
                            <AnimatedStackLoader />
                        </div>

                        <div className="relative z-10">
                            <div className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2">Instant</div>
                            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-violet-200 transition-colors">
                                Describe It. Ship It. Done.
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                No scaffolding. No boilerplate. Just type what you want to build and Greta hands you a fully working, production-ready app — clean code, real UI, zero waiting.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2: Full-Stack Architecture (Large) - Integration Hub */}
                    <motion.div
                        variants={cardVariants}
                        // whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                        className="group col-span-1 lg:col-span-2 relative p-6 md:p-8 rounded-3xl bg-[#09090B] border border-white/8 shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-500 min-h-95 flex flex-col overflow-hidden"
                    >
                        {/* Subtle background gradient */}
                        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0A0A0D]/80" />

                        {/* Hover glow effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute top-0 right-0 w-60 h-40 bg-blue-500/20 rounded-full blur-3xl" />
                        </div>

                        {/* Integration Hub - Center Greta with surrounding icons */}
                        <div className="relative z-10 w-full flex items-center justify-center py-4">
                            <div className="relative w-full h-56">
                                {/* Center Glowing Circle */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                                >
                                    <div className="relative">
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.3, 0.5, 0.3]
                                            }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                            className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl"
                                        />
                                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#12121A] border border-white/10 flex items-center justify-center shadow-2xl relative z-10">
                                            {/* <Sparkles className="w-10 h-10 text-white" /> */}
                                            <Image src={g_icon} alt="Greta Logo" width={40} height={40} />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Integration Icons Grid matching the image */}
                                <IntegrationIconBox icon={<ReactLogo className="w-5 h-5" />} position="top-[15%] left-[10%]" delay={0.1} />
                                <IntegrationIconBox icon={<NodeJSLogo className="w-5 h-5" />} position="top-[5%] left-[45%]" delay={0.2} />
                                <IntegrationIconBox icon={<SupabaseLogo className="w-5 h-5" />} position="top-[20%] right-[15%]" delay={0.3} />

                                <IntegrationIconBox icon={<MongoDBLogo className="w-5 h-5" />} position="top-[55%] left-[5%]" delay={0.4} />
                                <IntegrationIconBox icon={<StripeLogo className="w-5 h-5" />} position="top-[40%] right-[5%]" delay={0.5} />

                                <IntegrationIconBox icon={<GitHubLogo className="w-5 h-5" />} position="bottom-[15%] left-[30%]" delay={0.6} />
                                <IntegrationIconBox icon={<ExpressLogo className="w-5 h-5" />} position="bottom-[10%] right-[20%]" delay={0.7} />
                            </div>
                        </div>

                        <div className="relative z-10 mt-auto pt-4">
                            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">Full Stack</div>
                            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-200 transition-colors">
                                Frontend. Backend. All Wired Up.
                            </h3>
                            <p className="text-gray-400 text-sm max-w-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                                Greta doesn't stop at the surface. It builds your entire stack — APIs, business logic, database connections — all talking to each other from day one. You just show up and build.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: Smart Analytics */}
                    <motion.div
                        variants={cardVariants}
                        // whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                        className="group relative p-8 rounded-3xl bg-[#09090B] border border-white/8 shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-500 min-h-95 flex flex-col justify-between overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
                        </div>

                        <div className="mb-6 relative z-10">
                            <div className="bg-linear-to-br from-[#121218] to-[#15151B] p-5 rounded-2xl border border-white/6 shadow-lg shadow-black/20">
                                <div className="flex items-end gap-3 h-28 pb-3 border-b border-white/6 px-1">
                                    {[35, 65, 45, 85, 55, 75, 90].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0, opacity: 0 }}
                                            whileInView={{ height: `${h}%`, opacity: 1 }}
                                            transition={{
                                                duration: 0.1,
                                                delay: i * 0.01,
                                                type: "spring",
                                                stiffness: 100
                                            }}
                                            className="flex-1 rounded-t-md relative group/bar cursor-pointer"
                                            style={{
                                                background: `linear-gradient(to top, rgba(34, 211, 238, 0.4), rgba(34, 211, 238, 0.1))`
                                            }}
                                            whileHover={{
                                                background: `linear-gradient(to top, rgba(34, 211, 238, 0.6), rgba(34, 211, 238, 0.2))`,
                                                scale: 1.05
                                            }}
                                        >
                                            <motion.div
                                                className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-medium px-2 py-1 rounded-md opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap"
                                            >
                                                {h}%
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-3 px-1">
                                    <span>MON</span>
                                    <span>SUN</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">Insights</div>
                            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-200 transition-colors">
                                Know What's Working. Fix What's Not.
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                No third-party dashboards to stitch together. Greta tracks usage, performance, and user behavior right inside your app — giving you clarity without the complexity.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 4: Text-to-Code Engine */}
                    <motion.div
                        variants={cardVariants}
                        // whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                        className="group relative p-8 rounded-3xl bg-[#09090B] border border-white/8 shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-500 min-h-95 flex flex-col justify-between overflow-hidden"
                    >
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl" />
                        </div>

                        <div className="mb-6 relative z-10">
                            <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-[#121218] to-[#15151B] border border-white/6 shadow-lg shadow-black/20">
                                {/* Window controls */}
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/6">
                                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                                    <span className="ml-3 text-[10px] text-gray-500 font-mono">greta.config.ts</span>
                                </div>
                                <div className="p-4">
                                    <TypewriterCode />
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">Speed</div>
                            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-amber-200 transition-colors">
                                Code That's Fast. And Gets Faster.
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                Greta's code engine doesn't just generate — it optimizes as it goes. Leaner logic, faster load times, fewer bugs. Every output is built to perform, not just to run.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 5: Auto-Scaling Infrastructure */}
                    <motion.div
                        variants={cardVariants}
                        // whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                        className="group relative p-8 rounded-3xl bg-[#09090B] border border-white/8 shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-500 min-h-95 flex flex-col justify-between overflow-hidden"
                    >
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
                        </div>

                        {/* Animated gradient background */}
                        <motion.div
                            animate={{
                                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 opacity-20 bg-linear-to-br from-purple-600/30 via-transparent to-pink-600/30 bg-size-[200%_200%]"
                        />

                        {/* AI Strategy Nodes Visualization matching the last card in the image */}
                        <div className="mb-6 relative z-10 flex-1 flex items-center justify-center">
                            <div className="relative w-full h-48">
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                                    <motion.line
                                        x1="28%" y1="35%" x2="72%" y2="52%"
                                        stroke="white" strokeWidth="1"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 1 }}
                                    />
                                    <motion.line
                                        x1="32%" y1="78%" x2="72%" y2="52%"
                                        stroke="white" strokeWidth="1"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                    />
                                </svg>

                                {/* Nodes */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    className="absolute top-[20%] left-[20%] w-16 h-16 rounded-full bg-[#12121A] border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-sm"
                                >
                                    <BarChart3 className="w-8 h-8 text-white/70" />
                                </motion.div>

                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute bottom-[10%] left-[28%] w-16 h-16 rounded-full bg-[#12121A] border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-sm"
                                >
                                    <Layers className="w-8 h-8 text-white/70" />
                                </motion.div>

                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute top-[35%] right-[15%] w-24 h-24 rounded-full bg-[#12121A] border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-sm"
                                >
                                    <div className="relative">
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="absolute inset-0 bg-white/10 rounded-full blur-xl"
                                        />
                                        <Image src={g_icon} alt="Greta Logo" width={40} height={40} />
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">Scale</div>
                            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-200 transition-colors">
                                Built for 10 Users. Ready for 10 Million.
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                When your app takes off, Greta's infrastructure scales with it — automatically, silently, without you lifting a finger. You focus on growth. We handle the load.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function TypewriterCode() {
    const codeLines = [
        { text: "const", color: "text-purple-400" },
        { text: " app = ", color: "text-white/80" },
        { text: "new", color: "text-purple-400" },
        { text: " Greta", color: "text-amber-400" },
        { text: "();", color: "text-white/80" },
    ];

    const line2 = [
        { text: "await", color: "text-purple-400" },
        { text: " app.", color: "text-white/80" },
        { text: "generate", color: "text-blue-400" },
        { text: "({", color: "text-white/80" },
    ];

    const lines = [
        { num: 1, content: codeLines },
        { num: 2, content: line2 },
        { num: 3, content: [{ text: "  type: ", color: "text-cyan-400" }, { text: "'saas_platform'", color: "text-emerald-400" }, { text: ",", color: "text-white/80" }] },
        { num: 4, content: [{ text: "  theme: ", color: "text-cyan-400" }, { text: "'dark'", color: "text-emerald-400" }] },
        { num: 5, content: [{ text: "});", color: "text-white/80" }] },
    ];

    return (
        <div className="font-mono text-xs leading-relaxed">
            {lines.map((line, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                    className="flex"
                >
                    <span className="text-gray-600 w-6 select-none">{line.num}</span>
                    <span>
                        {line.content.map((part, j) => (
                            <span key={j} className={part.color}>{part.text}</span>
                        ))}
                    </span>
                </motion.div>
            ))}
            <motion.div className="flex items-center mt-1">
                <span className="text-gray-600 w-6 select-none">6</span>
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-amber-400/80 rounded-sm"
                />
            </motion.div>
        </div>
    );
}

function IntegrationIconBox({ icon, position, delay }: { icon: React.ReactNode; position: string; delay: number }) {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay, type: "spring", stiffness: 200 }}
            className={`absolute ${position} z-10`}
        >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#12121A] border border-white/5 shadow-2xl flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300 cursor-pointer">
                {icon}
            </div>
        </motion.div>
    );
}

function AnimatedStackLoader() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { icon: PenLine, label: "Prompt" },
        { icon: Wand2, label: "Generate" },
        { icon: Eye, label: "Preview" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [steps.length]);

    return (
        <div className="flex flex-col gap-3">
            {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;
                const isComplete = index < activeStep;
                const isPending = index > activeStep;

                return (
                    <motion.div
                        key={step.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                            opacity: isPending ? 0.4 : 1,
                            x: 0,
                            y: isPending ? 4 : 0,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: index * 0.1,
                        }}
                        className={`bg-[#12121A] border ${isActive ? 'border-violet-500/40' : 'border-white/5'} p-4 rounded-xl flex items-center justify-between shadow-lg transition-all duration-300`}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg ${isActive ? 'bg-violet-500/20' : 'bg-white/5'} flex items-center justify-center transition-colors duration-300`}>
                                <Icon className={`w-4 h-4 ${isActive ? 'text-violet-400' : isComplete ? 'text-emerald-400' : 'text-white/70'}`} />
                            </div>
                            <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-white/70'}`}>
                                {step.label}
                            </span>
                        </div>
                        <div className="w-5 h-5 flex items-center justify-center">
                            {isActive && (
                                <Loader2 className="w-4 h-4 text-violet-400 animate-spin" />
                            )}
                            {isComplete && (
                                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-emerald-400" />
                                </div>
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
