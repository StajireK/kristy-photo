import {PlusIcon} from "lucide-react";

export default function HomePage() {
    return (
        <>
            <section className="bg-gray-100 py-16">
                <div className="max-w-5xl mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-alumni tracking-[0.2em] text-center mb-8">
                        Ceník focení
                    </h1>

                    {/* 3 balíčky */}
                    <div className="grid gap-8 mb-8 md:grid-cols-2">
                        {/* STANDARD – zvýrazněný */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-primary/30 relative flex flex-col">

                            <h2 className="mt-2 text-xl font-alumni uppercase tracking-[0.15em] mb-2 text-center">
                                BALÍČEK PRO RODINY, PÁRY, TĚHOTENSKÉ FOCENÍ
                            </h2>
                            <p className="text-2xl font-semibold text-primary mb-1 text-center">
                                2 200 Kč
                            </p>

                            <div className="mt-8">
                                <h3 className="text-md font-semibold mb-1">V ceně:</h3>
                                <ul className="text-md text-gray-700 space-y-1 list-disc list-inside">
                                    <li>10 fotografií v plné kvalitě zaslané elektronicky</li>
                                    <li>výběr fotografií z náhledů</li>
                                    <li>doba focení 40 - 60 minut</li>
                                    <li>základní retuš (akné, modřiny, škrábance)</li>
                                    <li>klientský šatník k zapůjčení</li>
                                </ul>
                                <div className="mt-4 text-xs text-gray-500 italic">
                                    Důležité: Po zarezervování termínu focení se platí záloha 1 000 Kč. Tato částka se odečítá od celkové ceny balíčku.
                                </div>
                            </div>

                            <div className="mt-4 text-xs text-gray-500 italic">

                            </div>
                        </div>

                        {/* PREMIUM */}
                        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col">
                            <h2 className="text-xl font-alumni uppercase tracking-[0.15em] mb-2 text-center">
                                NEWBORN A FRESH48 BALÍČEK
                            </h2>
                            <p className="text-2xl font-semibold text-primary mb-8 text-center">
                                2 800 Kč
                            </p>
                            <div className="mt-8">
                                <h3 className="text-md font-semibold mb-1">V ceně:</h3>
                                <ul className="text-md text-gray-700 space-y-1 list-disc list-inside">
                                    <li>15 fotografií v plné kvalitě zaslané elektronicky</li>
                                    <p  className="text-md text-gray-500 mb-4">(vhodné snímky převádím i do černobílé verze)</p>
                                    <li>výběr fotografií z náhledů</li>
                                    <li>doba focení 60 - 90 minut</li>
                                    <li>základní retuš (novorozenecké akné, škrábance)</li>
                                    <li>dětské oblečky k zapůjení</li>
                                </ul>
                                <div className="mt-4 text-xs text-gray-500 italic">
                                    Důležité: Po zarezervování termínu focení se platí záloha 1 000 Kč. Tato částka se odečítá od celkové ceny balíčku.
                                </div>
                                </div>

                            <div className="mt-4 text-xs text-gray-500 italic">
                            </div>
                        </div>
                    </div>
                        {/* MATERNITY */}
                        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col">
                            <h2 className="text-xl font-alumni uppercase tracking-[0.15em] mb-2 text-center">
                                MATERNITY BALÍČEK
                            </h2>
                            <p className="text-2xl font-semibold text-primary mb-8 text-center">
                                4 500 Kč
                            </p>
                            <div className="mt-8 flex flex-col md:flex-row gap-12 justify-center">
                                <ul className="text-md text-gray-700 space-y-1 list-disc list-inside">
                                    <h3 className="text-md font-semibold mb-1">Těhotenské focení</h3>
                                    <li>10 fotografií v plné kvalitě zaslané elektronicky</li>
                                    <p  className="text-md text-gray-500 mb-4">(vhodné snímky převádím i do černobílé verze)</p>
                                    <li>výběr fotografií z náhledů</li>
                                    <li>doba focení 40 - 60 minut</li>
                                    <li>základní retuš (akné, modřiny, škrábance)</li>
                                    <li>klientský šatník k zapůjčení</li>
                                </ul>
                                <div className="flex items-center justify-center">
                                    <PlusIcon size={40}/>
                                </div>
                                <ul className="text-md text-gray-700 space-y-1 list-disc list-inside">


                                <h3 className="text-md font-semibold mb-1">Newborn NEBO Fresh48 focení</h3>
                                    <li>15 fotografií v plné kvalitě zaslané elektronicky</li>
                                    <li>výběr fotografií z náhledů</li>
                                    <li>doba focení 60 - 90 minut</li>
                                    <li>základní retuš (novorozenecké akné, škrábance)</li>
                                    <li>dětské oblečky k zapůjčení</li>

                                </ul>
                            </div>
                            <div className="mt-4 text-xs text-gray-500 italic">
                                Důležité: Po zarezervování termínu focení se platí záloha 2 000 Kč. Tato částka se odečítá od celkové ceny balíčku.
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
                                <span className="font-semibold text-primary">180 Kč / ks</span>
                            </li>
                            <li className="flex flex-wrap justify-between gap-2">
                                <span>Doprava do 20 km z Kopřivnice je zdarma, nad 20 km počítám</span>
                                <span className="font-semibold text-primary">
                  + 10 Kč / km
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
