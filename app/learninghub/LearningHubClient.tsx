'use client';

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
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
    CornerDownLeft
} from 'lucide-react';
import { data, DocQuestion } from '@/components/learninghub/data';
import { docComponents } from '@/components/learninghub/Docs';

// TopBar Component
const TopBar = ({ onOpenSearch }: { onOpenSearch: () => void }) => {
    const router = useRouter();
    return (
        <div className="h-[60px] border-b border-white/5 flex items-center justify-between px-6 bg-[#0A0A0A]/80 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="flex items-center gap-4">
                <div className="logo-container flex gap-[5px] items-end justify-center relative shrink-0 cursor-pointer" onClick={() => router.push("/")}>
                    <div className="relative shrink-0 ml-16">
                        <Image alt="Greta Logo" width={24} height={24} src="/Gretanewlogo.svg" />
                    </div>
                </div>
            </div>

            <div className="flex-1 max-w-xl mx-8 hidden md:flex items-center gap-3">
                <div className="relative flex-1 group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-gray-300 transition-colors" size={14} />
                    <input
                        type="text"
                        readOnly
                        onClick={onOpenSearch}
                        placeholder="Search documentation..."
                        className="w-full bg-white/5 border border-white/5 rounded-full py-2 pl-9 pr-12 text-[13px] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/30 focus:bg-white/10 transition-all cursor-pointer hover:bg-white/10 hover:border-white/10"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <kbd className="text-[10px] text-gray-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/10 font-sans">⌘K</kbd>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-6 text-[13px] text-gray-400 font-medium">
                <span className="hidden lg:block hover:text-white cursor-pointer transition-colors duration-200" onClick={() => window.open("https://discord.com/invite/vGjWMnBmtN", "_blank")}>Community</span>
                <button onClick={() => window.open("https://greta.questera.ai/home", "_blank")} className="hidden lg:block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 text-[12px] rounded-[8px] cursor-pointer transition-colors duration-200">App</button>
            </div>
        </div>
    );
};

// Helper to truncate long titles
const truncateTitle = (title: string) => {
    return title.replace(/^How to /, '').replace(/\?$/, '');
};

// Get category icon
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

