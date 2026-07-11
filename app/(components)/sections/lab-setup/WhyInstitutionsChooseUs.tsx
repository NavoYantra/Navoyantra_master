"use client";

import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
    {
        title: "Practical Learning",
        description: "Students learn by building real projects instead of only studying theory. From assembling robotic arms to programming IoT gateways, every concept is reinforced by hands-on hardware.",
    },
    {
        title: "Industry-Relevant Curriculum",
        description: "Aligned with emerging technologies and industry expectations. Our syllabus maps directly to NEP 2020 guidelines and real-world job requirements.",
    },
    {
        title: "Complete Ecosystem",
        description: "Hardware + Software + Curriculum + LMS + Teacher Training + Support. A single-vendor, fully integrated solution with no third-party dependency.",
    },
    {
        title: "Scalable Solutions",
        description: "Labs can be expanded as your institution grows. Start with a single robotics bench and scale to a full multi-discipline innovation center.",
    },
    {
        title: "Affordable Packages",
        description: "Solutions available for institutions of every size and budget. From government-aided schools to private engineering colleges, we have tiered pricing models.",
    },
];

export default function WhyInstitutionsChooseUs() {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section
            className="relative w-full py-24 px-6 overflow-hidden"
        >
            {/* Parallax background with fixed attachment */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url(/ct-card-bg.png)" }}
            />
            <div className="absolute inset-0 bg-zinc-950/85" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-16 space-y-3">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                        Trusted by 200+ Institutions
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                        Why Institutions{" "}
                        <span className="text-blue-400">Choose Us</span>
                    </h2>
                    <p className="text-zinc-400 text-sm max-w-lg mx-auto leading-relaxed">
                        From ATL labs in government schools to advanced research
                        cells in engineering colleges, our platform powers
                        India&apos;s next-generation STEM infrastructure.
                    </p>
                </div>

                {/* Reason Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {reasons.map((reason, idx) => (
                        <div
                            key={idx}
                            className="reason-card group border-2 border-zinc-700 hover:border-blue-500 bg-zinc-900/60 backdrop-blur-sm p-6 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                                        0{idx + 1}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                                    {reason.title}
                                </h3>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
