import { HiPlus } from "react-icons/hi";

import CoursesList from "./CoursesList";
import Button from "@/components/Button";
import { getCourses } from "@/service/course";

export default async function Courses() {
    const courses = await getCourses();

    return (
        <main className="overflow-auto w-full p-5">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Courses</h1>
                <Button href="/courses/add">
                    <HiPlus />
                </Button>
            </div>
            <CoursesList courses={courses} />
        </main>
    );
}
