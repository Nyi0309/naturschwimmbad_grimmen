"use client";
import Image from "next/image";
import { motion } from 'framer-motion';
import sponsorenData from "@/data/Startseite/Sponsoren/sponsoren";
import { fadeIn } from "@/lib/variants";


export const Sponsoren = () => {
    return (
        <section className="text-white section lg:pb-[130px] pb-12;">
            <motion.div
                variants={fadeIn({ direction: "up", delay: 0.2 })} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
                className="container mx-auto">
                <h2 className="text-xl text-center text-white/70">
                    Trust by the worlds most innovative teams
                </h2>
                <div className="flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:bg-black-transparent-left after:right-0 before:left-0 before:top-0 after:top-0 before:bg-black-transparent-right">
                    <motion.div
                        initial={{ translateX: 0 }}
                        animate={{ translateX: "-50%" }}
                        transition={{
                            duration: 10,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex gap-16 pr-16 flex-none justify-center">
                        {sponsorenData.map(({ src, alt }, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt={alt}
                                width={400}
                                height={200}
                                className="flex-none h-24 w-auto"
                            />
                        ))}
                        {sponsorenData.map(({ src, alt }, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt={alt}
                                width={400}
                                height={200}
                                className="flex-none h-24 w-auto"
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};
