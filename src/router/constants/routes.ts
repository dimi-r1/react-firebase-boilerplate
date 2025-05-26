export const ROUTES = {
  DASHBOARD: {
    path: "/dashboard",
    displayName: "Dashboard",
  },
  // Keep personal info as an example of a form page
  PERSONAL_INFO: {
    path: "/dashboard/personal-info",
    displayName: "Personal Information",
    sectionId: "personal-info",
  },
  // Add more routes as needed for your application
  SETTINGS: {
    path: "/dashboard/settings",
    displayName: "Settings",
    sectionId: "settings",
  },
} as const;
