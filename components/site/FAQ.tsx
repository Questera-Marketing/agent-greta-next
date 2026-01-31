'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What exactly is 'Vibe Coding'?",
        answer: "Vibe coding is a revolutionary way to build software where you describe your intent, and Greta translates that 'vibe' into production-ready growth patterns. It's about moving from idea to execution without getting bogged down in boilerplate code."
    },
    {
        question: "How is Greta different from general AI engineers like Lovable or Bolt?",
        answer: "While general tools are great for building standard apps, Greta is specialized for Growth Engineering. She comes pre-configured with knowledge of conversion optimization, analytics integration, and user engagement loops powered by the Questera ecosystem."
    },
    {
        question: "Does Greta integrate with my existing tech stack?",
        answer: "Yes. Greta supports seamless integration with GitHub, Netlify, Supabase, Stripe, and Google Analytics. You can export your code at any time or sync it directly to your repositories."
    },
    {
        question: "Can I customize the code Greta generates?",
        answer: "Absolutely. Greta provides a full VS-Code style editor and a visual text/style editor, allowing you to fine-tune every pixel and every line of code as needed."
    }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="border-b border-zinc-900/50 py-8 first:border-t">
            <button
                className="w-full flex items-center justify-between text-left group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">{question}</h4>
                <div className={`shrink-0 ml-4 w-6 h-6 flex items-center justify-center transition-all ${isOpen ? 'text-white' : 'text-zinc-600'}`}>
                    {isOpen ? <Minus size={14} strokeWidth={1.5} /> : <Plus size={14} strokeWidth={1.5} />}
                </div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                className="overflow-hidden"
            >
                <p className="pt-6 text-zinc-500 text-[13px] leading-relaxed max-w-2xl font-medium">
                    {answer}
                </p>
            </motion.div>
        </div>
    );
};

const FAQ = () => {
    return (
        <section className="py-48 bg-black">
            <div className="max-w-4xl mx-auto px-8">
                <div className="mb-24 border-l border-zinc-900 pl-10">
                    <h2 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Support Protocol</h2>
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">Frequently Asked <br />Questions.</h3>
                </div>
                <div className="space-y-0">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
