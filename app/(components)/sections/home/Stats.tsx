
export default function StatsSection() {
    const badges = ["robotics", "ai & iot", "embedded", "automation", "oem/odm"];
    return (
        /* ---------------- UDNER HERO BAR ------------------- */
        <section className="w-screen flex items-center justify-center gap-20 p-12">
            {/*----------------------- PARTERNS TEXT ----------------------*/}
            <div className={"w-[50%]"}>
                <h4 className={"text-xl font-semibold"}>Partnered School and Colleges</h4>
                <p className={"text-md font-thin"}>From classroom learning to industrial product engineering.</p>
            </div>
            {/*----------------------- BADGES ------------------------*/}
            <div className={"w-[50%]"}>
                <div className={"flex items-center gap-4"}>
                    {
                        badges.map((badge, idx) => (
                            <div key={`${badge}-${idx}`}>
                                <p className={"uppercase text-xs bg-blue-50 p-2 px-4 rounded-full"}>{badge}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}