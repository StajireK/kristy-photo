import "./globals.css";
import { Dancing_Script, Quicksand, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import Header from "./components/Header";


const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    variable: "--font-cursive",
});

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
    variable: "--font-quicksand",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
    variable: "--font-playfair",
});


const siteUrl = "https://www.kristypitrova.photo/";
const ogImage = `${siteUrl}/og-image.png`;

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Kristy Pítrová - Photo",
        template: "%s | Kristy Pítrová - Photo\"",
    },
    description: "Rodinná fotografka - Fotím kouzlo okamžíku",

    openGraph: {
        type: "website",
        url: siteUrl,
        title: "Kristy Pítrova - Photo",
        description: "Rodinná fotografka - Fotím kouzlo okamžíku",
        images: [
            {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: "Kristy Pítrová - Photo",
            },
        ],
        locale: "cs_CZ",
    },

    twitter: {
        card: "summary_large_image",
        title: "Kristy Pítrová - Photo",
        description: "Rodinná fotografka - Fotím kouzlo okamžíku",
        images: [ogImage],
    },

    // bonus – ať sedí i ikonky
    icons: {
        icon: "/favicon.ico",
        // nebo třeba:
        // icon: [{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
        // apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="cs" className={`${dancingScript.variable} ${quicksand.variable} ${playfair.variable}`}>
        <body className={`${quicksand.className} bg-bg text-text min-h-screen h-full`}>
        <Header />
        <div className="flex-1 flex flex-col">
            <main className="flex-1">{children}</main>
        </div>
        </body>
        </html>
    );
}
