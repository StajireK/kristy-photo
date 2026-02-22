"use client";
import {
    Facebook,
    Instagram,
    MenuIcon,
    ChevronDown,
} from "lucide-react";
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
import { useState, useRef } from "react";

const portfolioLinks = [
    { href: "/portfolio/newborn", label: "FRESH 48 & NEWBORN" },
    { href: "/portfolio/rodinne", label: "RODINNÉ FOCENÍ" },
    { href: "/portfolio/tehotenske", label: "TĚHOTENSKÉ FOCENÍ" },
    { href: "/portfolio/parove", label: "PÁROVÉ FOCENÍ" },
];

export default function Header() {
    const openContact = () => { window.location.href = "/kontakt"; };
    const pathname = usePathname();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [portfolioOpen, setPortfolioOpen] = useState(true);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const isPortfolioActive = pathname.startsWith("/portfolio");

    const navLinkClass = (path: string) =>
        clsx(
            " text-sm hover:underline flex flex-col items-center",
            pathname === path && "text-soft underline"
        );

    const navLinkMobileClass = (path: string) =>
        clsx(
            "text-sm hover:underline flex flex-row gap-2 items-center",
            pathname === path && "text-soft underline"
        );

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-[95%] mx-auto px-4 h-[85px] flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/kristy-logo-no-bg.png"
                        alt="Kristy Photo Logo"
                        width={240}
                        height={120}
                        quality={100}
                        className="w-[120px] h-auto"
                        priority
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex gap-6 text-2xl font-serif text-text items-center">
                    <Link href="/" className={navLinkClass("/")}>
                        DOMŮ
                    </Link>
                    <Link href="/cenik" className={navLinkClass("/cenik")}>
                        CENÍK
                    </Link>

                    {/* Portfolio dropdown */}
                    <div
                        className="relative"
                        ref={dropdownRef}
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <button
                            className={clsx(
                                "font-alumni text-sm hover:underline flex flex-row items-center gap-1",
                                isPortfolioActive && "text-soft underline"
                            )}
                        >
                            PORTFOLIO
                            <ChevronDown size={12} className={clsx("transition-transform", dropdownOpen && "rotate-180")} />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                                <div className="bg-white border border-gray-100 rounded-xl py-2 flex flex-col min-w-[220px]" style={{ boxShadow: "0 8px 40px 0 rgba(0,0,0,0.18)" }}>
                                    {portfolioLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setDropdownOpen(false)}
                                            className={clsx(
                                                "font-alumni text-sm px-5 py-2.5 hover:bg-gray-50 whitespace-nowrap tracking-[0.08em]",
                                                pathname === link.href && "text-soft"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <Link href="/otazky" className={navLinkClass("/otazky")}>
                        Q&A
                    </Link>

                    <Link href="/podminky" className={navLinkClass("/podminky")}>
                        OBCHODNÍ PODMÍNKY
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
                        href="https://www.facebook.com/profile.php?id=61579282733001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-alumni text-sm hover:underline flex flex-col items-center"
                    >
                        <Facebook size={20} />
                        FACEBOOK
                    </a>
                    <Link
                        href="/kontakt"
                        className={clsx(
                            "text-lg font-serif ml-6 px-6 py-2 rounded-full shadow transition",
                            pathname === "/kontakt"
                                ? "bg-[#F1E9D2]/60 "
                                : "bg-[#F1E9D2] hover:bg-[#F1E9D2]/70"
                        )}
                    >
                        DOMLUVIT FOCENÍ
                    </Link>
                </nav>

                {/* Mobile: logo vlevo, vpravo IG + FB + menu v jednom řádku */}
                <div className="flex items-center gap-4 md:hidden">
                    <a
                        href="https://www.instagram.com/kristypitrova.photo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-alumni text-sm hover:underline flex flex-col items-center"
                    >
                        <Instagram size={20} />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61579282733001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-alumni text-sm hover:underline flex flex-col items-center"
                    >
                        <Facebook size={20} />
                    </a>

                    <Drawer>
                        <DrawerTrigger>
                            <MenuIcon />
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle></DrawerTitle>
                                <div className="flex flex-col items-center space-y-4 text-2xl font-serif">
                                    <DrawerClose asChild>
                                        <Link href="/" className={navLinkMobileClass("/")}>
                                            DOMŮ
                                        </Link>
                                    </DrawerClose>

                                    <DrawerClose asChild>
                                        <Link
                                            href="/cenik"
                                            className={navLinkMobileClass("/cenik")}
                                        >
                                            CENÍK
                                        </Link>
                                    </DrawerClose>

                                    {/* Portfolio submenu v mobile */}
                                    <div className="flex flex-col items-center w-full">
                                        <button
                                            className={clsx(
                                                "font-alumni text-sm hover:underline flex flex-row gap-2 items-center",
                                                isPortfolioActive && "text-soft underline"
                                            )}
                                            onClick={() => setPortfolioOpen((v) => !v)}
                                        >
                                            PORTFOLIO
                                            <ChevronDown size={14} className={clsx("transition-transform", portfolioOpen && "rotate-180")} />
                                        </button>
                                        {portfolioOpen && (
                                            <div className="flex flex-col items-center gap-2 mt-2 w-full">
                                                {portfolioLinks.map((link) => (
                                                    <DrawerClose key={link.href} asChild>
                                                        <Link
                                                            href={link.href}
                                                            className={clsx(
                                                                "font-alumni text-xs tracking-[0.08em] text-gray-500 hover:text-soft",
                                                                pathname === link.href && "text-soft underline"
                                                            )}
                                                        >
                                                            {link.label}
                                                        </Link>
                                                    </DrawerClose>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <DrawerClose asChild>
                                        <Link
                                            href="/otazky"
                                            className={navLinkMobileClass("/otazky")}
                                        >
                                            Q&A
                                        </Link>
                                    </DrawerClose>

                                    <DrawerClose asChild>
                                        <Link
                                            href="/podminky"
                                            className={navLinkMobileClass("/podminky")}
                                        >
                                            OBCHODNÍ PODMÍNKY
                                        </Link>
                                    </DrawerClose>

                                    <div className="bg-black ml-2 h-px w-10" />

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
                                            pathname === "/kontakt" && "bg-primary/80 text-white"
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
