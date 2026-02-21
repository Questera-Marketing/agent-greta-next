'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Blog', href: '/blog' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Learning Hub', href: '/learninghub' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
                scrolled
                    ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-3'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <motion.div
                        whileHover={{ opacity: 0.8 }}
                    >
                        <Image 
                            src="/Gretanewlogo.svg" 
                            alt="Greta.sh Logo" 
                            width={110} 
                            height={35} 
                            className="h-9 w-auto invert dark:invert-0 brightness-[1.2]"
                        />
                    </motion.div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors flex items-center gap-2"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="https://greta.questera.ai"
                        target="_blank"
                        className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-zinc-200 transition-all active:scale-95"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        className="md:hidden absolute top-0 left-0 w-full h-screen bg-black z-40 flex flex-col items-center justify-center gap-10"
                    >
                         <button
                            className="absolute top-6 right-6 text-white p-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-bold tracking-tighter text-zinc-500 hover:text-white transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
