import { NavMainItem } from "../types";

export const findActiveChildId = (item: NavMainItem, path: string) => {
  return item.items?.find(
    (subItem) =>
      path === subItem.url ||
      (subItem.url !== "/" && path.startsWith(subItem.url))
  )?.sectionId;
};
