import { useSidebarContext } from "@/context/SidebarContext";
import { isSmallScreen } from "@/helpers/is-small-screen";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import { HiMenuAlt1, HiX, HiLogout } from "react-icons/hi";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

export const DashboardNavbar = function () {
    const {
        isCollapsed: isSidebarCollapsed,
        setCollapsed: setSidebarCollapsed,
    } = useSidebarContext();

    return (
        <header>
            <Navbar
                fluid
                className="fixed top-0 z-30 w-full border-b border-gray-200 bg-white p-0 dark:border-gray-700 dark:bg-gray-800 sm:p-0"
            >
                <div className="w-full p-3 pr-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <button
                                aria-controls="sidebar"
                                aria-expanded
                                className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700"
                                onClick={() =>
                                    setSidebarCollapsed(!isSidebarCollapsed)
                                }
                            >
                                {isSidebarCollapsed || !isSmallScreen() ? (
                                    <HiMenuAlt1 className="h-6 w-6" />
                                ) : (
                                    <HiX className="h-6 w-6" />
                                )}
                            </button>
                            <Navbar.Brand href="/">
                                <Image
                                    alt="Ducklab logo"
                                    height="24"
                                    src="/favicon.ico"
                                    width="24"
                                />
                                <span className="self-center whitespace-nowrap px-3 text-xl font-semibold dark:text-white">
                                    Ducklab
                                </span>
                            </Navbar.Brand>
                        </div>
                        <div className="flex items-center justify-end">
                            <DarkThemeToggle />
                            <LogoutLink className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                <HiLogout className="h-6 w-6" />
                            </LogoutLink>
                        </div>
                    </div>
                </div>
            </Navbar>
        </header>
    );
};
