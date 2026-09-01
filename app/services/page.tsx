import { Metadata } from "next";
import Badge from "@/app/(components)/site/Badge";
import Image from "next/image";
import { CheckCircle } from "react-feather";

export const metadata: Metadata = {
    title: "STEM Lab Setup, AI, Robotics & IoT Solutions",
    description: "NavoYantra offers end-to-end services for educational institutions, government organizations and private sector innovation programs.",
};

const detailedServices = [
    {
        title: "STEM & Robotics Lab Setup",
        shortDesc: "End-to-end laboratory development.",
        fullDesc: "We provide complete, turnkey solutions for establishing state-of-the-art STEM and Robotics laboratories in schools and colleges. From conceptualization and space planning to hardware procurement, installation, and safety checks, we handle everything. Our goal is to create an inspiring environment where students can turn their theoretical knowledge into practical innovation.",
        features: ["Space Planning & Interior Design", "Hardware & Equipment Procurement", "Safety Checks & Commissioning", "Customized Curriculum Integration"],
        icon: "/vector-icons/labsetup.svg",
        color: "from-blue-500/10 to-transparent",
        borderColor: "border-blue-500/20",
        accent: "text-blue-500",
    },
    {
        title: "AI, Machine Learning & IoT Labs",
        shortDesc: "Intelligent automation learning.",
        fullDesc: "Empower students with the skills of the future. Our AI and IoT labs come equipped with specialized hardware, sensors, and embedded systems designed for practical machine learning projects. Students learn to train models, build smart city prototypes, and understand the integration of software with physical devices.",
        features: ["AI Development Kits & Edge Computing", "Industrial IoT Sensors & Actuators", "Real-world Project Scenarios", "Cloud & Local Server Setup"],
        icon: "/vector-icons/aiiot.svg",
        color: "from-orange-500/10 to-transparent",
        borderColor: "border-orange-500/20",
        accent: "text-orange-500",
    },
    {
        title: "Drone Technology Labs",
        shortDesc: "Aerial innovation & programming.",
        fullDesc: "Take learning to the skies with our Drone Technology labs. We provide complete kits for drone assembly, flight dynamics, and programming. Students learn aerodynamics, electronics, and coding by building and flying their own programmable drones.",
        features: ["Drone Assembly & Repair", "Flight Dynamics & Physics", "Programmable Flight Controllers", "Safety Nets & Indoor Testing Zones"],
        icon: "/vector-icons/roboauto.svg",
        color: "from-purple-500/10 to-transparent",
        borderColor: "border-purple-500/20",
        accent: "text-purple-500",
    },
    {
        title: "LMS & Digital Curriculum",
        shortDesc: "Complete digital learning ecosystem.",
        fullDesc: "Our proprietary Learning Management System (LMS) seamlessly integrates with our physical labs. It offers a structured digital curriculum for robotics, AI, and coding. Features include progress tracking, interactive quizzes, video lectures, and separate dashboards for students, teachers, and administrators.",
        features: ["Student & Teacher Dashboards", "NEP-aligned Digital Content", "Assessment & Certification", "Progress Tracking Analytics"],
        icon: "/vector-icons/stem.svg",
        color: "from-green-500/10 to-transparent",
        borderColor: "border-green-500/20",
        accent: "text-green-500",
    },
    {
        title: "Teacher Training Programs",
        shortDesc: "Empowering educators.",
        fullDesc: "A lab is only as good as the teachers running it. Our comprehensive Capacity Building Programs train educators in STEM pedagogy, robotics hardware, and coding. We ensure your teaching staff is confident, skilled, and ready to lead the next generation of innovators.",
        features: ["Hands-on Hardware Training", "STEM Pedagogy & Classroom Management", "Ongoing Mentorship & Support", "Educator Certification"],
        icon: "/vector-icons/custom.svg",
        color: "from-blue-400/10 to-transparent",
        borderColor: "border-blue-400/20",
        accent: "text-blue-400",
    },
    {
        title: "OEM Manufacturing",
        shortDesc: "Custom electronics & kits.",
        fullDesc: "As an original equipment manufacturer (OEM), we design and produce our own educational electronics, Arduino-compatible boards, sensors, and DIY kits. This allows us to provide high-quality, cost-effective, and fully customized hardware solutions for specific institutional needs.",
        features: ["Custom PCB Design & Printing", "Proprietary Educational Kits", "White-labeling Options", "Bulk Supply & Manufacturing"],
        icon: "/vector-icons/embedded.svg",
        color: "from-orange-400/10 to-transparent",
        borderColor: "border-orange-400/20",
        accent: "text-orange-400",
    }
];

export default function ServicesPage() {
    return (
        <main className="w-full bg-[#040b16] min-h-screen pt-28 pb-20 px-5 md:px-10 lg:px-16 overflow-hidden relative">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                
                
            </div>

            <div className="relative z-10 max-w-[90rem] mx-auto">
                <div className="flex flex-col items-center text-center mb-20">
                    <Badge text="OUR SERVICES" />
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-6">
                        Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Innovation Solutions</span> Under One Roof
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-light">
                        We offer end-to-end services for educational institutions, government organizations and private sector innovation programs. Dive into our detailed service domains below.
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    {detailedServices.map((service, idx) => (
                        <div 
                            key={idx}
                            className={`group relative bg-white/[0.02] backdrop-blur-sm border ${service.borderColor} rounded-[32px] p-8 md:p-12 transition-all duration-300 overflow-hidden hover:bg-white/[0.04]`}
                        >
                            <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${service.color} opacity-50`} />
                            
                            <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-start">
                                {/* Left Side: Icon & Title */}
                                <div className="lg:w-1/3 flex flex-col shrink-0">
                                    <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                                        <Image 
                                            src={service.icon}
                                            alt={service.title}
                                            width={40}
                                            height={40}
                                            className="brightness-200"
                                        />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-2">
                                        {service.title}
                                    </h2>
                                    <p className={`text-lg font-semibold ${service.accent} mb-4`}>
                                        {service.shortDesc}
                                    </p>
                                </div>
                                
                                {/* Right Side: Description & Features */}
                                <div className="lg:w-2/3 flex flex-col">
                                    <p className="text-slate-300 text-lg leading-relaxed font-light mb-8">
                                        {service.fullDesc}
                                    </p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {service.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-4">
                                                <CheckCircle className={service.accent} size={20} />
                                                <span className="text-slate-200 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
