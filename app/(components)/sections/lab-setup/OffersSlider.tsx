"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Gift, Tag, Monitor, Tool } from "react-feather";
import Link from "next/link";

const offers = [
    {
        id: 1,
        title: "Exclusive Lab Setup Offer",
        badge: "Most Popular",
        description: "Get a complete base STEM Lab Setup for just ₹50,000 (without GST). Includes premium School LMS Account for all students.",
        icon: <Tool size={32} />,
        price: "₹50,000",
        tagline: "Excl. GST",
        theme: "from-blue-600 to-blue-800",
        btnText: "Claim Offer",
        btnLink: "/contact"
    },
    {
        id: 2,
        title: "LMS Subscription Discount",
        badge: "Special 15% Off",
        description: "Enhance your students' learning with our Learning Management System. Get a flat 15% discount on all annual LMS subscriptions.",
        icon: <Monitor size={32} />,
        price: "15% OFF",
        tagline: "On Annual Plans",
        theme: "from-orange-500 to-orange-700",
        btnText: "Explore LMS",
        btnLink: "/contact"
    },
    {
        id: 3,
        title: "Store Wide Discount",
        badge: "Shop Offer",
        description: "Looking for individual DIY kits or robotics hardware? Enjoy a flat 5% off on your entire cart when you purchase from our official store.",
        icon: <Tag size={32} />,
        price: "5% OFF",
        tagline: "Store-wide",
        theme: "from-purple-600 to-purple-800",
        btnText: "Visit Store",
        btnLink: "https://shop.navoyantra.com"
    },
    {
        id: 4,
        title: "Surprise Educational Gift",
        badge: "Bonus Reward",
        description: "Every product purchase from NavoYantra comes with a surprise educational tech-gift inside the box to fuel student curiosity!",
        icon: <Gift size={32} />,
        price: "FREE GIFT",
        tagline: "With Every Box",
        theme: "from-teal-500 to-teal-700",
        btnText: "Shop Now",
        btnLink: "https://shop.navoyantra.com"
    }
];

export default function OffersSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-scroll
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === offers.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === offers.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? offers.length - 1 : prev - 1));
    };

    return (
        <div className="w-full max-w-[90rem] mx-auto mb-24 relative px-4 md:px-10 lg:px-16">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Special Offers & Promotions</h2>
                <p className="text-slate-500 mt-4 text-lg">Take advantage of our exclusive deals to kickstart your journey.</p>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl bg-white group min-h-[500px] flex items-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="w-full absolute inset-0"
                    >
                        <div className={`w-full h-full bg-gradient-to-br ${offers[currentIndex].theme} text-white flex flex-col md:flex-row`}>
                            {/* Left Content */}
                            <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
                                <div className="inline-block bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-6 self-start">
                                    {offers[currentIndex].badge}
                                </div>
                                <h3 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                                    {offers[currentIndex].title}
                                </h3>
                                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                                    {offers[currentIndex].description}
                                </p>
                                
                                <div>
                                    <Link 
                                        href={offers[currentIndex].btnLink}
                                        target={offers[currentIndex].btnLink.startsWith("http") ? "_blank" : "_self"}
                                        className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-xl"
                                    >
                                        {offers[currentIndex].btnText}
                                        <ChevronRight size={20} />
                                    </Link>
                                </div>
                            </div>

                            {/* Right Content / Price Tag */}
                            <div className="hidden md:flex flex-1 items-center justify-center relative p-10">
                                {/* Decorative Circles */}
                                <div className="absolute w-[400px] h-[400px] border-[40px] border-white/10 rounded-full" />
                                <div className="absolute w-[300px] h-[300px] border-[30px] border-white/5 rounded-full" />
                                
                                <div className="relative z-10 flex flex-col items-center justify-center bg-white/10 backdrop-blur-md w-64 h-64 rounded-full border border-white/20 shadow-2xl">
                                    <div className="mb-4 text-white">
                                        {offers[currentIndex].icon}
                                    </div>
                                    <span className="text-4xl font-black">{offers[currentIndex].price}</span>
                                    <span className="text-white/80 uppercase tracking-widest text-sm mt-2 font-bold">{offers[currentIndex].tagline}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slider Controls */}
                <button 
                    onClick={prevSlide}
                    aria-label="Previous Offer"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center rounded-full text-white transition-all z-20 md:opacity-0 group-hover:opacity-100"
                >
                    <ChevronLeft size={24} />
                </button>
                <button 
                    onClick={nextSlide}
                    aria-label="Next Offer"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center rounded-full text-white transition-all z-20 md:opacity-0 group-hover:opacity-100"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
                    {offers.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            aria-label={`Go to offer ${idx + 1}`}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentIndex === idx ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
