"use client";

import Link from "next/link";
import footerData from "@/data/layout/footer";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: {
        transition: { delayChildren: 0.1, staggerChildren: 0.08 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.25, 0.25, 0.25, 0.75] },
    },
};

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="section pb-6">
            <div className="container mx-auto">
                <div className="rounded-3xl bg-[#121212] text-white/90 shadow-2xl">
                    {/* Top */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid gap-10 p-6 md:p-10 lg:grid-cols-2"
                    >
                        {/* Brand + Nav */}
                        <motion.div variants={fadeUp} className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="text-xl font-semibold tracking-tight">Logo</span>
                            </div>

                            {/* nav links gestaggert */}
                            <motion.nav
                                variants={container}
                                className="flex flex-wrap items-center gap-x-6 gap-y-3 text-lg text-white/80"
                            >
                                {footerData.nav.map((item) => (
                                    <motion.div key={item.label} variants={fadeUp}>
                                        <Link href={item.href} className="hover:text-white transition">
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.nav>
                        </motion.div>
                    </motion.div>

                    {/* Divider */}
                    <div className="border-t border-white/10" />

                    {/* Bottom */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-10"
                    >
                        <motion.div variants={fadeUp} className="text-md text-white/60">
                            <span>
                                {footerData.legal.copyright.replace("{year}", String(year))}
                            </span>
                            {footerData.legal.links?.length ? (
                                <>
                                    {" · "}
                                    {footerData.legal.links.map((l, idx) => (
                                        <span key={l.label}>
                                            <Link href={l.href} className="hover:text-white/80 transition">
                                                {l.label}
                                            </Link>
                                            {idx < footerData.legal.links.length - 1 ? " · " : null}
                                        </span>
                                    ))}
                                </>
                            ) : null}
                        </motion.div>

                        {/* socials gestaggert */}
                        <motion.div
                            variants={container}
                            className="flex items-center gap-6 text-md text-white/80"
                        >
                            {footerData.social.map((s) => (
                                <motion.div key={s.label} variants={fadeUp}>
                                    <Link href={s.href} className="hover:text-white transition" aria-label={s.label}>
                                        {s.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
