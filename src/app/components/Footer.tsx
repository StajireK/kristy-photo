import { Facebook, Images, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-sm text-center text-zinc-50">
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
          <Link href="/" className="hover:underline">
            <Images />
          </Link>
          <a href="/about" className="hover:underline">
            <Instagram />
          </a>
          <a href="/gallery" className="hover:underline">
            <Facebook />
          </a>
          <a
            href="/kontakt"
            className="px-6 py-3 bg-primary text-white rounded-full shadow hover:bg-primary/90 transition"
          >
            Domluvit focení
          </a>
        </nav>
      </div>
    </footer>
  );
}
