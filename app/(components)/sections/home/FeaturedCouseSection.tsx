import FeaturedCourseCard from "@/app/(components)/site/FeaturedCourseCard";

function FeaturedCoursesSection() {

    const courses = [
        {
            image: "/ct-card-bg.png",
            title: "Robotics for Beginners",
            category: "Robotics",
            description: "Learn robotics from scratch using practical STEM kits.",
            price: 2499,
        },
        {
            image: "/ct-card-bg.png",
            title: "AI Learning Kit",
            category: "Artificial Intelligence",
            description: "Hands-on AI projects for students.",
            price: 2999,
        },
        {
            image: "/ct-card-bg.png",
            title: "IoT Masterclass",
            category: "IoT",
            description: "Build connected smart devices.",
            price: 2799,
        },
        {
            image: "/ct-card-bg.png",
            title: "Embedded Systems",
            category: "Embedded",
            description: "Arduino, ESP32 and sensors.",
            price: 2599,
        },
        {
            image: "/ct-card-bg.png",
            title: "Programming Kit",
            category: "Programming",
            description: "Coding projects for beginners.",
            price: 1999,
        },
        {
            image: "/ct-card-bg.png",
            title: "Machine Learning",
            category: "AI",
            description: "Train your first ML models.",
            price: 3299,
        },
        {
            image: "/ct-card-bg.png",
            title: "Drone Robotics",
            category: "Robotics",
            description: "Build and program drones.",
            price: 3499,
        },
        {
            image: "/ct-card-bg.png",
            title: "Python Bootcamp",
            category: "Programming",
            description: "Complete Python learning course.",
            price: 1499,
        },
    ];

    return (
        <section className="py-24 bg-zinc-100">
            <div className="mb-14 text-center">
                <h2 className="text-5xl font-bold">Featured Courses</h2>
                <p className="mt-4 text-neutral-500">Explore our most popular STEM courses.</p>
            </div>
            <div className=" mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
                {courses.map((course, index) => (
                    <FeaturedCourseCard
                        key={index}
                        course={course}
                    />
                ))}
            </div>

        </section>
    );
}

export default FeaturedCoursesSection;