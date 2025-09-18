"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiMenu } from "react-icons/fi"
import { RiPhoneFill, RiMailFill } from "react-icons/ri"
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6"
import {
    Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet"

const PHONE = "+49 395 7752481"
const PHONE_HREF = "tel:+493957752481"
const EMAIL = "info@naturbad-grimmen.de"
const EMAIL_HREF = "mailto:info@naturbad-grimmen.de"
import { useTransitionRouter } from "next-view-transitions";
import pageAnimation from "@/lib/anim"

const Nav = () => {

    return <GlassNavigation />
}

const GlassNavigation = () => {
    const [scrolled, setScrolled] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <nav
            ref={navRef}
            className={[
                "fixed left-0 right-0 top-0 z-50",
                "container mx-auto md:left-6 md:right-6 md:top-6",
                "backdrop-blur-lg md:rounded-2xl",
                scrolled ? "bg-white/60 shadow-2xl ring-1 ring-black/5" : "bg-white/90 shadow-xl",
            ].join(" ")}
        >
            <div className="flex items-center justify-between px-5 py-4">
                <Logo />
                <DesktopLinks />
                <RightCluster />
                <MobileMenu />
            </div>
        </nav>
    )
}

const Logo = () => (
    <Link href="/" className="text-primary text-lg font-semibold tracking-tight">
        Naturbad Grimmen
    </Link>
)

const DesktopLinks = () => {
    const pathname = usePathname()
    return (
        <div className="hidden md:flex items-center gap-2">
            <NavLink href="/" active={pathname === "/"}>Startseite</NavLink>
            <NavLink href="/geschichte" active={pathname === "/geschichte"}>Geschichte</NavLink>
            <NavLink href="/aktuelles" active={pathname === "/aktuelles"}>Aktuelles</NavLink>
            <NavLink href="/galerie" active={pathname === "/galerie"}>Galerie</NavLink>
            <NavLink href="/kontakt" active={pathname === "/kontakt"}>Kontakt</NavLink>
        </div>
    )
}

function NavLink({ href, children, active }) {
    const router = useTransitionRouter();
    const onClick = (e) => {
        e.preventDefault();
        router.push(href, { onTransitionReady: pageAnimation });
    };


    return (
        <Link
            href={href}
            onClick={onClick}
            className={[
                "group relative rounded-lg px-4 py-2 text-sm font-medium",
                "text-primary/80 hover:text-accent transition-colors",
                "after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-[2px] after:bg-accent",
                "after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform",
                active ? "text-accent after:scale-x-100" : "",
            ].join(" ")}
        >
            {children}
        </Link>
    )
}

const RightCluster = () => (
    <div className="hidden lg:flex items-center gap-4">
        {/* Kontakt-Pills */}
        <a href={PHONE_HREF} className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/60 text-primary text-sm hover:bg-white transition">
            <RiPhoneFill className="text-accent" />
            <span>{PHONE}</span>
        </a>
        <a href={EMAIL_HREF} className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/60 text-primary text-sm hover:bg-white transition">
            <RiMailFill className="text-accent" />
            <span className="truncate max-w-[180px]">{EMAIL}</span>
        </a>

        {/* Socials */}
        <div className="ml-2 flex items-center gap-3">
            <Link href="https://facebook.com" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/60 text-primary hover:bg-white transition">
                <FaFacebook />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/60 text-primary hover:bg-white transition">
                <FaInstagram />
            </Link>
        </div>
    </div>
)

/** Mobile via shadcn Sheet */
const MobileMenu = () => (
    <div className="md:hidden">
        <Sheet>
            <SheetTrigger asChild>
                <button className="ml-2 text-3xl ">
                    <FiMenu />
                </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white border-none text-primary">
                <SheetHeader className="sr-only">
                    <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>

                <div className="flex h-full flex-col justify-between pt-14">
                    <div className="px-2">
                        <div className="mb-8">
                            <div className="font-extrabold text-primary text-2xl">Naturbad Grimmen</div>
                        </div>
                        <ul className="flex flex-col gap-4 text-lg">
                            <Link href="/" className="px-2 py-2 rounded-lg hover:text-accent">Startseite</Link>
                            <Link href="/geschichte" className="px-2 py-2 rounded-lg hover:text-accent">Geschichte</Link>
                            <Link href="/aktuelles" className="px-2 py-2 rounded-lg hover:text-accent">Aktuelles</Link>
                            <Link href="/galerie" className="px-2 py-2 rounded-lg hover:text-accent">Galerie</Link>
                            <Link href="/kontakt" className="px-2 py-2 rounded-lg hover:text-accent">Kontakt</Link>
                        </ul>
                    </div>

                    <div className="px-2 pb-6">
                        <div className="flex flex-col gap-3">
                            <a href={PHONE_HREF} className="flex items-center gap-3">
                                <RiPhoneFill className="text-accent text-xl" />
                                <span>{PHONE}</span>
                            </a>
                            <a href={EMAIL_HREF} className="flex items-center gap-3">
                                <RiMailFill className="text-accent text-xl" />
                                <span>{EMAIL}</span>
                            </a>
                            <div className="mt-2 flex items-center gap-3">
                                <Link href="https://facebook.com" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-primary/5 hover:bg-primary/10">
                                    <FaFacebook className="text-primary" />
                                </Link>
                                <Link href="https://instagram.com" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-primary/5 hover:bg-primary/10">
                                    <FaInstagram className="text-primary" />
                                </Link>
                                <Link href="https://x.com" aria-label="X" className="grid h-10 w-10 place-items-center rounded-full bg-primary/5 hover:bg-primary/10">
                                    <FaXTwitter className="text-primary" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    </div>
)

export default Nav
