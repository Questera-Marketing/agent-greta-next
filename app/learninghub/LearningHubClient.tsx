'use client';

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    ChevronRight,
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
    FileText,
    Clock,
    CornerDownLeft,
    Sparkles
} from 'lucide-react';
import { data, DocQuestion } from '@/components/learninghub/data';
import { docComponents } from '@/components/learninghub/Docs';

// Minimal TopBar
const TopBar = ({ onOpenSearch }: { onOpenSearch: () => void }) => {
    const router = useRouter();

    return (
        <div className="h-[64px] border-b border-zinc-900 flex items-center justify-between px-8 bg-black fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center gap-4">
                <div className="cursor-pointer" onClick={() => router.push("/")}>
                    <Image alt="Greta Logo" width={90} height={25} src="/Gretanewlogo.svg" className="invert brightness-[1.2]" />
                </div>
            </div>

            <div className="flex-1 max-w-xl mx-12 hidden md:flex items-center gap-3">
                <div 
                    onClick={onOpenSearch}
                    className="w-full bg-zinc-900/50 border border-zinc-900 rounded-lg py-2 pl-4 pr-12 text-[12px] text-zinc-400 font-bold uppercase tracking-widest cursor-pointer hover:bg-zinc-800 transition-all flex items-center gap-3"
                >
                    <Search size={14} className="text-zinc-600" />
                    <span>Search Documentation...</span>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <kbd className="text-[10px] text-zinc-600 font-mono tracking-normal capitalize">⌘K</kbd>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white cursor-pointer transition-all" onClick={() => window.open("https://discord.com/invite/vGjWMnBmtN", "_blank")}>Community</span>
                <button onClick={() => window.open("https://greta.questera.ai/home", "_blank")} className="bg-white text-black px-6 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all">Launch App</button>
            </div>
        </div>
    );
};

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
        className={`flex items-center gap-3 px-4 py-2 text-[12px] transition-all text-left w-full group
            ${isActive ? 'text-white font-bold bg-zinc-900/50 border-r-2 border-white' : 'text-zinc-500 hover:text-zinc-300'}`}
    >
        <span className="truncate tracking-tight">{label}</span>
    </button>
);

const Sidebar = ({
    isOpen,
    activeCategory,
    activeDocLink,
    onSelectDoc
}: {
    isOpen: boolean;
    activeCategory: string;
    activeDocLink: string;
    onSelectDoc: (category: string, doc: DocQuestion) => void;
}) => {
    const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

    useEffect(() => {
        if (activeCategory && !expandedCategories.includes(activeCategory)) {
            setExpandedCategories(prev => [...prev, activeCategory]);
        }
    }, [activeCategory, expandedCategories]);

    const toggleCategory = (cat: string) => {
        setExpandedCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    return (
        <aside className={`fixed top-[64px] left-0 bottom-0 w-[280px] bg-black border-r border-zinc-900 overflow-y-auto transition-transform z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 custom-scrollbar`}>
            <div className="flex flex-col py-8">
                {data.map((category, idx) => {
                    const isExpanded = expandedCategories.includes(category.category);
                    const isActiveGroup = category.category === activeCategory;
                    const Icon = getCategoryIcon(category.category);

                    return (
                        <div key={idx} className="flex flex-col">
                            <button
                                onClick={() => toggleCategory(category.category)}
                                className={`flex items-center justify-between w-full px-6 py-3 transition-all ${isActiveGroup ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon size={14} strokeWidth={isActiveGroup ? 2 : 1.5} />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{category.category}</span>
                                </div>
                                <ChevronDown size={12} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                            </button>

                            {isExpanded && (
                                <div className="flex flex-col mb-4">
                                    {category.questions.map((q, qIdx) => (
                                        <SidebarItem
                                            key={qIdx}
                                            label={q.question.replace(/^How to /, '').replace(/\?$/, '')}
                                            isActive={activeDocLink === q.link}
                                            onClick={() => onSelectDoc(category.category, q)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </aside>
    );
};

// Search Modal
const SearchModal = ({ isOpen, onClose, onSelectDoc }: { isOpen: boolean; onClose: () => void; onSelectDoc: (category: string, doc: DocQuestion) => void; }) => {
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredDocs = useMemo(() => {
        const all = data.flatMap(cat => cat.questions.map(q => ({ ...q, category: cat.category })));
        if (!query) return all.slice(0, 5);
        return all.filter(d => d.question.toLowerCase().includes(query.toLowerCase())).slice(0, 8);
    }, [query]);

    useEffect(() => { if (isOpen) inputRef.current?.focus(); }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-start justify-center pt-[15vh]" onClick={onClose}>
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-xl bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                        <div className="p-6 border-b border-zinc-900 flex items-center gap-4">
                            <Search size={18} className="text-zinc-600" />
                            <input ref={inputRef} type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="What are you looking for?" className="flex-1 bg-transparent text-white text-lg focus:outline-none placeholder:text-zinc-800" />
                        </div>
                        <div className="max-h-[400px] overflow-y-auto">
                            {filteredDocs.map((doc, idx) => (
                                <button key={idx} onClick={() => { onSelectDoc(doc.category, doc); onClose(); }} className="w-full text-left p-6 hover:bg-zinc-900 transition-all border-b border-zinc-900 last:border-0 group">
                                    <div className="text-white font-bold text-sm mb-1 group-hover:text-white transition-colors">{doc.question}</div>
                                    <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">{doc.category}</div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default function LearningHubClient() {
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');

    const activeDoc = useMemo(() => {
        return data[0].questions[0];
    }, []);

    const handleSelectDoc = useCallback((category: string, doc: DocQuestion) => {
        const linkPath = doc.link.replace('/learninghub/', '');
        router.push(`/learninghub/${linkPath}`);
    }, [router]);

    const ActiveDocComponent = activeDoc?.docId ? docComponents[activeDoc.docId] : null;

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <TopBar onOpenSearch={() => setIsSearchOpen(true)} />
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onSelectDoc={handleSelectDoc} />

            <Sidebar isOpen={isSidebarOpen} activeCategory={data[0].category} activeDocLink={activeDoc?.link} onSelectDoc={handleSelectDoc} />

            <main className="lg:ml-[280px] pt-[64px]">
                <div className="max-w-4xl mx-auto px-8 py-20">
                    <div className="mb-20 border-l border-zinc-800 pl-8 py-2">
                        <div className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Protocol Documentation</div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">Expert growth engineering, distilled.</h2>
                        <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl">{activeDoc?.description}</p>
                    </div>

                    <div className="doc-content">
                        {ActiveDocComponent ? <ActiveDocComponent /> : <div className="text-zinc-800 font-mono text-xs uppercase tracking-[0.5em] py-20">Initialize stream...</div>}
                    </div>
                </div>
            </main>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar { display: none; }
                .doc-content h1 { font-size: 3.5rem; font-weight: 800; tracking: -0.04em; margin-bottom: 2rem; }
                .doc-content h2 { font-size: 2rem; font-weight: 700; tracking: -0.02em; margin-top: 4rem; margin-bottom: 1.5rem; border-top: 1px solid #1a1a1a; pt-8 }
                .doc-content p { color: #888; line-height: 1.8; margin-bottom: 1.5rem; font-size: 1.1rem; }
                .doc-content li { color: #888; position: relative; padding-left: 1.5rem; margin-bottom: 1rem; }
                .doc-content li::before { content: ''; position: absolute; left: 0; top: 0.7em; width: 4px; height: 1px; background: #fff; }
            `}</style>
        </div>
    );
}
