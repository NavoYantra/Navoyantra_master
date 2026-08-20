import { Metadata } from "next";
import Badge from "@/app/(components)/site/Badge";
import Image from "next/image";

export const metadata: Metadata = {
    title: "STEM Lab Setup, AI, Robotics & IoT Solutions",
    description: "NavoYantra offers end-to-end services for educational institutions, government organizations and private sector innovation programs.",
};

const services = [
    {
        title: "STEM & Robotics Lab Setup",
        desc: "Complete planning, infrastructure, hardware installation, safety, curriculum and implementation.",
        icon: "/vector-icons/labsetup.svg",
        color: "from-blue-500/20 to-transparent",
        colSpan: "md:col-span-2",
    },
    {
        title: "AI, Machine Learning & IoT Labs",
        desc: "Practical learning environments with sensors, embedded systems and intelligent automation projects.",
        icon: "/vector-icons/aiiot.svg",
        color: "from-orange-500/20 to-transparent",
        colSpan: "md:col-span-1",
    },
    {
        title: "Drone Technology Labs",
        desc: "Drone assembly, programming, flight concepts and aerial innovation curriculum.",
        icon: "/vector-icons/roboauto.svg",
        color: "from-purple-500/20 to-transparent",
        colSpan: "md:col-span-1",
    },
    {
        title: "LMS & Digital Curriculum",
        desc: "Student dashboard, teacher dashboard, assessments, progress tracking and certification.",
        icon: "/vector-icons/stem.svg",
        color: "from-green-500/20 to-transparent",
        colSpan: "md:col-span-2",
    },
    {
        title: "Teacher Training Programs",
        desc: "Hands-on educator certification for STEM, Robotics, AI and IoT teaching methodologies.",
        icon: "/vector-icons/custom.svg",
        color: "from-primary/20 to-transparent",
        colSpan: "md:col-span-2",
    },
    {
        title: "OEM Manufacturing",
        desc: "Custom educational electronics, Arduino-compatible boards, sensors and DIY learning kits.",
        icon: "/vector-icons/embedded.svg",
        color: "from-accent/20 to-transparent",
        colSpan: "md:col-span-1",
    }
];

export default function ServicesPage() {
    return (
        <main className="w-full bg-[#040b16] min-h-screen pt-28 pb-20 px-5 md:px-10 lg:px-16 overflow-hidden relative">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-[90rem] mx-auto">
                <div className="flex flex-col items-center text-center mb-16">
                    <Badge text="OUR SERVICES" />
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-6">
                        Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Innovation Solutions</span> Under One Roof
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-light">
                        We offer end-to-end services for educational institutions, government organizations and private sector innovation programs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <div 
                            key={idx}
                            className={`group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden hover:-translate-y-1 ${service.colSpan}`}
                        >
                            <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Image 
                                        src={service.icon}
                                        alt={service.title}
                                        width={32}
                                        height={32}
                                        className="brightness-200"
                                    />
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                
                                <p className="text-slate-400 font-light leading-relaxed mt-auto">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
