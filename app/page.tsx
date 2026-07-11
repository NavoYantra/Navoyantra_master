import AboutSection from "@/app/(components)/sections/home/AboutSection";
import Hero from "@/app/(components)/sections/home/Hero";
import WhatWeOfferSection from "@/app/(components)/sections/home/WhatWeOfferSection";
import ProductCategorySection from "@/app/(components)/sections/home/ProductCategorySection";
import FeaturedCoursesSection from "@/app/(components)/sections/home/FeaturedCouseSection";
import OurMoto from "@/app/(components)/sections/home/OurMotoSection";
import StatsSection from "@/app/(components)/sections/home/Stats";

export default function Home() {
    return (
        <>
            <Hero/>
            <StatsSection />
            <AboutSection/>
            <WhatWeOfferSection/>
            <OurMoto />
            <ProductCategorySection />
            <FeaturedCoursesSection />
        </>
    );
}
