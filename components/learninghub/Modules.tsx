'use client';

import Image from 'next/image';

export const Topbar = ({ text }: { text: string }) => {
    return ( 

        <></>
        // <div className="px-6 py-4 text-sm leading-5 border-b flex items-center gap-2 absolute z-[1000] top-0 w-full text-[#E0E0E0] border-b-[#2D2D2D] bg-[#0D0D0D]">
        //     <div className="w-fit h-fit cursor-pointer" onClick={() => window.history.back()}>
        //         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //             <path d="M19 12H5M12 19l-7-7 7-7" />
        //         </svg>
        //     </div>
        //     <p>{text}</p>
        // </div>
    );
};

export const Creator = ({ children }: { children: React.ReactNode; tableOfContent?: string[] }) => {
    return <div className="doc-creator-root">{children}</div>;
};

export const HeroHeader = ({ text }: { text: string }) => {
    const id = text ? text.toLowerCase().trim().split(' ').join('-') : '';
    return (
        <h1
            className="text-[36px] font-semibold leading-[44px] font-[Figtree] -tracking-[0.72px] text-white"
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
            className={`${className || ''} text-[24px] font-semibold leading-[32px] font-[Figtree] -tracking-[0.48px] mt-[32px] text-[#E0E0E0]`}
            data-section-id={id}
            id={id}
        >
            {children}
        </h2>
    );
};

export const Heading2 = ({ children, className, text }: { children: React.ReactNode; className?: string; text?: string }) => {
    const content = typeof children === 'string' ? children : text || '';
    const id = content ? content.toLowerCase().trim().split(' ').join('-') : '';
    return (
        <h2
            className={`${className || ''} text-[16px] font-semibold leading-[24px] font-[Figtree] mt-[24px] text-[#E0E0E0]`}
            data-section-id={id}
            id={id}
        >
            {children}
        </h2>
    );
};

export const Content1 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={`text-[16px] font-normal leading-[24px] font-[Figtree] mt-3 childAnchor text-[#B0B0B0] ${className || ''}`}>
            {children}
        </div>
    );
};

export const Content2 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={`text-[16px] font-normal leading-[24px] font-[Figtree] mt-2 childAnchor text-[#B0B0B0] ${className || ''}`}>
            {children}
        </div>
    );
};

type ListDataType = React.ReactNode[] | Record<string, string>;

export const ListContent = ({ listData, style, listType = 'ul' }: { listData: ListDataType; style?: React.CSSProperties; listType?: 'ul' | 'ol' }) => {
    const textColor = 'text-[#B0B0B0]';

    const renderList = () => {
        if (Array.isArray(listData)) {
            return listData.map((ele, index) => (
                <li className={`${textColor} font-dm-sans text-[16px] font-normal leading-[24px] childAnchor`} style={style} key={index}>
                    {ele}
                </li>
            ));
        }
        return Object.keys(listData).map((ele, index) => (
            <li className={`${textColor} mt-3`} style={style} key={index}>
                <h4 className={`${textColor} font-dm-sans text-[16px] font-medium leading-[24px] childAnchor`}>{ele}: </h4>
                <p className={`${textColor} font-dm-sans text-[16px] font-normal leading-[24px] childAnchor whitespace-pre-line mt-1.5`}>
                    {listData[ele]}
                </p>
            </li>
        ));
    };

    return listType === 'ul' ? (
        <ul className={`list-disc ml-6 mt-3 text-[#B0B0B0] space-y-2`} style={style}>
            {renderList()}
        </ul>
    ) : (
        <ol className="list-decimal ml-6 mt-3 space-y-2" style={style}>
            {renderList()}
        </ol>
    );
};

export const ImageContent = ({ img, altText, style }: { img: string; altText: string; style?: React.CSSProperties }) => {
    return (
        <div className="relative w-full aspect-video mt-5 overflow-hidden rounded-2xl border border-white/10">
            <img
                src={img}
                alt={altText}
                className="w-full h-full object-cover"
                style={style}
                loading="lazy"
            />
        </div>
    );
};

export const TableContent = ({ columns, data }: { columns: string[]; data: Record<string, string>[] }) => {
    return (
        <div className="overflow-x-auto mt-6 mb-6">
            <table className="min-w-full border-collapse border-[#2D2D2D]">
                <thead>
                    <tr className="bg-[#1A1A1A]">
                        {columns.map((column, index) => (
                            <th key={index} className="border py-3 px-4 text-left font-semibold text-[14px] border-[#2D2D2D] text-[#E0E0E0]">
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-[#1A1A1A]">
                            {columns.map((column, colIndex) => (
                                <td key={colIndex} className="border py-3 px-4 text-[14px] border-[#2D2D2D] text-[#B0B0B0]">
                                    {row[column] || '-'}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

