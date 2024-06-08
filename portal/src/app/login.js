import {
    RegisterLink,
    LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Login() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log(user)
    return (
        <main className="bg-gray-100">
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white shadow-md rounded">
                    <h1 className="text-3xl font-bold mb-6 px-8 pt-8">
                        Duck Labs
                    </h1>
                    <div className="flex justify-between p-8">
                        <LoginLink className="bg-blue-500 hover:bg-blue-700 text-white w-full text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Sign in
                        </LoginLink>
                        {/* <RegisterLink className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign up</RegisterLink> */}
                    </div>
                </div>
            </div>
        </main>
    );
}
