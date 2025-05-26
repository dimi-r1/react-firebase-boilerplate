import React from "react";
import { Link, useLocation } from "react-router";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { getBreadcrumbsFromPath } from "./utils/getBreadcrumbsFromPath";

export const AppBreadcrumbs = () => {
  const location = useLocation();
  const breadcrumbs = getBreadcrumbsFromPath(location.pathname);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <React.Fragment key={crumb.path}>
              <BreadcrumbItem>
                {!isLast ? (
                  <BreadcrumbLink asChild>
                    <Link to={crumb.path}>{crumb.displayName}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{crumb.displayName}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
