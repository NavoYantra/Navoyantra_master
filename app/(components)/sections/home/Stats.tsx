"use client";

const stats = [
    {
        value: "10+",
        title: "Robotics Products",
        description: "We offer a wide range of robotics kits and solutions for enthusiasts and learners.",
    },
    {
        value: "500+",
        title: "Components & Learning Resources",
        description: "Extensive collection of components, tutorials, and guides for robotics and IoT projects.",
    },
    {
        value: "5+",
        title: "Lab Packages",
        description: "Comprehensive lab packages for educational institutions and makerspaces.",
    },
    {
        value: "100%",
        title: "Hands On Learning",
        description: "Learn by doing with our practical kits and resources designed for real-world applications.",
    },
];

export default function StatsSection() {
    return (
        <section className="relative overflow-hidden py-20 cursor-default">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className="group px-6 py-6 text-center transition hover:-translate-y-2"
                    >
                        <h3 className="text-5xl font-extrabold text-blue-500">{stat.value}</h3>
                        <h4 className="mt-4 text-md font-semibold text-gray-900">{stat.title}</h4>
                        <p className="mt-3 text-sm leading-6 text-gray-500">{stat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}