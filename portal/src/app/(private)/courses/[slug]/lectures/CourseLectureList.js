import Button from "@/components/Button";
import { HiLink, HiPencil, HiTrash } from "react-icons/hi";

export default function CourseLectureList({ lectures }) {
    return (
        <div className="course-lectures-list w-full mt-4">
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-900 text-gray-200 dark:bg-gray-700 dark:text-gray-200">
                        <th className="p-3">Title</th>
                        <th className="p-3">Lecture Video</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {lectures.map((lecture) => (
                        <tr className="border-b" key={lecture.id}>
                            <td className="p-3">{lecture.title}</td>
                            <td className="p-3">
                                <a
                                    href={lecture.lecture_video_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-500 flex items-center justify-center gap-2"
                                >
                                    <HiLink /> View Link
                                </a>
                            </td>
                            <td className="p-3 flex gap-2 justify-center items-center">
                                <Button
                                    size="small"
                                    color="green"
                                    icon={<HiPencil />}
                                    href={`/courses/${lecture.subject_slug}/lectures/${lecture.id}/edit`}
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
