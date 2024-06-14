import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export default async function CourseDelete() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user) redirect("/login");
    return <main className="bg-gray-100">Delete</main>;
}