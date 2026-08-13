import Image from "next/image";
import Badge from "@/app/(components)/site/Badge";

export default function WhatWeOfferSection() {
    const categories = [
        {
            icn: "/vector-icons/roboauto.svg",
            title: "Robotics & Automation",
            description: "Robotic systems, automation platforms and custom engineering.",
            accent: "blue",
        },
        {
            icn: "/vector-icons/aiiot.svg",
            title: "AI & IoT Solutions",
            description: "Connected devices, intelligent systems and edge applications.",
            accent: "orange",
        },
        {
            icn: "/vector-icons/embedded.svg",
            title: "Embedded Systems",
            description: "Electronics, firmware, PCB and microcontroller-based development.",
            accent: "orange",
        },
        {
            icn: "/vector-icons/stem.svg",
            title: "STEM & Robotics Education",
            description: "Hands-on kits, programs and project-based technology learning.",
            accent: "blue",
        },
        {
            icn: "/vector-icons/labsetup.svg",
            title: "Robotics Lab Setup",
            description: "Complete lab planning, equipment, installation and training.",
            accent: "orange",
        },
        {
            icn: "/vector-icons/industrialpro.svg",
            title: "Industrial Projects",
            description: "Custom automation, electronics and engineering solutions.",
            accent: "orange",
        },
        {
            icn: "/vector-icons/oem.svg",
            title: "OEM / ODM Solutions",
            description: "Prototype-to-product engineering and manufacturing support.",
            accent: "blue",
        },
        {
            icn: "/vector-icons/custom.svg",
            title: "Custom Technology",
            description: "End-to-end development of tailored hardware and software.",
            accent: "orange",
        },
    ];

    return (
        <section className="p-16">
            {/*----------------------------BADGE------------------------------*/}
            <Badge text="SOLUTIONS" />

            {/*-------------------------SECTION HEADING------------------------*/}
            <div className="my-8">
                <h2 className="text-4xl font-bold text-gray-900">Solutions for Every Industry</h2>
                <p className="text-sm text-blue-700 mt-1">Practical engineering solutions designed for learning, innovation and real-world deployment.</p>
            </div>

            {/*------------------------CARDS GRID--------------------------*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {categories.map((category, index) => (
                    <div
                        key={`${category.title}-${index}`}
                        id={`card-${index}`}
                        className={`bg-white rounded-md border border-gray-200 border-l-4 ${(index+1) % 2 === 0 ? 'border-l-blue-700':'border-l-orange-500'} p-5 flex flex-col justify-between min-h-42.5`}
                    >
                        <div>
                            <h5 className="text-base font-semibold text-gray-900 mb-2">
                                {category.title}
                            </h5>
                            <p className="text-xs text-gray-500 leading-relaxed pr-2">
                                {category.description}
                            </p>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <div
                                className={`w-14 h-14 rounded-md flex items-center justify-center`}
                            >
                                <Image
                                    width={32}
                                    height={32}
                                    src={category.icn}
                                    alt={category.title}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}