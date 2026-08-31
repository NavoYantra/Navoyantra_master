import type { Metadata } from "next";
import Badge from "@/app/(components)/site/Badge";
import OffersSlider from "@/app/(components)/sections/lab-setup/OffersSlider";
import { CheckCircle, Zap, Cpu, Settings, Box, Shield } from "react-feather";

export const metadata: Metadata = {
    title: "STEM & Robotics Laboratory Setup for Schools & Colleges",
    description: "End-to-End STEM Laboratory Development. We build innovation labs tailored to your institution—not a one-size-fits-all package.",
};

export default function LabSetupPage() {
    const processSteps = [
        { title: "Consultation", desc: "Requirement gathering & space assessment", icon: <Zap size={24} /> },
        { title: "Lab Design", desc: "Customizing curriculum & hardware", icon: <Cpu size={24} /> },
        { title: "Manufacturing", desc: "In-house production of kits", icon: <Settings size={24} /> },
        { title: "Installation", desc: "On-site setup & commissioning", icon: <Box size={24} /> },
        { title: "Training", desc: "Comprehensive teacher onboarding", icon: <Shield size={24} /> },
    ];

    const detailedCategories = [
        {
            title: "STEM Foundation Lab",
            desc: "Introduce young minds to the fundamentals of Science, Technology, Engineering, and Math through interactive DIY kits and hands-on experiments.",
            features: ["Basic Electronics", "Mechanics & Structures", "Logic Building", "Fun DIY Kits"]
        },
        {
            title: "Robotics & Embedded Systems Lab",
            desc: "Comprehensive lab setup for building programmable robots and embedded systems. Equip students with skills in Arduino, sensors, motors, and microcontrollers.",
            features: ["Arduino Programming", "Motor Drivers & Sensors", "Chassis & Mechanical Parts", "Autonomous Bots"]
        },
        {
            title: "Artificial Intelligence Lab",
            desc: "Dedicated hardware and software setups to teach machine learning, computer vision, and data science practically.",
            features: ["Edge AI Devices", "Computer Vision Cameras", "ML Model Deployment", "Python Coding"]
        },
        {
            title: "Internet of Things (IoT) Lab",
            desc: "Connect physical devices to the cloud. Teach students how to build smart homes, automated agriculture, and industrial IoT solutions.",
            features: ["WiFi/Bluetooth Modules", "Cloud Dashboards", "Smart Sensors", "Home Automation"]
        },
        {
            title: "Drone Innovation Lab",
            desc: "Aerodynamics, flight controllers, and programming logic combined to teach students how to build and fly their own quadcopters.",
            features: ["Drone Assembly", "Flight Dynamics", "RC Controllers", "Safety Enclosures"]
        },
        {
            title: "Atal Tinkering Lab (ATL)",
            desc: "Government-compliant innovation workspaces containing 3D printers, electronics, and mechanical tools as per NITI Aayog guidelines.",
            features: ["3D Printing", "Complete ATL Packages", "Tinkering Tools", "Compliance Support"]
        }
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
                        We build innovation labs tailored to your institution—not a one-size-fits-all package. Explore our customized environments designed to inspire the next generation.
                    </p>
                </div>

                <OffersSlider />

                {/* Our Process */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Proven Process</h2>
                        <p className="text-slate-500 mt-4 text-lg">A streamlined approach from ideation to execution.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10">
                        {processSteps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group bg-white p-6 rounded-3xl shadow-lg border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-primary transition-all duration-300 mb-4 border border-slate-100 group-hover:border-primary">
                                    {step.icon}
                                </div>
                                <span className="font-bold text-slate-800 text-lg mb-2">{step.title}</span>
                                <p className="text-sm text-slate-500 font-medium">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Categories */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Laboratory Solutions</h2>
                        <p className="text-slate-500 mt-4 text-lg">Detailed domains designed for specialized technology education.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {detailedCategories.map((cat, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{cat.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                                    {cat.desc}
                                </p>
                                
                                <div className="space-y-3 mt-auto">
                                    {cat.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-3">
                                            <CheckCircle className="text-primary shrink-0 mt-0.5" size={18} />
                                            <span className="text-sm font-medium text-slate-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Every Lab Includes */}
                <div className="bg-[#040b16] text-white rounded-[40px] p-10 md:p-16 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Every NavoYantra <br/> Lab Includes</h2>
                            <p className="text-lg text-slate-400 max-w-lg font-light leading-relaxed mb-8">
                                We go beyond just dropping off hardware. Our holistic approach ensures that your lab is a living ecosystem of learning, backed by continuous support, training, and curriculum.
                            </p>
                        </div>
                        
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                            {inclusions.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                                        <CheckCircle className="text-accent" size={20} />
                                    </div>
                                    <span className="text-slate-200 font-semibold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
