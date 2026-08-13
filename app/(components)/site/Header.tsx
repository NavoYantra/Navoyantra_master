"use client";

import {Poppins} from "next/font/google";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {HiOutlineMenuAlt3, HiOutlineX} from "react-icons/hi";
import {Heart} from "react-feather";
import {usePathname} from "next/navigation";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "400",
});

export default function Header() {
    const headerOptions = [
        "services",
        "Lab Setup",
        "About",
        "Contact",
        "Blog",
    ];

    const [open, setOpen] = useState(false);
    const [wishlistOpen, setWishlistOpen] = useState(false);
    const [wishlistItems, _] = useState<any[]>([]);
    const pathname = usePathname();


    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <>
            <header
                className={`${poppins.className} z-50 sticky top-0 w-full bg-white/20 backdrop-blur-2xl flex items-center justify-between px-5 py-4 lg:px-10`}
            >
                <Link href="/">
                    <motion.div
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Desktop Logo */}
                        <Image
                            src="/logo.webp"
                            width={220}
                            height={70}
                            alt="Logo"
                            priority
                            className="logo-img hidden md:block w-36 h-auto lg:w-48"
                        />
                        {/* Mobile Logo */}
                        <Image
                            src="/mobile-logo.web"
                            width={124}
                            height={26}
                            alt="Logo"
                            priority
                            className="logo-img block md:hidden w-auto h-8"
                        />
                    </motion.div>
                </Link>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {headerOptions.map((option, index) => (
                            <motion.li
                                key={option}
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.15, duration: 0.7 }}
                                className="nav-item overflow-hidden h-6 cursor-pointer group"
                            >
                                <Link
                                    href={option === "Home" ? "/" : `/${option.toLowerCase().replace(/\s+/g, "-")}`}
                                    className={`text-wrapper flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2 ${pathname === `/${option.toLowerCase().replace(/\s+/g, "-")}` ? "text-blue-500 underline font-semibold" : ""}`}
                                >
                                    <span>{option}</span>
                                    <span>{option}</span>
                                </Link>
                            </motion.li>
                        ))}

                        {/* Shopping Cart */}
                       <Link
                           className={"bg-blue-700 p-4 rounded-lg text-white"}
                           href={"https://shop.navoyantra.com"}>Explore Store
                       </Link>
                    </ul>
                </nav>

                <div className="flex items-center gap-4 md:hidden">
                    <div className="relative wishlist-container">
                        <button
                            onClick={() => setWishlistOpen(!wishlistOpen)}
                            className="hover:text-red-500 flex items-center"
                        >
                            <Heart size={24} className={wishlistItems.length > 0 ? "text-red-500 fill-current" : ""} />
                        </button>
                        {wishlistItems.length > 0 && (
                            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-semibold text-white">
                                {wishlistItems.length}
                            </span>
                        )}
                    </div>

                    <button onClick={toggleMenu} className="text-3xl">
                        <HiOutlineMenuAlt3 />
                    </button>
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
                            className="fixed inset-0 bg-black/40 z-40 md:hidden"
                        />
                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
                            className="fixed right-0 top-0 z-50 h-screen w-72 bg-white shadow-xl p-8 md:hidden"
                        >
                            <div className="flex justify-end">
                                <button onClick={toggleMenu} className="text-3xl">
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
                                            className="text-2xl font-semibold"
                                        >
                                            {option}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}