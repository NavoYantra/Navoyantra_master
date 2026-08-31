import dynamic from "next/dynamic";
import Hero from "@/app/(components)/sections/home/Hero";
import StatsSection from "@/app/(components)/sections/home/Stats";

const AboutSection = dynamic(() => import("@/app/(components)/sections/home/AboutSection"));
const OffersSlider = dynamic(() => import("@/app/(components)/sections/lab-setup/OffersSlider"));
const WhatWeOfferSection = dynamic(() => import("@/app/(components)/sections/home/WhatWeOfferSection"));
const OurMoto = dynamic(() => import("@/app/(components)/sections/home/OurMotoSection"));
const ProductCategorySection = dynamic(() => import("@/app/(components)/sections/home/PackageSection"));
const EcosystemSection = dynamic(() => import("@/app/(components)/sections/home/EcosystemSection"));
const IndustrialSection = dynamic(() => import("@/app/(components)/sections/home/IndustrialSection"));
const WhyUsSection = dynamic(() => import("@/app/(components)/sections/home/WhyUsSection"));
const FaqSection = dynamic(() => import("@/app/(components)/sections/home/FaqSection"));
const FooterCTASection = dynamic(() => import("@/app/(components)/sections/home/FooterCTASection"));

export default function Home() {
    return (
        <>
            <Hero/>
            <StatsSection />
            <AboutSection/>
            
            {/* Added OffersSlider above Core Services */}
            <div className="pt-24 bg-slate-50">
                <OffersSlider />
            </div>

            <WhatWeOfferSection/>
            <OurMoto />
            <ProductCategorySection />
            <EcosystemSection />
            <IndustrialSection />
            <WhyUsSection />
            <FaqSection />
            <FooterCTASection />
        </>
    );
}
