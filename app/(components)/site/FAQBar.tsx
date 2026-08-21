"use client";

import { useState } from "react";
import { Plus } from "react-feather";
import { motion, AnimatePresence } from "framer-motion";

interface IFaq {
    question: string;
    answer: string;
}

interface IFaqBarProps {
    faqs: IFaq[];
}

function FaqBar({ faqs }: IFaqBarProps) {
    const [pinned, setPinned] = useState<number[]>([]);

    const handleTogglePin = (index: number) => {
        setPinned((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <div className="w-full mt-10 space-y-4">
            {faqs.map((faq, index) => {
                const isOpen = pinned.includes(index);

                return (
                    <div
                        key={index}
                        className={`group rounded-2xl transition-all duration-300 border ${
                            isOpen 
                                ? "bg-white border-primary/20 shadow-[0_10px_40px_rgba(37,99,235,0.08)]" 
                                : "bg-white border-slate-100 hover:border-slate-200 hover:shadow-md"
                        }`}
                    >
                        <button
                            type="button"
                            onClick={() => handleTogglePin(index)}
                            className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                        >
                            <h3 className={`text-lg md:text-xl font-bold pr-4 transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-slate-800'}`}>
                                {faq.question}
                            </h3>

                            <motion.div
                                animate={{ rotate: isOpen ? 45 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className={`shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-colors duration-300 ${
                                    isOpen ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'
                                }`}
                            >
                                <Plus size={20} />
                            </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 pt-0">
                                        <p className="text-slate-500 text-base md:text-lg leading-relaxed font-light">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}

export default FaqBar;