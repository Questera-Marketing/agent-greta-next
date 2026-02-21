
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-4 pt-20">
            {/* Background Gradient Orbs */}
            <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-2 mb-8"
                >
                    <div className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-gray-300 backdrop-blur-md">
                        ✨ New Gen AI App Builder
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
                >
                    <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/60">
                        Build Smarter.
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/60">
                        Ship Faster.
                    </span>{" "}
                    <span className="font-serif italic text-gray-400">With Greta AI.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                >
                    Describe your idea. Greta writes the frontend, backend, database, and integrations — instantly.
                    From concept to live product in minutes. No code required. No setup stress. Just build.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                >
                    <Link href="https://greta.questera.ai/" target="_blank" className="cursor-pointer group relative px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                        Start Building for Free
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>

                    <Link href="https://www.youtube.com/playlist?list=PL5wRj64cBUgw8k6bm1NVOE7ADLIoXxkEl" target="_blank" className="cursor-pointer px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
                        See How It Works
                    </Link>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-sm"
                >
                    {/* <div className="w-px h-12 bg-linear-to-b from-transparent via-gray-500 to-transparent"></div> */}
                </motion.div>
            </div>
        </section>
    );
}
