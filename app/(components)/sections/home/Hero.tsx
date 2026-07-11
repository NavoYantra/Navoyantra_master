import {ArrowRight} from "react-feather";

function Hero() {
    return (
        <section style={{backgroundImage: `url(/hero-img.png)`,}}
                 className={"backdrop-blur-3xl w-svw h-svh flex items-center justify-center bg-cover"}>
            <div className={"bg-black/40 backdrop-blur-[1px] absolute w-full h-full"}></div>
            <div className={"z-999 w-[50%] h-[50%] flex items-end justify-center gap-2"}>
                <div
                    id={"inner-big-box"}
                    className={"flex flex-col gap-4 items-left justify-center p-4 pl-10 bg-blue-500 w-full h-full"}>
                    <h4 className={"font-bold text-3xl"}>Transform Classrooms into <br/> Innovation Labs</h4>
                    <p className={"text-sm w-[80%] text-zinc-900"}>Transform your institution with state-of-the-art Robotics, AI, IoT
                        and STEM laboratories designed
                        for hands-on learning, innovation and future-ready education.</p>
                    <button
                        className={"mt-10 w-max flex items-center justify-center gap-2 bg-black text-white cursor-pointer p-2 px-5"}>
                        <span>Get Custom Quote</span>
                        <ArrowRight/>
                    </button>
                </div>
                <div id={"inner-small-box"} className={"bg-blue-800 w-[40%] h-[50%]"}></div>
            </div>
        </section>
    );
}

export default Hero;