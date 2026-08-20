import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact NavoYantra Technologies Delhi",
    description: "Get in touch with NavoYantra. We are here to help institutions, schools, and students with our Robotics, AI, and STEM Lab setups.",
    keywords: ["Contact NavoYantra", "Customer Support", "STEM Lab Inquiry", "Robotics Partnership", "EdTech Contact"],
    openGraph: {
        title: "Contact NavoYantra Technologies Delhi",
        description: "Get in touch with NavoYantra. We are here to help institutions, schools, and students with our Robotics, AI, and STEM Lab setups.",
    }
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
