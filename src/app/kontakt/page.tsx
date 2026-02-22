"use client";

import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-gray-100 min-h-screen py-16 px-4">
            <div className="max-w-xl mx-auto">
                <div className="flex justify-center mb-6">
                    <header className="inline-flex flex-col items-center relative">
                        <h1 className="!mb-0 absolute z-10 bottom-0 left-1/2 -translate-x-1/2 tracking-[0.15em] font-alumni uppercase text-2xl whitespace-nowrap">
                            Kontaktujte mě
                        </h1>
                        <p className="handwrite-xl relative z-0 whitespace-nowrap text-8xl md:text-9xl">
                            Napište mi
                        </p>
                    </header>
                </div>
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">

                <p className="text-center text-gray-700 mb-8">
                    Nejraději s Vámi budu v kontaktu přes{" "}
                    <strong>Instagram</strong> nebo <strong>Facebook</strong> – tam také
                    najdete moji aktuální tvorbu, ukázky focení a novinky.
                </p>

                {/* Primární CTA – sociální sítě */}
                <div className="space-y-4 mb-10">
                    <Link
                        href="https://www.instagram.com/kristypitrova.photo/"
                        target="_blank"
                        className="flex items-center justify-center gap-2 w-full rounded-full border border-gray-200 py-3 px-4 text-sm md:text-base font-medium bg-white hover:bg-gray-50 transition"
                    >
                        <Instagram className="w-5 h-5" />
                        <span>Napsat mi na Instagramu</span>
                    </Link>

                    <Link
                        href="https://www.facebook.com/profile.php?id=61579282733001"
                        target="_blank"
                        className="flex items-center justify-center gap-2 w-full rounded-full border border-gray-200 py-3 px-4 text-sm md:text-base font-medium bg-white hover:bg-gray-50 transition"
                    >
                        <Facebook className="w-5 h-5" />
                        <span>Napsat mi na Facebooku</span>
                    </Link>
                </div>

                {/* Sekundární možnost – e-mail */}
                <div className="border-t border-gray-100 pt-6">
                    <p className="text-center text-gray-600 text-sm mb-3">
                        Nemáte Instagram ani Facebook?
                    </p>
                    <p className="text-center text-gray-700 text-sm">
                        Napište mi e-mail na:{" "}
                        <a
                            href="mailto:kristypitrovaphoto@gmail.com"
                            className="inline-flex items-center gap-1 font-medium text-primary underline underline-offset-4"
                        >
                            <Mail className="w-4 h-4" />
                            <span>kristypitrovaphoto@gmail.com</span>
                        </a>
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
}
