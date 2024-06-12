import Button from "@/components/Button";
import { HiBriefcase, HiPencil, HiTrash } from "react-icons/hi";

export default function CoursesList({ courses }) {
    return (
        <div className="courses-list w-full mt-4">
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-900 text-gray-200 dark:bg-gray-700 dark:text-gray-200">
                        <th className="p-3">Name</th>
                        <th className="p-3">Duration</th>
                        <th className="p-3">Year Level</th>
                        <th className="p-3">No. of Lectures</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr className="border-b" key={course.id}>
                            <td className="p-3">{course.name}</td>
                            <td className="p-3 text-center">
                                {course.duration}
                            </td>
                            <td className="p-3 text-center">
                                {course.year_level}
                            </td>
                            <td className="p-3 text-center">
                                <a
                                    href={`/courses/${course.slug}/lectures`}
                                    className="text-blue-500 underline"
                                >
                                    {course.lecture_count}
                                </a>
                            </td>
                            <td className="p-3 flex gap-2 justify-center items-center">
                                <Button
                                    size="small"
                                    color="green"
                                    icon={<HiPencil />}
                                    href={`/courses/${course.slug}`}
                                >
                                    Edit
                                </Button>
                                {/* <Button
                                    size="small"
                                    color="yellow"
                                    colorWeight={400}
                                    icon={<HiBriefcase />}
                                    href={`/courses/${course.slug}/lectures`}
                                >
                                    Manage Lectures
                                </Button> */}
                                <Button
                                    size="small"
                                    color="red"
                                    icon={<HiTrash />}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
