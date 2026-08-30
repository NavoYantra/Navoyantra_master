"use client";

import {Poppins} from "next/font/google";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {HiOutlineMenuAlt3, HiOutlineX} from "react-icons/hi";
import {usePathname} from "next/navigation";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "400",
});

export default function Header() {
    const headerOptions = [
        "Services",
        "Lab Setup",
        "About",
        "Contact",
        "Blog",
    ];

    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <>
            <header
                className={`${poppins.className} z-50 sticky top-0 w-full bg-surface/60 border-b border-foreground/10 backdrop-blur-2xl px-5 py-4 lg:px-10 transition-colors duration-300`}
            >
                <div className="flex items-center justify-between w-full">
                    {/* Left: Logo */}
                    <div className="flex-1 flex justify-start">
                        <Link href="/">
                            <motion.div
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                {/* Desktop Logo */}
                                <Image
                                    src="/logo.webp"
                                    width={350}
                                    height={110}
                                    alt="Logo"
                                    priority
                                    className="logo-img hidden md:block w-64 h-auto lg:w-80 dark:invert transition-all duration-300"
                                />
                                {/* Mobile Logo */}
                                <Image
                                    src="/mobile-logo.web"
                                    width={150}
                                    height={32}
                                    alt="Logo"
                                    priority
                                    className="logo-img block md:hidden w-auto h-12 dark:invert transition-all duration-300"
                                />
                            </motion.div>
                        </Link>
                    </div>

                    {/* Center: Navbar */}
                    <nav className="hidden md:flex flex-1 justify-center">
                        <ul className="flex items-center gap-10">
                            {headerOptions.map((option, index) => (
                                <motion.li
                                    key={option}
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.15, duration: 0.7 }}
                                    className="nav-item overflow-hidden h-10 cursor-pointer group text-xl whitespace-nowrap"
                                >
                                    <Link
                                        href={option === "Home" ? "/" : `/${option.toLowerCase().replace(/\s+/g, "-")}`}
                                        className={`text-wrapper flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2 ${pathname === `/${option.toLowerCase().replace(/\s+/g, "-")}` ? "text-accent underline font-semibold" : "text-foreground"}`}
                                    >
                                        <span className="py-1">{option}</span>
                                        <span className="py-1 text-accent">{option}</span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right: CTA & Mobile Menu */}
                    <div className="flex-1 flex items-center justify-end gap-4">
                        {/* Explore Store Button (Desktop) */}
                        <div className="hidden md:block">
                            <Link
                                className="bg-primary hover:bg-primary/90 transition-colors px-6 py-3 rounded-lg text-white font-semibold shadow-lg hover:shadow-xl text-lg whitespace-nowrap"
                                href="https://shop.navoyantra.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Explore Store
                            </Link>
                        </div>
                        
                        <button onClick={toggleMenu} className="text-3xl text-foreground md:hidden">
                            <HiOutlineMenuAlt3 />
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
                        />
                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
                            className="fixed right-0 top-0 z-50 h-screen w-72 bg-surface shadow-xl p-8 md:hidden"
                        >
                            <div className="flex justify-end">
                                <button onClick={toggleMenu} className="text-3xl text-foreground">
                                    <HiOutlineX />
                                </button>
                            </div>
                            <motion.ul
                                variants={{
                                    show: {
                                        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                                    },
                                    hidden: {
                                        transition: { staggerChildren: 0.05, staggerDirection: -1 },
                                    },
                                }}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="mt-12 space-y-8"
                            >
                                {headerOptions.map((option) => (
                                    <motion.li
                                        key={option}
                                        variants={{
                                            hidden: { x: 40, opacity: 0 },
                                            show: { x: 0, opacity: 1, transition: { type: "tween", ease: "easeOut", duration: 0.35 } },
                                        }}
                                    >
                                        <Link
                                            href={option === "Home" ? "/" : `/${option.toLowerCase().replace(/\s+/g, "-")}`}
                                            onClick={toggleMenu}
                                            className={`text-2xl font-semibold ${pathname === `/${option.toLowerCase().replace(/\s+/g, "-")}` ? "text-accent" : "text-foreground"}`}
                                        >
                                            {option}
                                        </Link>
                                    </motion.li>
                                ))}
                                <motion.li
                                    variants={{
                                        hidden: { x: 40, opacity: 0 },
                                        show: { x: 0, opacity: 1, transition: { type: "tween", ease: "easeOut", duration: 0.35 } },
                                    }}
                                >
                                    <Link
                                        className="bg-primary hover:bg-primary/90 transition-colors block text-center mt-8 px-6 py-3 rounded-lg text-white font-semibold shadow-lg text-lg"
                                        href="https://shop.navoyantra.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Explore Store
                                    </Link>
                                </motion.li>
                            </motion.ul>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}