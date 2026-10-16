"use client";

import Link from "next/link";
import { ArrowRight, Shield, Cpu, Award, ExternalLink } from "react-feather";
import { motion } from "framer-motion";

export default function ParentCompanySection() {
    const pillars = [
        {
            icon: <Shield className="text-primary" size={26} />,
            title: "Corporate Backing",
            desc: "Full institutional accountability, certified industrial standards, and government-compliant procurement under YuvaYantra Technology Pvt. Ltd."
        },
        {
            icon: <Cpu className="text-accent" size={26} />,
            title: "Indigenous Manufacturing",
            desc: "In-house electronics development, robotic chassis fabrication, and proprietary STEM hardware engineered for durability and student safety."
        },
        {
            icon: <Award className="text-blue-400" size={26} />,
            title: "Turnkey Execution",
            desc: "Comprehensive lab planning, installation, teacher capacity training, and continuous competition mentorship across India."
        }
    ];

    return (
        <section className="w-full bg-[#030812] py-20 md:py-28 px-5 md:px-10 lg:px-16 relative overflow-hidden border-t border-b border-white/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Block */}
                <motion.div 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-blue-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(37,99,235,0.25)]">
                        CORPORATE OWNERSHIP & LINEAGE
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl">
                        NavoYantra is an Official Selling Brand of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-accent">
                            YuvaYantra Technology Pvt. Ltd.
                        </span>
                    </h2>

                    <p className="mt-6 text-slate-300 text-base md:text-xl max-w-3xl font-light leading-relaxed">
                        Operating as the dedicated commercial brand of <strong className="text-white font-medium">YuvaYantra Technology Pvt. Ltd.</strong>, NavoYantra brings world-class STEM, Robotics, AI, and IoT laboratory infrastructure directly to schools, colleges, and young innovators.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="https://www.yuvayantra.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-primary/40 transition-all hover:-translate-y-0.5 text-sm md:text-base"
                        >
                            <span>Visit YuvaYantra Corporate (www.yuvayantra.com)</span>
                            <ExternalLink size={16} />
                        </a>
                        <Link
                            href="/lab-setup"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-semibold rounded-xl border border-white/10 transition-all text-sm md:text-base"
                        >
                            <span>Explore Lab Setup Services</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </motion.div>

                {/* 3 Trust Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-primary/40 rounded-3xl p-8 hover:bg-white/[0.05] transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {pillar.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed font-light">
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Verification Notice */}
                <div className="mt-12 text-center text-xs md:text-sm text-slate-400 font-light">
                    For institutional partnerships, tenders, and corporate communications, visit our parent entity portal at{" "}
                    <a 
                        href="https://www.yuvayantra.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-accent font-semibold underline underline-offset-4 transition-colors"
                    >
                        www.yuvayantra.com
                    </a>
                </div>
            </div>
        </section>
    );
}
