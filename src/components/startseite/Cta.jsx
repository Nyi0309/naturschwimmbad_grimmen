"use client"
import React from "react"
import ctaData from "@/data/Startseite/CTA/ctaData"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"

const Cta = () => {
    return (
        <section className="relative h-[60vh]">
            {/* Hintergrundbild */}
            <div className="absolute inset-0 bg-cta bg-cover bg-no-repeat" />

            {/* Overlay optional */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 h-full container mx-auto">
                <motion.div
                    variants={fadeIn({ direction: "up", delay: 0.2 })} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
                    className="flex h-full flex-col items-center justify-center text-center gap-6 max-w-4xl mx-auto">

                    <h3 className='h2 text-white'>{ctaData.ueberschrift}</h3>

                    <a href={ctaData.button_link} className='px-4 py-2 lg:px-6 lg:py-3 text-lg rounded-full bg-white text-black font-semibold hover:bg-accent hover:text-white shadow-lg transition'>{ctaData.button_text}</a>
                </motion.div>
            </div>
        </section>
    )
}

export default Cta

