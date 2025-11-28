export default function HomePage() {
    return (
        <>
            <section className="bg-gray-100 py-16">
                <div className="max-w-5xl mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-alumni tracking-[0.2em] text-center mb-4">
                        Ceník focení
                    </h1>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-sm md:text-base">
                        Ceny jsou uvedeny za focení v okolí Veřovic. Všechny balíčky obsahují
                        pečlivě upravené fotografie v online galerii, ze které si své snímky
                        pohodlně vyberete.
                    </p>

                    {/* 3 balíčky */}
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* MINI */}
                        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col">
                            <h2 className="text-lg font-alumni uppercase tracking-[0.15em] mb-2">
                                MINI balíček
                            </h2>
                            <p className="text-2xl font-semibold text-primary mb-1">
                                1 500 Kč
                            </p>
                            <p className="text-xs uppercase text-gray-500 mb-4">
                                15–20 minut · 5 upravených fotografií
                            </p>

                            <p className="text-sm text-gray-700 mb-4">
                                Ideální pro rychlé portréty, páry, děti, profilovky nebo mini
                                rodinné focení.
                            </p>

                            <div className="mt-2">
                                <h3 className="text-sm font-semibold mb-1">V ceně:</h3>
                                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                                    <li>základní retuš</li>
                                    <li>online galerie k výběru</li>
                                    <li>možnost dokoupit fotografie navíc</li>
                                </ul>
                            </div>

                            <div className="mt-4 text-xs text-gray-500 italic">
                                Tento balíček je skvělý pro ty, kteří si chtějí focení nejprve
                                vyzkoušet nebo mají obavu z ceny.
                            </div>
                        </div>

                        {/* STANDARD – zvýrazněný */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-primary/30 relative flex flex-col">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-semibold px-3 py-1 rounded-full tracking-wide">
                                Nejoblíbenější
                            </div>

                            <h2 className="mt-2 text-lg font-alumni uppercase tracking-[0.15em] mb-2">
                                STANDARD balíček
                            </h2>
                            <p className="text-2xl font-semibold text-primary mb-1">
                                2 500 Kč
                            </p>
                            <p className="text-xs uppercase text-gray-500 mb-4">
                                cca 60 minut · 12 upravených fotografií
                            </p>

                            <p className="text-sm text-gray-700 mb-4">
                                Nejčastější volba pro rodinné focení, páry nebo těhotenské
                                focení. Dostatek času na uvolněnou atmosféru i různé záběry.
                            </p>

                            <div className="mt-2">
                                <h3 className="text-sm font-semibold mb-1">V ceně:</h3>
                                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                                    <li>vedení při focení a pomoc s pózováním</li>
                                    <li>výběr z online galerie</li>
                                    <li>pečlivá retuš a barevná úprava</li>
                                    <li>možnost přikoupit fotografie navíc</li>
                                </ul>
                            </div>

                            <div className="mt-4 text-xs text-gray-500 italic">
                                Ideální poměr ceny a výsledku – skvělá volba pro rodiny v okolí
                                menšího města.
                            </div>
                        </div>

                        {/* PREMIUM */}
                        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col">
                            <h2 className="text-lg font-alumni uppercase tracking-[0.15em] mb-2">
                                PREMIUM balíček
                            </h2>
                            <p className="text-2xl font-semibold text-primary mb-1">
                                3 200 Kč
                            </p>
                            <p className="text-xs uppercase text-gray-500 mb-4">
                                90 minut · 20 upravených fotografií
                            </p>

                            <p className="text-sm text-gray-700 mb-4">
                                Pro větší rodiny, lifestyle focení, páry, těhulky nebo
                                portrétní série, kdy chcete více záběrů i zážitku.
                            </p>

                            <div className="mt-2">
                                <h3 className="text-sm font-semibold mb-1">V ceně:</h3>
                                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                                    <li>možnost fotit na více místech v okolí</li>
                                    <li>mini styling – doporučení oblečení</li>
                                    <li>pečlivá retuš a barevná editace</li>
                                    <li>online galerie ke stažení</li>
                                    <li>přednostní dodání fotografií</li>
                                </ul>
                            </div>

                            <div className="mt-4 text-xs text-gray-500 italic">
                                Vyberou si ho hlavně ti, kteří chtějí z focení udělat malý
                                zážitek pro sebe i svou rodinu.
                            </div>
                        </div>
                    </div>

                    {/* Příplatky */}
                    <div className="mt-12 bg-white rounded-2xl shadow-md p-6 md:p-8">
                        <h2 className="text-xl font-alumni uppercase tracking-[0.15em] mb-4 text-center md:text-left">
                            Příplatky
                        </h2>

                        <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex flex-wrap justify-between gap-2">
                                <span>Extra fotografie nad rámec balíčku</span>
                                <span className="font-semibold text-primary">150 Kč / ks</span>
                            </li>
                            <li className="flex flex-wrap justify-between gap-2">
                                <span>Expresní dodání hotových fotografií do 3 dnů</span>
                                <span className="font-semibold text-primary">+ 500 Kč</span>
                            </li>
                            <li className="flex flex-wrap justify-between gap-2">
                                <span>Každých 10 km mimo výchozí lokalitu</span>
                                <span className="font-semibold text-primary">
                  + 8 Kč / km
                </span>
                            </li>
                            <li className="flex flex-wrap justify-between gap-2">
                                <span>Další osoba nad 5 lidí (např. rozšířená rodina)</span>
                                <span className="font-semibold text-primary">
                  + 150 Kč / osoba
                </span>
                            </li>
                            <li className="flex flex-wrap justify-between gap-2">
                                <span>Více lokací (přesun v rámci focení)</span>
                                <span className="font-semibold text-primary">
                  + 200 Kč
                </span>
                            </li>
                        </ul>

                        <p className="mt-4 text-xs text-gray-500 italic">
                            Extra fotografie a příplatky jsou dopočítávány až po výběru
                            finálních snímků z online galerie.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
