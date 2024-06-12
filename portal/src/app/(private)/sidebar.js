import { useSidebarContext } from "@/context/SidebarContext";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export const DashboardSidebar = function () {
  const { isCollapsed } = useSidebarContext();

  return (
    <Sidebar
      collapsed={isCollapsed}
      id="sidebar"
      className={twMerge(
        "inset-y-0 flex h-full shrink-0 flex-col border-r border-gray-200 duration-75 dark:border-gray-700 lg:flex",
        isCollapsed && "hidden w-16",
      )}
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup className="border-none">
          <Sidebar.Item href="/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/courses" icon={HiViewBoards}>
            Course
          </Sidebar.Item>
          <Sidebar.Item href="/lectures" icon={HiInbox}>
            Lectures
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Students
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};