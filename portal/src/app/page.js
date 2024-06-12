import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Login from "./login";

export default async function Home() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) return <Login />;

    redirect("/dashboard");

    return <main className="bg-gray-100">Welcome! {user.email}</main>;
}
