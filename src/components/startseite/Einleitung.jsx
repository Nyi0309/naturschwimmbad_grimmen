"use client"
import Image from "next/image"
import einleitungData from "@/data/Startseite/Einleitung/einleitung"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"

const Einleitung = () => {
    return (
        <section id="einleitung" className="section">
            <div className="container mx-auto">

                {/* 2 Spalten ab lg */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-12 xl:gap-16">
                    {/* Links: hohes Bild */}
                    <motion.div variants={fadeIn({ direction: "right", delay: 0.2 })} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="rounded-3xl overflow-hidden shadow-md">
                        <div className="relative w-full aspect-[4/5]">
                            <Image
                                src={einleitungData.bild_eins}
                                alt="Einleitungsbild"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 520px, 100vw"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Rechts: Bild oben, Text darunter */}
                    <motion.div className="flex flex-col gap-6 lg:gap-8">
                        <motion.div variants={fadeIn({ direction: "left", delay: 0.2 })} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="rounded-3xl overflow-hidden shadow-md">
                            <div className="relative w-full aspect-video">
                                <Image
                                    src={einleitungData.bild_zwei}
                                    alt="Geschichte Bild"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 1024px) 720px, 100vw"
                                />
                            </div>
                        </motion.div>

                        <motion.div className="space-y-6">
                            <motion.div variants={fadeIn({ direction: "left", delay: 0.2 })} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="max-w-xl">
                                <h2 className="h2 text-primary mt-4">
                                    {einleitungData.ueberschrift}
                                </h2>
                            </motion.div>
                            <motion.p variants={fadeIn({ direction: "left", delay: 0.2 })} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="text-primary-light leading-relaxed">
                                {einleitungData.beschreibung}
                            </motion.p>
                        </motion.div>

                        <motion.div variants={fadeIn({ direction: "left", delay: 0.2 })} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
                            <motion.a
                                href={einleitungData.button_link}
                                className="inline-flex items-center rounded-full bg-black px-4 py-2 lg:px-6 lg:py-3 text-white text-lg font-semibold shadow transition hover:bg-black/85"
                            >
                                {einleitungData.button_text}
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default Einleitung
