import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import CoursesList from "./CoursesList";
import { HiPlus } from "react-icons/hi";

export default async function Courses() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const getCourses = async () => {
        try {
            const { given_name, family_name } = user;
            const name = `${given_name} ${family_name}`;

            console.log(`${process.env.API_URL}/api/courses?prof=${name}`);
            const response = await fetch(
                `${process.env.API_URL}/api/courses?prof=${name}`,
                { cache: "no-store" }
            );
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.log({ error });
            return error;
        }
    };

    const courses = await getCourses();

    return (
        <main className="overflow-auto w-full p-5">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Courses</h1>
                <a
                    href="/courses/add"
                    className="bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    <HiPlus />
                </a>
            </div>
            <CoursesList courses={courses} />
        </main>
    );
}
