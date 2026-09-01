"use client";

import { ArrowRight, CheckCircle, Cpu, Mail, MapPin, Phone, Settings, Zap } from "react-feather";
import { FormEvent, useState } from "react";
import Badge from "@/app/(components)/site/Badge";
import { supabase } from "@/lib/supabase";

export default function Page() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        
        // Honeypot check: If the hidden 'website' field is filled, it's likely a bot.
        const honeypot = formData.get("website") as string;
        if (honeypot) {
            // Silently reject to confuse the bot
            setStatus("success");
            (e.target as HTMLFormElement).reset();
            return;
        }
        
        // Extract values for Supabase
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const topic = formData.get("topic") as string;
        const rawMessage = formData.get("message") as string;
        
        const message = `Topic: ${topic}\n\n${rawMessage}`;

        // Access Key for Web3Forms
        formData.append("access_key", "486d0c7a-5af6-463e-9432-b9e32e15b392");

        let supabaseError = null;
        try {
            // 1. Save to Supabase (contact_inquiries table)
            const { error } = await supabase
                .from("contact_inquiries")
                .insert([{ name, email, phone, message }]);
            supabaseError = error;
                
            if (supabaseError) {
                console.error("Supabase Error:", supabaseError);
            }
        } catch (e) {
            console.error("Supabase Exception:", e);
        }

        try {
            // 2. Send via Web3Forms using JSON
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const data = await response.json();

            if (data.success || !supabaseError) {
                // 3. Trigger EmailJS Auto-Reply
                try {
                    const emailJsPayload = {
                        service_id: "service_56soeal",
                        template_id: "template_uxdehb5",
                        user_id: "1PQDMxg5v0kwuJoko",
                        template_params: {
                            name,
                            email,
                            phone,
                            topic,
                            message: rawMessage
                        }
                    };
                    
                    fetch("https://api.emailjs.com/api/v1.0/email/send", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(emailJsPayload)
                    }).catch(err => console.error("EmailJS Error:", err));
                } catch (e) {
                    console.error("EmailJS setup error:", e);
                }

                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Web3Forms Exception:", error);
            setStatus("error");
        }
    };

    return (
        <main className="w-full bg-[#040b16] min-h-screen pt-28 pb-20 overflow-hidden relative text-white">
            
            

            <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-16">

                {/* Header */}
                <div className="text-center mb-20">
                    <Badge text="CONTACT US" />

                    <h1 className="text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
                        Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Innovation Lab</span>
                    </h1>

                    <p className="max-w-3xl mx-auto mt-6 text-slate-400 text-lg md:text-xl font-light leading-relaxed">
                        Whether you're planning a new STEM lab, upgrading an existing laboratory or implementing LMS for your institution, our team is ready to help.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">

                    {/* Address */}
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 text-center hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 mb-6">
                            <MapPin className="text-primary" size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Head Office</h3>
                        <p className="text-slate-400 leading-relaxed font-light">
                            1/10726-A KH No. 1622/62,<br />
                            Gali No. 2, Subhash Park,<br />
                            Naveen Shahdara,<br />
                            Delhi – 110032, India
                        </p>
                    </div>

                    {/* Email */}
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 text-center hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 mb-6">
                            <Mail className="text-accent" size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Email</h3>
                        <div className="flex flex-col gap-2 text-slate-400 font-light">
                            <a href="mailto:info@navoyantra.com" className="hover:text-white transition-colors">info@navoyantra.com</a>
                            <a href="mailto:contact@navoyantra.com" className="hover:text-white transition-colors">contact@navoyantra.com</a>
                            <a href="mailto:navoyantra@gmail.com" className="hover:text-white transition-colors">navoyantra@gmail.com</a>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 text-center hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 mb-6">
                            <Phone className="text-green-500" size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Call Us</h3>
                        <div className="flex flex-col gap-2 text-slate-400 font-light">
                            <a href="tel:+919582528010" className="hover:text-white transition-colors">+91 95825 28010</a>
                            <a href="tel:+918796599974" className="hover:text-white transition-colors">+91 87965 99974</a>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-stretch">

                    {/* Map */}
                    <div className="overflow-hidden rounded-[40px] shadow-2xl border border-white/10 min-h-[550px] relative group">
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-700" />
                        <iframe
                            title="Navoyantra Location"
                            src="https://maps.google.com/maps?q=Subhash%20Park%2C%20Naveen%20Shahdara%2C%20Delhi%20110032&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-full border-0 grayscale invert contrast-125 group-hover:grayscale-0 group-hover:invert-0 transition-all duration-700 relative z-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Form Section */}
                    <div className="flex flex-col justify-center lg:pl-6 bg-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-12">

                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                            Send us a message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Honeypot field for spam protection */}
                            <input type="text" name="website" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                            
                            {/* Web3forms subject field */}
                            <input type="hidden" name="subject" value="New Contact Form Submission from NavoYantra Website" />
                            {/* Web3forms redirect prevention */}
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-slate-300">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-slate-300">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-semibold text-slate-300">Phone Number (Optional)</label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="+91 00000 00000"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="topic" className="text-sm font-semibold text-slate-300">Inquiry Topic</label>
                                    <select 
                                        id="topic" 
                                        name="topic" 
                                        required 
                                        defaultValue=""
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                                        style={{ backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", backgroundSize: "1em" }}
                                    >
                                        <option value="" disabled className="text-slate-900">Select a topic...</option>
                                        <option value="Lab Setup" className="text-slate-900">Complete Lab Setup</option>
                                        <option value="STEM Kits" className="text-slate-900">STEM & Robotics Kits</option>
                                        <option value="Teacher Training" className="text-slate-900">Teacher Training</option>
                                        <option value="LMS Platform" className="text-slate-900">LMS Platform</option>
                                        <option value="General Inquiry" className="text-slate-900">General Inquiry</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-slate-300">Your Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required 
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                    placeholder="Tell us about your requirements..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className={`w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${status === "submitting" ? "opacity-70 cursor-not-allowed" : ""}`}
                            >
                                {status === "submitting" ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message
                                        <ArrowRight size={20} />
                                    </>
                                )}
                            </button>

                            {status === "success" && (
                                <p className="text-green-500 text-sm text-center font-semibold mt-4">
                                    Message sent successfully! We'll get back to you soon.
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-red-500 text-sm text-center font-semibold mt-4">
                                    There was an error sending your message. Please try again or email us directly.
                                </p>
                            )}
                        </form>

                    </div>

                </div>

            </div>
        </main>
    );
}
