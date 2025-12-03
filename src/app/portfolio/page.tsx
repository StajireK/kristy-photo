"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
    "/portfolio/portfolio1.jpg",
    "/portfolio/portfolio2.jpg",
    "/portfolio/portfolio3.jpg",
    "/portfolio/portfolio4.jpg",
    "/portfolio/portfolio5.jpg",
    "/portfolio/portfolio16.jpg",
    "/portfolio/portfolio6.jpg",
    "/portfolio/portfolio7.jpg",
    "/portfolio/portfolio8.jpg",
    "/portfolio/portfolio10.jpg",
    "/portfolio/portfolio9.jpg",
    "/portfolio/portfolio11.jpg",
    "/portfolio/portfolio12.jpg",
    "/portfolio/portfolio13.jpg",
    "/portfolio/portfolio14.jpg",
    "/portfolio/portfolio15.jpg",
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
                                    className="w-full h-auto object-cover align-middle"
                                    quality={80}
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
                    <div
                        className="relative max-w-5xl w-full max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()} // ať klik uvnitř nezavírá
                    >
                        {/* Zavírací křížek */}
                        <button
                            type="button"
                            onClick={closePreview}
                            className="absolute -top-10 right-0 text-white text-sm uppercase tracking-[0.2em] hover:text-gray-200"
                        >
                            ZAVŘÍT ✕
                        </button>

                        <div className="relative w-full h-[60vh] md:h-[70vh]">
                            <Image
                                src={images[selectedIndex]}
                                alt={`Portfolio fotografie ${selectedIndex + 1}`}
                                fill
                                className="object-contain"
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
