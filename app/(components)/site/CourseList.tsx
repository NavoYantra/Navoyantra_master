import CourseCard from "./CourseCard";

export default function CourseList({
                                       courses,
                                   }: {
    courses: any[];
}) {
    return (
        <div className="space-y-6">

            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    course={course}
                />
            ))}

        </div>
    );
}