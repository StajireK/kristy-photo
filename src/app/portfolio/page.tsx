"use client";

import Image from "next/image";

const images = [
    "/gallery/gallery1.jpg",
    "/gallery/gallery2.jpg",
    "/gallery/gallery3.jpg",
    "/gallery/gallery4.jpg",
    "/gallery/gallery5.jpg",
    "/gallery/gallery6.jpg",
    "/gallery/gallery7.jpg",
    "/gallery/gallery8.jpg",
];

export default function PortfolioPage() {
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-sm overflow-hidden"
                        >
                            <Image
                                src={src}
                                alt={`Portfolio fotografie ${i + 1}`}
                                width={1600}
                                height={1067}
                                className="w-full h-auto object-cover align-middle"
                                quality={100}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
