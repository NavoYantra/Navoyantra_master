import Badge from "@/app/(components)/site/Badge";
import Link from "next/link";
import {ArrowRight} from "react-feather";

function EcosystemSection() {
    const ecosystemCards = [
        {
            badgeName: "learn",
            title: "LMS",
            description: "Structured learning in Robotics AI, IOT, Embedded Systems and AUtiomation.",
            btnText: "Visit Learning Platform"
        },
        {
            badgeName: "build",
            title: "LABs",
            description: "Hands-on robotics and technology laboratory solutions for institutions.",
            btnText: "Setup a Lab"
        },
        {
            badgeName: "buy",
            title: "STORE",
            description: "Robotics kit, development boards, sensors and educational technology products.",
            btnText: "Visit Store"
        }
    ];

    return (
        <section id={"ecosystem-section"} className={"p-16 bg-blue-50"}>
            {/*--------------------BADGE------------------------*/}
            <Badge text={"Ecosystem"} />
            {/*------------------SECTION HEADER-----------------*/}
            <div>
                <h2 className={"text-4xl font-semibold mt-5"}>One Ecosystem<br/>Multiple Ways to Learn & Build.</h2>
            </div>
            {/*-------------------CARDS MAP---------------------*/}
            <div className={"flex gap-4 mt-16"}>
                {
                    ecosystemCards.map((card, idx) => (
                        <div
                            className={"p-8 bg-white shadow-xl flex flex-col items-start justify-center gap-6 rounded-md"}
                            key={`${card.title[0]}-${idx}`}>
                            <Badge text={card.badgeName} />
                            <div>
                                <h5 className={"text-xl font-semibold"}>{card.title}</h5>
                                <p className={"text-lg"}>{card.description}</p>
                            </div>
                            <Link href={"#"} className={"flex items-center justify-center gap-4 bg-blue-600 text-white w-max p-2 px-4 rounded-md"}>
                                <span>{card.btnText}</span>
                                <ArrowRight />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default EcosystemSection;