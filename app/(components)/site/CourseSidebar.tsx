"use client";

import { ChevronRight } from "react-feather";

type Props = {
    selected: string;
    setSelected: (value: string) => void;
};

const filters = [
    "All",
    "Development",
    "Design",
    "Marketing",
];

export default function CourseSidebar({
                                          selected,
                                          setSelected,
                                      }: Props) {
    return (
        <aside className="w-full lg:w-72 rounded-none border-2 border-zinc-200 bg-white p-6 h-fit lg:sticky lg:top-24 shadow-sm">
            <h2 className="text-lg font-bold mb-6 uppercase tracking-wider text-zinc-900 border-l-4 border-blue-600 pl-3">
                Categories
            </h2>

            <div className="flex flex-row flex-wrap lg:flex-col gap-2.5">
                {filters.map((item) => {
                    const isActive = selected === item;
                    return (
                        <button
                            key={item}
                            onClick={() => setSelected(item)}
                            className={`flex items-center justify-between w-full rounded-none px-4 py-3 text-left text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border
                                ${
                                    isActive
                                        ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/10"
                                        : "bg-white border-zinc-200 text-zinc-700 hover:border-blue-500 hover:text-blue-600"
                                }`}
                        >
                            <span>{item}</span>
                            <ChevronRight
                                size={14}
                                className={`transition-transform duration-200 ${
                                    isActive ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-2"
                                }`}
                            />
                        </button>
                    );
                })}
            </div>
        </aside>
    );
}