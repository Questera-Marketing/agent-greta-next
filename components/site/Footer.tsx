'use client';

import React from 'react';
import Link from 'next/link';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="pt-48 pb-12 bg-black border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-10">
                            <Image 
                                src="/Gretanewlogo.svg" 
                                alt="Greta.sh Logo" 
                                width={90} 
                                height={25} 
                                className="invert brightness-[1.2]"
                            />
                        </Link>
                        <p className="text-zinc-500 text-xs leading-relaxed max-w-[180px]">
                            Specialized AI infrastructure for modern growth engineering.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-10">Platform</h4>
                        <ul className="space-y-4">
                            <li><Link href="#features" className="text-zinc-500 text-xs hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="#how-it-works" className="text-zinc-500 text-xs hover:text-white transition-colors">Workflow</Link></li>
                            <li><Link href="#pricing" className="text-zinc-500 text-xs hover:text-white transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-10">Resources</h4>
                        <ul className="space-y-4">
                            <li><Link href="/learninghub" className="text-zinc-500 text-xs hover:text-white transition-colors">Documentation</Link></li>
                            <li><Link href="/blog" className="text-zinc-500 text-xs hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-10">Social</h4>
                        <div className="flex gap-6 items-center">
                            <Link href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter size={16} /></Link>
                            <Link href="#" className="text-zinc-500 hover:text-white transition-colors"><Github size={16} /></Link>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-zinc-700 text-[10px] tracking-widest font-bold uppercase">
                        © {new Date().getFullYear()} Questera AI Protocol
                    </p>
                    <div className="text-[10px] font-bold tracking-widest text-zinc-700 uppercase">
                        STAY AUTONOMOUS
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
