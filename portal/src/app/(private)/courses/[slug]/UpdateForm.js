"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Uploader from "@/components/Uploader";

export default function UpdateForm({ course }) {
    const router = useRouter();
    const [imageSource, setImageSource] = useState({
        base64: null,
        isValid: true,
    });

    const [previewImage, setPreviewImage] = useState({
        base64: null,
        isValid: true,
    });
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    };
    return (
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
                    defaultValue={course.name}
                    autoFocus
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
                    defaultValue={course.slug}
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
                    style={{ fieldSizing: "content" }}
                    rows={4}
                    defaultValue={course.description}
                ></textarea>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Image Source
                </label>
                <Uploader
                    name="image_source"
                    defaultValue={course.image_source}
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
                    defaultValue={course.preview_image}
                    required={true}
                    accept="image/*"
                    multiple={false}
                    isValid={previewImage.isValid}
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
                    defaultValue={course.duration}
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
                    defaultValue={course.year_level}
                />
                <datalist id="year-level">
                    <option value="1st"></option>
                    <option value="2nd"></option>
                    <option value="3rd"></option>
                    <option value="4th"></option>
                </datalist>
            </div>
            <div className="flex justify-end items-center gap-4">
                <Button type="submit">Update</Button>
                <Button
                    type="button"
                    color="transparent"
                    textColor="gray"
                    shadow={false}
                    onClick={() => router.back()}
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
}
