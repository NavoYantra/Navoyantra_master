"use client";

import { useState } from "react";

const labCategories = [
    {
        image: "/ct-card-bg.png",
        title: "Robotics Lab",
        description:
            "End-to-end autonomous robotics workspace featuring multi-axis manipulators, line-followers, obstacle navigators, and programmable chassis kits.",
    },
    {
        image: "/ct-card-bg.png",
        title: "AI Innovation Lab",
        description:
            "Edge AI workstations with neural compute modules, vision cameras, TinyML boards, and curated datasets for hands-on deep learning.",
    },
    {
        image: "/ct-card-bg.png",
        title: "IoT & Embedded Systems Lab",
        description:
            "Connected device benches with ESP32/STM32 boards, sensor arrays, MQTT gateways, and cloud dashboard integrations.",
    },
    {
        image: "/ct-card-bg.png",
        title: "STEM Innovation Lab",
        description:
            "Cross-disciplinary maker spaces with 3D printers, laser cutters, soldering stations, and modular electronic project kits.",
    },
    {
        image: "/ct-card-bg.png",
        title: "Industry 4.0 Lab",
        description:
            "Industrial-grade IIoT testbeds featuring PLCs, SCADA simulators, Modbus interfaces, and predictive maintenance sensor rigs.",
    },
];

export default function WhatWeOfferLab() {
    const [active, setActive] = useState(0);

    return (
        <section className="w-full py-20 px-6 bg-zinc-50 border-b-2 border-zinc-200">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 space-y-2">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                        Infrastructure Categories
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900">
                        What We <span className="text-blue-600">Offer</span>
                    </h2>
                    <p className="mt-3 text-zinc-500 text-sm max-w-lg mx-auto">
                        Five specialized lab configurations engineered for schools, colleges, and research institutions.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-3 h-auto md:h-[500px]">
                    {labCategories.map((category, index) => {
                        const isActive = active === index;
                        return (
                            <div
                                key={`${category.title}-${index}`}
                                onMouseEnter={() => setActive(index)}
                                className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out bg-cover bg-center border-2 ${
                                    isActive
                                        ? "flex-[5] border-blue-500"
                                        : "flex-1 border-zinc-200 hover:border-zinc-400"
                                } min-h-[120px] md:min-h-0`}
                                style={{
                                    backgroundImage: `url(${category.image})`,
                                }}
                            >
                                {/* Dark overlay */}
                                <div
                                    className={`absolute inset-0 transition-all duration-500 ${
                                        isActive ? "bg-black/55" : "bg-black/70"
                                    }`}
                                />

                                {/* Active content */}
                                {isActive ? (
                                    <div className="relative h-full p-8 flex flex-col justify-between text-white">
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                                                0{index + 1} Lab Module
                                            </span>
                                            <h3 className="text-3xl md:text-4xl font-black mt-2 uppercase tracking-tight">
                                                {category.title}
                                            </h3>
                                        </div>
                                        <p className="max-w-sm text-sm leading-relaxed text-zinc-300">
                                            {category.description}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="relative h-full flex flex-row md:flex-col items-center justify-start p-4 md:py-8 text-white gap-4 md:gap-0">
                                        <span className="text-base font-black text-zinc-400">
                                            0{index + 1}
                                        </span>
                                        <h3
                                            className="text-lg md:text-xl whitespace-nowrap font-bold uppercase tracking-wider md:mt-16"
                                            style={{ writingMode: "vertical-rl" }}
                                        >
                                            {category.title}
                                        </h3>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
