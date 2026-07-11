import Image from "next/image";
import { ArrowRight } from "react-feather";
import TestimonialSection from "@/app/(components)/sections/about/TestimonialSection";
import Vision2030Section from "@/app/(components)/sections/about/VisionSection";

export default function Page() {
    const aboutPoints = [
        {
            title: "Our Mission",
            description:
                "To architect India's deep-tech sovereignty by bridging the gap between foundational STEM education and advanced industrial automation. We are committed to the national vision of AtmaNirbhar Bharat.",
        },
        {
            title: "Our Goals",
            description:
                "To lead the indigenization of India's drone and IIoT ecosystems while supporting the rollout of Atal Tinkering Labs and achieving complete domestic manufacturing.",
        },
        {
            title: "Why Us?",
            description:
                "As a DPIIT Recognized and GeM OEM manufacturer, we provide direct engineering support, rapid PCB prototyping and complete manufacturer advantage.",
        },
    ];

    return (
        <main className="min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-5xl font-bold mb-6">
                        About Us
                    </h2>

                    <p className="opacity-70 leading-8">
                        NavoYantra Technology is a DPIIT-recognized, MSME-certified GeM OEM
                        manufacturer focused on Industrial IoT, STEM Education and Drone
                        Technologies to empower AtmaNirbhar Bharat.
                    </p>
                </div>

                {/* Content */}

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left Image */}
                    <div className="relative h-175 rounded-xl overflow-hidden">
                        <Image
                            src="/about-robo.webp"
                            alt="About"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right */}
                    <div>
                        <p className="uppercase text-blue-500 font-semibold tracking-widest text-sm">Our Identity</p>
                        <h2 className="text-5xl font-bold mt-3 mb-14 leading-tight">A Vertically Integrated Powerhouse</h2>

                        <div className="space-y-14">

                            {aboutPoints.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex gap-6"
                                >
                                    <span className="text-4xl font-bold text-blue-500 min-w-13.75">#{index + 1}</span>
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                                        <p className="opacity-70 leading-8">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="cursor-pointer text-white mt-14 bg-blue-600 hover:bg-blue-700 transition px-8 py-4 flex items-center gap-3 font-semibold">
                            Learn More
                            <ArrowRight size={18} />
                        </button>

                    </div>

                </div>
            </div>
            <TestimonialSection />
            <Vision2030Section />
        </main>
    );
}