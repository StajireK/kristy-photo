import "./globals.css";
import Footer from "./components/Footer";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body
        className={`${nunito.className} bg-bg text-text flex flex-col min-h-screen`}
      >
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
