export const createCourse = async (data) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok)
            throw new Error(`Failed to create course: ${response.statusText}`);

        return await response.json();
    } catch (error) {
        console.log({ error });
        return error;
    }
};

export const uploadCourseAsset = async (id, data) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses/${id}/upload`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok)
            throw new Error(`Failed to create course: ${response.statusText}`);

        return await response.json();
    } catch (error) {
        console.log({ error });
        return error;
    }
};