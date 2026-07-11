"use client";

import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ArrowRight} from "react-feather";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.from(".info-heading", {
                y: 80,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });

            tl.from(
                ".info-card",
                {
                    y: 80,
                    opacity: 0,
                    scale: 0.95,
                    stagger: 0.15,
                    duration: 0.7,
                    ease: "power3.out",
                },
                "-=0.3"
            );

            gsap.utils.toArray<HTMLElement>(".info-card").forEach((card) => {
                card.addEventListener("mouseenter", () => {
                    gsap.to(card, {
                        y: -10,
                        scale: 1.03,
                        duration: 0.3,
                        ease: "power2.out",
                    });
                });

                card.addEventListener("mouseleave", () => {
                    gsap.to(card, {
                        y: 0,
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out",
                    });
                });
            });
        },
        {scope: sectionRef}
    );

    return (
        <section
            ref={sectionRef}
            id="info-section"
            className="min-h-screen bg-zinc-100 px-8 py-20"
            style={{backgroundImage: 'url(/hc.jpg)'}}
        >
            <div className="mx-auto max-w-7xl">
                <div className="info-heading mb-16">

                    <h2 className="mt-4 text-5xl font-bold text-zinc-900">
                        About Us
                    </h2>

                    <p className="mt-6 max-w-2xl text-lg text-zinc-600">
                        We build industrial-grade IoT products, automation systems,
                        intelligent monitoring platforms and engineering lab setups for
                        industries and educational institutions.
                    </p>
                </div>

                <div className="grid auto-rows-55 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* Large Card */}
                    <div
                        style={{backgroundImage: `url(/card-bg.jpg)`}}
                        className="info-card col-span-1 row-span-2 backdrop-blur-3xl bg-blend-overlay bg-zinc-900/60 p-14 text-white lg:col-span-2">
                        <h3 className="text-3xl font-bold">
                            Building the Future
                        </h3>

                        <p className="mt-5 text-zinc-300 leading-relaxed">
                            NavoYantra Technology empowers schools, colleges, industries, and innovators with Robotics,
                            Artificial Intelligence, IoT, Embedded Systems, Automation, and STEM Education solutions.
                            From educational robotics kits and complete innovation labs to advanced learning platforms,
                            we help transform ideas into real-world innovations.
                        </p>

                        <button
                            className={"mt-24 w-max flex items-center justify-center gap-2 bg-blue-700 text-white cursor-pointer p-2 px-5"}>
                            <span>Get Custom Quote</span>
                            <ArrowRight/>
                        </button>
                    </div>

                    {/* Card */}
                    <div className="info-card  bg-white p-6 shadow-sm">
                        <h3 className="mt-5 text-xl font-bold">
                            Robotics Kit
                        </h3>

                        <p className="mt-3 text-zinc-600">
                            PLC programming, embedded systems and industrial automation.
                        </p>
                    </div>

                    {/* Card */}
                    <div className="info-card  bg-blue-600 p-6 text-white">
                        <h3 className="mt-5 text-xl font-bold">
                            ESP 32
                        </h3>

                        <p className="mt-3 text-blue-100">
                            Ready-to-use IoT kits and automation hardware.
                        </p>
                    </div>

                    {/* Wide Card */}
                    <div className="info-card  bg-white p-6 shadow-sm lg:col-span-2">
                        <h3 className="mt-5 text-2xl font-bold">
                            Arduino Nano
                        </h3>

                        <p className="mt-3 text-zinc-600">
                            Complete laboratory infrastructure for engineering colleges and
                            universities with modern curriculum support.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;