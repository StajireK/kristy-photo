import { Facebook, Home, Instagram, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white text-sm text-center text-zinc-50">
      <div className="max-w-[90%] mx-auto px-4 flex justify-between items-center">
        <div>
          <Image
            src="/kristy-photo-logo.png"
            alt="Kristy Photo Logo"
            width={66}
            height={66}
            className=" w-auto inline-block mr-2"
            priority
          />
        </div>
        <nav className="flex gap-6 text-sm font-medium text-text py-4 items-center">
          <Link href="/" className="hover:underline flex flex-col items-center">
            <Home />
            Domů
          </Link>
          <a
            href="/about"
            className="hover:underline flex flex-col items-center"
          >
            <User />O mně
          </a>

          <div className="bg-black ml-2 h-10 w-px" />

          <a
            href="https://www.instagram.com/kristypitrova.photo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex flex-col items-center"
          >
            <Instagram />
            Instagram
          </a>
          <a
            href="https://www.facebook.com/tynka.jaluvkova"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex flex-col items-center"
          >
            <Facebook />
            Facebook
          </a>
          <a
            href="/kontakt"
            className="px-6 py-3 bg-primary text-white rounded-full shadow hover:bg-primary/90 transition"
          >
            Domluvit focení
          </a>
        </nav>
      </div>
    </header>
  );
}
