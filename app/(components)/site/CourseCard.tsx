"use client";

import Image from "next/image";
import { BookOpen, Clock, Users } from "react-feather";

type Props = {
    course: {
        id: number;
        title: string;
        category: string;
        level: string;
        duration: string;
        students: number;
        description: string;
    };
};

export default function CourseCard({ course }: Props) {
    return (
        <div className="flex flex-col md:flex-row rounded-none border-2 border-zinc-200 bg-white hover:border-blue-500 transition-all duration-300 overflow-hidden shadow-sm">
            {/* Boxy Image Section */}
            <div className="relative w-full md:w-56 h-48 md:h-auto min-h-[180px] bg-zinc-100 flex-shrink-0">
                <Image
                    src="/ct-card-bg.png"
                    alt={course.title}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay layer to keep it minimal and professional */}
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                    <span className="inline-block rounded-none bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-600 border border-blue-200 uppercase tracking-wider">
                        {course.category}
                    </span>

                    <h2 className="text-2xl font-bold mt-3 text-zinc-900 leading-tight">
                        {course.title}
                    </h2>

                    <p className="text-zinc-600 mt-3 text-sm leading-relaxed max-w-xl">
                        {course.description}
                    </p>
                </div>

                {/* Details Footer */}
                <div className="flex flex-wrap gap-5 mt-6 pt-4 border-t border-zinc-100 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    <span className="flex items-center gap-1.5">
                        <BookOpen size={14} className="text-blue-500" />
                        {course.level}
                    </span>

                    <span className="flex items-center gap-1.5">
                        <Clock size={14} className="text-blue-500" />
                        {course.duration}
                    </span>

                    <span className="flex items-center gap-1.5">
                        <Users size={14} className="text-blue-500" />
                        {course.students} Students
                    </span>
                </div>
            </div>
        </div>
    );
}