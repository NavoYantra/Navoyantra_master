import AboutSection from "@/app/(components)/sections/home/AboutSection";
import Hero from "@/app/(components)/sections/home/Hero";
import WhatWeOfferSection from "@/app/(components)/sections/home/WhatWeOfferSection";
import ProductCategorySection from "@/app/(components)/sections/home/PackageSection";
import OurMoto from "@/app/(components)/sections/home/OurMotoSection";
import StatsSection from "@/app/(components)/sections/home/Stats";
import EcosystemSection from "@/app/(components)/sections/home/EcosystemSection";
import FooterCTASection from "@/app/(components)/sections/home/FooterCTASection";
import WhyUsSection from "@/app/(components)/sections/home/WhyUsSection";
import IndustrialSection from "@/app/(components)/sections/home/IndustrialSection";
import FaqSection from "@/app/(components)/sections/home/FaqSection";

export default function Home() {
    return (
        <>
            <Hero/>
            <StatsSection />
            <AboutSection/>
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
