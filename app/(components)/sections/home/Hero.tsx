"use client";

import Link from "next/link";
import Image from "next/image";
import Badge from "@/app/(components)/site/Badge";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import InteractiveBubbles from "./InteractiveBubbles";

const images = [
    "/hero.webp",
    "/about-robo.webp",
    "/our-moto.webp",
];

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="w-full bg-[#040b16] text-white flex items-center justify-center px-5 md:px-10 lg:px-16 py-20 lg:py-32 overflow-hidden relative">
            
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <InteractiveBubbles />
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-3xl opacity-30"
                />
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-accent/10 blur-3xl opacity-30"
                />
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 xl:gap-20">
                
                {/*-------------------- LEFT SECTION ----------------------------*/}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    id="left-section" 
                    className="w-full lg:w-[55%] flex flex-col items-start gap-8 z-10"
                >
                    {/* Top Left Badge */}
                    <motion.div variants={itemVariants}>
                        <Badge text="Made in India | STEM • AI • Robotics • IoT" />
                    </motion.div>

                    <div className="flex flex-col gap-6">
                        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold leading-[1.15] tracking-tight">
                            <span className="text-white">Empowering</span><br />
                            <span className="text-primary">Schools with</span><br />
                            <span className="text-accent">Next-Gen STEM.</span>
                        </motion.h1>
                        
                        <motion.p variants={itemVariants} className="text-white/80 max-w-3xl text-lg sm:text-xl lg:text-2xl leading-relaxed font-light">
                            From in-house manufactured STEM kits to complete <strong className="font-semibold text-primary">AI, Robotics, Drone & IoT Lab Setup</strong>, NavoYantra helps schools, colleges, government institutions and industries build future-ready innovation labs backed by curriculum, LMS and expert training.
                        </motion.p>
                    </div>

                    {/* left CTA's */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-4 w-full sm:w-auto">
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
                            <Link
                                href="#"
                                className="w-full sm:w-auto text-center capitalize font-semibold py-4 px-10 rounded-xl bg-primary text-white hover:bg-primary/90 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 text-lg"
                            >
                                Explore Store
                            </Link>
                            <Link
                                href="#"
                                className="w-full sm:w-auto text-center capitalize font-semibold py-4 px-10 rounded-xl bg-white/5 border-2 border-primary/30 text-white hover:bg-primary/20 hover:border-primary transition-all duration-300 text-lg backdrop-blur-sm"
                            >
                                Talk to Us
                            </Link>
                        </div>
                        <p className="text-sm font-medium text-white/60 mt-2">
                            Trusted by Principals &middot; Directors &middot; Govt &middot; Army
                        </p>
                    </motion.div>

                </motion.div>

                {/*-------------------- RIGHT SECTION (Slider) ---------------------------*/}
                <motion.div 
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    id="right-section" 
                    className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10"
                >
                    <div className="relative w-full max-w-lg lg:max-w-2xl aspect-square">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full h-full relative"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm"
                                >
                                    <Image
                                        src={images[currentIndex]}
                                        alt="NavoYantra robotics and AI graphic"
                                        priority
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Decorative glow behind image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/20 blur-3xl -z-10 transform scale-110 rounded-full" />
                        </motion.div>

                        {/* Slider Indicators */}
                        <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        idx === currentIndex ? "bg-primary w-8" : "bg-primary/30"
                                    }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;