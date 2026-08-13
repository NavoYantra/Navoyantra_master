"use client";

import {useState} from "react";
import {ChevronDown, ChevronUp} from "react-feather";

interface IFaq {
    question: string;
    answer: string;
}

interface IFaqBarProps {
    faqs: IFaq[];
}

function FaqBar({ faqs }: IFaqBarProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex((prevIndex) =>
            prevIndex === index ? null : index
        );
    };

    return (
        <div className="w-full mt-8">
            {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        className="border-b border-gray-200"
                    >
                        <button
                            type="button"
                            onClick={() => handleToggle(index)}
                            className="flex w-full items-center justify-between py-4 text-left"
                        >
                            <h3 className="font-medium">{faq.question}</h3>

                            {isOpen ? (
                                <ChevronUp size={20} />
                            ) : (
                                <ChevronDown size={20} />
                            )}
                        </button>

                        {isOpen && (
                            <div className="pb-4">
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default FaqBar;