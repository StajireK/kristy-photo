"use client";

import React from "react";

export default function QuestionsPage() {
    const questions = [
        {
            q: "Jak se můžeme objednat?",
            a: (
                <>
                    Můžete mě kontaktovat pomocí kontaktního formuláře, nebo mi napsat email na{" "}
                    <strong>kristypitrovaphoto@gmail.com</strong>.
                    Případně mi můžete napsat zprávu na Instagramu nebo Facebooku.
                </>
            ),
        },
        {
            q: "Kdy je vhodná doba pro objednání focení?",
            a: (
                <>
                    U rodinného nebo párového focení záleží na sezónnosti a obsazenosti termínů.
                    Většinou Vás objednám do 14 dnů, ale může se stát, že mám termíny i na několik
                    měsíců dopředu.
                    <br /><br />
                    <strong>Těhotenské focení</strong> je nejlepší kolem 7. měsíce těhotenství.
                    <br />
                    <strong>Newborn focení</strong> je ideální ve věku 2–3 týdnů miminka.
                    <br />
                    <strong>Fresh48 focení</strong> se koná do 2 dnů od porodu — napište mi prosím
                    alespoň měsíc dopředu, abych s termínem počítala.
                </>
            ),
        },
        {
            q: "Jak focení probíhá?",
            a: (
                <>
                    Snažím se o co nejpřirozenější průběh focení — žádné křečovité pózy.
                    Pro mě je důležitý upřímný smích, pohoda a pozitivní nálada.
                    <br /><br />
                    Chci, abyste si focení užili bez stresu, vklidu a přirozeně.
                    Při focení s dětmi nikam nespěchám, zapojuji hru a společnou aktivitu,
                    aby se cítily uvolněně.
                </>
            ),
        },
        {
            q: "Kde focení probíhá?",
            a: (
                <>
                    Nejraději fotím v přírodě nebo u Vás doma.
                    Mám několik oblíbených lokalit, které ráda doporučím, případně fotím na
                    místě, které si sami vyberete.
                    <br /><br />
                    Nejčastěji fotím v okolí Kopřivnice.
                    Doprava do 20 km je zdarma, nad 20 km účtuji 10 Kč/km.
                </>
            ),
        },
        {
            q: "Jaké oblečení na focení zvolit?",
            a: (
                <>
                    Vyberte si oblečení, ve kterém se cítíte pohodlně.
                    Obecně platí, že <strong>v jednoduchosti je krása</strong>.
                    <br /><br />
                    Vyhněte se prosím výrazným barvám a velkým nápisům.
                    Doporučuji přírodní tóny jako bílá, béžová, hnědá, khaki nebo pastelové barvy.
                    Vrstvení oblečení dodá fotkám hloubku a zajímavost.
                    <br /><br />
                    Brzy přidám i barevnou škálu pro inspiraci.
                </>
            ),
        },
        {
            q: "Kdy a jak dostaneme fotografie?",
            a: (
                <>
                    Do týdne po focení Vám pošlu online náhledovou galerii, ze které si sami vyberete
                    fotografie k úpravě.
                    <br /><br />
                    Finální fotografie obdržíte do 4 týdnů (pokud se nedomluvíme jinak).
                    Fotky posílám v plném rozlišení přes odkaz na online galerii.
                    <br /><br />
                    Neupravené fotografie neposkytuji.
                </>
            ),
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen py-16 px-4">
            <div className="max-w-3xl mx-auto">

                {/* Nadpis */}
                <h1 className="text-center text-4xl font-alumni tracking-[0.15em] mb-2">
                    Často se mě ptáte
                </h1>
                <p className="text-center text-gray-700 mb-10 max-w-xl mx-auto">
                    Zde najdete odpovědi na dotazy, které ode mě často dostáváte.
                    Pokud nenajdete odpověď na svou otázku, klidně mi napište — ráda pomůžu.
                </p>

                {/* Q&A blok */}
                <div className="space-y-6">
                    {questions.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                        >
                            <h3 className="font-semibold text-lg mb-2 text-primary">{item.q}</h3>
                            <p className="text-gray-700 leading-relaxed">{item.a}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