// SidebarItem Component
const SidebarItem = ({ label, isActive, onClick }: { label: string; isActive?: boolean; onClick?: () => void }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-3 pl-10 pr-3 py-2 rounded-r-lg text-[13px] transition-all text-left group w-full relative min-h-[36px]
            ${isActive ? 'text-white' : 'text-[#888] hover:text-gray-300'}`}
    >
        <div className={`absolute left-[17px] top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full border-2 transition-colors z-20 ${isActive ? 'border-purple-500 bg-[#0A0A0A] scale-100' : 'border-transparent bg-transparent'}`}></div>
        {isActive && (
            <div className="absolute left-8 right-2 top-0.5 bottom-0.5 bg-[#1A1A1A] border border-white/5 rounded-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-purple-500 rounded-r-full shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
            </div>
        )}
        <span className={`relative z-10 line-clamp-1 py-0.5 font-medium transition-opacity ${isActive ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`}>{label}</span>
    </button>
);

// Sidebar Component
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
        <aside className={`fixed top-[60px] left-0 bottom-0 w-[270px] bg-[#0A0A0A] border-r border-[#1F1F1F] overflow-y-auto transition-transform z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 custom-scrollbar pb-24 select-none`}>
            <div className="flex flex-col py-6 px-3 gap-4">
                {data.map((category, idx) => {
                    const isExpanded = expandedCategories.includes(category.category);
                    const isActiveGroup = category.category === activeCategory;
                    const Icon = getCategoryIcon(category.category);

                    return (
                        <div key={idx} className="flex flex-col relative group/cat">
                            <button
                                onClick={() => toggleCategory(category.category)}
                                className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition-all duration-200 z-10 ${isActiveGroup ? 'text-white' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'}`}
                            >
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className={`p-1 rounded-md transition-colors ${isActiveGroup ? 'bg-purple-500/20 text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.2)]' : 'bg-[#151515] text-gray-500 group-hover:bg-[#202020] group-hover:text-gray-300'}`}>
                                        <Icon size={14} strokeWidth={2} />
                                    </div>
                                    <span className="text-[13px] font-semibold tracking-wide truncate">{category.category}</span>
                                </div>
                                <ChevronDown size={12} className={`transition-transform duration-300 shrink-0 text-gray-600 ${isExpanded ? 'rotate-180 text-gray-400' : ''}`} />
                            </button>

                            {isExpanded && (
                                <div className="overflow-hidden">
                                    <div className="flex flex-col gap-1 pb-1 mt-1 relative">
                                        <div className="absolute left-[20px] top-0 bottom-3 w-[1px] bg-gradient-to-b from-white/10 to-transparent"></div>
                                        {category.questions.map((q, qIdx) => (
                                            <SidebarItem
                                                key={qIdx}
                                                label={truncateTitle(q.question)}
                                                isActive={activeDocLink === q.link}
                                                onClick={() => onSelectDoc(category.category, q)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none"></div>
        </aside>
    );
};

// Search Modal Component
const SearchModal = ({
    isOpen,
    onClose,
    onSelectDoc
}: {
    isOpen: boolean;
    onClose: () => void;
    onSelectDoc: (category: string, doc: DocQuestion) => void;
}) => {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const allDocs = useMemo(() => {
        return data.flatMap(cat =>
            cat.questions.map(q => ({ ...q, category: cat.category }))
        );
    }, []);

    const filteredDocs = useMemo(() => {
        if (!query) return allDocs.slice(0, 8);
        const lower = query.toLowerCase();
        return allDocs.filter(d =>
            d.question.toLowerCase().includes(lower) ||
            d.description.toLowerCase().includes(lower) ||
            d.category.toLowerCase().includes(lower)
        ).slice(0, 10);
    }, [query, allDocs]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
        setSelectedIndex(0);
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => Math.min(prev + 1, filteredDocs.length - 1));
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => Math.max(prev - 1, 0));
            }
            if (e.key === 'Enter' && filteredDocs[selectedIndex]) {
                const doc = filteredDocs[selectedIndex];
                onSelectDoc(doc.category, doc);
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, filteredDocs, selectedIndex, onSelectDoc]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-start justify-center pt-[15vh]" onClick={onClose}>
            <div className="w-full max-w-2xl bg-[#0D0D0D] border border-white/10 rounded-2xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
                <div className="flex items-center gap-3 p-4 border-b border-white/5">
                    <Search size={18} className="text-gray-500" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Search documentation..."
                        className="flex-1 bg-transparent text-white text-[15px] placeholder-gray-500 focus:outline-none"
                    />
                    <kbd className="text-[11px] text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/10">ESC</kbd>
                </div>
                <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                    {filteredDocs.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">No results found</div>
                    ) : (
                        <div className="p-2">
                            {filteredDocs.map((doc, idx) => (
                                <button
                                    key={doc.link}
                                    onClick={() => { onSelectDoc(doc.category, doc); onClose(); }}
                                    className={`w-full text-left p-3 rounded-lg transition-all flex items-start gap-3 ${idx === selectedIndex ? 'bg-white/10' : 'hover:bg-white/5'}`}
                                >
                                    <FileText size={16} className="text-purple-400 mt-0.5 shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[13px] text-white font-medium truncate">{doc.question}</div>
                                        <div className="text-[11px] text-gray-500 mt-0.5">{doc.category}</div>
                                    </div>
                                    {idx === selectedIndex && <CornerDownLeft size={14} className="text-gray-500 mt-1" />}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex items-center justify-between p-3 border-t border-white/5 text-[11px] text-gray-500">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><kbd className="bg-white/5 px-1.5 py-0.5 rounded">↑↓</kbd> Navigate</span>
                        <span className="flex items-center gap-1"><kbd className="bg-white/5 px-1.5 py-0.5 rounded">↵</kbd> Select</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function LearningHubClient() {
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string }[]>([]);
    const [activeSection, setActiveSection] = useState<string>('');

    // Get first doc as default
    const firstCategory = data[0];
    const firstDoc = firstCategory?.questions[0];

    const [activeCategory, setActiveCategory] = useState(firstCategory?.category || '');
    const [activeDoc, setActiveDoc] = useState<DocQuestion | null>(firstDoc || null);

    // Handle document selection - navigate to doc URL
    const handleSelectDoc = useCallback((category: string, doc: DocQuestion) => {
        if (!doc || !doc.docId) return;
        // Navigate to the doc's URL
        const linkPath = doc.link.replace('/learninghub/', '');
        router.push(`/learninghub/${linkPath}`);
    }, [router]);

    // Keyboard shortcut for search
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Extract TOC from rendered content
    useEffect(() => {
        const timer = setTimeout(() => {
            if (contentRef.current) {
                const headers = contentRef.current.querySelectorAll('[data-section-id]');
                const toc = Array.from(headers).map(h => ({
                    id: h.getAttribute('data-section-id') || '',
                    text: h.textContent || ''
                })).filter(item => item.id && item.text);
                setTableOfContents(toc);
                if (toc.length > 0) setActiveSection(toc[0].id);
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [activeDoc]);

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (!contentRef.current) return;
            const sections = contentRef.current.querySelectorAll('[data-section-id]');
            let current = '';
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150) current = section.getAttribute('data-section-id') || '';
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    // Get the active Doc component
    const ActiveDocComponent = activeDoc?.docId ? docComponents[activeDoc.docId] : null;

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white">
            <TopBar onOpenSearch={() => setIsSearchOpen(true)} />
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onSelectDoc={handleSelectDoc} />

            <Sidebar
                isOpen={isSidebarOpen}
                activeCategory={activeCategory}
                activeDocLink={activeDoc?.link || ''}
                onSelectDoc={handleSelectDoc}
            />

            {/* Mobile sidebar toggle */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="fixed top-[70px] left-4 z-50 lg:hidden p-2 bg-[#1A1A1A] rounded-lg border border-white/10"
            >
                <ChevronRight size={20} className={`transition-transform ${isSidebarOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Main content area */}
            <main className="lg:ml-[270px] pt-[60px] min-h-screen">
                <div className="flex">
                    {/* Content */}
                    <div className="flex-1 max-w-4xl mx-auto px-6 py-10">
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-6">
                            <span className="hover:text-gray-300 cursor-pointer" onClick={() => router.push('/')}>Home</span>
                            <ChevronRight size={12} />
                            <span className="hover:text-gray-300 cursor-pointer">Learning Hub</span>
                            <ChevronRight size={12} />
                            <span className="text-gray-400">{activeCategory}</span>
                        </div>

                        {/* Description */}
                        {activeDoc && (
                            <div className="mb-8 p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl">
                                <p className="text-[14px] text-gray-300 leading-relaxed">{activeDoc.description}</p>
                            </div>
                        )}

                        {/* Doc content */}
                        <div ref={contentRef} className="doc-content">
                            {ActiveDocComponent ? <ActiveDocComponent /> : (
                                <div className="text-gray-500 text-center py-20">Select a document to view</div>
                            )}
                        </div>
                    </div>

                    {/* Table of Contents - Right side */}
                    <div className="hidden xl:block w-[240px] shrink-0 pr-6">
                        <div className="sticky top-[80px] pt-10">
                            <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Clock size={12} />
                                On This Page
                            </div>
                            <nav className="flex flex-col gap-1">
                                {tableOfContents.map((item, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`text-left text-[12px] py-1.5 px-3 rounded-md transition-all truncate ${
                                            activeSection === item.id
                                                ? 'text-purple-400 bg-purple-500/10 border-l-2 border-purple-500'
                                                : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                                        }`}
                                    >
                                        {item.text}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </main>

            {/* Global styles */}
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 0px;
                    display: none;
                }
                .custom-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }

                .doc-content h1 {
                    font-size: 2rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: white;
                }
                .doc-content h2 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: white;
                }
                .doc-content p {
                    color: #B0B0B0;
                    line-height: 1.7;
                    margin-bottom: 1rem;
                }
                .doc-content ul {
                    list-style: none;
                    padding-left: 0;
                }
                .doc-content li {
                    position: relative;
                    padding-left: 1.5rem;
                    margin-bottom: 0.5rem;
                    color: #B0B0B0;
                }
                .doc-content li::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0.6em;
                    width: 6px;
                    height: 6px;
                    background: linear-gradient(135deg, #A855F7 0%, #3B82F6 100%);
                    border-radius: 50%;
                }
                .doc-content a {
                    color: #A855F7;
                    text-decoration: none;
                }
                .doc-content a:hover {
                    text-decoration: underline;
                }
                .doc-content img {
                    border-radius: 12px;
                    margin: 1.5rem 0;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .doc-content strong {
                    color: white;
                    font-weight: 600;
                }
                .doc-content table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 1.5rem 0;
                }
                .doc-content th,
                .doc-content td {
                    padding: 0.75rem 1rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    text-align: left;
                }
                .doc-content th {
                    background: rgba(255, 255, 255, 0.05);
                    font-weight: 600;
                    color: white;
                }
                .doc-content td {
                    color: #B0B0B0;
                }
            `}</style>
        </div>
    );
}
