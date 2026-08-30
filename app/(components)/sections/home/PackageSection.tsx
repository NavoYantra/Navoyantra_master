"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "react-feather";
import { motion } from "framer-motion";

const images = [
    "/hero.webp",
    "/about-robo.webp",
    "/hc.webp",
    "/card-bg.webp",
    "/our-moto.webp"
];

// Duplicate images to create seamless infinite loop
const trainImages = [...images, ...images];

const PackageSection = () => {
    return (
        <section className="w-full bg-[#040b16] min-h-[80vh] flex items-center py-24 overflow-hidden relative">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[90rem] mx-auto w-full px-5 md:px-10 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    
                    {/* Left Column - Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col items-start"
                    >
                        <div className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                            LAB SETUP
                        </div>
                        
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
                            Build a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
                                Future-Ready
                            </span><br />
                            Technology Lab
                        </h2>
                        
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-lg mb-12">
                            From robotics and STEM labs to AI, IoT, and advanced automation laboratories. 
                            We provide complete setup solutions for schools, colleges, and institutions.
                        </p>
                        
                        <Link 
                            href="/blog?category=Robotics+Lab+Setup+for+Schools"
                            className="group flex items-center gap-4 px-8 py-5 bg-primary hover:bg-blue-600 text-white rounded-full font-bold text-lg shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-all duration-300 hover:-translate-y-1"
                        >
                            <span>Explore Lab Setup Solutions</span>
                            <div className="bg-white/20 p-2.5 rounded-full group-hover:bg-white group-hover:text-primary transition-colors">
                                <ArrowRight size={20} />
                            </div>
                        </Link>
                    </motion.div>

                    {/* Right Column - Train Animation (Images) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] md:h-[650px] w-full rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm flex flex-col gap-4 p-4 shadow-2xl"
                    >
                        {/* Gradient Masks for smooth fade out at edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#040b16] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#040b16] to-transparent z-10 pointer-events-none" />
                        
                        {/* Track 1 - Moving Left */}
                        <div className="relative flex overflow-hidden w-full h-1/2 rounded-3xl">
                            <motion.div 
                                className="flex gap-4 absolute left-0 h-full w-max"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ ease: "linear", duration: 35, repeat: Infinity }}
                            >
                                {trainImages.map((src, idx) => (
                                    <div key={`track1-${idx}`} className="relative w-[280px] md:w-[380px] h-full rounded-2xl overflow-hidden shrink-0 group">
                                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                        <Image 
                                            src={src} 
                                            alt="Lab Setup" 
                                            fill 
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Track 2 - Moving Right */}
                        <div className="relative flex overflow-hidden w-full h-1/2 rounded-3xl">
                            <motion.div 
                                className="flex gap-4 absolute left-0 h-full w-max"
                                animate={{ x: ["-50%", "0%"] }}
                                transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                            >
                                {/* Reverse the array for variety */}
                                {[...trainImages].reverse().map((src, idx) => (
                                    <div key={`track2-${idx}`} className="relative w-[280px] md:w-[380px] h-full rounded-2xl overflow-hidden shrink-0 group">
                                        <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                        <Image 
                                            src={src} 
                                            alt="Lab Setup" 
                                            fill 
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default PackageSection;
