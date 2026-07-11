"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {Search, Calendar, User, Clock, ArrowRight, X, Share2, BookOpen, Tag, Heart} from "react-feather";

const blogPosts = [
    {
        id: 1,
        title: "Building the Future of STEM in India",
        author: "Dr. A. K. Sharma",
        date: "July 05, 2026",
        category: "STEM Education",
        summary: "An in-depth look at how hands-on learning labs are transforming schools and fostering the spirit of innovation under AtmaNirbhar Bharat.",
        readTime: "5 Min Read",
        highlights: [
            "Atal Tinkering Lab success stories across schools",
            "Why physical hardware loops beat theoretical textbooks",
            "The vital role of indigenized custom microcontrollers"
        ],
        content: `Traditional education in India has long leaned on rote learning and blackboard instruction. However, the modern industrial landscapes of AI, IIoT, and advanced robotics demand a massive paradigm shift towards hands-on engineering from the classroom level.

At NavoYantra, our mission is to build the physical tools that enable schools to transition into innovation labs. Through the deployment of custom robotics kits and tailored curriculums, we are witnessing school-age students assemble obstacle-avoiding cars, program IoT weather stations, and grasp fundamental embedded coding.

The success of programs like the Atal Tinkering Labs (ATL) highlights the potential when children are provided with sensors, microcontrollers, and breadboards. By working through failure—wiring a pin wrong, writing an infinite loop, or miscalculating battery voltage—they build critical debugging skills that no textbook can ever replicate. We are proud to support this national vision towards deep-tech sovereignty and self-reliance.`
    },
    {
        id: 2,
        title: "Getting Started with Edge AI on Microcontrollers",
        author: "Samir Sen (Lead Hardware Architect)",
        date: "June 28, 2026",
        category: "Robotics",
        summary: "How low-power microprocessors are now capable of running deep neural networks for real-time sensor processing and computer vision.",
        readTime: "8 Min Read",
        highlights: [
            "TinyML frameworks and model quantization",
            "Deploying object detection on localized dual-core chips",
            "Power-consumption benchmarks for battery operations"
        ],
        content: `Artificial intelligence has historically been synonymous with heavy server racks, massive GPU clusters, and high-wattage power lines. However, a silent revolution is happening at the very edge of the hardware layer: TinyML.

TinyML refers to the deployment of compressed machine learning models onto microcontrollers with only kilobytes of RAM. Using modern optimization techniques like model quantization—converting 32-bit floating-point weights into 8-bit integers—we can shrink complex neural nets by 75% or more with negligible loss in accuracy.

Our latest AI Edge Camera Module is powered by a dual-core RISC-V processor running localized object classification. Instead of streaming video feeds over bandwidth-heavy networks to the cloud, the sensor classifies frames locally, communicating outcomes in simple bytes via UART/I2C. This significantly decreases latency, increases user privacy, and allows devices to operate for months on standard lithium batteries.`
    },
    {
        id: 3,
        title: "Architecting a Scalable IoT Smart Factory",
        author: "NavoYantra Engineering Team",
        date: "June 14, 2026",
        category: "IoT & Automation",
        summary: "A blueprint for deploying sensor meshes in manufacturing lines to monitor vibrations, temperature, and predict failures before they happen.",
        readTime: "12 Min Read",
        highlights: [
            "Modbus/RS485 industrial protocol integration",
            "Designing robust MQTT message payloads",
            "Edge-gateway architecture for secure offline routing"
        ],
        content: `Industrial IoT (IIoT) requires a different mindset compared to standard smart-home consumer electronics. In a factory environment, sensors must withstand extreme electromagnetic interference, high temperatures, physical vibration, and strictly guarantee uptime.

In our latest smart factory deployment, we designed a unified mesh network using custom industrial-grade nodes. Each node collects motor vibration profiles (using high-g accelerometers) and bearing temperatures. The collected data is routed through a central edge-gateway where local thresholding is performed.

Should a motor show early signatures of bearing misalignment, an alert is dispatched instantly. By coupling edge calculations with lightweight MQTT brokers, we keep bandwidth footprints low while feeding diagnostic dashboards. This predictive maintenance setup has successfully prevented costly line-stoppages for our partners, showing the true ROI of practical IIoT.`
    },
    {
        id: 4,
        title: "The Rise of Autonomous Drones in Agriculture",
        author: "Rohan Das (Drone Division)",
        date: "May 22, 2026",
        category: "Robotics",
        summary: "Exploring the engineering hurdles and software algorithms that allow drones to autonomously map and spray crop fields.",
        readTime: "6 Min Read",
        highlights: [
            "Precision GPS-denied autonomous navigation loops",
            "Carbon-fiber quadcopter payload optimizations",
            "Indian DGCA compliance and flight logging procedures"
        ],
        content: `Agriculture is ripe for robotic automation. With vast areas to cover, manual pesticide spraying and crop health monitoring are highly inefficient. Enter custom quadcopters built specifically for industrial farming.

Developing agricultural drones presents unique engineering challenges. Unlike hobbyist drones, agricultural drones carry liquid payloads that shift dynamically during flight, altering the drone's center of gravity. To compensate, flight control loops must run custom adaptive algorithms that constantly adjust motor outputs.

Additionally, to prevent pesticide drift, the spray must be dispersed precisely. Utilizing downward-facing distance sensors, the drone automatically locks height profiles relative to crop canopy, maintaining constant altitude even on hilly terrains. When combined with localized multispectral imaging cameras, these UAVs provide farmers with exact crop stress maps, dramatically optimizing fertilizer utilization.`
    },
    {
        id: 5,
        title: "Why We Manufacture Locally (GeM OEM Advantage)",
        author: "Divya Patel (Director of Operations)",
        date: "May 09, 2026",
        category: "Tech Culture",
        summary: "Our journey to becoming a DPIIT-recognized GeM OEM manufacturer and how it benefits the Indian STEM ecosystem.",
        readTime: "4 Min Read",
        highlights: [
            "MSME support networks and domestic component supply chains",
            "Immediate engineering iterations and QA feedback loops",
            "Fostering local tech jobs in high-value electronic assembly"
        ],
        content: `Establishing local hardware manufacturing in India is a path filled with obstacles. Sourcing high-quality FR4 boards, ensuring consistent solder paste stencils, and organizing surface mount technology (SMT) supply lines require robust local networks.

However, the advantages of local manufacturing are massive. Being a DPIIT-recognized MSME and registered GeM OEM manufacturer allows us to design, prototype, and manufacture hardware under one roof. When a school or institution gives feedback on a pin header placement or a connector type, we don't wait months for foreign revisions—we modify PCB schematics and run batches in our own facility in days.

This localized control guarantees that our STEM kits are tailored perfectly to the local syllabus and hardware constraints. By fabricating boards locally, we also build key technician skills in electronics testing and assembly, actively supporting India's transition from a consumer of technology to an architect of global hardware solutions.`
    }
];

