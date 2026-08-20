"use client";

import Badge from "@/app/(components)/site/Badge";
import { motion } from "framer-motion";

const DrawIcon = ({ paths, delay = 0 }: { paths: string[], delay?: number }) => (
    <motion.svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary z-10 relative"
    >
        {paths.map((d, i) => (
            <motion.path
                key={i}
                d={d}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: delay + i * 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
            />
        ))}
    </motion.svg>
);

const strengths = [
    {
        paths: [
            "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z",
            "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        ],
        title: "Made in India Manufacturing",
        description: "We design and manufacture our own STEM kits, robotics hardware and electronics in-house for better quality, customization and affordability.",
    },
    {
        paths: ["M22 12h-4l-3 9L9 3l-3 9H2", "M12 3v18", "M8 7l4-4 4 4"],
        title: "Certified LMS Platform",
        description: "Every lab can be integrated with our LMS where schools manage students, track progress and issue certificates.",
    },
    {
        paths: ["M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"],
        title: "Curriculum & Teacher Training",
        description: "Structured NEP-aligned curriculum with complete teacher onboarding and classroom implementation support."
    },
    {
        paths: ["M16 18l6-6-6-6", "M8 6L2 12l6 6", "M12 2v20"],
        title: "Beyond Lab Support",
        description: "Science exhibitions, hackathons, ATL competitions and custom innovation projects—we stay with schools throughout the journey."
    }
];

export default function WhyUsSection() {
    return (
        <section className="w-full bg-blue-50/50 py-24 px-5 md:px-10 lg:px-16 overflow-hidden relative">
            
            <div className="max-w-[85rem] mx-auto relative z-10">
                {/*------------------HEADER-----------------*/}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <Badge text="WHY NAVOYANTRA" />
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 mt-6 mb-4">
                        Why Schools Choose <span className="text-primary">NavoYantra</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl">
                        Unlike traditional lab vendors, we don't stop after installation. We provide an integrated ecosystem that includes hardware, curriculum, digital learning, teacher enablement and continuous project mentorship.
                    </p>
                </motion.div>

                {/*---------------STRENGTHS GRID----------------*/}
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 items-stretch justify-items-center">
                    {strengths.map((s, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left w-full max-w-2xl rounded-[32px] p-8 md:p-10 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(37,99,235,0.1)] hover:-translate-y-2 transition-all duration-300 border border-slate-100 group"
                        >
                            {/*-------ICON BOX---------*/}
                            <div className="relative shrink-0 flex items-center justify-center w-24 h-24 mb-6 sm:mb-0 sm:mr-8">
                                {/* Decorative pulsing background */}
                                <div className="absolute inset-0 bg-primary/5 rounded-full group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500" />
                                <div className="absolute inset-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full shadow-inner" />
                                
                                {/* Animated SVG drawing */}
                                <DrawIcon paths={s.paths} delay={idx * 0.1} />
                            </div>
                            
                            {/*-------CONTENT---------*/}
                            <div className="space-y-4 pt-2">
                                <h5 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                                    {s.title}
                                </h5>
                                <p className="text-base text-slate-600 leading-relaxed font-light">
                                    {s.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}