import {HelpCircle} from "react-feather";
import FaqBar from "@/app/(components)/site/FAQBar";


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

export default function LabFAQ() {
     return (
        <section
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
                <FaqBar faqs={faqs} />
            </div>
        </section>
    );
}
