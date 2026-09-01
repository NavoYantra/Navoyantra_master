"use client";

import {useState} from "react";
import {ChevronLeft, ChevronRight} from "react-feather";

const testimonials = [
    {
        title: "Unparalleled Efficiency",
        description:
            "Implementing navoyantra's Industrial IoT gateways allowed us to track OEE in real-time and reduce our machine downtime by 40%. Their vertical integration means the hardware is perfectly synced with our custom logic.",
        name: "Vikram Singhania",
        designation: "CEO, Precision Parts NCR",
        image: "https://randomuser.me/api/portraits/men/43.jpg"
    },
    {
        title: "Excellent Support",
        description:
            "The engineering team helped us deploy our complete automation stack within days. Their support and technical expertise have been exceptional throughout the project.",
        name: "Ankit Sharma",
        designation: "Director, Smart Industries",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        title: "Reliable Technology",
        description:
            "We've been using their IIoT devices across multiple production lines. Stable performance, great documentation, and outstanding after-sales support.",
        name: "Priya Mehta",
        designation: "Operations Head, TechFab",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
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
        <section className="relative bg-[#040b16] py-32 overflow-hidden">
            
            

            <div className="relative max-w-7xl mx-auto px-6 z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left */}
                    <div className="text-white">
                        <span className="uppercase tracking-widest text-sm text-primary font-bold">
                            Testimonials
                        </span>
                        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-5">
                            Trusted By <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Industry Leaders</span>
                        </h2>
                        <p className="text-gray-400 mt-8 leading-relaxed max-w-md text-lg">
                            Across India, from government-run Atal Tinkering Labs to manufacturing units, our customers trust us for quality, innovation and reliable engineering solutions.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="relative">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 md:p-14 text-white rounded-3xl shadow-2xl">
                            <h3 className="text-3xl font-bold text-center mb-8 text-primary">
                                "{testimonials[active].title}"
                            </h3>
                            <p className="text-center leading-relaxed text-lg text-gray-200 italic mb-10">
                                "{testimonials[active].description}"
                            </p>
                            <div className="flex flex-col items-center justify-center text-center mt-6">
                                <img 
                                    src={testimonials[active].image} 
                                    alt={testimonials[active].name} 
                                    className="w-20 h-20 rounded-full border-2 border-primary object-cover mb-4 shadow-lg"
                                />
                                <h4 className="font-bold text-xl tracking-wide">
                                    {testimonials[active].name}
                               </h4>
                                <p className="text-accent text-sm font-medium mt-1">
                                    {testimonials[active].designation}
                                </p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <button
                            onClick={prev}
                            aria-label="Previous testimonial"
                            className="absolute -left-6 md:-left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 hover:bg-blue-600 transition shadow-xl"
                        >
                            <ChevronLeft size={28} />
                        </button>
                        <button
                            onClick={next}
                            aria-label="Next testimonial"
                            className="absolute -right-6 md:-right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 hover:bg-blue-600 transition shadow-xl"
                        >
                            <ChevronRight size={28} />
                        </button>

                        {/* Dots */}
                        <div className="flex justify-center gap-3 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActive(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                    className={`h-3 rounded-full transition-all duration-300 ${
                                        index === active
                                            ? "bg-primary w-8"
                                            : "bg-white/30 w-3 hover:bg-white/50"
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
