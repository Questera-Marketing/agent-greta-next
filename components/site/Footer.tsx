'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Twitter, Github, Linkedin, Mail } from 'lucide-react';

import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="pt-24 pb-12 border-t border-border bg-card/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <Image 
                                src="/Gretanewlogo.svg" 
                                alt="Greta.sh Logo" 
                                width={80} 
                                height={24} 
                                className="h-6 w-auto invert dark:invert-0"
                            />
                        </Link>
                        <p className="text-muted text-sm leading-relaxed mb-8 max-w-xs">
                            The specialized AI agent for growth engineering. Build products that convert and scale from day zero.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="p-2 bg-muted/10 rounded-lg text-muted hover:text-accent transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-muted/10 rounded-lg text-muted hover:text-accent transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-muted/10 rounded-lg text-muted hover:text-accent transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><Link href="#features" className="text-muted text-sm hover:text-foreground transition-colors">Features</Link></li>
                            <li><Link href="#how-it-works" className="text-muted text-sm hover:text-foreground transition-colors">Workflow</Link></li>
                            <li><Link href="#pricing" className="text-muted text-sm hover:text-foreground transition-colors">Pricing</Link></li>
                            <li><Link href="https://greta.questera.ai" className="text-muted text-sm hover:text-foreground transition-colors">Launch App</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Resources</h4>
                        <ul className="space-y-4">
                            <li><Link href="/learninghub" className="text-muted text-sm hover:text-foreground transition-colors">Documentation</Link></li>
                            <li><Link href="/blog" className="text-muted text-sm hover:text-foreground transition-colors">Blog</Link></li>
                            <li><Link href="/learninghub/greta-community" className="text-muted text-sm hover:text-foreground transition-colors">Community</Link></li>
                            <li><Link href="/learninghub/marketplace" className="text-muted text-sm hover:text-foreground transition-colors">Marketplace</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><Link href="/learninghub/contact-support" className="text-muted text-sm hover:text-foreground transition-colors">Contact</Link></li>
                            <li><Link href="#" className="text-muted text-sm hover:text-foreground transition-colors">Status</Link></li>
                            <li><Link href="#" className="text-muted text-sm hover:text-foreground transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-muted text-sm hover:text-foreground transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-muted text-xs">
                        © {new Date().getFullYear()} Questera AI. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted">
                        <Mail className="w-4 h-4" />
                        hello@greta.sh
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