const categories = [
    "All",
    "Robotics",
    "IoT & Automation",
    "STEM Education",
    "Tech Culture"
];

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedPost, setSelectedPost] = useState<any | null>(null);
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    // Filter posts
    const filteredPosts = useMemo(() => {
        let result = [...blogPosts];

        // Category filter
        if (selectedCategory !== "All") {
            result = result.filter(p => p.category === selectedCategory);
        }

        // Search query filter
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter(p =>
                p.title.toLowerCase().includes(query) ||
                p.summary.toLowerCase().includes(query) ||
                p.content.toLowerCase().includes(query)
            );
        }

        return result;
    }, [selectedCategory, searchQuery]);

    const showToast = (message: string) => {
        setToastMessage(message);
        setTimeout(() => setToastMessage(null), 3000);
    };

    const fallbackCopyText = (text: string) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            const successful = document.execCommand("copy");
            if (successful) {
                showToast("Copied article link to clipboard!");
            } else {
                showToast("Failed to copy link");
            }
        } catch (err) {
            showToast("Failed to copy link");
        }
        document.body.removeChild(textArea);
    };

    const handleShare = (post: any, e: React.MouseEvent) => {
        e.stopPropagation();
        const dummyUrl = typeof window !== "undefined" ? `${window.location.origin}/blog?post=${post.id}` : "";
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(dummyUrl).then(() => {
                showToast("Copied article link to clipboard!");
            }).catch(() => {
                fallbackCopyText(dummyUrl);
            });
        } else {
            fallbackCopyText(dummyUrl);
        }
    };

    return (
        <main className="bg-zinc-50 min-h-screen pb-24">
            {/* Boxy Minimal Hero Section */}
            <section className="bg-white border-b-2 border-zinc-200 py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_360px] gap-8 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-xs mb-3">
                            <BookOpen size={14} />
                            <span>NavoYantra Engineering Blog</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight">
                            Tech & <span className="text-blue-600">Research</span>
                        </h1>
                        <p className="mt-4 text-zinc-600 max-w-xl text-sm leading-relaxed">
                            Deep-dives into industrial IoT, embedded firmware design, edge computing models, and agricultural robotics. Written directly by our core creators.
                        </p>
                    </div>

                    <div className="border-2 border-zinc-200 p-6 bg-white relative hidden md:block">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 translate-x-12 -translate-y-12 rotate-45" />
                        <h3 className="font-bold text-sm text-zinc-900 uppercase tracking-wider mb-2">Subscribe</h3>
                        <p className="text-xs text-zinc-500 leading-normal mb-4">
                            Receive direct notifications for board schematics, SDK code updates, and hardware engineering tutorials.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                className="bg-zinc-50 border border-zinc-200 rounded-none px-3 py-2 text-xs font-bold w-full uppercase placeholder-zinc-400 focus:outline-none focus:border-blue-500"
                            />
                            <button
                                onClick={() => showToast("Subscribed successfully!")}
                                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-2 rounded-none transition-all uppercase cursor-pointer"
                            >
                                Join
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Toolbar section */}
            <section className="max-w-7xl mx-auto px-6 mt-10">
                <div className="bg-white border-2 border-zinc-200 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Search bar */}
                    <div className="relative flex-1 max-w-md">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-400">
                            <Search size={16} />
                        </span>
                        <input
                            type="text"
                            placeholder="SEARCH ARTICLES..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-none pl-10 pr-4 py-2.5 text-sm font-bold uppercase tracking-wider placeholder-zinc-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        />
                    </div>

                    {/* Quick Stats widget */}
                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-zinc-400">
                        <span>Total: {blogPosts.length} posts</span>
                        <span>•</span>
                        <span>Showing: {filteredPosts.length} matching</span>
                    </div>
                </div>
            </section>

            {/* Core Layout Grid */}
            <section className="max-w-7xl mx-auto px-6 mt-8">
                <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
                    {/* Category Sidebar */}
                    <aside className="w-full lg:w-72 rounded-none border-2 border-zinc-200 bg-white p-6 h-fit lg:sticky lg:top-24 shadow-sm">
                        <h2 className="text-xs font-bold mb-6 uppercase tracking-wider text-zinc-900 border-l-4 border-blue-600 pl-3">
                            Blog Categories
                        </h2>

                        <div className="flex flex-row flex-wrap lg:flex-col gap-2.5">
                            {categories.map((cat) => {
                                const isActive = selectedCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`flex items-center justify-between w-full rounded-none px-4 py-3 text-left text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border
                                            ${
                                                isActive
                                                    ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/10"
                                                    : "bg-white border-zinc-200 text-zinc-700 hover:border-blue-500 hover:text-blue-600"
                                            }`}
                                    >
                                        <span>{cat}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </aside>

                    {/* Blog Posts Grid */}
                    <div className="space-y-8">
                        {filteredPosts.length > 0 ? (
                            <div className="grid md:grid-cols-2 gap-8">
                                {filteredPosts.map((post) => (
                                    <div
                                        key={post.id}
                                        onClick={() => setSelectedPost(post)}
                                        className="group bg-white border-2 border-zinc-200 hover:border-blue-500 transition-all duration-300 rounded-none shadow-sm flex flex-col justify-between overflow-hidden cursor-pointer"
                                    >
                                        <div>
                                            {/* Image block */}
                                            <div className="relative h-48 w-full bg-zinc-100 overflow-hidden">
                                                <Image
                                                    src="/ct-card-bg.png"
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    priority
                                                />
                                                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />

                                                {/* Floating category tag */}
                                                <span className="absolute top-4 left-4 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-none shadow-sm">
                                                    {post.category}
                                                </span>
                                            </div>

                                            {/* Card body content */}
                                            <div className="p-6 space-y-3">
                                                {/* Meta Info Row */}
                                                <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar size={11} />
                                                        {post.date}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock size={11} />
                                                        {post.readTime}
                                                    </span>
                                                </div>

                                                <h3 className="text-lg font-bold text-zinc-950 leading-snug group-hover:text-blue-600 transition-colors">
                                                    {post.title}
                                                </h3>

                                                <p className="text-xs text-zinc-500 line-clamp-3 leading-relaxed">
                                                    {post.summary}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Card Footer actions */}
                                        <div className="p-6 pt-0 border-t border-zinc-50 mt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-600">
                                                <User size={12} className="text-blue-500" />
                                                <span className="truncate max-w-30">{post.author}</span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={(e) => handleShare(post, e)}
                                                    className="p-1.5 border border-zinc-200 hover:border-blue-500 hover:text-blue-600 transition-colors bg-white cursor-pointer"
                                                    title="Share link"
                                                >
                                                    <Share2 size={11} />
                                                </button>
                                                <span className="flex items-center gap-1 text-[10px] font-bold text-blue-600 uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                                                    <span>Read</span>
                                                    <ArrowRight size={10} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="border-2 border-dashed border-zinc-200 bg-white p-16 text-center">
                                <p className="text-zinc-500 font-bold uppercase tracking-wider text-sm">No articles match your parameters.</p>
                                <button
                                    onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                                    className="mt-4 px-4 py-2 border-2 border-zinc-900 font-bold uppercase tracking-wider text-xs hover:bg-zinc-900 hover:text-white transition-all cursor-pointer"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Article Detail Overlay Modal */}
            {selectedPost && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white border-2 border-zinc-950 w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl relative rounded-none animate-in fade-in zoom-in duration-200"
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedPost(null)}
                            className="absolute top-4 right-4 z-20 p-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 transition-colors border border-zinc-300"
                        >
                            <X size={16} />
                        </button>

                        {/* Scrollable Container */}
                        <div className="overflow-y-auto flex-1">
                            {/* Top Hero Layout */}
                            <div className="relative h-48 sm:h-64 w-full bg-zinc-100 border-b-2 border-zinc-950">
                                <Image
                                    src="/ct-card-bg.png"
                                    alt={selectedPost.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-blue-900/15 mix-blend-multiply" />
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <span className="inline-block bg-blue-600 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider mb-3">
                                        {selectedPost.category}
                                    </span>
                                    <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight text-white drop-shadow-sm">
                                        {selectedPost.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Article body content */}
                            <div className="p-6 md:p-8 space-y-6">
                                {/* Metadata list */}
                                <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold text-zinc-400 border-b border-zinc-100 pb-4 uppercase tracking-wider">
                                    <span className="flex items-center gap-1.5 text-zinc-700">
                                        <User size={12} className="text-blue-600" />
                                        <span>BY: {selectedPost.author}</span>
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={12} />
                                        <span>DATE: {selectedPost.date}</span>
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock size={12} />
                                        <span>LENGTH: {selectedPost.readTime}</span>
                                    </span>
                                </div>

                                {/* Highlights key points box */}
                                <div className="border-l-4 border-blue-600 bg-zinc-50 p-5 space-y-2">
                                    <span className="flex items-center gap-1 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                        <Tag size={12} className="text-blue-500" />
                                        <span>Key Highlights</span>
                                    </span>
                                    <ul className="space-y-1">
                                        {selectedPost.highlights.map((point: string, idx: number) => (
                                            <li key={idx} className="text-xs font-bold text-zinc-800 uppercase tracking-wider flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-blue-600 shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Main Body content */}
                                <div className="text-sm text-zinc-700 leading-relaxed space-y-4 whitespace-pre-wrap font-medium">
                                    {selectedPost.content}
                                </div>

                                {/* Footer share row */}
                                <div className="flex items-center justify-between pt-6 border-t border-zinc-100">
                                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                        NavoYantra Technology Publishing
                                    </span>
                                    <div className={"flex gap-4 items-center"}>
                                        <span><Heart/></span>
                                        <button
                                            onClick={(e) => handleShare(selectedPost, e)}
                                            className="flex items-center gap-1.5 px-3 py-2 border-2 border-zinc-900 text-xs font-bold uppercase tracking-wider hover:bg-zinc-900 hover:text-white transition-all cursor-pointer"
                                        >
                                            <Share2 size={12}/>
                                            <span>Copy Article Link</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Toast Alert popup */}
            {toastMessage && (
                <div className="fixed bottom-5 right-5 z-9999 bg-zinc-900 text-white border-l-4 border-blue-600 p-4 shadow-xl flex items-center justify-between gap-4 max-w-sm rounded-none animate-in slide-in-from-bottom-5">
                    <span className="text-xs font-bold uppercase tracking-wider">{toastMessage}</span>
                    <button onClick={() => setToastMessage(null)} className="text-zinc-400 hover:text-white transition-colors">
                        <X size={14} />
                    </button>
                </div>
            )}
        </main>
    );
}
