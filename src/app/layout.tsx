import "./globals.css";
import { Nunito } from "next/font/google";
import Header from "./components/Header";

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
        <Header />

        <div className="flex-1 flex flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
