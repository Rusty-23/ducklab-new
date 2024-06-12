import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getLectures = async () => {
    try {
        const { getUser } = getKindeServerSession();
        const user = await getUser();
        if (!user) return [];

        const { given_name, family_name } = user;
        const name = `${given_name} ${family_name}`;

        const response = await fetch(
            `${process.env.API_URL}/api/lectures?prof=${name}`,
            { cache: "no-store" }
        );

        if (!response.ok)
            throw new Error(`Failed to fetch data: ${response.statusText}`);

        return await response.json();
    } catch (error) {
        console.log({ error });
        return error;
    }
};

export const getLectureById = async (id, name) => {
    try {
        const response = await fetch(
            `${process.env.API_URL}/api/lectures/${id}?prof=${name}`,
            { cache: "no-store" }
        );
        if (!response.ok)
            throw new Error(`Failed to fetch data: ${response.statusText}`);

        const data = await response.json();
        return data;
    } catch (error) {
        console.log({ error });
        return error;
    }
};
