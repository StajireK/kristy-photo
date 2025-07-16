"use client";
import { Facebook, Home, Instagram, MenuIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Header() {
  const openContact = () => {
    window.location.href = "/contact";
  };
  const pathname = usePathname();

  const navLinkClass = (path: string) =>
    clsx(
      "font-alumni text-sm hover:underline flex flex-col items-center",
      pathname === path && "text-soft underline"
    );

  const navLinkMobileClass = (path: string) =>
    clsx(
      "font-alumni text-sm hover:underline flex flex-row gap-2 items-center",
      pathname === path && "text-soft underline"
    );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-[95%] mx-auto px-4 h-[85px] flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/kristy-logo.png"
            alt="Kristy Photo Logo"
            width={66}
            height={66}
            className="w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-lg font-bold text-text items-center">
          <Link href="/" className={navLinkClass("/")}>
            <Home size={20} />
            DOMŮ
          </Link>
          <Link href="/about" className={navLinkClass("/about")}>
            <User size={20} />O MNĚ
          </Link>

          <div className="bg-black ml-2 h-10 w-px" />

          <a
            href="https://www.instagram.com/kristypitrova.photo/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-alumni text-sm hover:underline flex flex-col items-center"
          >
            <Instagram size={20} />
            INSTAGRAM
          </a>
          <a
            href="https://www.facebook.com/tynka.jaluvkova"
            target="_blank"
            rel="noopener noreferrer"
            className="font-alumni text-sm hover:underline flex flex-col items-center"
          >
            <Facebook size={20} />
            FACEBOOK
          </a>
          <Link
            href="/contact"
            className={clsx(
              "text-sm ml-6 px-8 py-4 rounded-full shadow transition",
              pathname === "/contact"
                ? "bg-primary/80 text-white"
                : "bg-primary text-white hover:bg-primary/90"
            )}
          >
            DOMLUVIT FOCENÍ
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle></DrawerTitle>
                <div className="flex flex-col items-center space-y-4 text-lg font-semibold">
                  <DrawerClose asChild>
                    <Link href="/" className={navLinkMobileClass("/")}>
                      <Home size={20} />
                      DOMŮ
                    </Link>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <Link
                      href="/about"
                      className={navLinkMobileClass("/about")}
                    >
                      <User size={20} />O MNĚ
                    </Link>
                  </DrawerClose>

                  <DrawerClose asChild>
                    <a
                      href="https://www.instagram.com/kristypitrova.photo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-alumni text-sm hover:underline flex flex-row gap-2 items-center"
                    >
                      <Instagram size={20} />
                      INSTAGRAM
                    </a>
                  </DrawerClose>

                  <DrawerClose asChild>
                    <a
                      href="https://www.facebook.com/tynka.jaluvkova"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-alumni text-sm hover:underline flex flex-row gap-2 items-center"
                    >
                      <Facebook size={20} />
                      FACEBOOK
                    </a>
                  </DrawerClose>
                </div>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button
                    onClick={openContact}
                    className={clsx(
                      "w-full font-alumni text-sm mb-2",
                      pathname === "/contact" && "bg-primary/80 text-white"
                    )}
                  >
                    DOMLUVIT FOCENÍ
                  </Button>
                </DrawerClose>

                <DrawerClose asChild>
                  <Button
                    className="w-full font-alumni text-sm"
                    variant="outline"
                  >
                    ZAVŘÍT
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
