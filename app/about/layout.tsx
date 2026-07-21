import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about NavoYantra's mission to revolutionize STEM education, robotics, AI, and IoT learning for students and institutions.",
    keywords: ["About NavoYantra", "STEM Education Mission", "Robotics Company India", "AI Education Innovators", "Educational Technology Company"],
    openGraph: {
        title: "About Us | NavoYantra",
        description: "Learn more about NavoYantra's mission to revolutionize STEM education, robotics, AI, and IoT learning for students and institutions.",
    }
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
