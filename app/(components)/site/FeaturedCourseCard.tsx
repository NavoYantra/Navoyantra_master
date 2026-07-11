"use client";

import Image from "next/image";
import { Eye } from "react-feather";

interface ICourseProp {
    image: string;
    title: string;
    category: string;
    description: string;
    price: number;
}

function FeaturedCourseCard({ course }: { course: ICourseProp }) {
    return (
        <div className="group overflow-hidden rounded-none border-2 border-zinc-200 bg-white shadow-sm hover:border-blue-500 transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-zinc-100">
                    <Image
                        src="/ct-card-bg.png"
                        alt={course.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                </div>

                {/* Content */}
                <div className="space-y-3 p-5">
                    <span className="inline-block rounded-none bg-blue-50 border border-blue-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-600">
                        {course.category}
                    </span>
                    <h3 className="text-lg font-bold text-zinc-900 line-clamp-1 leading-snug">
                        {course.title}
                    </h3>
                    <p className="line-clamp-2 text-xs text-zinc-500 leading-relaxed">
                        {course.description}
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-5 pt-0 border-t border-zinc-50 mt-4">
                <span className="font-bold text-blue-600 text-sm">₹{course.price}</span>
                <button className="flex items-center gap-1.5 rounded-none bg-blue-600 hover:bg-blue-700 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 cursor-pointer">
                    <Eye size={12} />
                    <span>View</span>
                </button>
            </div>
        </div>
    );
}

export default FeaturedCourseCard;