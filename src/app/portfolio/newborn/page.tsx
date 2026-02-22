import type { Metadata } from "next";
import PortfolioSection from "../PortfolioSection";

export const metadata: Metadata = { title: "Fresh 48 & Newborn" };

export default function NewbornPage() {
    return (
        <PortfolioSection
            title="FRESH 48 & NEWBORN"
            handwrite="Zrození"
            description={`Jednou budou tyto fotografie patřit mezi vzpomínky.
Díky nim se alespoň na chvíli zastaví čas.
Budou krásným a dojemným připomenutím toho,
jak křehké a intenzivní tyto první okamžiky jsou.

Focení Fresh48 ale není jen o miminku.
Je také o ženě. O mámě, která v sobě nese obrovskou bojovnost i zranitelnost. Obdivuji každou z nás 🤍 Mnohdy v sobě objevíme sílu, o které jsme ani netušily.

Je i o muži, který je tady jako jistota a opora.
O muži, kterému se lesknou oči dojetím.
Cítím, jak je pyšný na svou ženu, když v náručí drží svého syna nebo dceru.

Fresh48 je taky o mně.
O tom, jak vidím Váš život. Jak vnímám tyto křehké a intenzivní okamžiky. Jsem tam pro Vás. Můžeme se spolu smát, ale také mlčet a jen si užívat kouzlo přítomného okamžiku.
Nespěchám.`}
            footerText={`Dojímám se, když vidím lásku. Tu opravdovou, která mluví sama za sebe. Stačí jeden pohled mámy na dítě,
muže na ženu, rodičů na staršího sourozence a já cítím, jak jste šťastní.

Miluji být u toho, když se rodí nový život.
A stejně tak miluji, když pro Vás mohu tyto chvíle zachytit a uchovat.
Děkuji, že mě pouštíte do Vašich životů 🤍`}
            images={[
                "/portfolio/newborn/newborn1.jpg",
                "/portfolio/newborn/newborn2.jpg",
                "/portfolio/newborn/newborn3.jpg",
                "/portfolio/newborn/newborn4.jpg",
                "/portfolio/newborn/newborn5.jpg",
                "/portfolio/newborn/newborn6.jpg",
                "/portfolio/newborn/newborn7.jpg",
            ]}
        />
    );
}

