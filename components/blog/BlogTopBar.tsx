'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export const BlogTopBar = () => {
    const router = useRouter();

    return (
        <div className="h-[64px] border-b border-zinc-900 flex items-center justify-between px-8 bg-black fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center gap-4">
                <div className="cursor-pointer" onClick={() => router.push("/")}>
                    <Image alt="Greta Logo" width={90} height={25} src="/Gretanewlogo.svg" className="invert brightness-[1.2]" />
                </div>
            </div>
            <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                <Link href="/learninghub" className="hover:text-white transition-all">Documentation</Link>
                <button onClick={() => window.open("https://greta.questera.ai/home", "_blank")} className="bg-white text-black px-5 py-2 rounded-full hover:bg-zinc-200 transition-all">Launch App</button>
            </div>
        </div>
    );
};
