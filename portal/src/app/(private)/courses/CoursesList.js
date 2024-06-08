export default function CoursesList({ courses }) {
    return (
        <div className="courses-list w-full mt-4">
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-900 text-gray-200 dark:bg-gray-700 dark:text-gray-200">
                        <th className="p-3">Name</th>
                        <th className="p-3">Duration</th>
                        <th className="p-3">Year Level</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr className="border-b" key={course.id}>
                            <td className="p-3">{course.name}</td>
                            <td className="p-3">{course.duration}</td>
                            <td className="p-3">{course.year_level}</td>
                            <td className="p-3">
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}