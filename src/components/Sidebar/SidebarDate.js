// == Base:
import React from "react";
// == Images:
import dashboard from "../../icons/dashboard.svg";
import datas from "../../icons/datas.svg";
import lock from "../../icons/lock.svg";
import project from "../../icons/project.svg";
import send from "../../icons/send.svg";
import user from "../../icons/user.svg";
import rocket from "../../icons/rocket.svg";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: dashboard,
    link: "/home",
  },
  {
    title: "Profile",
    icon: user,
    link: "/user-page",
  },
  {
    title: "Projects",
    icon: project,
    link: "/project",
  },
  {
    title: "Reports",
    icon: datas,
    iconLock: lock,
    link: "/user-screen",
  },
  {
    title: "Messages",
    icon: send,
    iconLock: lock,
    link: "/admin",
  },
  {
    title: "Find work",
    icon: rocket,
    iconLock: lock,
    link: "/work",
  },
];
