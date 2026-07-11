"use client";

import { useMemo, useState } from "react";
import CourseSidebar from "@/app/(components)/site/CourseSidebar";
import CourseList from "@/app/(components)/site/CourseList";
import { courses } from "@/app/(components)/site/CourseData";
import { BookOpen, Compass, Sliders } from "react-feather";

export default function Page() {
    const [selected, setSelected] = useState("All");

    const filteredCourses = useMemo(() => {
        if (selected === "All") return courses;

        return courses.filter((course) => course.category === selected);
    }, [selected]);

    return (
        <main className="bg-zinc-50 min-h-screen pb-24">
            {/* Boxy Minimal Hero Section */}
            <section className="bg-white border-b-2 border-zinc-200 py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_320px] gap-8 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-xs mb-3">
                            <Compass size={14} />
                            <span>Course Directory</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight">
                            Explore Our <span className="text-blue-600">Courses</span>
                        </h1>
                        <p className="mt-4 text-zinc-600 max-w-xl text-sm leading-relaxed">
                            Upskill yourself with industry-ready, hands-on STEM and IOT courses designed by core engineers. Learn practical hardware prototyping and software design at your own pace.
                        </p>
                    </div>

                    {/* Minimalist Boxy Info Widget */}
                    <div className="border-2 border-zinc-200 p-6 bg-white relative overflow-hidden hidden md:block">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 translate-x-12 -translate-y-12 rotate-45" />
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-50 border border-blue-200 p-2 text-blue-600">
                                <BookOpen size={20} />
                            </div>
                            <span className="font-bold uppercase tracking-wider text-xs text-zinc-900">
                                Learning Hub
                            </span>
                        </div>
                        <p className="text-xs text-zinc-500 leading-normal">
                            All courses come with native hardware kit guides, live source code templates, and MSME verified certifications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-7xl mx-auto px-6 py-14">
                <div className="flex items-center gap-2 mb-8 text-zinc-400 font-bold uppercase tracking-wider text-xs">
                    <Sliders size={14} />
                    <span>Filter Results</span>
                    <span className="text-zinc-300">/</span>
                    <span className="text-blue-600">{selected} Category ({filteredCourses.length})</span>
                </div>

                <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
                    <CourseSidebar
                        selected={selected}
                        setSelected={setSelected}
                    />

                    <div className="space-y-6">
                        {filteredCourses.length > 0 ? (
                            <CourseList courses={filteredCourses} />
                        ) : (
                            <div className="border-2 border-dashed border-zinc-200 bg-white p-12 text-center">
                                <p className="text-zinc-500 font-medium">No courses found matching this category.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}