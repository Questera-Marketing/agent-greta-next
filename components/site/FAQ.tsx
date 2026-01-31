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
        <div className="border-b border-border py-6">
            <button
                className="w-full flex items-center justify-between text-left group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h4 className="text-lg font-bold group-hover:text-accent transition-colors">{question}</h4>
                <div className={`shrink-0 ml-4 w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all ${isOpen ? 'bg-accent border-accent text-white rotate-90' : 'text-muted'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                className="overflow-hidden"
            >
                <p className="pt-4 text-muted leading-relaxed">
                    {answer}
                </p>
            </motion.div>
        </div>
    );
};

const FAQ = () => {
    return (
        <section className="py-24 bg-card/10">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-accent font-bold tracking-widest text-xs uppercase mb-4">FAQ</h2>
                    <h3 className="text-4xl font-black">Common questions about Greta.</h3>
                </div>
                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
