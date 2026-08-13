import Badge from "@/app/(components)/site/Badge";
import Image from "next/image";

function WhyUsSection() {

    const strengths = [
        {
            icn: "ef.svg",
            title: "Engineering-First",
            description: "Solutions build with practical engineering and real-world applications.",
        },
        {
            icn: "ete.svg",
            title: "End-to-End",
            description: "From concept and prototyping to implementation and support.",
        },
        {
            icn: "ei.svg",
            title: "Education + Industry",
            description: "Bridging academic learning with industry-relevant technology."
        },
        {
            icn: "cd.svg",
            title: "Custom Development",
            description: "Solutions tailored to specific technical requirements."
        },
        {
            icn: "hol.svg",
            title: "Hands-On Learning",
            description: "Practical project-based technology education."
        },
        {
            icn: "ltp.svg",
            title: "Long-Term Partnership",
            description: "Support training maintenance and future upgrades."
        }
    ];

    return (
        <section className={"bg-blue-50/90 p-16"}>
            {/*------------------BADGE-----------------*/}
            <Badge text={"why navoyantra"} />
            {/*----------------SECTION HEADER----------*/}
            <div>
                <h2 className={"text-2xl font-semibold mt-4"}>Why Organizations choose NavoYantra</h2>
            </div>
            {/*---------------STRENGTHS----------------*/}
            <div className={"mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start justify-items-center p-8"}>
                {
                    strengths.map((s,idx)=>(
                        <div
                            className={"flex flex-col items-center text-center max-w-sm rounded-md p-4"}
                            key={`${s.title[0]}-${idx}`}>
                           {/*-------LEFT (icon)---------*/}
                            <div
                                className={"relative flex items-center justify-center rounded-full w-20 h-20 mb-4"}
                                id={"left-icn"}>
                                <Image width={70} height={70} src={`/why-navo/bgicn.svg`} alt={"bgIcn"} />
                                <div className={"absolute"}>
                                    <Image width={50} height={50} src={`/why-navo/${s.icn}`} alt={s.title}/>
                                </div>
                            </div>
                            {/*-------RIGHT (title + desc)---------*/}
                            <div id={"right-desc"} className={"space-y-2"}>
                                <h5 className={"text-lg font-semibold"}>{s.title}</h5>
                                <p className={"text-sm text-gray-600 leading-relaxed"}>{s.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default WhyUsSection;