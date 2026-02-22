import type { Metadata } from "next";
import PortfolioSection from "../PortfolioSection";

export const metadata: Metadata = { title: "Těhotenské focení" };

export default function TehotenskePage() {
    return (
        <PortfolioSection
            title="TĚHOTENSKÉ FOCENÍ"
            handwrite="Propojení"
            description={`Těhotenství je jedním z nejkrásnějších a nejintenzivnějších období v životě ženy. Chci zachytit tu sílu, krásu i zranitelnost, která z Vás vyzařuje – bez nucených póz, jen přirozeně a s láskou. 
            
            Focení probíhá nejčastěji kolem 30.–34. týdne, kdy je bříško krásně vidět. Je to čas jen pro Vás. Moment, kdy nosíte svůj největší poklad pod srdcem a každý dotek, každý pohled říká víc než slova.`}
            images={[
                "/portfolio/tehotenske/tehotenske1.jpg",
                "/portfolio/tehotenske/tehotenske2.jpg",
                "/portfolio/tehotenske/tehotenske3.jpg",
                "/portfolio/tehotenske/tehotenske4.jpg",
                "/portfolio/tehotenske/tehotenske5.jpg",
                "/portfolio/tehotenske/tehotenske6.jpg",
                "/portfolio/tehotenske/tehotenske7.jpg",
            ]}
        />
    );
}


