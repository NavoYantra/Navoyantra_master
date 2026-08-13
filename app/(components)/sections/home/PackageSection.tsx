import Link from "next/link";

const PackageSection = () => {
    return (
        <section className={"p-16 w-screen"}>
            {/*-----------------------SECTION HEADER--------------------*/}
            <div className={"my-8 w-1/2"}>
                <h2 className={"text-4xl font-semibold"}>Build a Future-Ready<br />Technology Lab</h2>
                <p className={"font-thin text-sm w-1/2 mt-2"}>From robotics and STEM labs to AI. IOT and advanced automation laboratories. We provide complete setup solutions for schools, colleges and institutions.</p>
            </div>
            {/*------------------------DIVIDED CONTAINER--------------------*/}
            <div>
                <div id={"left-container"}>
                    <Link className={"text-white bg-blue-700 text-sm rounded-lg p-4"}
                          href={"#"}>Explore Lab Setup Solutions</Link>
                </div>
                <div id={"right-container"}></div>
            </div>
        </section>
    )
}

export default PackageSection;
