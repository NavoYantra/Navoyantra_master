"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Cpu, Globe, Target } from "react-feather";
import Link from "next/link";

export default function AboutSection() {
    const features = [
        {
            title: "Advanced STEM Labs",
            description: "End-to-end laboratory setups for schools and universities featuring modern robotics and AI curriculum.",
            icon: <Cpu className="w-6 h-6 text-primary" />
        },
        {
            title: "Industrial Automation",
            description: "Custom IoT platforms, PLC programming, ESP32 hardware, and embedded systems for the defense and private sectors.",
            icon: <Globe className="w-6 h-6 text-accent" />
        },
        {
            title: "Vision & Mission",
            description: "Bridging the gap between academic theory and industrial application through hands-on educational infrastructure.",
            icon: <Target className="w-6 h-6 text-emerald-500" />
        }
    ];

    return (
        <section id="about" className="w-full bg-white py-24 md:py-32 px-5 md:px-10 lg:px-16 overflow-hidden">
            <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                
                {/* LEFT - Images / Visuals */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex justify-center items-center"
                >
                    {/* Background Structure */}
                    <div className="absolute inset-0 bg-slate-50 border border-slate-100 rounded-2xl z-0 scale-[0.98]" />
                    
                    {/* Main Image Grid */}
                    <div className="relative w-full h-full grid grid-cols-2 gap-4 p-4 z-10">
                        <div className="col-span-1 h-[85%] mt-auto relative rounded-xl overflow-hidden shadow-lg border border-slate-200">
                            <Image src="/about-robo.webp" alt="Robotics Education" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="col-span-1 h-[90%] mb-auto relative rounded-xl overflow-hidden shadow-lg border border-slate-200">
                            <Image src="/hero.webp" alt="Industrial Automation" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        
                    </div>
                </motion.div>

                {/* RIGHT - Content */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-start"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-1 bg-accent rounded-full" />
                        <span className="text-accent font-extrabold uppercase tracking-widest text-sm">About NavoYantra</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                        Delivering Industrial-Grade <span className="text-primary">STEM Infrastructure.</span>
                    </h2>
                    
                    <p className="text-lg text-slate-600 leading-relaxed mb-10">
                        At <strong className="text-primary font-bold">NavoYantra Technology</strong>, we provide specialized hardware and curriculum solutions. 
                        We are a leading provider of end-to-end infrastructure in Robotics, Artificial Intelligence, IoT, Embedded Systems, and Automation. 
                        From establishing advanced STEM labs in schools to supplying robust automation systems for the defense sector, we focus on practical, measurable outcomes.
                    </p>

                    <div className="flex flex-col gap-8 mb-12">
                        {features.map((feature, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                                className="flex gap-5 group cursor-default"
                            >
                                <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-all duration-300">
                                    {feature.icon}
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h4 className="text-xl font-bold text-slate-900 mb-1">{feature.title}</h4>
                                    <p className="text-slate-500 leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <Link
                        href="/contact"
                        className="group flex items-center gap-3 bg-slate-900 hover:bg-primary text-white py-4 px-10 rounded-xl font-semibold transition-all duration-300 shadow-xl shadow-slate-900/20 hover:shadow-primary/30 text-lg"
                    >
                        <span>Partner With Us</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}