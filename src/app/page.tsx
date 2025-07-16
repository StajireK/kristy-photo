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

import Image from "next/image";
import Link from "next/link";

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
                className="h-full w-full bg-cover bg-center bg-fixed"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                <div className="h-full w-full bg-black/30 flex items-end justify-center py-24">
                  <div className="z-10 px-4">
                    <Image
                      src="/kristy-photo-logo-text.png"
                      alt="Kristy Photo Logo text"
                      width={400}
                      height={400}
                      className="w-auto inline-block"
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
                      className="w-auto inline-block"
                      priority
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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

      <h2
        className="text-2xl font-bold font-alumni text-center m-6 uppercase"
        id="gallery"
      >
        Jmenuji se Kristýna a jsem začínající rodinná fotografka.
      </h2>

      <div className="max-w-2xl mx-auto my-3 px-6 py-8 bg-white/80 backdrop-blur-sm border-l-4 border-primary/60">
        <p className="text-lg font-light font-[cursive] text-gray-800 leading-relaxed">
          Focení mě vždycky bavilo, ale až s rolí mámy jsem pochopila, jak moc
          mají{" "}
          <span className="font-semibold text-primary">rodinné fotky.</span>{" "}
          smysl. Zachytit obyčejný moment, který připomene kouzlo každodennosti
          – to mě naplňuje ❤️.
          <br />
        </p>
        <p className="mt-4 text-base text-gray-700 leading-relaxed">
          Chci tvořit snímky, které budou vyprávět Váš příběh a vykouzlí úsměv
          na rtech i po letech 😊 Nejsem zatím profi fotograf, ale dávám do toho
          srdce, lidskost i maximum energie! 📸
          <br />
        </p>
        <p className="mt-4 font-semibold text-primary">– Kristy</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        <div className="bg-muted p-4 rounded shadow-lg">
          <img
            src="/gallery/galiovi.jpeg"
            alt="Galerie"
            className="w-full object-cover rounded shadow-sm mb-4"
          />
          <div className="bg-white p-4 rounded shadow-lg">
            <p className={`italic font-[cursive]`}>
              “Vyfotit ty dva pytle blech, to chce odvahu. Ale @kristyna.pitrova
              se to podařilo na jedničku. Už teď vím, že nás nefotíš naposledy.
              Děkuji za krásně zachycené momenty.”
            </p>
            <span className="text-sm text-gray-500 block mt-2">
              — Kristýna G.
            </span>
          </div>
        </div>

        <div className="bg-muted p-4 rounded shadow-lg">
          <img
            src="/gallery/segetovi.jpeg"
            alt="Galerie"
            className="w-full object-cover rounded shadow-sm mb-4"
          />
          <div className="bg-white p-4 rounded shadow-lg">
            <p className={`italic font-[cursive]`}>
              “Kristýnku doporučuji všemi deseti! Celé focení bylo naprosto
              přirozené, uvolněné a zároveň profi. K dětem nádherný přístup.
              Domluva rychlá, místo dokonale vystihla a fotky? Jsou prostě boží.
              Měla jsem je doma dřív, než jsem stihla vydechnout. Moc děkuji -
              za vstřícnost a krásný prožitek. Našli jsme naši rodinnou
              fotografku.”
            </p>
            <span className="text-sm text-gray-500 block mt-2">
              — Veronika S.
            </span>
          </div>
        </div>

        <div className="bg-muted p-4 rounded shadow-lg">
          <img
            src="/gallery/hanka.jpeg"
            alt="Galerie"
            className="w-full object-cover rounded shadow-sm mb-4"
          />
          <div className="bg-white p-4 rounded shadow-lg">
            <p className={`italic font-[cursive]`}>
              “Nejšikovnější, Mockrát děkuji nejen za vstřícnou domluvu a
              vyhovění ohledně času a termínu focení, ale především za zvěčnění
              těch nejkrásnějších okamžiků prvních krůčků mojí holčičky!”
            </p>
            <span className="text-sm text-gray-500 block mt-2">— Hana B.</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center m-6">
        <Link
          href="/contact"
          className="text-sm px-8 py-4 bg-background rounded-full hover:bg-white/30 transition"
        >
          DOMLUVIT FOCENÍ
        </Link>
      </div>
    </>
  );
}
