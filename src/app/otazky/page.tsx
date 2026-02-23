"use client";

import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

export default function QuestionsPage() {
    return (
        <div className="bg-gray-100 min-h-screen py-16 px-4">
            <div className="max-w-3xl mx-auto">

                {/* Nadpis ve stylu Portfolio – rukopisný dekor + kapitálky */}
                <div className="flex justify-center mb-10">
                    <header className="inline-flex flex-col items-center relative">
                        <h1 className="!mb-0 absolute z-10 bottom-0 left-1/2 -translate-x-1/2 tracking-[0.15em] uppercase text-2xl whitespace-nowrap font-semibold font-playfair">
                            Často se mě ptáte
                        </h1>
                        <p className="handwrite-xl relative z-0 whitespace-nowrap text-6xl md:text-9xl">
                            Otázky
                        </p>
                    </header>
                </div>

                <p className="text-center text-gray-700 mb-10">
                    Zde najdete odpovědi na dotazy, které od Vás často dostávám a co Vás nejčastěji
                    zajímá. Pokud by Vás ale zajímalo i cokoliv jiného a odpověď zde nevidíte, určitě
                    mi napište. Ráda na vše odpovím.
                </p>

                {/* Q1 */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition mb-6">
                    <h3 className="font-semibold text-lg mb-2 text-primary">
                        Jak se můžeme objednat?
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        Můžete mě kontaktovat pomocí Instagramu nebo Facebooku, nebo mi napište email
                        na kristypitrovaphoto@gmail.com.
                    </p>
                    <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-center md:flex-wrap">
                        <p>Všechny potřebné odkazy najdete v sekci</p>
                        <Link
                            href="/kontakt"
                            className={clsx(
                                "w-fit inline-block text-sm   px-4 py-2 rounded-full shadow transition",
                                "bg-[#F1E9D2] hover:bg-[#F1E9D2]/90"
                            )}
                        >
                            DOMLUVIT FOCENÍ
                        </Link>
                    </div>
                </div>

                {/* Q2 */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition mb-6">
                    <h3 className="font-semibold text-lg mb-2 text-primary">
                        Kdy je vhodná doba pro objednání focení?
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        U rodinného nebo párového focení záleží na sezónnosti a obsazenosti termínů.
                        Většinou Vás objednám do 14 dnů, ale může se stát, že mám třeba i na několik
                        měsíců vybookováno. Pokud u mě tedy chcete mít konkrétní termín jistý, pište
                        klidně 2 měsíce dopředu.

                    </p>
                    <p className="mt-4">
                        <strong>Těhotenské focení</strong> je nejlepší fotit kolem  7. měsíce
                        těhotenství, abyste se cítila pohodlně.
                    </p>
                    <p className="mt-4">
                        <strong>Newborn focení</strong> je vhodné fotit kolem 2
                        až 3 týdnů miminka.
                    </p>
                    <p className="mt-4">
                        Pokud máte zájem o <strong>focení Fresh48</strong>, kdy se obvykle fotí do 2
                        dnů od narození miminka, napište mi prosím minimálně měsíc před termínem
                        porodu, abych s tímto termínem už dopředu mohla počítat.
                    </p>
                </div>

                {/* Q3 */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition mb-6">
                    <h3 className="font-semibold text-lg mb-2 text-primary">
                        Jak focení probíhá?
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        Během focení se snažím o co nejpřirozenější průběh. Žádné křečovité pózy ani
                        povely. Pro mě je důležitý upřímný smích, pohoda a pozitivní nálada. Chci,
                        abyste si společně se mnou focení opravdu užívali – bez stresu, s radostí a
                        lehkostí. Mým cílem je, abyste se cítili uvolněně, přirozeně a nebáli se
                        projevit své city a emoce. Snažím se vnímat každý okamžik a ten pak přenést do
                        fotografií. Při focení s dětmi se snažím nikam nespěchat. Zapojit do focení
                        hru, společenou aktivitu, aby to pro ně byla zábava.
                    </p>
                </div>

                {/* Q4 */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition mb-6">
                    <h3 className="font-semibold text-lg mb-2 text-primary">
                        Kde focení probíhá?
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        Nejraději fotím venku v přírodě nebo u Vás doma. Několik lokalit venku mám
                        vytipovaných a jsou mé oblíbené, takže Vám je ráda doporučím. A nebo nechám
                        výběr na Vás, pokud máte své oblíbené, speciální místo, na které byste mě rádi
                        vzali. Nejčastěji fotím v okolí Kopřivnice. Doprava do 20 km z Kopřivnice je
                        zdarma, nad 20 km počítám 10 Kč/km.
                    </p>
                </div>

                {/* Q5 */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition mb-6">
                    <h3 className="font-semibold text-lg mb-2 text-primary">
                        Jaké oblečení na focení zvolit?
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        Určitě něco, v čem se cítíte pohodlně. Avšak většinou platí, že v jednoduchosti
                        je síla a krása. Proto se prosím vyhněte velkým nápisům, vzorům a výrazným
                        barvám (např.: křiklavě růžová, sytě oranžová nebo neonově zelená nevypadají na
                        fotografiích lichotivě). Nejčastěji proto doporučuji přírodní a zemité barvy,
                        jako je bílá, béžová, hnědá, olivově zelená či džínovina. Popřípadě zvolit
                        barvy pastelové. Vrstvení oblečení dodá také zajímavý efekt na fotkách. Pro
                        inspiraci přikládám barevnou škálu.
                    </p>
                    <div className="flex justify-center my-4">
                        <Image
                            src="/barevna-skala.jpg"
                            alt="Me"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>

                {/* Q6 */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition mb-6">
                    <h3 className="font-semibold text-lg mb-2 text-primary">
                        Kdy a jak dostaneme fotografie?
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        Po nafocení fotografií Vám posílám do týdne online náhledovou galerii, ze které
                        si sami vybíráte fotografie k finální úpravě. Jakmile fotografie vyberete a
                        zaplatíte, obdržíte finální fotografie v plném rozlišení do 4 týdnů (pokud Vás
                        předem neinformuji jinak). Hotové fotografie Vám zasílám skrze odkaz na online
                        galerii. Neupravené fotky neposkytuji.
                    </p>
                </div>

            </div>
        </div>
    );
}
