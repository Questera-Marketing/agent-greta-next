"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Twitter, Github } from "lucide-react";
import Link from "next/link";
import Silk from "@/components/Silk";

export default function CTA() {
    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* CTA Card with rounded corners and shadow */}
                    <div className="relative rounded-2xl overflow-hidden">
                        {/* Silk Background */} 
                        <div className="absolute inset-0 w-full h-full">
                            <Silk
                                speed={8.8}
                                scale={1.3}
                                color="#3b373e"
                                noiseIntensity={2.2}
                                rotation={0}
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 px-8 py-20 md:px-16 md:py-24 text-center">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-gray-300 mb-4 text-sm uppercase tracking-widest"
                            >
                                Start building today
                            </motion.p>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                            >
                                Ready to Turn Your Ideas <span className="block mt-2">Into Real Products?</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto"
                            >
                                Build Faster. Launch Smarter. Scale Confidently. Everything you need to ship — in one AI-powered workspace.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <Link
                                    href="https://greta.questera.ai/"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                                >
                                    <span>Start Building with Greta</span>
                                    <ArrowUpRight className="w-5 h-5" />
                                </Link>
                            </motion.div>

                            {/* <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-8 text-gray-500"
                            >
                                <div className="flex gap-6">
                                    <Link href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
                                    <Link href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></Link>
                                </div>
                                <span>support@questera.ai</span>
                            </motion.div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
