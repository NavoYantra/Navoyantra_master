import React from "react";
import FaqBar from "@/app/(components)/site/FAQBar";
import Badge from "@/app/(components)/site/Badge";

const faqs = [
    {
        question: "What does NavoYantra offer?",
        answer: "NavoYantra provides Robotics, Artificial Intelligence, IoT, Embedded Systems, Automation, and STEM Education solutions for schools, colleges, industries, and innovators.",
    },
    {
        question: "What kind of robotics kits are available?",
        answer: "NavoYantra offers hands-on robotics kits designed to help students and learners understand robotics through practical projects and real-world applications.",
    },
    {
        question: "Do you provide STEM lab setup for educational institutions?",
        answer: "Yes. NavoYantra provides complete innovation and STEM lab setup solutions for educational institutions, including laboratory infrastructure and modern technology-based learning resources.",
    },
    {
        question: "Do you provide AI and IoT solutions?",
        answer: "Yes. NavoYantra offers AI and IoT learning solutions, including practical kits and hardware that help students build and understand intelligent and connected systems.",
    },
    {
        question: "Can NavoYantra help with embedded systems and automation?",
        answer: "Yes. NavoYantra works with Embedded Systems, PLC programming, and industrial automation solutions, along with practical learning resources.",
    },
    {
        question: "Who can use NavoYantra's solutions?",
        answer: "NavoYantra's solutions are designed for schools, colleges, engineering institutions, industries, students, makers, and technology innovators.",
    },
    {
        question: "Do you provide customized solutions?",
        answer: "Yes. NavoYantra provides customized technology and educational solutions based on institutional and project requirements. You can contact the team to discuss your specific needs.",
    },
    {
        question: "Do you collaborate with other companies?",
        answer: "Yes. We build cutting edge custom solutions tailored to you preferences. We can collaborate with your team to develop and implement the right solution for your project.",
    }
];

function FaqSection() {
    return (
        <section className="w-full py-24 bg-slate-50 relative overflow-hidden">
            
            {/* Background elements for depth */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="mx-auto max-w-4xl px-5 relative z-10">
                {/*-------------------------SECTION HEADER-----------------------*/}
                <div className="mb-16 text-center flex flex-col items-center gap-4">
                    <Badge text="FAQs" />
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-4">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-4 text-lg md:text-xl text-slate-500 max-w-2xl font-light leading-relaxed">
                        Everything you need to know about NavoYantra's robotics, AI, IoT and STEM solutions.
                    </p>
                </div>

                {/*-------------------------FAQS-----------------------------*/}
                <FaqBar faqs={faqs} />
            </div>
        </section>
    );
}

export default FaqSection;