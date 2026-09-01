import type { Metadata } from "next";
import Badge from "@/app/(components)/site/Badge";
import OffersSlider from "@/app/(components)/sections/lab-setup/OffersSlider";
import { CheckCircle, Zap, Cpu, Settings, Box, Shield, Layers, Radio, Monitor, Wifi, PenTool, Award } from "react-feather";

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
            features: ["Basic Electronics", "Mechanics & Structures", "Logic Building", "Fun DIY Kits"],
            icon: <Layers size={28} />,
            color: "from-blue-500 to-cyan-400"
        },
        {
            title: "Robotics & Embedded Systems Lab",
            desc: "Comprehensive lab setup for building programmable robots and embedded systems. Equip students with skills in Arduino, sensors, motors, and microcontrollers.",
            features: ["Arduino Programming", "Motor Drivers & Sensors", "Chassis & Mechanical Parts", "Autonomous Bots"],
            icon: <Cpu size={28} />,
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Artificial Intelligence Lab",
            desc: "Dedicated hardware and software setups to teach machine learning, computer vision, and data science practically.",
            features: ["Edge AI Devices", "Computer Vision Cameras", "ML Model Deployment", "Python Coding"],
            icon: <Monitor size={28} />,
            color: "from-emerald-500 to-teal-400"
        },
        {
            title: "Internet of Things (IoT) Lab",
            desc: "Connect physical devices to the cloud. Teach students how to build smart homes, automated agriculture, and industrial IoT solutions.",
            features: ["WiFi/Bluetooth Modules", "Cloud Dashboards", "Smart Sensors", "Home Automation"],
            icon: <Wifi size={28} />,
            color: "from-orange-500 to-amber-400"
        },
        {
            title: "Drone Innovation Lab",
            desc: "Aerodynamics, flight controllers, and programming logic combined to teach students how to build and fly their own quadcopters.",
            features: ["Drone Assembly", "Flight Dynamics", "RC Controllers", "Safety Enclosures"],
            icon: <Radio size={28} />,
            color: "from-indigo-500 to-blue-500"
        },
        {
            title: "Atal Tinkering Lab (ATL)",
            desc: "Government-compliant innovation workspaces containing 3D printers, electronics, and mechanical tools as per NITI Aayog guidelines.",
            features: ["3D Printing", "Complete ATL Packages", "Tinkering Tools", "Compliance Support"],
            icon: <PenTool size={28} />,
            color: "from-rose-500 to-red-400"
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
                <div className="mb-24 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">Our Proven Process</h2>
                        <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto">A streamlined, stress-free approach taking your institution from ideation to full-scale execution.</p>
                    </div>
                    
                    {/* Desktop Connecting Line */}
                    <div className="hidden lg:block absolute top-[55%] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
                        {processSteps.map((step, idx) => (
                            <div 
                                key={idx} 
                                className={`flex flex-col items-center text-center group bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-xl border border-slate-100 hover:border-primary/50 hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 relative ${idx % 2 !== 0 ? 'lg:mt-12' : ''}`}
                            >
                                {/* Step Number Badge */}
                                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-lg group-hover:bg-accent transition-colors duration-300">
                                    0{idx + 1}
                                </div>
                                
                                <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-slate-500 group-hover:text-white group-hover:from-primary group-hover:to-accent transition-all duration-500 mb-6 border border-slate-200 group-hover:border-transparent shadow-inner">
                                    {step.icon}
                                </div>
                                <h3 className="font-extrabold text-slate-800 text-xl mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Categories */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">Our Laboratory Solutions</h2>
                        <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto">Detailed domains designed for specialized technology education, equipping students with future-ready skills.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {detailedCategories.map((cat, idx) => (
                            <div key={idx} className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 shadow-lg border border-slate-100 hover:border-slate-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative overflow-hidden group">
                                
                                {/* Dynamic Gradient Top Border */}
                                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                
                                {/* Icon Header */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} text-white flex items-center justify-center mb-6 shadow-md shadow-slate-200 group-hover:scale-110 transition-transform duration-500`}>
                                    {cat.icon}
                                </div>
                                
                                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 transition-colors">{cat.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-1">
                                    {cat.desc}
                                </p>
                                
                                <div className="space-y-3 mt-auto bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
                                    {cat.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-3">
                                            <CheckCircle className="text-primary shrink-0" size={18} />
                                            <span className="text-sm font-semibold text-slate-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Every Lab Includes - Full Width */}
            <div className="w-full bg-[#040b16] text-white py-20 md:py-28 shadow-2xl relative overflow-hidden mt-12">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
                
                <div className="relative z-10 max-w-[90rem] mx-auto px-5 md:px-10 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Every NavoYantra <br/> Lab Includes</h2>
                        <p className="text-lg md:text-xl text-slate-400 max-w-xl font-light leading-relaxed mb-8">
                            We go beyond just dropping off hardware. Our holistic approach ensures that your lab is a living ecosystem of learning, backed by continuous support, training, and curriculum.
                        </p>
                    </div>
                    
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {inclusions.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors shadow-lg hover:-translate-y-1 duration-300">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                                    <CheckCircle className="text-accent" size={24} />
                                </div>
                                <span className="text-slate-200 font-semibold text-lg">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </main>
    );
}
