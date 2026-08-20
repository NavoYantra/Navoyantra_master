"use client";

import { ArrowRight, CheckCircle } from "react-feather";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const data = [
    {
        heading: "Robotics Labs",
        btnText: "Build Your Lab",
        desc: ["Robotics Labs", "STEM & ATL", "Educational Kits", "Teacher Training"],
        accent: "blue"
    },
    {
        heading: "College & Universities",
        btnText: "Explore Solutions",
        desc: ["Advanced Labs", "AI & IOT", "Embedded Systems", "Automation"],
        accent: "orange"
    },
    {
        heading: "Industries & OEMs",
        btnText: "Discuss Project",
        desc: ["Industrial Projects", "Product Development", "OEM / ODM", "Custom Tech"],
        accent: "blue"
    },
    {
        heading: "Govt. & Institutions",
        btnText: "Partner With Us",
        desc: ["Tender Projects", "Technology Supply", "Infrastructure", "Training"],
        accent: "orange"
    },
];

export default function OurMoto() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 40 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            transition: { type: "spring", stiffness: 100, damping: 20 } 
        }
    };

    return (
        <section className="w-full bg-[#040b16] py-24 px-5 md:px-10 lg:px-16 overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[90rem] mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="px-5 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                        CUSTOMERS
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4 mb-6 leading-tight">
                        Build around the people and<br className="hidden lg:block" /> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> for the people we serve.</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
                >
                    {data.map((crd, idx) => {
                        const isBlue = crd.accent === "blue";
                        return (
                            <motion.div
                                variants={itemVariants}
                                key={`${crd.heading[0]}-${idx}`}
                                className="group relative flex flex-col justify-between bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-[32px] hover:border-white/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                            >
                                {/* Top Accent Line */}
                                <div className={`absolute top-0 left-0 w-full h-1.5 ${isBlue ? 'bg-primary' : 'bg-accent'} opacity-80 group-hover:h-2 group-hover:opacity-100 transition-all duration-300`} />
                                
                                {/* Hover Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-b ${isBlue ? 'from-primary/10' : 'from-accent/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                {/* Card Header */}
                                <div className="mb-10 relative z-10">
                                    <h4 className="text-2xl md:text-3xl font-extrabold text-white mb-8 group-hover:-translate-y-1 transition-transform duration-300">
                                        {crd.heading}
                                    </h4>
                                    
                                    <ul className="flex flex-col gap-4">
                                        {crd.desc.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle className={`w-5 h-5 mt-0.5 shrink-0 ${isBlue ? 'text-primary' : 'text-accent'}`} />
                                                <span className="text-slate-300 font-medium leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA Button */}
                                <div className="mt-auto relative z-10 pt-4">
                                    <Link
                                        href="/contact"
                                        className={`flex w-full items-center justify-between px-6 py-4 rounded-xl bg-white/10 hover:bg-white text-white hover:text-slate-900 font-bold transition-all duration-300 group/btn border border-white/5 hover:shadow-lg ${isBlue ? 'hover:shadow-primary/30' : 'hover:shadow-accent/30'}`}
                                    >
                                        <span>{crd.btnText}</span>
                                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}