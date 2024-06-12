import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getCourses = async () => {
    try {
        const { getUser } = getKindeServerSession();
        const user = await getUser();
        if (!user) return [];

        const { given_name, family_name } = user;
        const name = `${given_name} ${family_name}`;

        const response = await fetch(
            `${process.env.API_URL}/api/courses?prof=${name}`,
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

export const getCourseBySlug = async (slug, prof) => {
    try {
        const response = await fetch(
            `${process.env.API_URL}/api/courses/${slug}?prof=${prof}`,
            { cache: "no-store" }
        );
        if (!response.ok)
            throw new Error(`Failed to fetch data: ${response.statusText}`);

        const data = await response.json();
        if (!data) return null;
        if (data.length === 0) return null;
        return data[0];
    } catch (error) {
        console.log({ error });
        return error;
    }
};



export const getCourseLecturesBySlug = async (slug, prof) => {
    try {
        const response = await fetch(
            `${process.env.API_URL}/api/courses/${slug}/lectures?prof=${prof}`,
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


