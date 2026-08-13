import Badge from "@/app/(components)/site/Badge";
import {ArrowRight} from "react-feather";
import Link from "next/link";

function IndustrialSection() {
    return (
        <section className={"p-16"}>
            {/*---------------------------- BADGE --------------------------------*/}
            <Badge text={"industrial & oem"} />
            {/*------------------------- SECTION HEADER --------------------------*/}
            <div>
                <h2 className={"mt-8 text-3xl font-semibold"}>From Prototype to Product</h2>
                <p className={"w-[70%] mt-2"}>We help organizations transform engineering ideas into functional technology products through electronics, embedded systems, firmware, robotics, autoamtion and OEM/ODM development.</p>
            </div>

            {/*------------------------------ CTA --------------------------------*/}
            <div
                id={"cta"}
                className={"mt-12 flex items-center justify-between bg-slate-900 text-white p-10 rounded-xl"}>
                <div id={"left-text"}>
                    <h5 className={"text-xl font-semibold mb-1"}>Engineering that scales with you ambition.</h5>
                    <p className={"text-xs flex items-center justify-start gap-2"}>
                        {
                            ["Concept", "Electronics", "Firmware", "Prototype", "Validation", "Deployment"]
                                .map((c, idx) => (
                                    <span key={`${c[0]}-${idx}`}
                                          className={"flex items-center justify-center gap-2"}>{c} <ArrowRight
                                        size={15}/></span>
                                ))
                        }
                        <span>Production Support </span>
                    </p>
                </div>

                <div id={"right-button"}>
                    <Link href={"/contact"} className={"flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white p-2 px-4 rounded-md"}>
                        <span>Start Your Project</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default IndustrialSection;