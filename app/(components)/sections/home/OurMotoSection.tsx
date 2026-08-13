import Badge from "@/app/(components)/site/Badge";
import {ArrowRight} from "react-feather";
import Link from "next/link";

const data = [
    {
        btnText: "Build Your Lab",
        heading: "Robotics Labs",
        desc: "Robotics Labs . STEM . ATL . Kits . Teacher Training.",
    },
    {
        heading: "College & Universities",
        btnText: "Explore Solutions",
        desc: "Advanced labs . AI . IOT . Embedded . Automation",
    },
    {
        heading: "Industries & OEMs",
        btnText: "Discuss Project",
        desc: "Industrial Projects . Product Developement . OEM/ODM.",
    },
    {
        heading: "Government & Institutions",
        btnText: "Partner With Us",
        desc: "Tender Projects . Technology Supply . Training . Insfrastructure.",
    },
];

export default function OurMoto() {
    return (
        <section className="p-24">
            {/*---------------------------- BADGE ----------------------------*/}
            <Badge text="customers" />
            {/*-------------------------SECTION HEADING-----------------------*/}
            <div className={"my-8"}>
                <h2 className={"text-4xl font-semibold"}>Build around the people and<br />for the people we serve.</h2>
            </div>
            {/*--------------------------CARDS MAP----------------------------*/}
            <div className={"flex flex-wrap items-center justify-center gap-4"}>
                {
                    data.map((crd, idx)=>(
                        <div
                            key={`${crd.heading[0]}-${idx}`}
                            className={"border w-48 p-6 rounded-lg bg-blue-900 text-white space-y-8"}
                        >
                            {/* Card Header */}
                            <div>
                                <h4 className={"text-xl font-semibold"}>{crd.heading}</h4>
                                <p className={"text-sm font-thin"}>{crd.desc}</p>
                            </div>
                            <div className={"flex items-center justify-end"}>
                                <Link
                                    href={"#"}
                                    className={"flex p-3 px-5 rounded-lg w-max items-center justify-center gap-4 bg-white text-black"}>
                                    <span>{crd.btnText}</span>
                                    <span><ArrowRight /></span>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}