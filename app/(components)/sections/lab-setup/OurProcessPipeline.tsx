"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    FileText,
    Layout,
    Tool,
    Users,
    BookOpen,
    Headphones,
} from "react-feather";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        step: 1,
        title: "Requirement Analysis",
        description:
            "We understand your institution's goals, student strength, available space, and budget to craft a tailored proposal.",
        icon: FileText,
    },
    {
        step: 2,
        title: "Lab Planning",
        description:
            "Our experts design the ideal lab layout and recommend the right package of hardware, software, and curriculum modules.",
        icon: Layout,
    },
    {
        step: 3,
        title: "Installation",
        description:
            "Professional installation and testing of all hardware, networking equipment, power stations, and furniture.",
        icon: Tool,
    },
    {
        step: 4,
        title: "Teacher Training",
        description:
            "Hands-on training sessions to help educators confidently conduct practical classes and evaluate student projects.",
        icon: Users,
    },
    {
        step: 5,
        title: "Student Learning",
        description:
            "Access to curriculum, project manuals, LMS, and practical learning resources designed for progressive skill-building.",
        icon: BookOpen,
    },
    {
        step: 6,
        title: "Continuous Support",
        description:
            "Ongoing technical support, maintenance, upgrade assistance, and annual hardware calibration visits.",
        icon: Headphones,
    },
];

export default function OurProcessPipeline() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const items =
                sectionRef.current?.querySelectorAll(".pipeline-step");
            if (!items || items.length === 0) return;

            items.forEach((item, i) => {
                gsap.from(item, {
                    x: i % 2 === 0 ? -50 : 50,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            });

            // Animate the connecting line
            gsap.from(".pipeline-line", {
                scaleY: 0,
                duration: 1.5,
                ease: "power2.out",
                transformOrigin: "top center",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none none",
                },
            });
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="w-full bg-white py-20 px-6 border-b-2 border-zinc-200"
        >
            <div className="max-w-4xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-16 space-y-2">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                        Pipeline
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900">
                        Our <span className="text-blue-600">Process</span>
                    </h2>
                    <p className="text-zinc-500 text-sm max-w-md mx-auto">
                        A structured, six-stage deployment pipeline that ensures
                        zero-downtime lab delivery.
                    </p>
                </div>

                {/* Pipeline Steps */}
                <div className="relative">
                    {/* Vertical connecting line */}
                    <div className="pipeline-line absolute left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-8 md:space-y-0">
                        {steps.map((item, idx) => {
                            const Icon = item.icon;
                            const isLeft = idx % 2 === 0;

                            return (
                                <div
                                    key={item.step}
                                    className="pipeline-step relative md:py-8"
                                >
                                    {/* Center dot */}
                                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-blue-600 border-4 border-white shadow-md items-center justify-center text-white">
                                        <span className="text-xs font-black">
                                            {item.step}
                                        </span>
                                    </div>

                                    {/* Card positioned alternately */}
                                    <div
                                        className={`md:w-[calc(50%-2.5rem)] ${
                                            isLeft
                                                ? "md:mr-auto md:pr-4"
                                                : "md:ml-auto md:pl-4"
                                        }`}
                                    >
                                        <div className="group border-2 border-zinc-200 hover:border-blue-500 bg-white p-6 transition-all duration-300">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="bg-blue-50 border border-blue-200 p-2 text-blue-600 md:hidden">
                                                    <span className="text-xs font-black">
                                                        {item.step}
                                                    </span>
                                                </div>
                                                <div className="bg-zinc-50 border border-zinc-200 p-2 text-zinc-500 group-hover:text-blue-600 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                                                    <Icon size={16} />
                                                </div>
                                                <div>
                                                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">
                                                        Step {item.step}
                                                    </span>
                                                    <h3 className="text-base font-bold uppercase tracking-tight text-zinc-950">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                            </div>
                                            <p className="text-xs text-zinc-500 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
