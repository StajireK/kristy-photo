"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

const reviews = [
    {
        text: "Na Kristýnku jsme narazili úplnou náhodou a jsem za tuto náhodu velice vděčná, moc se nám líbila přirozenost, barevnost a lehkost fotek od Kristy. Focení probíhalo velice plynule, nenuceně a přátelsky. Fotky od Kristy miluju a nedokáži se na ně přestat dívat! Pokud hledáte veselou, mladou, profesionální fotografku, která Vás o všem krásně informuje a zejména si chcete uchovat své vzpomínky krásnými fotkami, tak volte jedině Kristy.",
        author: "Nikola D."
    },
    {
        text: "Nejšikovnější, Mockrát děkuji nejen za vstřícnou domluvu a vyhovění ohledně času a termínu focení, ale především za zvěčnění těch nejkrásnějších okamžiků prvních krůčků mojí holčičky!",
        author: "Hana B."
    },
    {
        text: "Velmi doporučuji.  Focení s Kristýnkou bylo skvělé,  přátelské  a uvolněné.  Musím vyzdvyhnout její trpělivost s mými třemi dcerami. Věřte mi, vyfotit je je opravdu umění a Kristýnka to zvládla perfektně. Fotky máme krásné, jsme z nich nadšení a určitě se staneme stálými zákazníky. Opravdu mooooc doporučuji",
        author: "Lucie B."
    },
    {
        text: "Kristýnku doporučuji všemi deseti! Celé focení bylo naprosto přirozené, uvolněné a zároveň profi. K dětem nádherný přístup. Domluva rychlá, místo dokonale vystihla a fotky? Jsou prostě boží. Měla jsem je doma dřív, než jsem stihla vydechnout. Moc děkuji - za vstřícnost a krásný prožitek. Našli jsme naši rodinnou fotografku.",
        author: "Veronika S."
    },
    {
        text: "Vyfotit ty dva pytle blech, to chce odvahu. Ale @kristyna.pitrova se to podařilo na jedničku. Už teď vím, že nás nefotíš naposledy. Děkuji za krásně zachycené momenty.",
        author: "Kristýna G."
    },
    {
        text: "Fotili jsme se u Kristy už dvakrát, jednou klasické fotky a potom vánoční. Měla všechno hezky připravené a přizpůsobené tomu, že máme malé dítě, takže hračky, zajímavá výzdoba. Focení probíhalo vždy v příjemné a přátelské atmosféře. Dcera se nerada fotí, ale díky skvělému přístupu nám vyšly krásné fotky. Jde vidět, že má Kristy vztah k dětem a jde jí o to, aby vše proběhlo v klidu a bez stresu, přirozeně. Určitě doporučujeme!",
        author: "Simona P."
    }
]

const instagramPosts = [
    {
        href: "http://instagram.com/p/DP3C0GjDPPG/?img_index=1",
        img: "/instagram/insta1.jpg",
        alt: "Rodinné focení u řeky",
        likes: 54,
        comments: 4,
    },
    {
        href: "https://www.instagram.com/p/DQLuoGqDbCA/?img_index=1",
        img: "/instagram/insta2.jpg",
        alt: "Těhotenské focení v přírodě",
        likes: 23,
        comments: 2,
    },
    {
        href: "https://www.instagram.com/p/DRWhrj3jfD1/?img_index=1",
        img: "/instagram/insta3.jpg",
        alt: "Novorozenecké focení doma",
        likes: 145,
        comments: 1,
    },
    {
        href: "https://www.instagram.com/p/DQlnM8Qjfgy/?img_index=1",
        img: "/instagram/insta4.jpg",
        alt: "Rodinné focení v lese",
        likes: 69,
        comments: 6,
    },
];


import Image from "next/image";
import Link from "next/link";
import {CopyIcon, HeartIcon, MessageCircleIcon} from "lucide-react";

