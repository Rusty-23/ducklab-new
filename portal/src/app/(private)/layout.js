"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { SidebarProvider, useSidebarContext } from "@/context/SidebarContext";
import { twMerge } from "tailwind-merge";
import { DashboardNavbar } from "@/app/(private)/navbar";
import { DashboardSidebar } from "@/app/(private)/sidebar";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";

const DashboardLayout = function ({ children }) {
    return (
        <SidebarProvider>
            <DashboardLayoutContent>{children}</DashboardLayoutContent>
        </SidebarProvider>
    );
};

const DashboardLayoutContent = function ({ children }) {
    const { isCollapsed } = useSidebarContext();
    const { isLoading, user } = useKindeBrowserClient();
    const router = useRouter();

    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="text-center flex flex-col items-center justify-center">
                <LoadingSpinner /> 
                <p className="mt-4">Loading. . .</p>
                </div>
            </div>
        );
    }

    if (!user) {
        router.push("/");
    }

    return (
        <div className="h-screen flex">
            <DashboardNavbar />
            <div className="pt-16 flex items-start w-full">
                <DashboardSidebar />
                <div
                    id="main-content"
                    className={twMerge(
                        "relative h-full w-full grow overflow-y-auto bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200",
                        isCollapsed ? "lg:ml-[4.5rem]" : "lg:ml-64"
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
