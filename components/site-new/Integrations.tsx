"use client";

import { useRef, useState, useLayoutEffect } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { Layers } from "lucide-react";
import Image from "next/image";
import gemini from "@/assets/gemini.svg";
import openai from "@/assets/openai.svg";
import claude from "@/assets/claude.svg";
import kimi from "@/assets/kimi.svg";
import docker from "@/assets/docker.svg";
import zai from "@/assets/zai.svg";
import grok from "@/assets/grok.svg";
import minimax from "@/assets/minimax.svg";

// Brand logo SVG components
export const SupabaseLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg viewBox="0 0 109 113" className={className} fill="none">
        <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z" fill="url(#supabase-a)" />
        <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z" fill="url(#supabase-b)" fillOpacity=".2" />
        <path d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.072z" fill="#3ECF8E" />
        <defs>
            <linearGradient id="supabase-a" x1="53.974" y1="54.974" x2="94.163" y2="71.829" gradientUnits="userSpaceOnUse">
                <stop stopColor="#249361" /><stop offset="1" stopColor="#3ECF8E" />
            </linearGradient>
            <linearGradient id="supabase-b" x1="36.156" y1="30.578" x2="54.484" y2="65.081" gradientUnits="userSpaceOnUse">
                <stop /><stop offset="1" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
);

export const ReactLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="#61DAFB">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9z" />
    </svg>
);

export const NodeJSLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="#339933">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.548-.191.658-.234 1.24-.565.062-.034.141-.021.205.015l2.255 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.193-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.085.049-.139.143-.139.242v10.184c0 .097.054.189.137.236l2.409 1.392c1.307.653 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.943-.922-1.604V6.887c0-.66.352-1.274.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.943.924 1.603v10.184c0 .66-.354 1.273-.924 1.604l-8.794 5.078c-.28.163-.6.247-.925.247zm2.715-7.004c-3.857 0-4.664-1.774-4.664-3.262 0-.141.113-.253.255-.253h1.137c.127 0 .234.092.253.216.172 1.168.687 1.759 3.019 1.759 1.858 0 2.65-.42 2.65-1.404 0-.567-.224-.989-3.113-1.271-2.414-.236-3.909-.772-3.909-2.702 0-1.78 1.501-2.84 4.017-2.84 2.824 0 4.222.98 4.399 3.082.006.073-.021.144-.069.199-.047.053-.113.084-.183.084h-1.14c-.12 0-.226-.085-.251-.201-.279-1.24-.958-1.638-2.756-1.638-2.031 0-2.267.708-2.267 1.238 0 .643.279.831 3.016 1.193 2.711.358 4.006.867 4.006 2.765-.002 1.924-1.603 3.022-4.4 3.022v-.008z" />
    </svg>
);

export const ExpressLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
    </svg>
);

export const MongoDBLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="#47A248">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
    </svg>
);

export const GitHubLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

export const StripeLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="#635BFF">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
    </svg>
);

const integrations = [
    { name: "Gemini", icon: "", src: gemini },
    { name: "OpenAI", icon: "", src: openai, addFilter: true },
    { name: "Claude", icon: "", src: claude },
    { name: "Supabase", icon: <SupabaseLogo /> },
    { name: "React", icon: <ReactLogo /> },
    { name: "Node.js", icon: <NodeJSLogo /> },
    { name: "Express", icon: <ExpressLogo /> },
    { name: "MongoDB", icon: <MongoDBLogo /> },
    { name: "GitHub", icon: <GitHubLogo /> },
    { name: "Stripe", icon: <StripeLogo /> },
    { name: "Kimi K2", icon: "", src: kimi },
    { name: "Docker", icon: "", src: docker },
    { name: "Zai", icon: "", src: zai, addFilter: true },
    { name: "Grok", icon: "", src: grok, addFilter: true },
    { name: "Minimax", icon: "", src: minimax },
];

