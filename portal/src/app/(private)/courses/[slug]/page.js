import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import { getCourseBySlug, getCourses } from "@/service/course";
import UpdateForm from "./UpdateForm";

export default async function EditCourse({ params }) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user) redirect("/login");

    const { given_name, family_name } = user;
    const name = `${given_name} ${family_name}`;
    const course = await getCourseBySlug(params.slug, name);
    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold mb-10">Update Course</h1>
            <UpdateForm course={course} />
        </div>
    );
}
