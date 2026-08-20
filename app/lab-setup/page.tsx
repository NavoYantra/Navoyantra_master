import type { Metadata } from "next";
import Badge from "@/app/(components)/site/Badge";
import { CheckCircle, Zap, Cpu, Settings, Box, Shield } from "react-feather";

export const metadata: Metadata = {
    title: "STEM & Robotics Laboratory Setup for Schools & Colleges",
    description: "End-to-End STEM Laboratory Development. We build innovation labs tailored to your institution—not a one-size-fits-all package.",
};

export default function LabSetupPage() {
    const processSteps = [
        { title: "Consultation", icon: <Zap size={24} /> },
        { title: "Lab Design", icon: <Cpu size={24} /> },
        { title: "Manufacturing", icon: <Settings size={24} /> },
        { title: "Installation", icon: <Box size={24} /> },
        { title: "Training", icon: <Shield size={24} /> },
    ];

    const categories = [
        "STEM Foundation Lab",
        "Robotics & Embedded Systems Lab",
        "Artificial Intelligence Lab",
        "Internet of Things (IoT) Lab",
        "Drone Innovation Lab",
        "ATL & Innovation Center",
        "Custom Government Project Labs"
    ];

    const inclusions = [
        "In-house manufactured kits",
        "Installation & commissioning",
        "Teacher training",
        "Student curriculum",
        "LMS access",
        "Assessment & certification",
        "Technical support",
        "Competition mentorship"
    ];

    return (
        <main className="w-full bg-slate-50 min-h-screen pt-28 pb-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-[90rem] mx-auto px-5 md:px-10 lg:px-16">
                
                {/* Hero Section */}
                <div className="flex flex-col items-center text-center mb-24">
                    <Badge text="LAB SETUP" />
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 mt-6 mb-6 leading-tight">
                        End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">STEM Laboratory</span> Development
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-600 max-w-4xl leading-relaxed font-light">
                        We build innovation labs tailored to your institution—not a one-size-fits-all package.
                    </p>
                </div>

                {/* Our Process */}
                <div className="mb-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Process</h2>
                        <p className="text-slate-500 mt-4">A streamlined approach from ideation to execution.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                        {processSteps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center group">
                                <div className="w-20 h-20 rounded-full bg-white shadow-xl shadow-slate-200 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-primary transition-all duration-300 group-hover:scale-110 mb-4 border border-slate-100 group-hover:border-primary">
                                    {step.icon}
                                </div>
                                <span className="font-bold text-slate-700 group-hover:text-primary transition-colors">{step.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Lab Categories */}
                    <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-2xl shadow-slate-200 border border-slate-100 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-accent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Lab Categories</h2>
                        <div className="space-y-4">
                            {categories.map((cat, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <span className="font-bold">{idx + 1}</span>
                                    </div>
                                    <span className="text-lg font-semibold text-slate-700">{cat}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Every Lab Includes */}
                    <div className="bg-[#040b16] text-white rounded-[40px] p-10 md:p-14 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px]" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">Every Lab Includes</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                            {inclusions.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <CheckCircle className="text-accent shrink-0 mt-1" size={24} />
                                    <span className="text-slate-300 text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
