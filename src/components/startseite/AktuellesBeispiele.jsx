"use client";

import Image from "next/image";
import beispielData from "@/data/Startseite/Aktuelles/beispiele";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 0.1,     // Start-Delay für das erste Child
            staggerChildren: 0.12,  // Abstand zwischen den Cards
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] },
    },
};

export default function AktuellesBeispiele() {
    return (
        <section className="section relative">
            <div className="container mx-auto">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {beispielData.map((it, i) => (
                        <motion.article
                            key={i}
                            variants={item}
                            className="group relative rounded-3xl overflow-hidden shadow-md"
                        >
                            {/* Bild + Abdunklung */}
                            <div className="relative w-full aspect-[1/1]">
                                <Image
                                    src={it.bild}
                                    alt={it.text}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(min-width:1024px) 420px, (min-width:640px) 50vw, 100vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
                            </div>

                            {/* Text + Button */}
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 space-y-6">
                                <h3 className="h3 text-secondary">{it.text}</h3>
                                <a
                                    href={it.button_link}
                                    className="inline-flex w-fit px-4 py-2 lg:px-6 lg:py-3 text-lg rounded-full bg-white text-black font-semibold hover:bg-accent hover:text-white shadow-lg transition"
                                >
                                    {it.button_text}
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
