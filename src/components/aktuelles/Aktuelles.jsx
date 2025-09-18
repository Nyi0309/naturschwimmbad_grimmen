"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import blogData from "@/data/Aktuelles/blog";
import { useState } from "react";

// Lightbox dynamisch & nur im Client laden
const LightboxClient = dynamic(
    () => import("@/components/LightboxClient"),
    { ssr: false }
);

export default function Aktuelles() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const slides = blogData.map((it) => ({
        src: it.bild,            // reicht – Default-Renderer nutzt <img>
        title: it.titel,         // für Captions
        description: it.text,    // für Captions
    }));

    return (
        <section className="section pb-12 lg:pb-32 relative">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {blogData.map((it, i) => (
                        <button
                            key={i}
                            onClick={() => { setIndex(i); setOpen(true); }}
                            className="group relative rounded-3xl overflow-hidden text-left shadow-md focus:outline-none focus:ring-2 focus:ring-accent/60"
                        >
                            <div className="relative w-full aspect-[1/1]">
                                <Image
                                    src={it.bild}
                                    alt={it.titel}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(min-width:1024px) 420px, (min-width:640px) 50vw, 100vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
                            </div>
                            <div className="absolute inset-0 p-5 flex flex-col justify-end">
                                <h3 className="text-white text-xl font-semibold leading-tight drop-shadow">
                                    {it.titel}
                                </h3>
                                <p className="mt-2 text-white/85 text-sm">{it.text}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Lazy Lightbox */}
            <LightboxClient
                open={open}
                index={index}
                onClose={() => setOpen(false)}
                slides={slides}
            />
        </section>
    );
}
