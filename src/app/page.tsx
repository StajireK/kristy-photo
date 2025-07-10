"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  "/gallery/gallery1.jpeg",
  "/gallery/gallery2.jpeg",
  "/gallery/gallery3.jpeg",
  "/gallery/gallery4.jpeg",
];

import { Playwrite_SK } from "next/font/google";
import Image from "next/image";

const msMadi = Playwrite_SK({
  weight: "400",
  display: "swap",
});

export default function HeroSlider() {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#gallery");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Next section not found");
    }
  };
  return (
    <>
      {/* Hero sekce */}
      <div className="relative h-[calc(100vh-85px)] text-center overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="absolute inset-0 h-full w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="h-full w-full bg-black/30 flex items-end justify-center py-24">
                  <div className="z-10 px-4">
                    <Image
                      src="/kristy-photo-logo-text.png"
                      alt="Kristy Photo Logo text"
                      width={400}
                      height={400}
                      className=" w-auto inline-block"
                      priority
                    />

                    <p className="mt-4 text-2xl font-alumni text-white">
                      RODINNÁ FOTOGRAFKA
                    </p>
                    <Image
                      src="/kristy-photo-logo-subtitle-text.png"
                      alt="Kristy Photo Logo subtitle"
                      width={220}
                      height={220}
                      className=" w-auto inline-block"
                      priority
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Scroll Indicator */}
        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer"
          onClick={scrollToNextSection}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white opacity-80 -translate-x-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Galerie & Recenze */}
      <h2
        className="text-2xl font-bold font-alumni text-center m-6"
        id="gallery"
      >
        GALERIE
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center bg-muted py-12 w-full mx-auto px-4 rounded shadow-md">
        {/* Image on the left */}
        <div className="md:w-1/3 w-full flex justify-center mb-8 md:mb-0 md:mr-8">
          <img
            src="/gallery/image.png"
            alt="Galerie"
            className="rounded shadow-sm max-w-full h-auto"
          />
        </div>
        {/* Review on the right */}
        <div className="md:w-1/2 w-full">
          <div className="bg-white p-6 rounded shadow-md">
            <p className={`${msMadi.className}`}>
              “Vyfotit ty dva pytle blech, to chce odvahu. Ale @kristyna.pitrova
              se to podařilo na jedničku. Už teď vím, že nás nefotíš naposledy.
              Děkuji za krásně zachycené momenty.”
            </p>
            <span className="text-sm text-gray-500 block mt-2">
              — Kristýna G.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