export default function HeroSlider() {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#about-me");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Next section not found");
    }
  };

  return (
    <>
        {/* Staticka Fotka */}
        <div className="relative h-[calc(100vh-85px)] text-center overflow-hidden">
            <div
                className="h-full w-full bg-cover bg-center md:bg-[center_calc(50%+170px)]"
                style={{
                    backgroundImage: `url(/gallery/gallery3.jpg)`,
                }}
            >
                <div className="h-full w-full bg-black/30 flex items-end justify-center py-24">
                    <div className="z-10 px-4">
                        <Image
                            src="/kristy-photo-logo-text.png"
                            alt="Kristy Photo Logo text"
                            width={800}
                            height={800}
                            className="w-auto inline-block"
                            priority
                        />
                        <p className="mt-4 text-4xl font-alumni text-white">
                            RODINNÁ FOTOGRAFKA
                        </p>
                        <Image
                            src="/kristy-photo-logo-subtitle-text.png"
                            alt="Kristy Photo Logo subtitle"
                            width={400}
                            height={400}
                            className="w-auto inline-block"
                            priority
                        />
                    </div>
                </div>
            </div>

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

        <section id="about-me">

        <div className="flex flex-col items-center justify-center m-12 md:flex-row">
            <div className="max-w-2xl mx-auto my-6 px-6 py-8 md:px-20 backdrop-blur-sm text-sm md:text-xl bg-white rounded-xl shadow-md p-6 text-gray-800">
                <p className="">
                    Ahoj, jmenuji se Kristýna, Kristy.
                </p>
                    <p className="mt-4">

                    Focení mě provází už od dětství, ale až s rolí mámy jsem naplno pochopila, jak
                    velkou hodnotu mají{" "}
                    rodinné fotky. Zachytit
                    obyčejný moment, který připomene kouzlo každodennosti – to je něco, co mě
                    opravdu naplňuje.
                </p>

                <p className="mt-4">
                    Chci tvořit fotografie, které budou vyprávět Váš příběh a přinesou radost i po
                    letech. Zatím se nepovažuji za profesionální fotografku, jelikož fotím teprve pár měsíců. Co Vám ale můžu s jistotou slíbit a nabídnout? Do každého focení dávám
                    maximum energie, lidskost a hlavně fotím srdcem.
                </p>

                <p className="mt-4">
                    Kdo tedy jsem? Máma, porodní bába a žena s kreativní duší. Miluji dobrou kávu, skvělé jídlo,
                    poznávání nových míst a ze všeho nejvíc miluju focení.
                </p>
                <p className="mt-4">

                Těším se na focení s Vámi a jsem moc vděčná za každého, kdo si ke mě najde cestu.
                </p>
                <p className="mt-4 font-semibold text-primary text-end">Kristy</p>

            </div>
            <div className="w-3/4 md:w-1/4 md:mr-20">
                <img
                    src="/kristy-me.jpg"
                    alt="Me"
                    className="w-full object-cover rounded shadow-sm mb-4"
                />
            </div>
        </div>
        </section>


        {/* Hero galerie */}
        <div className="relative overflow-hidden bg-gray-200 py-16">
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    waitForTransition: true,
                }}
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        centeredSlides: true,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                        centeredSlides: true,
                    },
                }}
                className="h-full w-3/4 md:w-1/4 lg:w-4/5 flex items-center"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center">
                        <div className="relative w-full aspect-[3/4] overflow-hidden rounded shadow-lg">
                            <Image
                                src={img}
                                alt={`Galerie ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="100vw"
                                quality={80}
                                unoptimized={true}
                            />

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

        {/* Recenze */}
        <section className="bg-gray-100 py-8">
            <div className="max-w-xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-alumni uppercase text-center mb-8 tracking-[0.1em]">
                    Recenze
                </h2>

                <Swiper
                    modules={[Pagination, Navigation]}
                    slidesPerView={1}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    navigation={true}
                    className="w-full reviews-swiper"
                    grabCursor={true}
                    autoHeight={true}
                >
                    {reviews.map((review, i) => (
                        <SwiperSlide key={i} className="flex justify-center">
                            <div className="bg-white rounded-xl shadow-md p-6 text-center max-w-md mx-auto">
                                <p className="text-gray-700 text-base leading-relaxed">{review.text}</p>
                                {review.author && (
                                    <p className="mt-4 font-semibold text-primary text-sm">– {review.author}</p>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>


        {/* Instagram sekce */}
        <section className="bg-gray-200 py-16">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-alumni uppercase tracking-[0.2em]">
                        Instagram
                    </h2>
                    <a
                        href="https://www.instagram.com/kristypitrova.photo/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm md:text-base underline underline-offset-4 text-primary"
                    >
                        @kristypitrova.photo
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {instagramPosts.map((post, i) => (
                        <div
                            key={i}
                            className="transform-gpu transition-transform duration-300 will-change-transform
                                        hover:scale-[1.015]"
                        >
                            <a
                                href={post.href}
                                target="_blank"
                                rel="noreferrer"
                                className="block rounded-xl bg-white/90 shadow-md overflow-hidden hover:shadow-lg
                                            transition-shadow duration-300"
                            >
                                {/* Obrázková část */}
                                <div className="relative w-full aspect-[4/5] overflow-hidden">
                                    <div className="pointer-events-none absolute right-2 top-2 z-10 text-white">
                                        <CopyIcon className="w-4 h-4 drop-shadow" />
                                    </div>

                                    <Image
                                        src={post.img}
                                        alt={post.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 50vw, 20vw"
                                    />
                                </div>

                                {/* Footer */}
                                <div className="px-3 py-2 flex items-center gap-3 text-[11px] text-gray-700 h-8">
                                    <div className="flex items-center gap-1 h-4">
                                        <HeartIcon className="w-4 h-4 text-red-500 fill-red-500" />
                                        <span className="leading-[1] h-4 flex items-center">
                                          {post.likes}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-1 h-4">
                                        <MessageCircleIcon className="w-4 h-4 text-gray-500" />
                                        <span className="leading-[1] h-4 flex items-center">
                                          {post.comments}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>




            </div>
        </section>






      <div className="flex items-center justify-center m-6">
        <Link
          href="/kontakt"
          className="text-sm px-8 py-4 bg-background rounded-full hover:bg-white/30 transition"
        >
          DOMLUVIT FOCENÍ
        </Link>
      </div>
    </>
  );
}
