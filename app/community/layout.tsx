import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Read the latest news, tutorials, and insights on Robotics, AI, IoT, and STEM education from the experts at NavoYantra.",
    keywords: ["Robotics Blog", "AI Tutorials", "STEM Education News", "IoT Articles", "NavoYantra Updates", "EdTech Insights"],
    openGraph: {
        title: "Blog & Insights | NavoYantra",
        description: "Read the latest news, tutorials, and insights on Robotics, AI, IoT, and STEM education from the experts at NavoYantra.",
    }
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
