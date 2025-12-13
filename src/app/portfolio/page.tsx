"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
    "/port/portfolio1.jpg",
    "/port/portfolio2.jpg",
    "/port/portfolio3.jpg",
    "/port/portfolio4.jpg",
    "/port/portfolio5.jpg",
    "/port/portfolio16.jpg",
    "/port/portfolio6.jpg",
    "/port/portfolio7.jpg",
    "/port/portfolio8.jpg",
    "/port/portfolio10.jpg",
    "/port/portfolio9.jpg",
    "/port/portfolio11.jpg",
    "/port/portfolio12.jpg",
    "/port/portfolio13.jpg",
    "/port/portfolio14.jpg",
    "/port/portfolio15.jpg",
];

export default function PortfolioPage() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const closePreview = () => setSelectedIndex(null);

    return (
        <div className="bg-gray-100 min-h-screen py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-center text-4xl font-alumni tracking-[0.15em] mb-4">
                    Portfolio
                </h1>
                <p className="text-center text-gray-700 mb-10 max-w-xl mx-auto">
                    Malý výběr z focení, která pro mě mají speciální místo v srdci.
                    Další tvorbu najdete na Instagramu.
                </p>

                {/* Grid s fotkama */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {images.map((src, i) => (
                        <button
                            key={i}
                            type="button"
                            className="group bg-white rounded-xl shadow-sm overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary/60"
                            onClick={() => setSelectedIndex(i)}
                        >
                            <div className="relative w-full">
                                <Image
                                    src={src}
                                    alt={`Portfolio fotografie ${i + 1}`}
                                    width={1600}
                                    height={1067}
                                    className="w-full h-auto object-cover align-middle transition-transform duration-300 group-hover:scale-105"
                                    quality={70}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Preview overlay */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center px-4"
                    onClick={closePreview}
                >
                    <div className="relative max-w-5xl w-full max-h-[90vh]">
                        {/* Zavírací křížek */}
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                closePreview();
                            }}
                            className="absolute -top-0 right-0 text-white text-sm uppercase tracking-[0.2em] hover:text-gray-200"
                        >
                            ZAVŘÍT ✕
                        </button>

                        <div className="relative w-full h-[80vh] md:h-[90vh]">
                            <Image
                                src={images[selectedIndex]}
                                alt={`Portfolio fotografie ${selectedIndex + 1}`}
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
