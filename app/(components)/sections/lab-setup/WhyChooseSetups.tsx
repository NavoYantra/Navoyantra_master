"use client";

import {Cpu, Package, Shield} from "react-feather";

export default function WhyChooseSetups() {
    const hardwareCategories = [
        {
            title: "robotic hardware kits",
            subtitle: "Chassis, high-torque DC motors, microcontroller plates, and sensor brackets.",
            size: "col-span-2 row-span-1"
        },
        {
            title: "embedded electronics",
            subtitle: "ESP32, custom Atmega boards, SMT prototype shields, and logic programmers.",
            size: "col-span-1 row-span-1"
        },
        {
            title: "ai and iot hardware kit",
            subtitle: "Edge computer modules, neural chips, smart sensor hubs, and actuators.",
            size: "col-span-1 row-span-1"
        },
        {
            title: "drone robotics framework",
            subtitle: "Carbon fiber frames, flight control boards, ESCs, brushless motors, and receiver modules.",
            size: "col-span-2 row-span-1"
        }
    ];

    const includedItems = [
        "Robotic Hardware Kits",
        "Artificial Intelligence Modules",
        "Internet of Things Gateway Arrays",
        "Sensors & Actuators Components",
        "Project-Based Curriculums",
        "Teacher Training Programs",
        "LMS & Digital Learning Portals",
        "Technical Assembly Manuals",
        "MSME Verification Support",
        "Annual Maintenance Packages"
    ];

    return (
        <section
            className="w-full bg-white py-20 px-6 border-b-2 border-zinc-200"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-stretch">
                    {/* Left Column - Detailed specifications list */}
                    <div className="left-panel border-2 border-zinc-950 p-8 flex flex-col justify-between bg-zinc-50 relative">
                        <div className="absolute top-0 left-0 bg-zinc-950 text-white font-bold uppercase tracking-widest text-[9px] px-3 py-1">
                            Turnkey Spec Card
                        </div>

                        <div className="space-y-6 pt-4">
                            <h2 className="text-3xl font-black uppercase tracking-tight text-zinc-900 leading-none">
                                Why Choose Us for Setups?
                            </h2>
                            <p className="text-zinc-500 text-xs font-semibold leading-relaxed">
                                NavoYantra Technology is a vertically integrated OEM. We do not just supply parts; we design full educational platforms. From initial layout design to installation, training, and curriculum, we support your entire technical pipeline.
                            </p>

                            <div className="border-t-2 border-zinc-200 pt-6 space-y-4">
                                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">
                                    What's Included:
                                </span>
                                <h3 className="text-xl font-bold uppercase tracking-tight text-zinc-950">
                                    Complete Turnkey Solution
                                </h3>
                                <ul className="grid sm:grid-cols-2 gap-2">
                                    {includedItems.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-xs font-bold text-zinc-700 uppercase tracking-wider">
                                            <span className="w-2 h-2 bg-blue-600 shrink-0"/>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pt-8 mt-6 border-t border-zinc-200 text-zinc-400">
                            <Shield size={20} className="text-blue-500" />
                            <span className="text-[9px] font-bold uppercase tracking-wider">
                                DPIIT Recognized & MSME Certified OEM Manufacturer
                            </span>
                        </div>
                    </div>

                    {/* Right Column - Boxy Masonry Grid of Categories */}
                    <div className="flex flex-col justify-between space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-1.5 text-blue-600 font-bold uppercase tracking-wider text-xs">
                                <Package size={14} />
                                <span>Module Catalog</span>
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-900">
                                Side-by-Side Equipment Grid
                            </h3>
                            <p className="text-xs text-zinc-500 max-w-lg leading-relaxed">
                                Our laboratory modules are categorized modularly, allowing institutions to combine segments that perfectly match their target syllabus.
                            </p>
                        </div>

                        {/* Masonry grid */}
                        <div className="grid grid-cols-2 gap-4 auto-rows-fr">
                            {hardwareCategories.map((cat, idx) => (
                                <div
                                    key={idx}
                                    className={`grid-item group border-2 border-zinc-200 hover:border-blue-500 bg-white p-6 flex flex-col justify-between transition-all duration-300 ${cat.size}`}
                                >
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest group-hover:text-blue-500 transition-colors">
                                                0{idx + 1}
                                            </span>
                                            <Cpu size={16} className="text-zinc-300 group-hover:text-blue-500 transition-colors" />
                                        </div>
                                        <h4 className="text-lg font-bold uppercase tracking-tight text-zinc-950">
                                            {cat.title}
                                        </h4>
                                        <p className="text-xs text-zinc-500 leading-relaxed">
                                            {cat.subtitle}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-zinc-100 mt-4 flex items-center justify-between text-[9px] font-bold text-zinc-400 group-hover:text-blue-600 transition-colors">
                                        <span>EXPLORE PARTS</span>
                                        <span>→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
