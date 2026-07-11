"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, HelpCircle } from "react-feather";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
    {
        question: "Can the lab be customized?",
        answer: "Yes. Every lab can be tailored to your institution's requirements and budget. We offer modular configurations so you can choose specific kits, equipment tiers, and curriculum packages that align with your syllabus and infrastructure.",
    },
    {
        question: "Do you provide teacher training?",
        answer: "Yes. Comprehensive training is included with every lab package. Our trainers conduct multi-day workshops covering hardware assembly, software tools, project workflows, and assessment methodology to make educators fully confident.",
    },
    {
        question: "Is curriculum included?",
        answer: "Yes. Practical curriculum and project manuals are included. Each lab module ships with structured lesson plans, student worksheets, assessment rubrics, and access to our LMS with video tutorials.",
    },
    {
        question: "Do you offer installation?",
        answer: "Yes. Our team assists with setup, testing, and deployment. We handle the full physical installation including furniture layout, electrical wiring checks, network configuration, and end-to-end hardware calibration.",
    },
    {
        question: "What is the warranty period?",
        answer: "All hardware kits come with a standard 1-year manufacturer warranty. We also offer optional Annual Maintenance Contracts (AMC) that cover replacement parts, firmware updates, and on-site servicing visits.",
    },
    {
        question: "Can labs be expanded later?",
        answer: "Absolutely. Our modular architecture means you can add new benches, upgrade microcontrollers, or introduce entirely new disciplines (like drone robotics or AI vision) without replacing existing infrastructure.",
    },
];

function FAQItem({
    faq,
    index,
    isOpen,
    onToggle,
}: {
    faq: { question: string; answer: string };
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    const contentRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!contentRef.current || !arrowRef.current) return;

            if (isOpen) {
                gsap.to(contentRef.current, {
                    height: "auto",
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out",
                });
                gsap.to(arrowRef.current, {
                    rotation: 180,
                    duration: 0.3,
                    ease: "power2.out",
                });
            } else {
                gsap.to(contentRef.current, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in",
                });
                gsap.to(arrowRef.current, {
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.in",
                });
            }
        },
        { dependencies: [isOpen] }
    );

    return (
        <div
            className={`border-2 transition-colors duration-300 ${
                isOpen
                    ? "border-blue-500 bg-white"
                    : "border-zinc-200 bg-zinc-50 hover:border-zinc-400"
            }`}
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer gap-4"
            >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span
                        className={`text-[10px] font-black uppercase tracking-widest flex-shrink-0 ${
                            isOpen ? "text-blue-600" : "text-zinc-400"
                        }`}
                    >
                        0{index + 1}
                    </span>
                    <h3
                        className={`text-sm font-bold uppercase tracking-wider ${
                            isOpen ? "text-zinc-900" : "text-zinc-700"
                        }`}
                    >
                        {faq.question}
                    </h3>
                </div>
                <div ref={arrowRef} className="flex-shrink-0">
                    <ChevronDown
                        size={16}
                        className={
                            isOpen ? "text-blue-600" : "text-zinc-400"
                        }
                    />
                </div>
            </button>

            <div
                ref={contentRef}
                className="overflow-hidden"
                style={{ height: 0, opacity: 0 }}
            >
                <div className="px-5 pb-5 pt-0">
                    <div className="border-t border-zinc-100 pt-4">
                        <p className="text-xs text-zinc-600 leading-relaxed">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function LabFAQ() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useGSAP(
        () => {
            const items = sectionRef.current?.querySelectorAll(".faq-item");
            if (!items || items.length === 0) return;

            gsap.from(items, {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="w-full bg-white py-20 px-6 border-b-2 border-zinc-200"
        >
            <div className="max-w-3xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-14 space-y-2">
                    <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-xs">
                        <HelpCircle size={14} />
                        <span>Frequently Asked</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900">
                        Lab Setup <span className="text-blue-600">FAQ&apos;s</span>
                    </h2>
                    <p className="text-zinc-500 text-sm max-w-md mx-auto">
                        Common questions from institutions considering our turnkey lab deployment services.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="faq-item">
                            <FAQItem
                                faq={faq}
                                index={idx}
                                isOpen={openIndex === idx}
                                onToggle={() =>
                                    setOpenIndex(
                                        openIndex === idx ? null : idx
                                    )
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
