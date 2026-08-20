"use client";

import React, { useEffect, useRef } from "react";

export default function InteractiveBubbles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const bubblesRef = useRef<{ x: number; y: number; vx: number; vy: number; radius: number; color: string }[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        const MIN_BUBBLES = 50;
        const MAX_BUBBLES = 200;
        const colors = [
            "rgba(255, 107, 0, 0.6)", // Accent Orange
            "rgba(21, 71, 161, 0.6)", // Primary Blue
            "rgba(255, 255, 255, 0.4)", // White
            "rgba(255, 255, 255, 0.1)"  // Faint White
        ];

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                // Use getBoundingClientRect to ensure accurate dimensions
                const rect = parent.getBoundingClientRect();
                canvas.width = rect.width || window.innerWidth;
                canvas.height = rect.height || 800; // Fallback height if 0
            }
        };

        const createBubble = (x?: number, y?: number) => {
            return {
                x: x ?? Math.random() * canvas.width,
                y: y ?? Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
                radius: Math.random() * 6 + 3, // Increased bubble size
                color: colors[Math.floor(Math.random() * colors.length)],
            };
        };

        const initBubbles = () => {
            bubblesRef.current = [];
            for (let i = 0; i < MIN_BUBBLES; i++) {
                bubblesRef.current.push(createBubble());
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const bubbles = bubblesRef.current;
            const mouse = mouseRef.current;

            for (let i = 0; i < bubbles.length; i++) {
                const b = bubbles[i];
                
                b.x += b.vx;
                b.y += b.vy;

                // Bounce off boundaries
                if (b.x <= 0 || b.x >= canvas.width) b.vx *= -1;
                if (b.y <= 0 || b.y >= canvas.height) b.vy *= -1;

                // Mouse Repel Logic
                const dx = b.x - mouse.x;
                const dy = b.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const interactRadius = 150;

                if (dist < interactRadius) {
                    const force = (interactRadius - dist) / interactRadius;
                    b.vx += (dx / dist) * force * 0.6;
                    b.vy += (dy / dist) * force * 0.6;
                }

                // Friction to stop infinite acceleration
                const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
                const maxSpeed = 2;
                if (speed > maxSpeed) {
                    b.vx *= 0.95;
                    b.vy *= 0.95;
                }

                // Draw Bubble
                ctx.beginPath();
                ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
                ctx.fillStyle = b.color;
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        // Delay initial resize slightly to ensure DOM is fully laid out
        setTimeout(() => {
            resize();
            initBubbles();
            draw();
        }, 100);

        window.addEventListener("resize", resize);

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.x = e.clientX - rect.left;
            mouseRef.current.y = e.clientY - rect.top;
        };

        const handleClick = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Only spawn if click is within the canvas bounds
            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                const bubbles = bubblesRef.current;
                const spawnCount = 15;
                if (bubbles.length < MAX_BUBBLES) {
                    const amount = Math.min(spawnCount, MAX_BUBBLES - bubbles.length);
                    for (let i = 0; i < amount; i++) {
                        bubbles.push(createBubble(x + (Math.random()-0.5)*40, y + (Math.random()-0.5)*40));
                    }
                }
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />
    );
}
