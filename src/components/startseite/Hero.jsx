"use client"

import React from "react"
import heroText from "@/data/Startseite/Hero/hero"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"
const Hero = () => {

    return (
        <section
            id="hero"
            className="relative h-screen bg-hero bg-cover bg-no-repeat"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 z-10" />

            {/* Video */}
            <video
                loop
                muted
                autoPlay
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/assets/hero/hero.mp4" type="video/mp4" />
            </video>

            {/* Content */}
            <div className="relative container mx-auto h-full flex items-center justify-start z-20">
                <div className="max-w-2xl flex flex-col items-center text-center lg:items-start lg:text-start">
                    <motion.h1 variants={fadeIn({ direction: "right", delay: 0.6 })} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="h1 bg-gradient-to-t from-white via-white to-accent bg-clip-text text-transparent">{heroText.ueberschrift}</motion.h1>
                    <motion.p variants={fadeIn({ direction: "right", delay: 0.8 })} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="mt-4 text-lg text-white/80">
                        {heroText.beschreibung}
                    </motion.p>

                    <motion.div variants={fadeIn({ direction: "right", delay: 1 })} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="mt-6 flex gap-4">
                        <a
                            href={heroText.button_eins.link}
                            className="px-4 py-2 lg:px-6 lg:py-3 text-lg rounded-full bg-white text-black font-semibold hover:bg-accent hover:text-white shadow-lg transition"
                        >
                            {heroText.button_eins.text}
                        </a>
                        <a
                            href={heroText.button_zwei.link}
                            className="px-4 py-2 lg:px-6 lg:py-3 text-lg rounded-full bg-transparent backdrop-blur-lg text-secondary border border-white font-semibold hover:bg-accent hover:text-white transition"
                        >
                            {heroText.button_zwei.text}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero

