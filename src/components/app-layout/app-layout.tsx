import * as React from "react";
import { Separator } from "@radix-ui/react-separator";
import { AppSidebar } from "../app-sidebar/app-sidebar";
import { ModeToggle } from "../mode-toggle/mode-toggle";

import { SidebarProvider, SidebarInset, SidebarTrigger } from "../ui/sidebar";
import { AppBreadcrumbs } from "../app-breadcrumbs/app-breadcrumbs";

export const AppLayout = ({ children }: React.ComponentProps<"div">) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4 z-10">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <AppBreadcrumbs />
          <div className="flex items-end justify-end flex-1">
            <ModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};
