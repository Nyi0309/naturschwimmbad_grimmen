import Image from 'next/image'
import React from 'react'
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'

const Kontakt = () => {
    return (
        <section className="section relative">
            <div className="relative container mx-auto flex flex-col items-start gap-10">
                {/* Textblock */}
                <div className="flex flex-col items-start justify-start space-y-2">
                    <div className='max-w-2xl'>
                        <h2 className="h2 text-primary mb-4">Your next Amazing water journey awaits!</h2>
                        <p>
                            As avid ocean enthusiasts, we are dedicated to providing an unforgettable scuba diving
                            experience that goes beyond the surface. Whether you're a seasoned diver or a first-timer,
                            our team of certified instructors and guides are here to make your dreams a reality.
                        </p>
                    </div>

                    <div className="flex flex-row items-center gap-4 mt-4 lg:mt-8">
                        <FiMapPin className="text-accent size-6" />
                        <p className="text-md">3rd Avenue, 83 Manhattan, London, UK</p>
                    </div>

                    <div className="flex flex-row items-center gap-4 mt-2">
                        <FiPhoneCall className="text-accent size-6" />
                        <a href="tel:+12124258617" className="text-md">
                            +1 212 425 8617
                        </a>
                    </div>

                    <div className="flex flex-row items-center gap-4 mt-2">
                        <FiMail className="text-accent size-6" />
                        <a href="mailto:info@naturbad-grimmen.de" className="text-md">
                            info@naturbad-grimmen.de
                        </a>
                    </div>
                </div>

                {/* Bildblock */}
                <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg mt-8">
                    <Image
                        src="/assets/kontakt/kontakt.jpg"
                        alt="Team Bild"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

export default Kontakt
