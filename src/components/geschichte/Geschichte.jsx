"use client"
import Image from "next/image"
import geschichteData from "@/data/Geschichte/geschichte"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"

const Geschichte = () => {
    return (
        <section className="section pb-12 xl:pb-32 relative">
            <div className="container mx-auto">

                {/* 2 Spalten, vertikal zentriert */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 xl:gap-16">
                    {/* Links: Text */}
                    <motion.div
                        variants={fadeIn({ direction: "right", delay: 0.4 })} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
                        className="space-y-6">
                        <h4 className="h2 text-primary">
                            {geschichteData.ueberschrift_eins}
                        </h4>

                        <p className="text-primary-light leading-relaxed max-w-[62ch]">
                            {geschichteData.beschreibung_eins}
                        </p>

                    </motion.div>

                    {/* Rechts: Bild (mit definierter Höhe/Aspect Ratio) */}
                    <motion.div
                        variants={fadeIn({ direction: "left", delay: 0.4 })} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
                        className="rounded-3xl overflow-hidden shadow-md lg:order-2">
                        <div className="relative w-full aspect-[3/2]">
                            <Image
                                src={geschichteData.bild_eins}
                                alt="Surf coaching"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1280px) 720px, (min-width: 1024px) 600px, 100vw"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default Geschichte
