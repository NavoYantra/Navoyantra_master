"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "react-feather";

function FooterCTASection() {
    return (
        <section className="relative w-full py-24 md:py-32 px-5 md:px-10 lg:px-16 overflow-hidden bg-[#040b16]">
            
            {/* Background glowing orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
            
            {/* Inner Glass Container */}
            <div className="max-w-[85rem] mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-[40px] p-10 md:p-16 lg:p-20 shadow-2xl"
                >
                    {/*-----------------HEADER SECTION---------------*/}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                            Have a Project in <br className="hidden lg:block"/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Mind?</span>
                        </h2>
                        <p className="mt-6 text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Whether you are planning a robotics lab, developing an industrial product, building an educational solution or looking for an OEM technology partner, let's build it together.
                        </p>
                    </div>

                    {/*-----------------BUTTON SECTION-------------*/}
                    <div className="shrink-0 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6 w-full lg:w-auto">
                        <Link 
                            className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-accent hover:bg-orange-600 text-white font-bold text-lg px-8 py-5 rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(234,88,12,0.3)] hover:shadow-[0_0_40px_rgba(234,88,12,0.5)] hover:-translate-y-1" 
                            href="#"
                        >
                            <span>Start a Project</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link 
                            className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-lg px-8 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1" 
                            href="/contact"
                        >
                            <Mail size={20} />
                            <span>Contact Us</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default FooterCTASection;
