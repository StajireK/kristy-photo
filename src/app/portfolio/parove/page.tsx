import type { Metadata } from "next";
import PortfolioSection from "../PortfolioSection";

export const metadata: Metadata = { title: "Párové focení" };

export default function ParovePage() {
    return (
        <PortfolioSection
            title="PÁROVÉ FOCENÍ"
            handwrite="Láska"
            description={`Párové focení je o zachycení toho, co mezi Vámi opravdu je. Blízkost, něha, láska a vzájemné propojení. Bez nucených póz a křečovitých úsměvů. Jen vy dva, takoví, jací jste. Spolu.

Během focení se snažím vytvořit uvolněnou atmosféru, aby bylo focení příjemným zážitkem pro oba. Procházíme se, povídáme si, smějeme se a já během těchto společných chvil zachycuji Vaše jedinečné momenty. 

Držím v ruce fotoaparát a skrz něj vidím Vás. Tu opravdovou lásku. Stačí jeden pohled, jeden úsměv, jedno pohlazení po tváři a já cítím, jak Vám na sebe záleží.

Ať už slavíte výročí, zásnuby  nebo si prostě chcete jen uchovat společný čas – jsem tu pro Vás. Děkuji, že mi dovolujete být u toho 🤍`}
            images={[
                "/portfolio/parove/parove1.jpg",
                "/portfolio/parove/parove2.jpg",
                "/portfolio/parove/parove3.jpg",
                "/portfolio/parove/parove4.jpg",
                "/portfolio/parove/parove5.jpg",
                "/portfolio/parove/parove6.jpg",
                "/portfolio/parove/parove7.jpg",
            ]}
        />
    );
}

