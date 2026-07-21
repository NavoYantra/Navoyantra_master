import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lab Setup",
    description: "Transform your institution with NavoYantra's state-of-the-art Robotics and STEM Lab setups. Full turnkey solutions for schools and colleges.",
    keywords: ["School Robotics Lab", "STEM Lab Setup", "AI Lab for Schools", "Institution Tech Infrastructure", "NavoYantra Lab Solutions"],
    openGraph: {
        title: "STEM & Robotics Lab Setup | NavoYantra",
        description: "Transform your institution with NavoYantra's state-of-the-art Robotics and STEM Lab setups. Full turnkey solutions for schools and colleges.",
    }
};

export default function LabSetupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
