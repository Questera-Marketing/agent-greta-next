'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
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
    Clock
} from 'lucide-react';
import { data, getDocByLink, DocQuestion } from '@/components/learninghub/data';
import { docComponents } from '@/components/learninghub/Docs';

// TopBar Component
const TopBar = () => {
    const router = useRouter();
    return (
        <div className="h-[60px] border-b border-white/5 flex items-center justify-between px-6 bg-[#0A0A0A]/80 backdrop-blur-xl fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center gap-4">
                <div className="logo-container flex gap-[5px] items-end justify-center relative shrink-0 cursor-pointer" onClick={() => router.push("/")}>
                    <div className="relative shrink-0 ml-16">
                        <Image alt="Greta Logo" width={24} height={24} src="/Gretanewlogo.svg" />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-6 text-[13px] text-gray-400 font-medium">
                <span className="hover:text-white cursor-pointer" onClick={() => router.push('/learninghub')}>All Docs</span>
                <button onClick={() => window.open("https://greta.questera.ai/home", "_blank")} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 text-[12px] rounded-[8px]">App</button>
            </div>
        </div>
    );
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

// Helper to truncate long titles
const truncateTitle = (title: string) => {
    return title.replace(/^How to /, '').replace(/\?$/, '');
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
    activeCategory,
    activeDocLink,
    onSelectDoc
}: {
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
        <aside className="fixed top-[60px] left-0 bottom-0 w-[270px] bg-[#0A0A0A] border-r border-[#1F1F1F] overflow-y-auto z-40 hidden lg:block custom-scrollbar pb-24 select-none">
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

export default function DocPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;
    const contentRef = useRef<HTMLDivElement>(null);
    const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string }[]>([]);
    const [activeSection, setActiveSection] = useState<string>('');

    const docData = useMemo(() => {
        return getDocByLink(`/learninghub/${id}`);
    }, [id]);

    const ActiveDocComponent = docData?.doc?.docId ? docComponents[docData.doc.docId] : null;
    const Icon = docData ? getCategoryIcon(docData.category) : Layers;

    // Handle document selection - navigate to doc URL
    const handleSelectDoc = useCallback((category: string, doc: DocQuestion) => {
        if (!doc || !doc.docId) return;
        const linkPath = doc.link.replace('/learninghub/', '');
        router.push(`/learninghub/${linkPath}`);
    }, [router]);

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
    }, [docData]);

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

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    if (!docData) {
        return (
            <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Document Not Found</h1>
                    <p className="text-gray-400 mb-6">The requested documentation page does not exist.</p>
                    <button onClick={() => router.push('/learninghub')} className="bg-purple-500 text-white px-6 py-2 rounded-lg">
                        Go to Learning Hub
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white">
            <TopBar />

            {/* Sidebar */}
            <Sidebar
                activeCategory={docData.category}
                activeDocLink={docData.doc.link}
                onSelectDoc={handleSelectDoc}
            />

            {/* Main content area */}
            <main className="lg:ml-[270px] pt-[60px] min-h-screen">
                <div className="flex">
                    <div className="flex-1 max-w-4xl mx-auto px-6 py-10">
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-6">
                            <span className="hover:text-gray-300 cursor-pointer" onClick={() => router.push('/')}>Home</span>
                            <ChevronRight size={12} />
                            <span className="hover:text-gray-300 cursor-pointer" onClick={() => router.push('/learninghub')}>Learning Hub</span>
                            <ChevronRight size={12} />
                            <span className="flex items-center gap-1 text-gray-400"><Icon size={12} />{docData.category}</span>
                        </div>

                        {/* Description */}
                        <div className="mb-8 p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl">
                            <p className="text-[14px] text-gray-300">{docData.doc.description}</p>
                        </div>

                        {/* Doc content */}
                        <div ref={contentRef} className="doc-content">
                            {ActiveDocComponent ? <ActiveDocComponent /> : null}
                        </div>
                    </div>

                    {/* Table of Contents */}
                    <div className="hidden xl:block w-[240px] shrink-0 pr-6">
                        <div className="sticky top-[80px] pt-10">
                            <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Clock size={12} />On This Page
                            </div>
                            <nav className="flex flex-col gap-1">
                                {tableOfContents.map((item, idx) => (
                                    <button key={idx} onClick={() => scrollToSection(item.id)} className={`text-left text-[12px] py-1.5 px-3 rounded-md transition-all truncate ${activeSection === item.id ? 'text-purple-400 bg-purple-500/10 border-l-2 border-purple-500' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}>
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
            `}</style>
        </div>
    );
}

