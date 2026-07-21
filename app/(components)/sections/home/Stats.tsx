"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
    {
        value: "10+",
        title: "Robotics Products",
        description: "We offer a wide range of robotics kits and solutions for enthusiasts and learners.",
    },
    {
        value: "500+",
        title: "Components & Learning Resources",
        description: "Extensive collection of components, tutorials, and guides for robotics and IoT projects.",
    },
    {
        value: "5+",
        title: "Lab Packages",
        description: "Comprehensive lab packages for educational institutions and makerspaces.",
    },
    {
        value: "100%",
        title: "Hands On Learning",
        description: "Learn by doing with our practical kits and resources designed for real-world applications.",
    },
];

function AnimatedNumber({ value }: { value: string }) {
    const num = parseInt(value.replace(/[^0-9]/g, ''));
    const suffix = value.replace(/[0-9]/g, '');
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;
        if (isNaN(num)) return;

        const controls = animate(0, num, {
            duration: 2,
            ease: "easeOut",
            onUpdate(v) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(v) + suffix;
                }
            }
        });
        return () => controls.stop();
    }, [num, suffix, isInView]);

    if (isNaN(num)) return <span>{value}</span>;

    return <span ref={ref}>0{suffix}</span>;
}

export default function StatsSection() {
    return (
        <section className="relative overflow-hidden py-12 lg:py-20 cursor-default bg-surface">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-muted/30 px-6 lg:px-0">
                {stats.map((stat, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        key={stat.title}
                        className="group px-6 py-6 text-center transition hover:-translate-y-2"
                    >
                        <h3 className="text-5xl font-extrabold text-accent">
                            <AnimatedNumber value={stat.value} />
                        </h3>
                        <h4 className="mt-4 text-md font-semibold text-foreground">{stat.title}</h4>
                        <p className="mt-3 text-sm leading-6 text-muted">{stat.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}