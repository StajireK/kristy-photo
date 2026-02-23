"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
    title: string;
    handwrite: string;
    description: string;
    images: string[];
    footerText?: string;
}

// Béžové pozadí s logem jako placeholder
function ImageWithLogo({ src, alt, fill, className, quality, sizes, priority, loading }: {
    src: string;
    alt: string;
    fill?: boolean;
    className?: string;
    quality?: number;
    sizes?: string;
    priority?: boolean;
    loading?: "lazy" | "eager";
}) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative w-full h-full">
            {/* Placeholder s logem */}
            {!loaded && (
                <div className="absolute inset-0 bg-[#f0e8df] flex items-center justify-center z-10">
                    <Image
                        src="/kristy-logo-no-bg.png"
                        alt="loading"
                        width={160}
                        height={80}
                        className="opacity-30"
                    />
                </div>
            )}
            <Image
                src={src}
                alt={alt}
                fill={fill}
                className={className}
                quality={quality}
                sizes={sizes}
                priority={priority}
                loading={loading}
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}

export default function PortfolioSection({ title, handwrite, description, images, footerText }: Props) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const closePreview = () => setSelectedIndex(null);

    return (
        <div className="bg-gray-100 min-h-screen py-16 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Hero blok: na mobilu nadpis→text→foto→grid, na desktopu foto vlevo / text vpravo */}
                <div className="flex flex-col md:flex-row gap-10 items-center mb-12">

                    {/* Text – na mobilu nahoře, na desktopu vpravo */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start order-1 md:order-2">
                        <header className="inline-flex flex-col items-center md:items-start relative mb-6">
                            <h1 className="!mb-0 absolute z-10 bottom-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 tracking-[0.15em] uppercase text-2xl whitespace-nowrap font-semibold font-playfair">
                                {title}
                            </h1>
                            <p className="handwrite-xl relative z-0 whitespace-nowrap text-7xl leading-none">
                                {handwrite}
                            </p>
                        </header>
                        <p className="text-gray-600 leading-relaxed max-w-md text-center md:text-left whitespace-pre-line">
                            {description}
                        </p>
                    </div>

                    {/* Hero fotka – na mobilu pod textem, na desktopu vlevo */}
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <button
                            type="button"
                            className="group w-full overflow-hidden focus:outline-none"
                            onClick={() => setSelectedIndex(0)}
                        >
                            <div className="relative w-full aspect-[4/5]">
                                <ImageWithLogo
                                    src={images[0]}
                                    alt={title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    quality={80}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Grid zbývajících fotek */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {images.slice(1).map((src, i) => (
                        <button
                            key={src}
                            type="button"
                            className="group overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary/60"
                            onClick={() => setSelectedIndex(i + 1)}
                        >
                            <div className="relative w-full aspect-[3/4]">
                                <ImageWithLogo
                                    src={src}
                                    alt={`${title} ${i + 2}`}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    quality={60}
                                    loading="lazy"
                                    sizes="(max-width: 768px) 50vw, 20vw"
                                />
                            </div>
                        </button>
                    ))}
                </div>

                {/* Volitelný text pod gridem */}
                {footerText && (
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line text-center max-w-2xl mx-auto mt-12">
                        {footerText}
                    </p>
                )}
            </div>

            {/* Lightbox */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center px-4"
                    onClick={closePreview}
                >
                    <div className="relative max-w-5xl w-full">
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); closePreview(); }}
                            className="absolute -top-8 right-0 text-white text-sm uppercase tracking-[0.2em] hover:text-gray-300"
                        >
                            ZAVŘÍT ✕
                        </button>
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setSelectedIndex((selectedIndex - 1 + images.length) % images.length); }}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 text-white text-3xl hover:text-gray-300 hidden md:block"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setSelectedIndex((selectedIndex + 1) % images.length); }}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 text-white text-3xl hover:text-gray-300 hidden md:block"
                        >
                            ›
                        </button>
                        <div className="relative w-full h-[80vh] md:h-[90vh]">
                            <Image
                                src={images[selectedIndex]}
                                alt={`${title} ${selectedIndex + 1}`}
                                fill
                                className="object-contain pointer-events-none"
                                quality={80}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

