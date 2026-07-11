"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Download, Compass } from "react-feather";

export default function LabHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Initial setup for stagger animation
        const titleElements = containerRef.current?.querySelectorAll(".animate-item");
        if (titleElements && titleElements.length > 0) {
            gsap.from(titleElements, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });
        }
    }, { scope: containerRef });

    const handleAction = (type: string) => {
        alert(`${type} action triggered!`);
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[70vh] bg-zinc-50 border-b-2 border-zinc-200 flex items-center justify-center py-20 px-6 overflow-hidden"
        >
            {/* Background grid lines for a boxy technical schematic feel */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />
            
            {/* Boxy layout container */}
            <div className="max-w-4xl w-full text-center relative z-10 space-y-8">
                {/* Accent Tag */}
                <div className="animate-item inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-600 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest rounded-none">
                    <Compass size={14} className="animate-spin-slow" />
                    <span>Turnkey Institution Infrastructure</span>
                </div>

                {/* Main Hero Header */}
                <div ref={textRef} className="space-y-4">
                    <h1 className="animate-item text-5xl sm:text-6xl md:text-7xl font-black text-zinc-950 uppercase tracking-tight leading-none">
                        Lab<span className="text-blue-600">-Setup</span>
                    </h1>
                    <p className="animate-item text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed font-medium">
                        Transform your classrooms into advanced labs. We design, procure, install, and support next-gen Robotics, Artificial Intelligence, and IoT setups to prepare students for real-world technologies.
                    </p>
                </div>

                {/* Staggered boxy CTA buttons */}
                <div
                    ref={buttonsRef}
                    className="animate-item flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <button
                        onClick={() => handleAction("Download Brochure")}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider text-xs px-8 py-4 border-2 border-blue-600 rounded-none transition-all duration-200 cursor-pointer shadow-md hover:shadow-blue-500/10"
                    >
                        <Download size={14} />
                        <span>download brochure</span>
                    </button>
                    
                    <button
                        onClick={() => handleAction("Get Free Consultation")}
                        className="w-full sm:w-auto bg-white hover:bg-zinc-50 text-zinc-900 border-2 border-zinc-900 font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-none transition-all duration-200 cursor-pointer"
                    >
                        <span>Get free consultation</span>
                    </button>
                </div>
            </div>

            {/* Corner styling elements to enforce boxy aesthetics */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-zinc-300" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-zinc-300" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-zinc-300" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-zinc-300" />
        </section>
    );
}
