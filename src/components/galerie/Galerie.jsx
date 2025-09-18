// /components/Galerie.jsx
"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import galerieData from "@/data/Galerie/galerie";

const LightboxClient = dynamic(() => import("@/components/LightboxClient"), { ssr: false });

export default function Galerie() {
    const [open, setOpen] = useState(false);
    const [activeTheme, setActiveTheme] = useState(null); // Index des Themas für die LB
    const [lbIndex, setLbIndex] = useState(0);            // Index im Thema

    const slides =
        activeTheme === null
            ? []
            : galerieData[activeTheme].bilder.map((img, i) => ({
                src: img.src,
                width: img.width,          // optional, verbessert Layout
                height: img.height,
                title: galerieData[activeTheme].thema,
                description: img.alt || `${galerieData[activeTheme].thema} #${i + 1}`,
            }));

    const openLightbox = (themeIdx, imgIdx) => {
        setActiveTheme(themeIdx);
        setLbIndex(imgIdx);
        setOpen(true);
    };

    return (
        <section className="section">
            <div className="container mx-auto">
                {galerieData.map((block, tIdx) => (
                    <div key={block.thema} className="mb-14 lg:mb-20">
                        <h2 className="h2 text-primary mb-6">
                            {block.thema}
                        </h2>

                        {/* Masonry mit CSS columns */}
                        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
                            {block.bilder.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => openLightbox(tIdx, i)}
                                    className="mb-6 w-full break-inside-avoid overflow-hidden rounded-3xl group focus:outline-none focus:ring-2 focus:ring-accent/60"
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt || `${block.thema} ${i + 1}`}
                                        width={img.width || 1600}
                                        height={img.height || 1067}
                                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                                        className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox nur für aktives Thema */}
            <LightboxClient
                key={activeTheme ?? -1}   // <- erzwingt Remount bei Themenwechsel
                open={open}
                index={lbIndex}
                onClose={() => setOpen(false)}
                slides={slides}
            />
        </section>
    );
}
