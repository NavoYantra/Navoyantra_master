import Link from "next/link";

function FooterCTASection() {
    return (
        <section className={"p-16 bg-slate-900 w-screen space-y-16"}>
            {/*-----------------HEADER SECTION---------------*/}
            <div className={"text-white"}>
                <h2 className={"text-5xl font-semibold"}>Have a Project in<br/>Mind?</h2>
                <p className={"w-[1/2]"}>Whether you are planning a robotics lab, developing and industrial product, building and educational solution or looking for an OEM technology partner, let's build it together.</p>
            </div>
            {/*-----------------BUTTON SECTION-------------*/}
            <div className={"flex items-center justify-start w-1/3 gap-6"}>
                <Link className={"bg-orange-400 hover:bg-orange-500 text-white px-6 p-3 rounded-lg"} href={"#"}>Start a Project</Link>
                <Link className={"bg-white hover:bg-gray-100 text-black px-6 p-3 rounded-lg"} href={"/contact"}>Contact Us</Link>
            </div>
        </section>
    );
}

export default FooterCTASection;
