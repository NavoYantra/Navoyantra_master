"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const testimonials = [
    {
        title: "Unparalleled Efficiency",
        description:
            "Implementing navoyantra's Industrial IoT gateways allowed us to track OEE in real-time and reduce our machine downtime by 40%. Their vertical integration means the hardware is perfectly synced with our custom logic.",
        name: "Vikram Singhania",
        designation: "CEO, Precision Parts NCR",
    },
    {
        title: "Excellent Support",
        description:
            "The engineering team helped us deploy our complete automation stack within days. Their support and technical expertise have been exceptional throughout the project.",
        name: "Ankit Sharma",
        designation: "Director, Smart Industries",
    },
    {
        title: "Reliable Technology",
        description:
            "We've been using their IIoT devices across multiple production lines. Stable performance, great documentation, and outstanding after-sales support.",
        name: "Priya Mehta",
        designation: "Operations Head, TechFab",
    },
];

export default function TestimonialSection() {
    const [active, setActive] = useState(0);

    const prev = () => {
        setActive((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const next = () => {
        setActive((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section
            className="relative bg-fixed bg-center bg-cover mt-10"
            style={{
                backgroundImage: "url('/ct-card-bg.png')",
            }}
        >
            {/* Overlay */}

            <div className="absolute inset-0 bg-black/70" />

            <div className="relative max-w-7xl mx-auto px-6 py-32">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left */}

                    <div className="text-white">

            <span className="uppercase tracking-widest text-sm text-blue-500 font-semibold">
              Testimonials
            </span>

                        <h2 className="text-6xl font-bold leading-tight mt-5">
                            Trusted By
                            <br />
                            Leaders
                        </h2>

                        <p className="text-gray-300 mt-8 leading-8 max-w-md">
                            Across India, from government-run Atal Tinkering Labs to
                            manufacturing units, our customers trust us for quality,
                            innovation and reliable engineering solutions.
                        </p>

                    </div>

                    {/* Right */}

                    <div className="relative">

                        <div className="bg-blue-500 p-14 md:p-16 text-white shadow-2xl">

                            <h3 className="text-4xl font-bold text-center">
                                {testimonials[active].title}
                            </h3>

                            <p className="text-center leading-8 mt-8">
                                "{testimonials[active].description}"
                            </p>

                            <div className="mt-10 text-center">

                                <h4 className="font-bold uppercase">
                                    {testimonials[active].name}
                                </h4>

                                <p className="uppercase text-sm mt-1 opacity-90">
                                    {testimonials[active].designation}
                                </p>

                            </div>

                        </div>

                        {/* Navigation */}

                        <button
                            onClick={prev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition"
                        >
                            <ChevronLeft size={42} />
                        </button>

                        <button
                            onClick={next}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition"
                        >
                            <ChevronRight size={42} />
                        </button>

                        {/* Dots */}

                        <div className="flex justify-center gap-3 mt-6">

                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActive(index)}
                                    className={`w-3 h-3 rounded-full transition ${
                                        index === active
                                            ? "bg-blue-500"
                                            : "bg-white/50"
                                    }`}
                                />
                            ))}

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}