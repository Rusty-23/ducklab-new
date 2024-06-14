"use client";

import { useEffect, useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";

import Uploader from "@/components/Uploader";
import { createCourse, uploadCourseAsset } from "@/service/browser/course";

export default function CoursesAdd() {
    const router = useRouter();
    const { isLoading, user } = useKindeBrowserClient();
    const [imageSource, setImageSource] = useState({
        base64: null,
        isValid: true,
    });

    const [previewImage, setPreviewImage] = useState({
        base64: null,
        isValid: true,
    });

    const userName = `${user?.given_name ? user?.given_name + " " : ""}${user?.family_name || ''}`.trim();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!imageSource.base64)
            setImageSource({
                base64: null,
                isValid: false,
            });

        if (!previewImage.base64)
            setPreviewImage({
                base64: null,
                isValid: false,
            });

        const formData = new FormData(event.target);
        const data = {
            ...Object.fromEntries(formData.entries()),
            prof: userName,
        };
        try {
            console.log(data);
            const response = await createCourse(data);
            await uploadCourseAsset(response.insertId, {
                key: "image_source",
                base64: imageSource.base64,
            })

            await uploadCourseAsset(response.insertId, {
                key: "preview_image",
                base64: previewImage.base64,
            })
            // // Redirect to the courses page after successful submission
            router.push("/courses");
        } catch (error) {
            console.error(error);
            // Display an error message if the submission fails
            alert("Failed to create course. Please try again later.");
        }
    };

    useEffect(() => {
        if (!isLoading && !user) {
            router.push("/");
        }
    }, [user, isLoading, router]);

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold">Add Course</h1>
            <p className="mb-10">Fill in the form below to add a new course.</p>

            {isLoading ? (
                <div>Loading. . .</div>
            ) : (
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            required
                            id="name"
                            name="name"
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="slug"
                        >
                            Slug
                        </label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            required
                            id="slug"
                            name="slug"
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="description"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Image Source
                        </label>
                        <Uploader
                            name="image_source"
                            required={true}
                            accept="image/*"
                            multiple={false}
                            isValid={imageSource.isValid}
                            onUpload={setImageSource}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Preview Image
                        </label>
                        <Uploader
                            name="preview_image"
                            required={true}
                            accept="image/*"
                            multiple={false}
                            isValid={imageSource.isValid}
                            onUpload={setPreviewImage}
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="duration"
                        >
                            Duration
                        </label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            required
                            id="duration"
                            name="duration"
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="year_level"
                        >
                            Year Level
                        </label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            required
                            id="year_level"
                            name="year_level"
                            list="year-level"
                        />
                        <datalist id="year-level">
                            <option value="1st"></option>
                            <option value="2nd"></option>
                            <option value="3rd"></option>
                            <option value="4th"></option>
                        </datalist>
                    </div>
                    <button type="submit">Create</button>
                </form>
            )}
        </div>
    );
}
