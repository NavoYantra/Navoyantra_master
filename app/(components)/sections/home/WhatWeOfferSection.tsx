"use client";

import Image from "next/image";
import Badge from "@/app/(components)/site/Badge";
import { motion, Variants } from "framer-motion";

export default function WhatWeOfferSection() {
    const categories = [
        {
            icn: "/vector-icons/labsetup.svg",
            title: "STEM & Robotics Lab Setup",
            description: "Complete turnkey laboratory solutions",
        },
        {
            icn: "/vector-icons/aiiot.svg",
            title: "AI, IoT & Drone Labs",
            description: "Future-ready technology infrastructure",
        },
        {
            icn: "/vector-icons/stem.svg",
            title: "Curriculum + LMS",
            description: "Digital learning with assessments & certification",
        },
        {
            icn: "/vector-icons/custom.svg",
            title: "Teacher Training & Workshops",
            description: "Professional development for educators",
        },
        {
            icn: "/vector-icons/embedded.svg",
            title: "DIY Kits Manufacturing",
            description: "Educational electronics designed in-house",
        },
        {
            icn: "/vector-icons/industrialpro.svg",
            title: "Government & Custom Projects",
            description: "Tender execution and industry solutions",
        },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="w-full bg-slate-50 py-24 px-5 md:px-10 lg:px-16">
            <div className="max-w-[90rem] mx-auto">
                
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <Badge text="OUR SERVICES" />
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mt-6 mb-6">
                        Our Core <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                        End-to-end educational solutions designed for learning, innovation, and real-world deployment.
                    </p>
                </div>

                {/* Cards Grid */}
                <motion.div 
                    key="what-we-offer-grid-fixed"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
                >
                    {categories.map((category, index) => {
                        const isBlue = index % 2 !== 0; 
                        
                        return (
                            <motion.div
                                variants={itemVariants}
                                key={`${category.title}-${index}`}
                                className="group relative bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
                            >
                                {/* Top colored border */}
                                <div className={`absolute top-0 left-0 w-full h-1.5 ${isBlue ? 'bg-primary' : 'bg-accent'} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />
                                
                                {/* Icon Box */}
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${isBlue ? 'bg-primary/10' : 'bg-accent/10'}`}>
                                    <Image
                                        width={32}
                                        height={32}
                                        src={category.icn}
                                        alt={category.title}
                                        className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                                
                                {/* Content */}
                                <h5 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                                    {category.title}
                                </h5>
                                <p className="text-sm text-slate-500 leading-relaxed mt-auto">
                                    {category.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
                
            </div>
        </section>
    );
}