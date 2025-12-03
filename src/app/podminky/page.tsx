"use client";

export default function TermsPage() {
    return (
        <div className="bg-gray-100 min-h-screen py-16 px-4">
            <div className="max-w-3xl mx-auto">

                {/* Nadpis */}
                <h1 className="text-center text-4xl font-alumni tracking-[0.15em] mb-2">
                    Obchodní podmínky
                </h1>

                <p className="text-center text-gray-700 mb-10 max-w-xl mx-auto">
                    Tyto obchodní podmínky upravují vztah mezi klientem a fotografem při sjednání fotografických služeb.
                </p>

                {/* Info blok */}
   {/*             <div className="bg-white p-6 rounded-xl shadow-sm mb-10">
                    <p><strong>Kristýna Pítrová</strong></p>
                    <p>IČO: ??</p>
                    <p>Sídlo: Mniší 143</p>
                    <p>Nejsem plátce DPH</p>
                </div>*/}

                {/* Podmínky */}
                <div className="space-y-8">

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="font-semibold text-lg mb-2">1. Objednání služeb</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Služby fotografa lze objednat emailem nebo přes zprávy na sociálních sítích Facebook/Instagram.
                            Objednáním služeb je automaticky potvrzeno přijetí obchodních podmínek a souhlas s nimi.
                            Klient se má za to, že je seznámen s fotografickým stylem fotografa a souhlasí s ním.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="font-semibold text-lg mb-2">2. Rezervační poplatek</h2>
                        <p className="text-gray-700 leading-relaxed">
                            U focení je vyžadován rezervační poplatek ve výši 50% z dané částky. Rezervační poplatek slouží k závazné rezervaci termínu.
                            Poplatek se nevrací v případě zrušení objednávky klientem a slouží k pokrytí škod způsobených jeho nepřítomností.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="font-semibold text-lg mb-2">3. Cena</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Cena služeb se řídí aktuálním ceníkem platným v den objednávky, nebo je sjednána individuálně.
                            Klient je povinen uhradit cenu včas a v plné výši podle dohodnutých podmínek.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="font-semibold text-lg mb-2">4. Termíny</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Fotograf se zavazuje dodržet dohodnuté termíny dodání služeb.
                            Klient je povinen dodat všechny potřebné informace včas.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="font-semibold text-lg mb-2">5. Doba fotografování</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Maximální doba fotografování je stanovena na 1,5 hodiny a bez předchozí dohody ji nelze prodlužovat.
                            Fotograf si vyhrazuje právo účtovat přesčasové hodiny přesahující dohodnutý čas.
                            <br /><br />
                            Pozdní příchod klienta není důvodem k prodloužení focení.
                            Pokud se klient opozdí o více než 20 minut bez upozornění, fotograf může focení zrušit
                            (zaplacená záloha propadá).
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="font-semibold text-lg mb-2">6. Výběr fotografií</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Náhledy jsou zasílány online formou galerie.
                            Maximální doba pro výběr fotografií je 5 týdnů. Po jejím uplynutí provede výběr fotograf sám.
                            <br /><br />
                            Minimální počet fotografií k odběru je dán cenovým balíčkem.
                            Další fotografie nad rámec balíčku jsou zpoplatněny dle ceníku.
                            <br /><br />
                            Fotograf nenese odpovědnost za spolupráci fotografovaných osob či zvířat, pokud to ovlivní počet kvalitních záběrů.
                            Neupravené soubory jsou uchovány max. 2 měsíce.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="font-semibold text-lg mb-2">7. Úprava fotografií</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Odevzdané fotografie jsou upraveny dle stylu fotografa (barvy, expozice, ořez, drobné retuše).
                            Fotograf neprovádí rozsáhlé retuše jako změny postavy, rozháhlé odstraňování předmětů, či výrazné úpravy vzhledu.
                            <br /><br />
                            Fotograf odevzdává pouze upravené JPG fotografie. Neupravené RAW neposkytuje.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="font-semibold text-lg mb-2">8. Reklamace</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Nespokojenost klienta s vlastním vzhledem není důvodem k reklamaci.
                            Nesouhlas s estetickým stylem fotografa není důvodem k reklamaci.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="font-semibold text-lg mb-2">9. Autorská práva</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Náhledy nesmí být publikovány.
                            Fotografie nesmí být upravovány ani filtrovány bez souhlasu fotografa dle autorského zákona č. 121/2000 Sb.
                            <br /><br />
                            Fotografie jsou majetkem autora a nesmí být používány pro komerční účely, propagaci nebo prodej
                            bez písemného souhlasu fotografa.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="font-semibold text-lg mb-2">10. Předání zakázky</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Fotografie jsou předávány elektronicky, formou odkazu ke stažení z online galerie.
                            Klient je povinen fotografie uložit a zálohovat.
                            <br /><br />
                            Náhledy k výběru – do 1 týdne od focení.
                            Finální fotografie – do 4 týdnů od výběru.
                            <br />
                            V případě nemoci nebo dovolené může být termín prodloužen.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="font-semibold text-lg mb-2">11. Archivace fotografií</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Fotograf archivuje fotografie max. 3 měsíce od jejich pořízení.
                        </p>
                    </div>

                </div>

                <p className="text-center text-sm text-gray-500 mt-12">
                    Tyto obchodní podmínky jsou platné od 28. 11. 2025
                </p>

            </div>
        </div>
    );
}
