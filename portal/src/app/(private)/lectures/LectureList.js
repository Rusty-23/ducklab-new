import Button from "@/components/Button";
import { HiPencil, HiTrash } from "react-icons/hi";

export default function LecturesList({ lectures }) {
    return (
        <div className="lectures-list w-full mt-4">
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-900 text-gray-200 dark:bg-gray-700 dark:text-gray-200">
                        <th className="p-3">Title</th>
                        <th className="p-3">Course Name</th>
                        <th className="p-3">Year Level</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {lectures.map((lecture) => (
                        <tr className="border-b" key={lecture.id}>
                            <td className="p-3">{lecture.title}</td>
                            <td className="p-3">{lecture.subject_name}</td>
                            <td className="p-3">{lecture.year_level}</td>
                            <td className="p-3 flex gap-2 justify-center items-center">
                                <Button
                                    size="small"
                                    color="green"
                                    icon={<HiPencil />}
                                    href={`/courses/${lecture.subject_slug}/lectures/${lecture.id}`}
                                >
                                    Edit
                                </Button>
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
