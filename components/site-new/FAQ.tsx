"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle, HelpCircle, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const faqs = [
    {
        question: "Do I need to know how to code to use Greta?",
        answer: "Not at all. Greta is built for everyone — founders, designers, marketers, and developers alike. If you can describe what you want, Greta can build it."
    },
    {
        question: "What exactly can I build with Greta?",
        answer: "You can build full-stack websites and applications — including frontend UI, backend logic, authentication, database integrations, payments, analytics, and deployment workflows. From landing pages to SaaS tools, dashboards, marketplaces, and internal tools — Greta handles the heavy lifting."
    },
    {
        question: "Is my project actually scalable or just a demo?",
        answer: "It's the real deal. With Supabase for your backend, Stripe for payments, and auto-scaling infrastructure — everything Greta builds is production-ready from day one."
    },
    {
        question: "How is Greta different from other AI builders?",
        answer: "Most AI tools stop at the UI. Greta goes all the way — real deployment, full-stack architecture, team collaboration, version control, and native integrations. You don't just get a prototype. You get a product."
    },
    {
        question: "Can I collaborate with my team on Greta?",
        answer: "Yes. Invite teammates, assign roles, control who edits what, and manage access — all while keeping full ownership of your project. Built for solo builders and growing teams alike."
    },
    {
        question: "What if I get stuck while building?",
        answer: "Greta offers support resources, a learning hub, and a responsive team to help you move forward quickly."
    },
    {
        question: "How long does it take to build and launch an app?",
        answer: "Most users go from idea to live product in hours — not weeks. Describe what you want, let Greta build it, and deploy with one click. That's it."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-black text-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6"
                    >
                        <HelpCircle className="w-4 h-4" />
                        <span>FAQ'S</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-4 font-serif"
                    >
                        Good Questions. <span className="italic font-normal text-gray-400">Straight Answers.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Everything you need to know about building with Greta
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Contact Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center h-full flex flex-col items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50 pointer-events-none" />

                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <HelpCircle className="w-8 h-8 text-gray-300" />
                            </div>

                            <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
                            <p className="text-gray-400 mb-8 max-w-xs mx-auto">
                                Still have questions? Feel free to get in touch with us today!
                            </p>

                            <Link
                                href="mailto:ashmit@questera.ai"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all hover:scale-105"
                            >
                                <span>Ask A Question</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Accordion */}
                    <div className="lg:col-span-2 space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={`border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${openIndex === index
                                    ? 'bg-white/10 border-white/20'
                                    : 'bg-white/5 border-white/10 hover:border-white/20'
                                    }`}
                            >
                                <div className="p-6 flex items-center justify-between gap-4">
                                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                                    <div className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
