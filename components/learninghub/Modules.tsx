'use client';

import Image from 'next/image';

export const Topbar = ({ text }: { text: string }) => {
    return <></>;
};

export const Creator = ({ children }: { children: React.ReactNode; tableOfContent?: string[] }) => {
    return <div className="doc-creator-root space-y-0">{children}</div>;
};

export const HeroHeader = ({ text }: { text: string }) => {
    const id = text ? text.toLowerCase().trim().split(' ').join('-') : '';
    return (
        <h1
            className="text-[2.5rem] md:text-6xl font-black leading-[1.1] tracking-tighter text-white mb-12"
            data-section-id={id}
            id={id}
        >
            {text}
        </h1>
    );
};

export const Heading1 = ({ children, className, text }: { children: React.ReactNode; className?: string; text?: string }) => {
    const content = typeof children === 'string' ? children : text || '';
    const id = content ? content.toLowerCase().trim().split(' ').join('-') : '';
    return (
        <h2
            className={`${className || ''} text-2xl font-bold leading-[1.3] tracking-tighter mt-12 mb-6 text-white flex items-center gap-3 group border-t border-zinc-900 pt-12`}
            data-section-id={id}
            id={id}
        >
            <span className="w-1 h-6 bg-white rounded-full opacity-20 group-hover:opacity-100 transition-opacity"></span>
            {children}
        </h2>
    );
};

export const Heading2 = ({ children, className, text }: { children: React.ReactNode; className?: string; text?: string }) => {
    const content = typeof children === 'string' ? children : text || '';
    const id = content ? content.toLowerCase().trim().split(' ').join('-') : '';
    return (
        <h3
            className={`${className || ''} text-lg font-bold tracking-tight mt-12 mb-4 text-zinc-100 uppercase tracking-widest text-[10px]`}
            data-section-id={id}
            id={id}
        >
            {children}
        </h3>
    );
};

export const Content1 = ({ children, className, style }: { children?: React.ReactNode; className?: string; style?: React.CSSProperties }) => {
    return (
        <p className={`text-[1.1rem] leading-[1.8] mt-6 text-zinc-500 font-medium ${className || ''}`} style={style}>
            {children}
        </p>
    );
};

export const Content2 = ({ children, className, style }: { children?: React.ReactNode; className?: string; style?: React.CSSProperties }) => {
    return (
        <p className={`text-[1.1rem] leading-[1.8] mt-4 text-zinc-500 font-medium ${className || ''}`} style={style}>
            {children}
        </p>
    );
};

type ListDataType = React.ReactNode[] | Record<string, string>;

export const ListContent = ({ listData, style, listType = 'ul' }: { listData: React.ReactNode[] | Record<string, React.ReactNode>; style?: React.CSSProperties; listType?: 'ul' | 'ol' }) => {
    const renderList = () => {
        if (Array.isArray(listData)) {
            return listData.map((ele, index) => (
                <li
                    className="text-[1.1rem] leading-[1.8] text-zinc-500 font-medium pl-4"
                    style={style}
                    key={index}
                >
                    {ele}
                </li>
            ));
        }
        return Object.keys(listData).map((ele, index) => (
            <li className="mt-6 pl-4" style={style} key={index}>
                <div className="font-bold text-white text-[14px] mb-1">{ele}:</div>
                <div className="text-zinc-500 text-[1.1rem] leading-[1.8]">{listData[ele]}</div>
            </li>
        ));
    };

    const listClasses = listType === 'ul'
        ? "list-none"
        : "list-none";

    return (
        <ul className={`${listClasses} space-y-4 mt-8`} style={style}>
            {renderList()}
        </ul>
    );
};

export const ImageContent = ({ img, altText, style }: { img: string; altText: string; style?: React.CSSProperties }) => {
    return (
        <figure className="relative w-full mt-12 mb-12 group">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 shadow-2xl">
                <img
                    src={img}
                    alt={altText}
                    className="w-full h-auto object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    style={style}
                    loading="lazy"
                />
            </div>
        </figure>
    );
};

export const TableContent = ({ columns, data }: { columns: string[]; data: Record<string, string>[] }) => {
    return (
        <div className="overflow-x-auto mt-12 mb-12 rounded-2xl border border-zinc-900 bg-black">
            <table className="min-w-full">
                <thead>
                    <tr className="bg-zinc-950 border-b border-zinc-900">
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                className="py-6 px-6 text-left text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500"
                            >
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900">
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="hover:bg-zinc-900/50 transition-colors"
                        >
                            {columns.map((column, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="py-6 px-6 text-[14px] text-zinc-400 font-medium"
                                >
                                    {row[column] || '—'}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
