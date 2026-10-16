"use client";

import Link from "next/link";
import Badge from "@/app/(components)/site/Badge";
import { motion, Variants } from "framer-motion";
import SpaceBackground from "./SpaceBackground";
import SpaceHeroScene from "./SpaceHeroScene";

function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.18,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="w-full bg-[#02040a] text-white flex items-center justify-center px-5 md:px-10 lg:px-16 py-20 lg:py-28 overflow-hidden relative min-h-[92vh]">
            
            {/* Deep Space Background with Realistic Twinkling Stars & Shooting Stars (Tootte Taare) */}
            <SpaceBackground />
            
            {/* Content Wrapper */}
            <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 xl:gap-20">
                
                {/*-------------------- LEFT SECTION ----------------------------*/}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    id="left-section" 
                    className="w-full lg:w-[50%] xl:w-[52%] flex flex-col items-start gap-8 z-10"
                >
                    {/* Top Left Badge with Cosmic Glow */}
                    <motion.div variants={itemVariants} className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-500/40 via-blue-600/30 to-amber-500/20 blur-sm pointer-events-none" />
                        <Badge text="Made in India | STEM • AI • Robotics • Aerospace • IoT" />
                    </motion.div>

                    <div className="flex flex-col gap-6">
                        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.4rem] font-extrabold leading-[1.12] tracking-tight">
                            <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">Equipping</span><br />
                            <span className="text-sky-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]">Schools with</span><br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 drop-shadow-[0_0_30px_rgba(251,146,60,0.3)]">
                                Advanced STEM.
                            </span>
                        </motion.h1>
                        
                        <motion.p variants={itemVariants} className="text-slate-300 max-w-2xl text-lg sm:text-xl lg:text-2xl leading-relaxed font-light">
                            From in-house manufactured STEM kits to complete <strong className="font-semibold text-sky-400">AI, Robotics, Drone & IoT Lab Setup</strong>, NavoYantra helps schools, colleges, government institutions and industries establish comprehensive innovation labs backed by turnkey hardware, manufacturing and expert training.
                        </motion.p>
                    </div>

                    {/* Left CTAs */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-4 w-full sm:w-auto">
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
                            <Link
                                href="https://shop.navoyantra.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto text-center capitalize font-semibold py-4 px-10 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 text-white hover:opacity-95 hover:scale-105 hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300 text-lg border border-sky-400/30"
                            >
                                Explore Store
                            </Link>
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto text-center capitalize font-semibold py-4 px-10 rounded-xl bg-white/5 border border-sky-400/30 text-white hover:bg-sky-500/10 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300 text-lg backdrop-blur-md"
                            >
                                Talk to Us
                            </Link>
                        </div>
                        <p className="text-sm font-medium text-slate-400 mt-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            Trusted by Principals &middot; Directors &middot; Govt &middot; Army
                        </p>
                    </motion.div>

                </motion.div>

                {/*-------------------- RIGHT SECTION (Space Scene) ---------------------------*/}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    id="right-section" 
                    className="w-full lg:w-[50%] xl:w-[48%] flex justify-center lg:justify-end z-10"
                >
                    <SpaceHeroScene />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;