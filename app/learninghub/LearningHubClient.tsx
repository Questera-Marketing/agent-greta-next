'use client';

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
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
    Menu,
    X
} from 'lucide-react';
import { data, DocQuestion, getDocByLink } from '@/components/learninghub/data';
import { docComponents } from '@/components/learninghub/Docs';

// Minimal TopBar
const TopBar = ({ onOpenSearch, onToggleMobileMenu }: { onOpenSearch: () => void, onToggleMobileMenu: () => void }) => {
    const router = useRouter();

    return (
        <div className="h-[64px] border-b border-zinc-900 flex items-center justify-between px-6 bg-black fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center gap-4">
                <button onClick={onToggleMobileMenu} className="lg:hidden text-zinc-400">
                    <Menu size={20} />
                </button>
                <div className="cursor-pointer" onClick={() => router.push("/")}>
                    <motion.div whileHover={{ opacity: 0.8 }}>
                        <Image 
                            alt="Greta Logo" 
                            width={90} 
                            height={25} 
                            src="/Gretanewlogo.svg" 
                            className="invert dark:invert-0 brightness-[1.5]" 
                        />
                    </motion.div>
                </div>
            </div>

            <div className="flex-1 max-w-xl mx-12 hidden md:flex items-center gap-3 relative group">
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
                <span className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white cursor-pointer transition-all" onClick={() => window.open("https://discord.com/invite/vGjWMnBmtN", "_blank")}>Community</span>
                <button onClick={() => window.open("https://greta.questera.ai/registration", "_blank")} className="bg-white text-black px-6 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all">Get Started</button>
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
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden"
                    />
                )}
            </AnimatePresence>
            <aside className={`fixed top-[64px] left-0 bottom-0 w-[300px] bg-black border-r border-zinc-900 overflow-y-auto transition-transform duration-300 z-[60] ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 custom-scrollbar`}>
                <div className="flex flex-col py-8">
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

                                <AnimatePresence initial={false}>
                                    {isExpanded && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden flex flex-col mb-4"
                                        >
                                            {category.questions.map((q, qIdx) => (
                                                <SidebarItem
                                                    key={qIdx}
                                                    label={q.question.replace(/^How to /, '').replace(/\?$/, '')}
                                                    isActive={activeDocLink === q.link}
                                                    onClick={() => onSelectDoc(q)}
                                                />
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </aside>
        </>
    );
};

// Search Modal
const SearchModal = ({ isOpen, onClose, onSelectDoc }: { isOpen: boolean; onClose: () => void; onSelectDoc: (doc: DocQuestion) => void; }) => {
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredDocs = useMemo(() => {
        const all = data.flatMap(cat => cat.questions);
        if (!query) return all.slice(0, 5);
        return all.filter(d => d.question.toLowerCase().includes(query.toLowerCase())).slice(0, 8);
    }, [query]);

    useEffect(() => { if (isOpen) setTimeout(() => inputRef.current?.focus(), 100); }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-start justify-center pt-[15vh] px-4" onClick={onClose}>
                    <motion.div initial={{ opacity: 0, y: -20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.95 }} className="w-full max-w-xl bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                        <div className="p-6 border-b border-zinc-900 flex items-center gap-4">
                            <Search size={18} className="text-zinc-600" />
                            <input ref={inputRef} type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="What are you looking for?" className="flex-1 bg-transparent text-white text-lg focus:outline-none placeholder:text-zinc-800" />
                            <kbd className="hidden sm:block text-[10px] text-zinc-600 bg-zinc-900 px-2 py-1 rounded border border-zinc-800 uppercase tracking-widest font-bold">ESC</kbd>
                        </div>
                        <div className="max-h-[400px] overflow-y-auto">
                            {filteredDocs.map((doc, idx) => (
                                <button key={idx} onClick={() => { onSelectDoc(doc); onClose(); }} className="w-full text-left p-6 hover:bg-zinc-900 transition-all border-b border-zinc-900 last:border-0 group">
                                    <div className="text-white font-bold text-sm mb-1 group-hover:text-white transition-colors">{doc.question}</div>
                                    <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">Protocol Doc</div>
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
    const params = useParams();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Dynamic Doc Selection based on URL
    const activeDoc = useMemo(() => {
        const id = params?.id as string;
        if (!id) return data[0].questions[0];
        const link = `/learninghub/${id}`;
        return getDocByLink(link)?.doc || data[0].questions[0];
    }, [params]);

    const handleSelectDoc = useCallback((doc: DocQuestion) => {
        const linkPath = doc.link.replace('/learninghub/', '');
        router.push(`/learninghub/${linkPath}`);
        setIsSidebarOpen(false);
    }, [router]);

    const ActiveDocComponent = activeDoc?.docId ? docComponents[activeDoc.docId] : null;

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [activeDoc]);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <TopBar onOpenSearch={() => setIsSearchOpen(true)} onToggleMobileMenu={() => setIsSidebarOpen(true)} />
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onSelectDoc={handleSelectDoc} />

            <Sidebar 
                isOpen={isSidebarOpen} 
                activeDocLink={activeDoc?.link || ''} 
                onSelectDoc={handleSelectDoc}
                onClose={() => setIsSidebarOpen(false)}
            />

            <main className="lg:ml-[300px] pt-[64px]">
                <div className="max-w-4xl mx-auto px-6 py-20 lg:px-12">
                    <div className="mb-24 border-l border-zinc-900 pl-8 lg:pl-12 py-2">
                        <div className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Protocol Configuration</div>
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-8">{activeDoc?.question}</h2>
                        <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-3xl">{activeDoc?.description}</p>
                    </div>

                    <article className="doc-content">
                        {ActiveDocComponent ? <ActiveDocComponent /> : <div className="text-zinc-800 font-mono text-xs uppercase tracking-[0.5em] py-20">Initialize stream...</div>}
                    </article>
                    
                    <div className="mt-48 pt-12 border-t border-zinc-900 flex justify-between items-center text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
                        <span>End of Protocol Log</span>
                        <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="cursor-pointer hover:text-white transition-colors">↑ Back to Top</div>
                    </div>
                </div>
            </main>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar { display: none; }
                .doc-content h1 { font-size: 3rem; font-weight: 800; letter-spacing: -0.04em; margin-bottom: 2rem; color: white; }
                .doc-content h2 { font-size: 1.5rem; font-weight: 700; letter-spacing: -0.02em; margin-top: 5rem; margin-bottom: 1.5rem; color: white; border-top: 1px solid #111; padding-top: 2rem; }
                .doc-content p { color: #888; line-height: 1.8; margin-bottom: 1.5rem; font-size: 1rem; }
                .doc-content li { color: #888; position: relative; padding-left: 1.5rem; margin-bottom: 1rem; font-size: 1rem; }
                .doc-content li::before { content: ''; position: absolute; left: 0; top: 0.7em; width: 4px; height: 1px; background: #666; }
                .doc-content code { background: #111; color: #eee; padding: 2px 6px; rounded: 4px; font-size: 0.9em; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
                .doc-content pre { background: #050505; border: 1px solid #111; padding: 2rem; border-radius: 1rem; overflow-x: auto; margin: 2rem 0; }
                .doc-content img { border-radius: 1rem; border: 1px solid #111; margin: 3rem 0; }
                .doc-content strong { color: white; font-weight: 600; }
            `}</style>
        </div>
    );
}
