import Image from "next/image";
import React, { useState } from "react";
import { HiX } from "react-icons/hi";

const Uploader = ({
    name = "image",
    isValid = true,
    accept = "image/*",
    multiple = false,
    onUpload = () => {},
    defaultValue = null,
}) => {
    const [previewURL, setPreviewURL] = useState(defaultValue);

    const handleFileChange = (event) => {
        try {
            const file = event.target.files[0];
            if (file) {
                if (file && file.type.startsWith("image/")) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        const base64 = reader.result;
                        setPreviewURL(base64);
                        onUpload(base64);
                    };
                    reader.readAsDataURL(file);
                } else {
                    setPreviewURL(null);
                    onUpload(null);
                    // Handle invalid file type (optional)
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div
            className={`w-full flex flex-col items-${
                previewURL ? "start" : "center"
            } justify-center p-4 border-dashed border-2 border-${
                isValid ? "gray-400" : "red-500"
            } rounded-lg`}
        >
            {previewURL ? (
                <div className="relative rounded w-16 h-16 bg-gray-200 border p-3">
                    <button
                        className="absolute top-[-10px] right-[-10px] p-1 bg-gray-200 hover:bg-gray-300  z-10 border rounded-4xl"
                        onClick={() => {
                            setPreviewURL(null);
                            onUpload(null);
                        }}
                    >
                        <HiX className="h-4 w-4" />
                    </button>
                    <Image
                        src={previewURL}
                        alt="Selected File"
                        className="rounded-sm h-12 w-full mb-3"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            ) : (
                <>
                    <p className="text-gray-500 mb-4">Drag a file here or</p>
                    <label
                        htmlFor="fileInput"
                        className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Upload from device
                    </label>
                    <input
                        id="fileInput"
                        className="hidden"
                        type="file"
                        accept={accept}
                        name={name}
                        multiple={multiple}
                        onChange={handleFileChange}
                    />
                </>
            )}
        </div>
    );
};

export default Uploader;
