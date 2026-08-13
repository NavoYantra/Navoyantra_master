import Link from "next/link";
import Image from "next/image";
import Badge from "@/app/(components)/site/Badge";

function Hero() {
    return (
        <section className="w-screen bg-black text-white flex flex-col-reverse lg:flex-row items-center justify-center gap-12 p-16 md:px-12 lg:px-24 lg:py-24">
            {/*-------------------- LEFT SECTION ----------------------------*/}
            <div id="left-section" className="w-full lg:w-1/2 flex flex-col items-start gap-8">
                {/* Top Left Badge */}
                <Badge text="robotics . ai . iot . embedded . automation" />

                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl text-blue-500 font-bold leading-tight">
                        <span>Engineering</span><br /><span>Technology.</span><br /><span className="text-orange-500">Building the Future.</span>
                    </h1>
                    <p className="text-gray-300 max-w-md mt-4 text-sm sm:text-base">
                        NavoYantra Technology delivers robotics, AI, IoT, embedded systems,
                        automation, STEM education, laboratory setup, industrial solutions
                        and OEM product development.
                    </p>
                </div>

                {/* left CTA's */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                        <Link
                            href="#"
                            className="capitalize font-medium py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
                        >
                            Explore Store
                        </Link>
                        <Link
                            href="#"
                            className="capitalize font-medium py-3 px-6 rounded-lg bg-white text-blue-600 hover:bg-gray-100 transition-colors"
                        >
                            Talk to Us
                        </Link>
                    </div>
                    <p className="text-xs font-light text-gray-400">
                        Built for schools, colleges, institutions, industries and technology partners.
                    </p>
                </div>
            </div>

            {/*-------------------- RIGHT SECTION ---------------------------*/}
            <div id="right-section" className="w-full lg:w-1/2 flex justify-center">
                <div className="w-full">
                    <Image
                        src="/hero.webp"
                        alt="NavoYantra robotics and AI hero graphic"
                        priority
                        className="rounded-2xl"
                        width={600}
                        height={600}
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;