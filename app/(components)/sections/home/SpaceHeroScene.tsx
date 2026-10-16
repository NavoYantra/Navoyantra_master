"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function SpaceHeroScene() {
    // Multi-Layer Mouse Parallax Effect (All elements responsive to cursor movement)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // Parallax Transforms for Satellite and Plane only (Earth & Moon remain completely stable)
    const satX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
    const satY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

    const planeX = useTransform(smoothX, [-0.5, 0.5], [-28, 28]);
    const planeY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);
    const planeBank = useTransform(smoothX, [-0.5, 0.5], [-14, 2]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const x = e.clientX / innerWidth - 0.5;
            const y = e.clientY / innerHeight - 0.5;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="relative w-full aspect-square max-w-[540px] lg:max-w-[620px] flex items-center justify-center select-none">
            {/* Ambient Cosmic Horizon Glow */}
            <div className="absolute w-[120%] h-[120%] rounded-full bg-gradient-to-tr from-sky-500/15 via-blue-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

            {/*----------------------------------------------------------------*/}
            {/* 1. SATELLITE ORBITAL TRAJECTORY RING (Elliptical Path)          */}
            {/*----------------------------------------------------------------*/}
            <div
                className="absolute w-[135%] h-[55%] rounded-full border border-dashed border-sky-400/25 pointer-events-none -rotate-[22deg]"
                style={{
                    boxShadow: "0 0 25px rgba(56, 189, 248, 0.1), inset 0 0 25px rgba(56, 189, 248, 0.05)",
                }}
            />

            {/*----------------------------------------------------------------*/}
            {/* 2. THE MOON (Upper Right Celestial Body - Stable, No Parallax) */}
            {/*----------------------------------------------------------------*/}
            <motion.div
                animate={{
                    y: [0, -12, 0],
                    rotate: [0, 1.5, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-2 right-4 md:top-6 md:right-8 z-10 pointer-events-none"
            >
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-[0_0_35px_rgba(255,255,255,0.22)]">
                    <Image
                        src="/space/moon.jpg"
                        alt="Realistic Moon"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Moon Sunlit Terminator Shadow */}
                    <div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(circle at 35% 35%, transparent 35%, rgba(0, 0, 0, 0.75) 90%)",
                        }}
                    />
                    {/* Celestial Soft Glow */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.3)] pointer-events-none" />
                </div>

                {/* Moon Telemetry Chip */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10 text-[10px] text-slate-300 font-mono tracking-wider flex items-center gap-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-pulse" />
                    MOON • 384,400 KM
                </div>
            </motion.div>

            {/*----------------------------------------------------------------*/}
            {/* 3. THE EARTH (Photorealistic Globe - Stable, No Parallax)      */}
            {/*----------------------------------------------------------------*/}
            <div className="relative z-20 w-[78%] h-[78%] flex items-center justify-center">
                {/* Outer Atmospheric Rayleigh Scattering Glow (Cyan / Sky Blue Halo) */}
                <div
                    className="absolute inset-[-14px] rounded-full pointer-events-none animate-pulse"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, rgba(14, 165, 233, 0.15) 60%, transparent 80%)",
                        filter: "blur(18px)",
                        animationDuration: "4s",
                    }}
                />

                {/* Earth Sphere Container */}
                <div
                    className="relative w-full h-full rounded-full overflow-hidden"
                    style={{
                        boxShadow: `
                            0 0 50px rgba(56, 189, 248, 0.5),
                            0 0 100px rgba(14, 165, 233, 0.25),
                            inset 0 0 60px rgba(2, 6, 23, 0.9)
                        `,
                    }}
                >
                    {/* Rotating Earth Texture Image */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                        className="relative w-[130%] h-[130%] -left-[15%] -top-[15%]"
                    >
                        <Image
                            src="/space/earth.jpg"
                            alt="Photorealistic Earth Planet"
                            fill
                            className="object-cover scale-110"
                            priority
                        />
                    </motion.div>

                    {/* Drifting Clouds & Weather Patterns Layer */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen"
                        style={{
                            background:
                                "radial-gradient(circle at 45% 45%, rgba(255,255,255,0.7) 0%, transparent 60%), radial-gradient(circle at 75% 30%, rgba(255,255,255,0.6) 0%, transparent 50%)",
                        }}
                    />

                    {/* Sunlight Specular Highlight & Atmospheric Terminator (Day/Night Curve) */}
                    <div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                            background: `
                                radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 45%),
                                radial-gradient(circle at 35% 35%, transparent 35%, rgba(2, 6, 23, 0.85) 85%, rgba(1, 4, 15, 0.98) 100%)
                            `,
                        }}
                    />

                    {/* Glowing Atmospheric Rim Edge / Fresnel Effect */}
                    <div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                            boxShadow: `
                                inset 4px 4px 30px rgba(186, 230, 253, 0.6),
                                inset -8px -8px 45px rgba(2, 6, 23, 0.95)
                            `,
                        }}
                    />
                </div>

                {/* Earth Info Badge */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-sky-500/20 text-[11px] text-sky-300 font-mono tracking-wider flex items-center gap-2 shadow-2xl z-30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>EARTH • 1,670 KM/H ROTATION</span>
                </div>
            </div>

            {/*----------------------------------------------------------------*/}
            {/* 4. SATELLITE (Orbiting in 3D with Parallax & Clean PNG)         */}
            {/*----------------------------------------------------------------*/}
            <motion.div
                style={{ x: satX, y: satY }}
                className="absolute inset-0 pointer-events-none"
            >
                {/* 3D Orbit Animation Container */}
                <motion.div
                    animate={{
                        x: [
                            "-10%",   // Far left (front)
                            "45%",    // Center front
                            "90%",    // Far right (curve)
                            "50%",    // Center back (behind)
                            "-10%",   // Far left
                        ],
                        y: [
                            "68%",    // Lower front
                            "76%",    // Lowest point
                            "42%",    // Mid right
                            "26%",    // Upper back
                            "68%",    // Lower front
                        ],
                        scale: [1, 1.15, 1, 0.72, 1],
                        zIndex: [35, 35, 35, 15, 35],
                        opacity: [1, 1, 1, 0.65, 1],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute w-28 h-24 md:w-36 md:h-32 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                >
                    <div className="relative w-full h-full rotate-[15deg]">
                        {/* 100% Transparent Satellite with Silhouette Glow */}
                        <div className="relative w-full h-full filter drop-shadow-[0_0_12px_rgba(56,189,248,0.45)]">
                            <Image
                                src="/space/satellite.png"
                                alt="High-Tech Communications Satellite"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Blinking Telemetry Strobe Beacons on solar arrays & dish */}
                        <span className="absolute top-[16%] left-[6%] w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span className="absolute top-[48%] left-[56%] w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                        <span
                            className="absolute bottom-[20%] right-[6%] w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"
                            style={{ animationDuration: "1.2s" }}
                        />

                        {/* Telemetry Indicator Tag */}
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/75 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-mono text-cyan-300 border border-cyan-500/30 shadow-md flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            SAT-LEO • 540 KM
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/*----------------------------------------------------------------*/}
            {/* 5. SUPERSONIC AEROSPACE PLANE (Enlarged, Stable & Flying Forward)*/}
            {/*----------------------------------------------------------------*/}
            <motion.div
                style={{
                    x: planeX,
                    y: planeY,
                    rotate: planeBank,
                }}
                className="absolute z-40 pointer-events-none left-[28%] top-[48%] -translate-x-1/2 -translate-y-1/2"
            >
                {/* Aerodynamic Cruising Vibration (Forward Flight Dynamics) */}
                <motion.div
                    animate={{
                        y: [0, -3, 1, -2, 0],
                        rotate: [-7, -5, -8, -6, -7],
                    }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="relative flex items-center"
                >
                    {/* Hypersonic Mach Shockwave / Slipstream Trails */}
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-48 pointer-events-none overflow-hidden h-24 flex flex-col justify-center gap-3 opacity-60">
                        {/* Upper wingtip streak */}
                        <motion.div
                            animate={{ x: [40, -120], opacity: [0, 1, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                            className="h-[1.5px] w-28 bg-gradient-to-r from-transparent via-cyan-300 to-transparent self-end mr-6"
                        />
                        {/* Lower wingtip streak */}
                        <motion.div
                            animate={{ x: [30, -140], opacity: [0, 1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, ease: "linear", delay: 0.15 }}
                            className="h-[1.5px] w-36 bg-gradient-to-r from-transparent via-sky-400 to-transparent self-end"
                        />
                    </div>

                    {/* Dual Twin Plasma Jet Exhaust Flames (Pulsating Forward Velocity Effect) */}
                    <div className="relative -mr-3 flex flex-col gap-2 z-0">
                        {/* Upper Engine Exhaust Flame */}
                        <div className="relative flex items-center">
                            <motion.div
                                animate={{
                                    scaleX: [1, 1.3, 1.05, 1.35, 1],
                                    opacity: [0.85, 1, 0.9, 1, 0.85],
                                }}
                                transition={{ duration: 0.35, repeat: Infinity, ease: "easeInOut" }}
                                className="h-2 w-28 md:w-44 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-white origin-right"
                                style={{ filter: "drop-shadow(0 0 14px #38BDF8)" }}
                            />
                            <div className="h-3.5 w-6 rounded-full bg-white blur-[2px] -mr-2" />
                        </div>

                        {/* Lower Engine Exhaust Flame */}
                        <div className="relative flex items-center">
                            <motion.div
                                animate={{
                                    scaleX: [1.1, 0.95, 1.3, 1.05, 1.1],
                                    opacity: [0.9, 0.85, 1, 0.9, 0.9],
                                }}
                                transition={{ duration: 0.32, repeat: Infinity, ease: "easeInOut", delay: 0.08 }}
                                className="h-2 w-28 md:w-44 rounded-full bg-gradient-to-r from-transparent via-sky-400 to-white origin-right"
                                style={{ filter: "drop-shadow(0 0 14px #38BDF8)" }}
                            />
                            <div className="h-3.5 w-6 rounded-full bg-white blur-[2px] -mr-2" />
                        </div>
                    </div>

                    {/* Enlarged Supersonic Aerospace Plane Body (Width ~180px - 240px) */}
                    <div className="relative z-10 w-44 h-24 md:w-56 md:h-32 lg:w-64 lg:h-36 filter drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]">
                        <svg
                            viewBox="0 0 200 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full"
                        >
                            <defs>
                                <linearGradient id="fuselageGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#1E293B" />
                                    <stop offset="35%" stopColor="#475569" />
                                    <stop offset="70%" stopColor="#CBD5E1" />
                                    <stop offset="100%" stopColor="#FFFFFF" />
                                </linearGradient>
                                <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#0F172A" />
                                    <stop offset="50%" stopColor="#334155" />
                                    <stop offset="100%" stopColor="#94A3B8" />
                                </linearGradient>
                                <linearGradient id="canopyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#0284C7" />
                                    <stop offset="60%" stopColor="#38BDF8" />
                                    <stop offset="100%" stopColor="#BAE6FD" />
                                </linearGradient>
                            </defs>

                            {/* Dual Engine Exhaust Ports */}
                            <circle cx="28" cy="45" r="5" fill="#38BDF8" filter="blur(1px)" />
                            <circle cx="28" cy="55" r="5" fill="#38BDF8" filter="blur(1px)" />

                            {/* Main Fuselage Body */}
                            <path
                                d="M190 50 L120 38 L40 44 L25 50 L40 56 L120 62 Z"
                                fill="url(#fuselageGrad)"
                                stroke="#E2E8F0"
                                strokeWidth="1.6"
                            />

                            {/* Upper Delta Wing */}
                            <path
                                d="M130 42 L65 10 L50 14 L75 44 Z"
                                fill="url(#wingGrad)"
                                stroke="#94A3B8"
                                strokeWidth="1.2"
                            />

                            {/* Lower Delta Wing */}
                            <path
                                d="M130 58 L65 90 L50 86 L75 56 Z"
                                fill="url(#wingGrad)"
                                stroke="#94A3B8"
                                strokeWidth="1.2"
                            />

                            {/* Vertical Stabilizer Fin */}
                            <path
                                d="M55 48 L35 34 L30 36 L45 50 Z"
                                fill="#475569"
                                stroke="#CBD5E1"
                                strokeWidth="1"
                            />

                            {/* Cockpit Canopy Glass with Interior HUD Glow */}
                            <path
                                d="M165 50 L135 44 L125 50 L135 56 Z"
                                fill="url(#canopyGrad)"
                                stroke="#E0F2FE"
                                strokeWidth="1"
                            />

                            {/* Aerospace Tech Marking */}
                            <text
                                x="88"
                                y="52"
                                fill="#94A3B8"
                                fontSize="7"
                                fontFamily="monospace"
                                fontWeight="bold"
                                letterSpacing="1"
                            >
                                NY-AERO
                            </text>

                            {/* Wingtip Navigation Strobes */}
                            <circle cx="65" cy="10" r="3" fill="#EF4444" className="animate-ping" />
                            <circle cx="65" cy="90" r="3" fill="#10B981" className="animate-ping" />
                            <circle cx="190" cy="50" r="2" fill="#BAE6FD" className="animate-pulse" />
                        </svg>
                    </div>

                    {/* Dynamic Flight Telemetry Badge */}
                    <div className="absolute -top-7 left-12 whitespace-nowrap bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 shadow-xl">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        AERO-1 • MACH 6.2 • STABLE CRUISE
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
