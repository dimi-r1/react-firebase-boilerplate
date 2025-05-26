import { LucideIcon } from "lucide-react";

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  sectionId?: string;
  items?: {
    title: string;
    url: string;
    sectionId?: string;
  }[];
}
