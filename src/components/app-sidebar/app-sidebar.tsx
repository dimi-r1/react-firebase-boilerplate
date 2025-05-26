import * as React from "react";
import { LayoutDashboard } from "lucide-react";
import { useLocation } from "react-router";

import { NavMain } from "@/components/app-sidebar/nav-main";
import { NavUser } from "@/components/app-sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { ROUTES } from "@/router/constants/routes";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    {
      title: "Dashboard",
      url: ROUTES.DASHBOARD.path,
      icon: LayoutDashboard,
      isActive: currentPath.startsWith("/dashboard"),
      items: [
        {
          title: "Personal Information",
          url: ROUTES.PERSONAL_INFO.path,
          sectionId: ROUTES.PERSONAL_INFO.sectionId,
        },
        // Add more items as needed
      ],
    },
  ];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
    </Sidebar>
  );
}
