import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Store",
    description: "Shop for cutting-edge Robotics kits, AI modules, STEM education tools, and IoT sensors at NavoYantra's official store.",
    keywords: ["Buy Robotics Kits", "AI Modules", "STEM Education Store", "IoT Sensors", "Arduino Kits India", "Educational Robots", "NavoYantra Store"],
    openGraph: {
        title: "Store | NavoYantra",
        description: "Shop for cutting-edge Robotics kits, AI modules, STEM education tools, and IoT sensors at NavoYantra's official store.",
    }
};

export default function StoreLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
