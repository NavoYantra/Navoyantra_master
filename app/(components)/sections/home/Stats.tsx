"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";

function AnimatedStat({ target, suffix, label, delay }: { target: number, suffix: string, label: string, delay: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                const duration = 2000;
                let startTime: number | null = null;

                const updateNumber = (currentTime: number) => {
                    if (startTime === null) startTime = currentTime;
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeOut = 1 - Math.pow(1 - progress, 4); // ease out
                    
                    setDisplayValue(Math.floor(easeOut * target));

                    if (progress < 1) {
                        requestAnimationFrame(updateNumber);
                    } else {
                        setDisplayValue(target);
                    }
                };

                requestAnimationFrame(updateNumber);
            }, delay * 1000);
        }
    }, [inView, target, delay]);

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: delay }}
            className="flex flex-col items-center justify-center gap-2 p-8 rounded-3xl bg-white shadow-2xl shadow-primary/10 border border-slate-100 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
        >
            {/* Top gradient accent line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-accent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            
            <h3 
                className="text-4xl md:text-5xl font-extrabold text-accent"
                style={{ textShadow: '0px 4px 15px rgba(255, 107, 0, 0.4)' }}
            >
                {displayValue}{suffix}
            </h3>
            <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest text-center mt-2">
                {label}
            </p>
        </motion.div>
    );
}

export default function StatsSection() {
    const stats = [
        { target: 5, suffix: "+", label: "Partner Schools" },
        { target: 1, suffix: "", label: "Govt. IoT Tender Executed" },
        { target: 100, suffix: "%", label: "In-House Electronics" },
        { target: 365, suffix: "", label: "Days LMS Access" },
    ];

    return (
        <section className="w-full bg-slate-50 pb-20 pt-10 px-5 md:px-10 lg:px-16 relative z-20">
            {/* The negative top margin pulls the grid up so it overlaps the Hero banner */}
            <div className="max-w-[90rem] mx-auto -mt-24 md:-mt-32">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <AnimatedStat 
                            key={stat.label}
                            target={stat.target}
                            suffix={stat.suffix}
                            label={stat.label}
                            delay={idx * 0.15}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}