"use client";
import { useState } from "react";

const Dropdown = ({ defaultValue, items}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        console.log({isOpen})
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button
                className="dropdown-toggle inline-flex items-center px-3 border border-gray-300 rounded-lg py-2 text-sm font-medium text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                data-dropdown-toggle="dropdownMenu"
                onClick={toggleDropdown}
                type="button"
            >
                {defaultValue}
                <svg
                    className="-ml-1 mr-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.293l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414-1.414L10 12.586l-4.707-4.707z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </button>
            {isOpen && (
                <div
                    id="dropdownMenu"
                    className="absolute z-10 min-w-min py-1 rounded-md shadow-sm bg-white"
                >
                    <ul className="">
                        <li className="dropdown-item block px-4 py-2 text-sm hover:bg-gray-100">
                            Option 1
                        </li>
                        <li className="dropdown-item block px-4 py-2 text-sm hover:bg-gray-100">
                            Option 2
                        </li>
                        <li className="dropdown-item block px-4 py-2 text-sm hover:bg-gray-100">
                            Option 3
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
