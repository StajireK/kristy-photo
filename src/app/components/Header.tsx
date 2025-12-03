"use client";
import {
    BadgeQuestionMarkIcon,
    CameraIcon,
    Facebook,
    HandCoinsIcon,
    Home,
    Instagram,
    MenuIcon,
    NotebookPenIcon,
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

export default function Header() {
    const openContact = () => {
        window.location.href = "/kontakt";
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
                        src="/kristy-logo-no-bg.png"
                        alt="Kristy Photo Logo"
                        width={120}
                        height={60}
                        className="w-auto"
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

                    <Link href="/portfolio" className={navLinkClass("/portfolio")}>
                        PORTFOLIO
                    </Link>

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
                            "text-lg font-serif ml-6 px-8 py-4 rounded-full shadow transition",
                            pathname === "/contact"
                                ? "bg-[#F1E9D2]/80 "
                                : "bg-[#F1E9D2] hover:bg-[#F1E9D2]/90"
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

                                    <DrawerClose asChild>
                                        <Link
                                            href="/portfolio"
                                            className={navLinkMobileClass("/portfolio")}
                                        >
                                            PORTFOLIO
                                        </Link>
                                    </DrawerClose>

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
