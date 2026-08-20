import Image from "next/image";
import { ArrowRight, CheckCircle } from "react-feather";
import TestimonialSection from "@/app/(components)/sections/about/TestimonialSection";
import Vision2030Section from "@/app/(components)/sections/about/VisionSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About NavoYantra | Made in India STEM Innovation Company",
    description: "NavoYantra Technologies is a Delhi-based education technology and manufacturing company specializing in STEM, Robotics, Artificial Intelligence, Drone and IoT solutions.",
};

export default function Page() {
    const aboutPoints = [
        {
            title: "Our Vision",
            description: "To become India's leading Made-in-India STEM innovation company empowering millions of learners through practical technology education.",
        },
        {
            title: "Our Mission",
            description: "Design, manufacture and deliver world-class STEM solutions that combine hardware, software and learning into one seamless experience.",
        }
    ];

    const differences = [
        "In-house Electronics Manufacturing",
        "Custom STEM Kits",
        "AI, Robotics, Drone & IoT Labs",
        "LMS with Student Accounts",
        "Teacher Training",
        "Competition Project Support",
        "Custom Lab Design"
    ];

    return (
        <main className="min-h-screen py-24 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Heading */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-slate-900 leading-tight">
                        Innovating Education. <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Manufacturing the Future.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                        NavoYantra Technologies is a Delhi-based education technology and manufacturing company specializing in STEM, Robotics, Artificial Intelligence, Drone and IoT solutions.
                    </p>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">

                    {/* Left Image */}
                    <div className="relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 mix-blend-overlay" />
                        <Image
                            src="/about-robo.webp"
                            alt="About NavoYantra"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Right */}
                    <div>
                        <p className="uppercase text-primary font-bold tracking-widest text-sm mb-4">Our Philosophy</p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-slate-900">Practical, Future-Ready Education.</h2>
                        
                        <p className="text-slate-600 text-lg leading-relaxed mb-6 font-light">
                            We believe innovation begins with hands-on learning. That's why we manufacture our own educational electronics, develop industry-relevant curriculum, and provide a certified LMS platform that transforms classrooms into innovation ecosystems.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed mb-12 font-semibold">
                            Our mission is simple: enable every institution to deliver practical, future-ready education through technology.
                        </p>

                        <div className="space-y-10">
                            {aboutPoints.map((item, index) => (
                                <div key={index} className="flex gap-6 items-start group">
                                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary font-bold text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
                                        #{index + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-slate-900">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed font-light">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* What Makes Us Different? */}
                <div className="bg-[#040b16] rounded-[40px] p-10 md:p-16 shadow-2xl relative overflow-hidden mb-24 text-white">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" />
                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-extrabold mb-4">What Makes Us <span className="text-accent">Different?</span></h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">Unlike traditional vendors who rely on third-party products, NavoYantra controls the entire ecosystem.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {differences.map((diff, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                    <CheckCircle className="text-primary shrink-0" size={24} />
                                    <span className="font-semibold text-lg">{diff}</span>
                                    <span className="ml-auto text-accent text-sm font-bold bg-accent/10 px-3 py-1 rounded-full">NavoYantra</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            
            <TestimonialSection />
            <Vision2030Section />
        </main>
    );
}