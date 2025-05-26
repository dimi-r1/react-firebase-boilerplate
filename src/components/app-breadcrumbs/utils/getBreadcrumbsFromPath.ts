import { ROUTES } from "@/router/constants/routes";
import { RouteInfo } from "@/router/types/route-info";

export function getBreadcrumbsFromPath(path: string): RouteInfo[] {
  const breadcrumbs: RouteInfo[] = [];

  // Always start with dashboard route if we're in a dashboard section
  if (path.startsWith("/dashboard")) {
    breadcrumbs.push(ROUTES.DASHBOARD);
  }

  // Add the specific section route if we're in a subsection
  if (path !== "/dashboard") {
    const routeInfo = Object.values(ROUTES).find(
      (route) => route.path === path
    );
    if (routeInfo) {
      breadcrumbs.push(routeInfo);
    }
  }

  return breadcrumbs;
}