const integrationsSecond = [
    { name: "Stripe", icon: <StripeLogo /> },
    { name: "Kimi K2", icon: "", src: kimi },
    { name: "Docker", icon: "", src: docker },
    { name: "Zai", icon: "", src: zai, addFilter: true },
    { name: "Grok", icon: "", src: grok, addFilter: true },
    { name: "Minimax", icon: "", src: minimax },
    { name: "Gemini", icon: "", src: gemini },
    { name: "OpenAI", icon: "", src: openai, addFilter: true },
    { name: "Claude", icon: "", src: claude },
    { name: "Supabase", icon: <SupabaseLogo /> },
    { name: "React", icon: <ReactLogo /> },
    { name: "Node.js", icon: <NodeJSLogo /> },
    { name: "Express", icon: <ExpressLogo /> },
    { name: "MongoDB", icon: <MongoDBLogo /> },
    { name: "GitHub", icon: <GitHubLogo /> },
];

// Integration Item Component
interface IntegrationItem {
    name: string;
    icon: React.ReactNode;
    src?: string;
    addFilter?: boolean;
}

const IntegrationIcon = ({ item }: { item: IntegrationItem }) => (
    <div className="w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group shrink-0">
        {item.src ? (
            <Image src={item.src} alt={item.name} width={32} height={32} className={`${item?.addFilter ? 'invert' : ''}`} />
        ) : (
            <div className="text-gray-400 group-hover:text-white transition-colors">
                {item.icon}
            </div>
        )}
        <span className="text-[10px] text-gray-500 mt-1 group-hover:text-gray-300 transition-colors">{item.name}</span>
    </div>
);

// Scroll Velocity Row for Icons
const IconScrollRow = ({
    items,
    baseVelocity = 50,
    numCopies = 4
}: {
    items: IntegrationItem[];
    baseVelocity: number;
    numCopies?: number;
}) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(
        smoothVelocity,
        [0, 1000],
        [0, 5],
        { clamp: false }
    );

    const copyRef = useRef<HTMLDivElement>(null);
    const [copyWidth, setCopyWidth] = useState(0);

    useLayoutEffect(() => {
        function updateWidth() {
            if (copyRef.current) {
                setCopyWidth(copyRef.current.offsetWidth);
            }
        }
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const wrap = (min: number, max: number, v: number) => {
        const range = max - min;
        const mod = (((v - min) % range) + range) % range;
        return mod + min;
    };

    const x = useTransform(baseX, (v) => {
        if (copyWidth === 0) return '0px';
        return `${wrap(-copyWidth, 0, v)}px`;
    });

    const directionFactor = useRef(1);
    useAnimationFrame((_, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="relative overflow-hidden py-2">
            <motion.div
                className="flex gap-4 md:gap-6"
                style={{ x }}
            >
                {Array.from({ length: numCopies }).map((_, copyIndex) => (
                    <div
                        key={copyIndex}
                        ref={copyIndex === 0 ? copyRef : null}
                        className="flex gap-4 md:gap-6 shrink-0"
                    >
                        {items.map((item, index) => (
                            <IntegrationIcon key={`${copyIndex}-${index}`} item={item} />
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function Integrations() {
    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6"
                    >
                        <Layers className="w-4 h-4" />
                        <span>INTEGRATIONS</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-4 font-serif"
                    >
                        Works With the Tools <span className="italic font-normal text-gray-400">You Already Love.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        No switching. No manual setup. Greta connects natively with your favorite platforms — so your entire stack is ready to go from day one.
                    </motion.p>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Left dissolving gradient */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
                    {/* Right dissolving gradient */}
                    <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

                    {/* First row - scrolling left to right */}
                    <IconScrollRow items={integrations} baseVelocity={50} numCopies={4} />

                    {/* Second row - scrolling right to left */}
                    <IconScrollRow items={integrationsSecond} baseVelocity={-50} numCopies={4} />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-center text-gray-500 mt-12 text-lg italic"
                    >
                        More integrations coming soon. Your stack, always growing.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
