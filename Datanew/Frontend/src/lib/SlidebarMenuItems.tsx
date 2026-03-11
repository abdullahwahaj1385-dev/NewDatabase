import type { ReactNode } from "react";
import { FaHome, FaUser } from "react-icons/fa";

interface SidebarItem {
  title: string;
  path: string;
  icon: ReactNode;
  cName: string;
}

export const SidebarData: SidebarItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome />,
    cName: "nav-text",
  },
  {
    title: "Utenti",
    path: "/utenti",
    icon: <FaUser />,
    cName: "nav-text",
  },
];
