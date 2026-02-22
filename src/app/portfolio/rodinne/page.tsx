import type { Metadata } from "next";
import PortfolioSection from "../PortfolioSection";

export const metadata: Metadata = { title: "Rodinné focení" };

export default function RodinyPage() {
    return (
        <PortfolioSection
            title="RODINNÉ FOCENÍ"
            handwrite="Blízkost"
            description={`Jak by se Vám líbila představa focení, během kterého můžete být sami sebou? Bez křečovitého pózování a nucených úsměvů. Jen tak být – procházet se, tulit se, smát se. Dovádět s dětmi a užívat si společně strávený čas.
Pokud toužíte po zachycení autentických okamžiků, jsem tu pro Vás. 

Během focení se snažím vytvářet uvolněnou a přátelskou atmosféru, aby se dobře cítili nejen dospělí, ale i děti. Jemně Vás focením provázím, povídáme si a nikam nespěcháme. Je pro mě důležité, abyste si focení opravdu užili a odnesli si z něj nejen krásné fotografie, ale i příjemný zážitek a vzpomínky.

A co když děti zrovna nemají náladu spolupracovat? Nebo se partnerovi do focení úplně nechce? Právě tady je klíčová komunikace. Nebojte se se mnou sdílet své pocity i obavy. Jsem tu pro Vás.`}
            images={[
                "/portfolio/rodiny/rodinne1.jpg",
                "/portfolio/rodiny/rodinne2.jpg",
                "/portfolio/rodiny/rodinne3.jpg",
                "/portfolio/rodiny/rodinne4.jpg",
                "/portfolio/rodiny/rodinne5.jpg",
                "/portfolio/rodiny/rodinne6.jpg",
                "/portfolio/rodiny/rodinne7.jpg",
            ]}
        />
    );
}

