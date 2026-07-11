"use client";

import {useEffect, useRef, useState} from "react";
import gsap from "gsap";

const AUTO_ADVANCE_MS = 3000;

const data = [
    {
        image: "/moto/innovation.jpeg",
        title: "Innovation",
        desc: "We build scalable digital experiences that help businesses grow faster with modern technology.",
    },
    {
        image: "/moto/quality.jpeg",
        title: "Quality",
        desc: "Every product is crafted with attention to detail, performance and long-term maintainability.",
    },
    {
        image: "/moto/trust.jpeg",
        title: "Trust",
        desc: "We believe transparency and commitment create lasting relationships with our clients.",
    },
    {
        image: "/moto/growth.jpeg",
        title: "Growth",
        desc: "Continuous learning and innovation keep us ahead while delivering exceptional results.",
    },
];

export default function OurMoto() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    const image = useRef<HTMLImageElement>(null);
    const title = useRef<HTMLHeadingElement>(null);
    const desc = useRef<HTMLParagraphElement>(null);
    const progressFill = useRef<HTMLDivElement>(null);

    const activeRef = useRef(active);
    activeRef.current = active;

    // Animate content whenever the active slide changes
    useEffect(() => {
        const tl = gsap.timeline();

        tl.to([image.current, title.current, desc.current], {
            opacity: 0,
            y: 20,
            duration: 0.25,
            ease: "power1.in",
        }).fromTo(
            [image.current, title.current, desc.current],
            {opacity: 0, y: 20},
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.06,
                ease: "power2.out",
            }
        );

        return () => {
            tl.kill();
        };
    }, [active]);

    // Auto-advance every AUTO_ADVANCE_MS, paused on hover
    useEffect(() => {
        if (paused) return;

        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % data.length);
        }, AUTO_ADVANCE_MS);

        return () => clearInterval(id);
    }, [paused]);

    // Progress bar that fills across each interval, restarts on slide change / pause
    useEffect(() => {
        if (!progressFill.current) return;

        gsap.killTweensOf(progressFill.current);

        if (paused) return;

        gsap.fromTo(
            progressFill.current,
            {scaleX: 0},
            {
                scaleX: 1,
                duration: AUTO_ADVANCE_MS / 1000,
                ease: "none",
                transformOrigin: "left center",
            }
        );
    }, [active, paused]);

    const goTo = (index: number) => {
        if (index === activeRef.current) return;
        setActive(index);
    };

    const current = data[active];

    return (
        <section
            className="w-full py-24 bg-[#f7f7f7] flex flex-col justify-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <h2 className="text-6xl font-semibold text-center mb-24">
                Our Moto
            </h2>

            <div className="max-w-7xl mx-auto w-full px-10 grid md:grid-cols-2 gap-20 items-center">

                {/* Left */}
                <div className="flex justify-center">
                    <div
                        className="w-90 h-90 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                        <img
                            ref={image}
                            src={current.image}
                            alt={current.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right */}
                <div className="bg-linear-to-br from-blue-200 to-blue-500 p-10 min-h-87.5 flex flex-col justify-start">
                    <h3
                        ref={title}
                        className="text-6xl font-semibold mb-6"
                    >
                        {current.title}
                    </h3>

                    <p
                        ref={desc}
                        className="text-lg leading-8 text-gray-700"
                    >
                        {current.desc}
                    </p>
                </div>

            </div>
        </section>
    );
}