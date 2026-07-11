"use client";

import Image from "next/image";
import {ArrowRight} from "react-feather";
import Link from "next/link";

export default function Vision2030Section() {
    return (
        <section className="bg-zinc-200">
            <div className="max-w-7xl mx-auto px-6">

                <div className="relative overflow-hidden">
                    <div className="relative grid lg:grid-cols-2 items-center gap-10 p-10 lg:p-16">
                        {/* Left */}
                        <div>

                        <span className="inline-flex bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400"> OUR VISION</span>

                            <h2 className="mt-6 text-5xl font-bold leading-tight">
                                Building India's
                                <span className="block text-blue-500">Tech Future by 2030</span>
                            </h2>

                            <p className="mt-8 leading-8">
                                We envision a future where India becomes a global leader in
                                Drone Technology, Industrial IoT and Embedded Systems through
                                indigenous innovation, manufacturing excellence and advanced
                                STEM education.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-5">

                                <div className="rounded-xl p-5">
                                    <h3 className="text-3xl font-bold text-blue-500">
                                        50K+
                                    </h3>

                                    <p className="mt-2 text-sm">
                                        Atal Tinkering Labs Target
                                    </p>
                                </div>

                                <div className="rounded-xl p-5">
                                    <h3 className="text-3xl font-bold text-blue-500">
                                        100%
                                    </h3>

                                    <p className="mt-2 text-sm">
                                        Indigenous Manufacturing
                                    </p>
                                </div>

                            </div>

                            <Link
                                href={"contact"}
                                className="cursor-pointer group mt-10 inline-flex items-center gap-3 bg-blue-500 px-7 py-4 font-semibold text-white transition hover:bg-blue-600">
                                Contact Us

                                <ArrowRight
                                    size={18}
                                    className="transition group-hover:translate-x-1"
                                />
                            </Link>

                        </div>

                        {/* Right */}

                        <div className="relative flex justify-center">
                            <Image
                                src="/ct-card-bg.png"
                                alt="Vision 2030"
                                width={500}
                                height={500}
                                className="relative z-10 object-contain hover:scale-105 transition duration-500"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}