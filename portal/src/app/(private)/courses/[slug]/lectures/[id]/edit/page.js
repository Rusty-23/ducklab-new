import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import { getCourses } from "@/service/course";
import { getLectureById } from "@/service/lectures";
import EditLectureForm from "./EditLectureForm";

export default async function CourseLecture({ params }) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user) redirect("/login");

    const { given_name, family_name } = user;
    const name = `${given_name} ${family_name}`;

    const [lecture] = await getLectureById(params.id, name);
    const courses = await getCourses();


    return <div className="p-5">
        <h1 className="text-3xl font-bold">Edit {lecture.title}</h1>
        <EditLectureForm lecture={lecture} courses={courses} />
    </div>;
}
