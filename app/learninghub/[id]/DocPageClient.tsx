'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    ChevronDown,
    Rocket,
    Layout,
    Cloud,
    Users,
    Wrench,
    CreditCard,
    Folder,
    Bot,
    GitBranch,
    Zap,
    Database,
    Layers,
    Clock,
    FileText,
    CornerDownLeft,
    Menu
} from 'lucide-react';
import { data, getDocByLink, DocQuestion } from '@/components/learninghub/data';
import { docComponents } from '@/components/learninghub/Docs';
import Navbar from '@/components/site/Navbar';
import CTA from '@/components/site-new/CTA';
import Footer from '@/components/site/Footer';

const getCategoryIcon = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes('getting started')) return Rocket;
    if (lower.includes('building')) return Layout;
    if (lower.includes('deployment')) return Cloud;
    if (lower.includes('collaboration')) return Users;
    if (lower.includes('troubleshooting')) return Wrench;
    if (lower.includes('pricing')) return CreditCard;
    if (lower.includes('project management')) return Folder;
    if (lower.includes('agent')) return Bot;
    if (lower.includes('github')) return GitBranch;
    if (lower.includes('features')) return Zap;
    if (lower.includes('database')) return Database;
    return Layers;
};

const SidebarItem = ({ label, isActive, onClick }: { label: string; isActive?: boolean; onClick?: () => void }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-3 px-6 py-2 text-[12px] transition-all text-left w-full group
            ${isActive ? 'text-white font-bold bg-zinc-900/40 border-r-2 border-white' : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/20'}`}
    >
        <span className="truncate tracking-tight">{label}</span>
    </button>
);

const Sidebar = ({
    isOpen,
    activeDocLink,
    onSelectDoc,
    onClose
}: {
    isOpen: boolean;
    activeDocLink: string;
    onSelectDoc: (doc: DocQuestion) => void;
    onClose: () => void;
}) => {
    const [expandedCategories, setExpandedCategories] = useState<string[]>(data.map(c => c.category));

    const toggleCategory = (cat: string) => {
        setExpandedCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && <div onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden" />}
            </AnimatePresence>
            <aside className={`fixed top-20 left-0 bottom-0 w-[280px] bg-black border-r border-zinc-900 overflow-y-auto transition-transform z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 custom-scrollbar`}>
                <div className="flex flex-col py-8 text-zinc-500">
                    {data.map((category, idx) => {
                        const isExpanded = expandedCategories.includes(category.category);
                        const Icon = getCategoryIcon(category.category);

                        return (
                            <div key={idx} className="flex flex-col">
                                <button
                                    onClick={() => toggleCategory(category.category)}
                                    className="flex items-center justify-between w-full px-6 py-3 text-zinc-400 hover:text-white transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon size={14} className="text-zinc-600" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{category.category}</span>
                                    </div>
                                    <ChevronDown size={12} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                </button>

                                {isExpanded && (
                                    <div className="flex flex-col mb-4">
                                        {category.questions.map((q, qIdx) => (
                                            <SidebarItem
                                                key={qIdx}
                                                label={q.question.replace(/^How to /, '').replace(/\?$/, '')}
                                                isActive={activeDocLink === q.link}
                                                onClick={() => onSelectDoc(q)}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </aside>
        </>
    );
};

export default function DocPageClient() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;
    const contentRef = useRef<HTMLDivElement>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const docData = useMemo(() => {
        return getDocByLink(`/learninghub/${id}`);
    }, [id]);

    const ActiveDocComponent = docData?.doc?.docId ? docComponents[docData.doc.docId] : null;

    const handleSelectDoc = useCallback((doc: DocQuestion) => {
        const linkPath = doc.link.replace('/learninghub/', '');
        router.push(`/learninghub/${linkPath}`);
        setIsSidebarOpen(false);
    }, [router]);

    useEffect(() => { window.scrollTo(0, 0); }, [id]);

    if (!docData) return <div className="bg-black min-h-screen text-white flex items-center justify-center font-mono uppercase text-xs tracking-widest">Protocol error: 404 entry not found.</div>;

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <Navbar />

            {/* Mobile menu button */}
            <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden fixed top-20 left-4 z-40 bg-zinc-900 border border-zinc-800 rounded-lg p-2 text-zinc-400 hover:text-white transition-all"
            >
                <Menu size={20} />
            </button>

            <Sidebar
                isOpen={isSidebarOpen}
                activeDocLink={docData.doc.link}
                onSelectDoc={handleSelectDoc}
                onClose={() => setIsSidebarOpen(false)}
            />

            <main className="lg:ml-[280px] pt-24">
                <div className="max-w-4xl mx-auto px-8 py-20">
                    <div className="mb-20 border-l border-zinc-800 pl-8 py-2">
                        <div className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">{docData.category}</div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">{docData.doc.question}</h2>
                        <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl">{docData.doc.description}</p>
                    </div>

                    <div className="doc-content">
                        {ActiveDocComponent ? <ActiveDocComponent /> : <div className="text-zinc-800 font-mono text-xs uppercase tracking-[0.5em] py-20">Initialize stream...</div>}
                    </div>
                </div>
            </main>

            <div className="lg:ml-[280px]">
                <CTA />
                <Footer />
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar { display: none; }
                .doc-content h1 { font-size: 3.5rem; font-weight: 800; letter-spacing: -0.04em; margin-bottom: 2rem; color: white; }
                .doc-content h2 { font-size: 2rem; font-weight: 700; letter-spacing: -0.02em; margin-top: 4rem; margin-bottom: 1.5rem; border-top: 1px solid #1a1a1a; pt-8; color: white; }
                .doc-content p { color: #888; line-height: 1.8; margin-bottom: 1.5rem; font-size: 1.1rem; }
                .doc-content li { color: #888; position: relative; padding-left: 1.5rem; margin-bottom: 1rem; }
                .doc-content li::before { content: ''; position: absolute; left: 0; top: 0.7em; width: 4px; height: 1px; background: #fff; }
            `}</style>
        </div>
    );
}
