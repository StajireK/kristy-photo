"use client";
import { Facebook, Home, Instagram, Menu, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-[95%] mx-auto px-4 h-[85px] flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/kristy-photo-logo.png"
            alt="Kristy Photo Logo"
            width={66}
            height={66}
            className="w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-lg font-bold text-text items-center">
          <Link href="/" className="hover:underline flex flex-col items-center">
            <Home size={20} />
            Domů
          </Link>
          <Link
            href="/about"
            className="hover:underline flex flex-col items-center"
          >
            <User size={20} />O mně
          </Link>

          <div className="bg-black ml-2 h-10 w-px" />

          <a
            href="https://www.instagram.com/kristypitrova.photo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex flex-col items-center"
          >
            <Instagram size={20} />
            Instagram
          </a>
          <a
            href="https://www.facebook.com/tynka.jaluvkova"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex flex-col items-center"
          >
            <Facebook size={20} />
            Facebook
          </a>
          <Link
            href="/contact"
            className="text-sm px-6 py-2 bg-primary text-white rounded-full shadow hover:bg-primary/90 transition"
          >
            Domluvit focení
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav panel */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="flex flex-col items-center py-4 space-y-4 text-lg font-semibold">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Domů
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              O mně
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Domluvit focení
            </Link>
            <a
              href="https://www.instagram.com/kristypitrova.photo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/tynka.jaluvkova"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
