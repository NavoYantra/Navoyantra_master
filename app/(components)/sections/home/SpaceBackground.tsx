"use client";

import { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    size: number;
    color: string;
    baseAlpha: number;
    alpha: number;
    twinkleSpeed: number;
    twinkleOffset: number;
    hasSpikes: boolean;
}

interface ShootingStar {
    x: number;
    y: number;
    length: number;
    speed: number;
    angle: number;
    opacity: number;
    life: number;
    maxLife: number;
    width: number;
    color: string;
}

export default function SpaceBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let animationFrameId: number;
        let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
        let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

        const handleResize = () => {
            if (!canvas.parentElement) return;
            width = canvas.width = canvas.parentElement.clientWidth;
            height = canvas.height = canvas.parentElement.clientHeight;
            initStars();
        };

        window.addEventListener("resize", handleResize);

        // Star colors with realistic stellar temperatures
        const starColors = [
            "#FFFFFF", // Pure white
            "#E0F2FE", // Cold ice blue (B/A class stars)
            "#BAE6FD", // Light cyan
            "#FEF08A", // Soft warm yellow (G class, like Sun)
            "#FDE047", // Amber gold
            "#DDD6FE", // Subtle violet white
        ];

        let stars: Star[] = [];
        const initStars = () => {
            const count = Math.floor((width * height) / 3800); // Responsive density ~180-250 stars
            stars = [];
            for (let i = 0; i < count; i++) {
                const size = Math.random() < 0.85 ? Math.random() * 1.4 + 0.6 : Math.random() * 2.2 + 1.2;
                const baseAlpha = Math.random() * 0.5 + 0.35;
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size,
                    color: starColors[Math.floor(Math.random() * starColors.length)],
                    baseAlpha,
                    alpha: baseAlpha,
                    twinkleSpeed: Math.random() * 0.035 + 0.015,
                    twinkleOffset: Math.random() * Math.PI * 2,
                    hasSpikes: size > 2.2 && Math.random() > 0.4,
                });
            }
        };

        initStars();

        // Shooting Stars (Tootte Taare) System
        let shootingStars: ShootingStar[] = [];
        let lastMeteorTime = performance.now();
        let nextMeteorDelay = 1800 + Math.random() * 2200; // between 1.8s and 4.0s

        const spawnShootingStar = () => {
            // Spawn anywhere in top 65% of screen
            const startX = Math.random() * (width + 200) - 100;
            const startY = Math.random() * (height * 0.6);
            // Angle around 35 to 55 degrees downwards
            const angle = (Math.PI / 180) * (38 + (Math.random() * 18 - 9));
            const speed = 14 + Math.random() * 10;
            const length = 120 + Math.random() * 110;
            const maxLife = 50 + Math.random() * 35;
            const colors = ["#FFFFFF", "#38BDF8", "#7DD3FC", "#67E8F9"];

            shootingStars.push({
                x: startX,
                y: startY,
                length,
                speed,
                angle,
                opacity: 1,
                life: 0,
                maxLife,
                width: 1.5 + Math.random() * 1.5,
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        };

        // Render Loop
        let time = 0;
        const render = (currentTime: number) => {
            time += 0.03;
            ctx.clearRect(0, 0, width, height);

            // 1. Draw Twinkling Stars
            for (let i = 0; i < stars.length; i++) {
                const s = stars[i];
                // Smooth sinusoidal twinkle
                s.alpha = s.baseAlpha + Math.sin(time * s.twinkleSpeed * 100 + s.twinkleOffset) * (1 - s.baseAlpha) * 0.6;
                if (s.alpha < 0.15) s.alpha = 0.15;
                if (s.alpha > 1) s.alpha = 1;

                ctx.save();
                ctx.globalAlpha = s.alpha;
                ctx.fillStyle = s.color;
                ctx.shadowColor = s.color;
                ctx.shadowBlur = s.size * 2;

                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                ctx.fill();

                // 4-point subtle diffraction spikes for the brightest stars
                if (s.hasSpikes && s.alpha > 0.65) {
                    ctx.strokeStyle = s.color;
                    ctx.lineWidth = 0.6;
                    ctx.shadowBlur = 4;
                    const spikeLen = s.size * 3.5;

                    // Horizontal spike
                    ctx.beginPath();
                    ctx.moveTo(s.x - spikeLen, s.y);
                    ctx.lineTo(s.x + spikeLen, s.y);
                    ctx.stroke();

                    // Vertical spike
                    ctx.beginPath();
                    ctx.moveTo(s.x, s.y - spikeLen);
                    ctx.lineTo(s.x, s.y + spikeLen);
                    ctx.stroke();
                }

                ctx.restore();
            }

            // 2. Check & Spawn Shooting Star
            if (currentTime - lastMeteorTime > nextMeteorDelay) {
                spawnShootingStar();
                // 25% chance of a twin shooting star
                if (Math.random() < 0.25) {
                    setTimeout(() => {
                        spawnShootingStar();
                    }, 180 + Math.random() * 250);
                }
                lastMeteorTime = currentTime;
                nextMeteorDelay = 2000 + Math.random() * 2500;
            }

            // 3. Update & Draw Shooting Stars (Tootte Taare)
            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const ss = shootingStars[i];
                ss.life++;

                const progress = ss.life / ss.maxLife;
                // Fade in quickly, then fade out smoothly
                if (progress < 0.2) {
                    ss.opacity = progress / 0.2;
                } else {
                    ss.opacity = 1 - (progress - 0.2) / 0.8;
                }

                // Advance head position
                ss.x += Math.cos(ss.angle) * ss.speed;
                ss.y += Math.sin(ss.angle) * ss.speed;

                // Tail start coordinates
                const tailX = ss.x - Math.cos(ss.angle) * ss.length;
                const tailY = ss.y - Math.sin(ss.angle) * ss.length;

                // Draw luminous streak
                ctx.save();
                const gradient = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
                gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
                gradient.addColorStop(0.65, `${ss.color}66`);
                gradient.addColorStop(0.9, `${ss.color}DD`);
                gradient.addColorStop(1, "#FFFFFF");

                ctx.strokeStyle = gradient;
                ctx.lineWidth = ss.width;
                ctx.lineCap = "round";
                ctx.globalAlpha = Math.max(0, ss.opacity);
                ctx.shadowColor = ss.color;
                ctx.shadowBlur = 10;

                ctx.beginPath();
                ctx.moveTo(tailX, tailY);
                ctx.lineTo(ss.x, ss.y);
                ctx.stroke();

                // Bright glowing head
                ctx.fillStyle = "#FFFFFF";
                ctx.shadowColor = "#38BDF8";
                ctx.shadowBlur = 14;
                ctx.beginPath();
                ctx.arc(ss.x, ss.y, ss.width * 1.2, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();

                // Remove dead shooting stars
                if (ss.life >= ss.maxLife || ss.x > width + 200 || ss.y > height + 200) {
                    shootingStars.splice(i, 1);
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
            {/* Deep Cosmic Gradient & Nebula Gas Glows */}
            <div className="absolute inset-0 bg-[#02040a]" />
            <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-blue-900/25 via-sky-600/10 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-15%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-indigo-950/30 via-purple-900/10 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute top-[40%] right-[25%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-r from-cyan-900/15 to-transparent blur-3xl pointer-events-none" />

            {/* High Performance Canvas for Twinkling Stars & Shooting Stars */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full block"
            />
        </div>
    );
}
