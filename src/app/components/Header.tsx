import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <Image
            src="/kristy-photo-logo.png"
            alt="Kristy Photo Logo"
            width={42}
            height={42}
            className="h-18 w-auto inline-block mr-2"
            priority
          />
        </div>
        <nav className="flex gap-6 text-sm font-medium text-text">
          <Link href="/" className="hover:underline">
            Domů
          </Link>
          <a href="/about" className="hover:underline">
            O mně
          </a>
          <a href="/gallery" className="hover:underline">
            Galerie
          </a>
          <a href="/contact" className="hover:underline">
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
