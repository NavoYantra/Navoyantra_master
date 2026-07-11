import type { Metadata } from "next";
import LabHero from "@/app/(components)/sections/lab-setup/LabHero";
import WhyChooseSetups from "@/app/(components)/sections/lab-setup/WhyChooseSetups";
import WhatWeOfferLab from "@/app/(components)/sections/lab-setup/WhatWeOfferLab";
import OurProcessPipeline from "@/app/(components)/sections/lab-setup/OurProcessPipeline";
import WhyInstitutionsChooseUs from "@/app/(components)/sections/lab-setup/WhyInstitutionsChooseUs";
import LabFAQ from "@/app/(components)/sections/lab-setup/LabFAQ";

export const metadata: Metadata = {
    title: "Lab Setup - NavoYantra",
    description:
        "Transform classrooms into advanced Robotics, AI, IoT, and STEM labs. NavoYantra provides turnkey lab setup services for schools, colleges, and research institutions across India.",
};

export default function LabSetupPage() {
    return (
        <main className="min-h-screen">
            <LabHero />
            <WhyChooseSetups />
            <WhatWeOfferLab />
            <OurProcessPipeline />
            <WhyInstitutionsChooseUs />
            <LabFAQ />
        </main>
    );
}
