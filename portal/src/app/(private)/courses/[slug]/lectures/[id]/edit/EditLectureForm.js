"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";

export default function EditLectureForm({ lecture, courses }) {
    const router = useRouter();
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
                    htmlFor="title"
                >
                    Title
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    required
                    id="title"
                    name="title"
                    defaultValue={lecture.title}
                />
            </div>
            <div>
                <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    htmlFor="lecture_video_url"
                >
                    Subject
                </label>

                <Dropdown defaultValue={
                    <div className="flex flex-col justify-center gap-2 text-left">
                        <p className="text-lg font-semibold">{lecture.subject_name}</p>
                        <p>{lecture.year_level} Year</p>
                    </div>
                } items={courses}/>
            </div>
            <div>
                <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    htmlFor="lecture_video_url"
                >
                    Lecture Video URL
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    required
                    id="lecture_video_url"
                    name="lecture_video_url"
                    defaultValue={lecture.lecture_video_url}
                />
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
