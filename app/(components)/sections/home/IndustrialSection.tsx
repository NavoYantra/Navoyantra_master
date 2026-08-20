"use client";

import { useState } from "react";
import { ArrowRight, Zap, Cpu, Code, Box, Shield, Send, Settings } from "react-feather";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const pipelineSteps = [
    {
        title: "Consultation",
        desc: "Planning, infrastructure assessment, and requirement analysis.",
        icon: <Zap size={20} />
    },
    {
        title: "Custom Design",
        desc: "Tailoring curriculum and hardware to specific institutional needs.",
        icon: <Cpu size={20} />
    },
    {
        title: "Manufacturing",
        desc: "In-house production of custom electronics and educational kits.",
        icon: <Settings size={20} />
    },
    {
        title: "Installation",
        desc: "Complete lab setup, safety checks, and equipment commissioning.",
        icon: <Box size={20} />
    },
    {
        title: "Curriculum",
        desc: "Deployment of NEP-aligned digital learning and LMS.",
        icon: <Code size={20} />
    },
    {
        title: "Training",
        desc: "Hands-on workshops and professional teacher onboarding.",
        icon: <Shield size={20} />
    },
    {
        title: "Mentorship",
        desc: "Ongoing support for science exhibitions and ATL competitions.",
        icon: <Send size={20} />
    }
];

export default function IndustrialSection() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    return (
        <section className="w-full bg-[#040b16] py-24 px-5 md:px-10 lg:px-16 overflow-hidden">
            <div className="max-w-[90rem] mx-auto">
                {/*---------------------------- HEADER --------------------------------*/}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                        FEATURED PROJECT
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-6 leading-tight">
                        Greater Noida <span className="text-primary">Government</span><br/> <span className="text-accent">IoT Lab Project</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 max-w-4xl leading-relaxed font-light">
                        NavoYantra successfully executed a government IoT laboratory project featuring custom-designed educational kits and large-scale real-world use-case models (up to 2 feet), enabling students to learn practical smart city and industrial IoT applications.
                    </p>
                </div>

                {/*------------------------------ PIPELINE CTA --------------------------------*/}
                {/* Removed overflow-hidden from this parent so tooltips can escape safely */}
                <div className="relative w-full bg-white/[0.02] backdrop-blur-sm rounded-[40px] p-8 md:p-12 lg:p-16 shadow-2xl border border-white/10 group">
                    
                    {/* Background Glows safely constrained */}
                    <div className="absolute inset-0 overflow-hidden rounded-[40px] pointer-events-none">
                        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
                        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-16 md:mb-24">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                                Government-grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">execution</span>.
                            </h3>
                            <p className="text-slate-400 text-lg max-w-2xl font-light">
                                Hover over our end-to-end laboratory development pipeline below to see how we bring technology education to life with curriculum, hardware and project-based learning.
                            </p>
                        </div>
                        <Link 
                            href="/contact"
                            className="shrink-0 flex items-center gap-3 px-8 py-4 bg-accent hover:bg-orange-600 text-white rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:shadow-[0_0_40px_rgba(234,88,12,0.6)] transition-all duration-300 hover:-translate-y-1"
                        >
                            <span>Start Your Project</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                    {/* PIPELINE UI */}
                    <div className="relative z-10 px-4 md:px-0 pb-10 md:pb-0">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-10 left-[5%] right-[5%] h-1 bg-white/10 rounded-full">
                            <div className="h-full bg-gradient-to-r from-primary via-accent to-primary opacity-50" />
                        </div>

                        <div className="flex flex-col md:flex-row justify-between relative gap-8 md:gap-0">
                            {pipelineSteps.map((step, index) => {
                                const isHovered = hoveredStep === index;
                                return (
                                    <div 
                                        key={index}
                                        className="relative flex flex-row md:flex-col items-center md:items-center gap-6 md:gap-4 group/step w-full md:w-auto"
                                        onMouseEnter={() => setHoveredStep(index)}
                                        onMouseLeave={() => setHoveredStep(null)}
                                        onClick={() => setHoveredStep(isHovered ? null : index)} // For mobile tap
                                    >
                                        {/* Step Icon Node */}
                                        <div className={`relative z-10 flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full transition-all duration-300 cursor-pointer border-4 border-[#040b16]
                                            ${isHovered ? 'bg-accent text-white scale-110 shadow-[0_0_20px_rgba(234,88,12,0.6)]' : 'bg-slate-800 text-slate-400 hover:bg-primary hover:text-white hover:scale-105'}
                                        `}>
                                            {step.icon}
                                        </div>

                                        {/* Step Title */}
                                        <div className="flex flex-col md:items-center cursor-pointer">
                                            <div className={`font-bold text-lg md:text-sm lg:text-base whitespace-nowrap transition-colors duration-300 ${isHovered ? 'text-white' : 'text-slate-400'}`}>
                                                {step.title}
                                            </div>
                                        </div>

                                        {/* Tooltip Popover (Framer Motion) */}
                                        <AnimatePresence>
                                            {isHovered && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute bottom-16 md:bottom-full md:mb-6 left-16 md:left-1/2 md:-translate-x-1/2 w-64 md:w-56 p-4 bg-slate-800 rounded-xl shadow-2xl z-50 pointer-events-none border border-white/10"
                                                >
                                                    {/* Triangle pointer (desktop only) */}
                                                    <div className="hidden md:block absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-800 rotate-45 border-r border-b border-white/10" />
                                                    
                                                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed whitespace-normal font-light">
                                                        {step.desc}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}