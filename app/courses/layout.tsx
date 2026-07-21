import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Courses",
    description: "Enroll in comprehensive STEM, AI, IoT, and Robotics courses designed by industry experts. Empower your learning with hands-on technical curriculum.",
    keywords: ["Robotics Courses", "AI Online Courses", "Learn IoT", "STEM Education Curriculum", "NavoYantra Courses", "Student Tech Training"],
    openGraph: {
        title: "Courses & Curriculum | NavoYantra",
        description: "Enroll in comprehensive STEM, AI, IoT, and Robotics courses designed by industry experts. Empower your learning with hands-on technical curriculum.",
    }
};

export default function CoursesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
