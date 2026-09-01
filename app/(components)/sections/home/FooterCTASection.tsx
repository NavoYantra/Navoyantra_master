"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Mail, Loader } from "react-feather";
import { useState, FormEvent } from "react";

function FooterCTASection() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [email, setEmail] = useState("");

    const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) return;

        setStatus("submitting");

        try {
            // 1. Send via Web3Forms
            const web3FormsPayload = {
                access_key: "486d0c7a-5af6-463e-9432-b9e32e15b392",
                name: "Newsletter Subscriber",
                email: email,
                message: "New Newsletter Subscription",
                subject: "New Newsletter Subscription from NavoYantra"
            };

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(web3FormsPayload)
            });

            const data = await response.json();

            if (data.success) {
                // 2. Send Auto-Reply via EmailJS
                const emailJsPayload = {
                    service_id: "service_c3tymto",
                    template_id: "template_fs4xljx",
                    user_id: "hGt9aH2fPbx67Doiw",
                    template_params: {
                        email: email
                    }
                };
                
                // Fire and forget EmailJS
                fetch("https://api.emailjs.com/api/v1.0/email/send", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(emailJsPayload)
                }).catch(err => console.error("EmailJS Error:", err));

                setStatus("success");
                setEmail("");
                
                // Reset success message after 5 seconds
                setTimeout(() => {
                    setStatus("idle");
                }, 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Subscription Error:", error);
            setStatus("error");
        }
    };

    return (
        <section className="relative w-full py-24 md:py-32 px-5 md:px-10 lg:px-16 overflow-hidden bg-[#040b16]">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>
            
            {/* Inner Glass Container */}
            <div className="max-w-[85rem] mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-[40px] p-10 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                    {/*-----------------HEADER SECTION---------------*/}
                    <div className="flex-1 text-center lg:text-left relative z-10">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                            Have a Project in <br className="hidden lg:block"/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Mind?</span>
                        </h2>
                        <p className="mt-6 text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Whether you are planning a robotics lab, developing an industrial product, building an educational solution or looking for an OEM technology partner, let's build it together.
                        </p>
                    </div>

                    {/*-----------------FORM & CONTACT SECTION-------------*/}
                    <div className="shrink-0 flex flex-col w-full lg:w-auto relative z-10 max-w-md lg:max-w-lg">
                        
                        <div className="w-full flex flex-col items-center lg:items-end gap-6">
                            <Link 
                                href="/contact"
                                className="group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-lg px-8 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto shadow-lg backdrop-blur-sm"
                            >
                                <Mail size={20} />
                                <span>Contact Us for a Project</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <div className="w-full border-t border-white/10 pt-6 mt-2 flex flex-col items-center lg:items-end gap-3">
                                <p className="text-slate-400 text-sm font-medium">Or subscribe to our newsletter</p>
                                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 w-full relative">
                                    <input 
                                        type="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address" 
                                        required 
                                        disabled={status === "submitting" || status === "success"}
                                        className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-xl outline-none focus:border-accent/50 focus:bg-white/10 transition-all placeholder-slate-500 font-medium disabled:opacity-50" 
                                    />
                                    
                                    <button 
                                        type="submit" 
                                        disabled={status === "submitting" || status === "success"}
                                        className="w-full sm:w-auto shrink-0 group flex items-center justify-center gap-2 bg-accent hover:bg-orange-600 disabled:bg-orange-600/50 text-white font-bold text-sm px-6 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(234,88,12,0.2)] hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] disabled:hover:shadow-none"
                                    >
                                        {status === "submitting" ? (
                                            <Loader className="w-4 h-4 animate-spin mx-auto" />
                                        ) : status === "success" ? (
                                            <>
                                                <CheckCircle className="w-4 h-4" />
                                                <span>Subscribed</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Subscribe</span>
                                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                                <AnimatePresence>
                                    {status === "error" && (
                                        <motion.p 
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="text-red-400 text-xs mt-1 font-medium text-center lg:text-right w-full"
                                        >
                                            Something went wrong. Please try again.
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default FooterCTASection;

