import "./globals.css";
import { Nunito } from "next/font/google";
import Header from "./components/Header";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});
// layout.tsx nebo kdekoliv dřív
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-cursive",
  // 👇 tohle přidá .className pro přímé použití
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${nunito.className} ${dancingScript.variable}`}>
      <body className="bg-bg text-text min-h-screen h-full">
        <Header />
        <div className="flex-1 flex flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
