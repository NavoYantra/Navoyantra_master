"use client";

import { useState, useEffect } from "react";
import Badge from "@/app/(components)/site/Badge";
import Link from "next/link";
import { ArrowRight, BookOpen, Tool, ShoppingCart, Users, Briefcase } from "react-feather";
import { motion, AnimatePresence } from "framer-motion";

const branches = [
    {
        badgeName: "learn",
        title: "LMS Platform",
        description: "Structured learning paths in Robotics, AI, IOT, Embedded Systems and Automation. Master future skills from anywhere.",
        btnText: "Visit Learning Platform",
        icon: <BookOpen size={24} />,
        theme: "blue"
    },
    {
        badgeName: "build",
        title: "LABs Setup",
        description: "Hands-on robotics and technology laboratory solutions for institutions. We build the physical spaces where innovation happens.",
        btnText: "Setup a Lab",
        icon: <Tool size={24} />,
        theme: "orange"
    },
    {
        badgeName: "buy",
        title: "Hardware STORE",
        description: "Robotics kits, development boards, sensors and educational technology products available at your fingertips.",
        btnText: "Visit Store",
        icon: <ShoppingCart size={24} />,
        theme: "blue"
    },
    {
        badgeName: "connect",
        title: "COMMUNITY",
        description: "Join thousands of makers and engineers. Participate in exclusive workshops, hackathons, and technology forums.",
        btnText: "Join Community",
        icon: <Users size={24} />,
        theme: "orange"
    },
    {
        badgeName: "deploy",
        title: "INDUSTRY Solutions",
        description: "Custom industrial automation, product development, and OEM/ODM manufacturing for real-world deployments.",
        btnText: "Explore Solutions",
        icon: <Briefcase size={24} />,
        theme: "blue"
    }
];

export default function EcosystemSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    
    // Auto-play interval
    useEffect(() => {
        if (isHovered) return;
        
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % branches.length);
        }, 4000); // 4 seconds per branch
        
        return () => clearInterval(interval);
    }, [isHovered]);

    const activeBranch = branches[activeIndex];
    const isOrange = activeBranch.theme === "orange";

    return (
        <section className="w-full bg-slate-50 py-24 px-5 md:px-10 lg:px-16 overflow-hidden">
            <div className="max-w-[90rem] mx-auto">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[600px]">
                    
                    {/* Left Column: Dynamic Content */}
                    <div className="flex flex-col items-start pr-0 lg:pr-12">
                        <Badge text="ECOSYSTEM" />
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mt-6 mb-12 leading-tight">
                            One Ecosystem <br />
                            <span className="text-accent">Multiple Ways</span><br/> to Learn & Build.
                        </h2>

                        {/* Animated Dynamic Content Block */}
                        <div className="relative min-h-[300px] w-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute inset-0 flex flex-col items-start"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-3 rounded-xl ${isOrange ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'}`}>
                                            {activeBranch.icon}
                                        </div>
                                        <h3 className="text-3xl font-bold text-slate-800">
                                            {activeBranch.title}
                                        </h3>
                                    </div>
                                    
                                    <div className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md mb-4 ${isOrange ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'}`}>
                                        {activeBranch.badgeName}
                                    </div>

                                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
                                        {activeBranch.description}
                                    </p>

                                    <Link 
                                        href="#"
                                        className={`group flex items-center gap-3 px-6 py-3 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg ${isOrange ? 'bg-accent hover:bg-orange-600 shadow-accent/30' : 'bg-primary hover:bg-blue-700 shadow-primary/30'}`}
                                    >
                                        <span>{activeBranch.btnText}</span>
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Column: Interactive Tree Ecosystem */}
                    <div 
                        className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center mt-10 lg:mt-0"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Center Hub */}
                        <div className="relative z-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-slate-50">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-extrabold text-lg md:text-xl text-center p-4 shadow-[0_0_30px_rgba(255,107,0,0.3)]">
                                NavoYantra <br/> Hub
                            </div>
                        </div>

                        {/* SVG Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                            {branches.map((branch, i) => {
                                const angle = (i * 360) / 5 - 90;
                                const rad = (angle * Math.PI) / 180;
                                const r = 38; 
                                const x = Math.cos(rad) * r;
                                const y = Math.sin(rad) * r;
                                
                                const isActive = activeIndex === i;
                                const isNodeOrange = branch.theme === "orange";
                                
                                return (
                                    <line 
                                        key={`line-${i}`} 
                                        x1="50%" y1="50%" 
                                        x2={`calc(50% + ${x}%)`} y2={`calc(50% + ${y}%)`} 
                                        stroke="currentColor"
                                        strokeWidth={isActive ? 4 : 2}
                                        strokeDasharray={isActive ? "none" : "6 6"}
                                        className={`transition-all duration-500 ease-in-out ${isActive ? (isNodeOrange ? "text-accent" : "text-primary") : "text-slate-300"}`}
                                    />
                                );
                            })}
                        </svg>

                        {/* Outer Branches (Nodes) */}
                        <div className="absolute inset-0 pointer-events-none">
                            {branches.map((branch, i) => {
                                const angle = (i * 360) / 5 - 90;
                                const rad = (angle * Math.PI) / 180;
                                const r = 38; 
                                const x = Math.cos(rad) * r;
                                const y = Math.sin(rad) * r;
                                
                                const isActive = activeIndex === i;
                                const isNodeOrange = branch.theme === "orange";

                                return (
                                    <div 
                                        key={`node-${i}`}
                                        className="absolute pointer-events-auto flex flex-col items-center justify-center"
                                        style={{ 
                                            left: `calc(50% + ${x}%)`, 
                                            top: `calc(50% + ${y}%)`,
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    >
                                        <button
                                            onClick={() => setActiveIndex(i)}
                                            onMouseEnter={() => setActiveIndex(i)}
                                            className={`relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full transition-all duration-500 outline-none
                                                ${isActive 
                                                    ? (isNodeOrange 
                                                        ? 'bg-accent text-white scale-110 shadow-[0_0_20px_rgba(255,107,0,0.5)] ring-4 ring-accent/30 z-30'
                                                        : 'bg-primary text-white scale-110 shadow-[0_0_20px_rgba(37,99,235,0.5)] ring-4 ring-primary/30 z-30'
                                                    )
                                                    : 'bg-white text-slate-500 hover:bg-slate-50 shadow-lg border border-slate-200 z-10 hover:scale-105'}
                                            `}
                                        >
                                            {branch.icon}
                                            
                                            {/* Pulsing ring for active node */}
                                            {isActive && (
                                                <span className={`absolute inset-0 rounded-full border-2 animate-ping opacity-20 pointer-events-none ${isNodeOrange ? 'border-accent' : 'border-primary'}`} />
                                            )}
                                        </button>
                                        
                                        {/* Floating Label below node */}
                                        <div className={`mt-3 whitespace-nowrap font-bold text-xs md:text-sm transition-colors duration-300 bg-white/80 backdrop-blur px-2 py-1 rounded-md shadow-sm border border-slate-100
                                            ${isActive ? (isNodeOrange ? 'text-accent border-accent/20' : 'text-primary border-primary/20') : 'text-slate-600'}
                                        `}>
                                            {branch.title}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}