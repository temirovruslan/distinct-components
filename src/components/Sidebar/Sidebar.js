// == Base:
import React from "react";
import { SidebarData } from "./SidebarDate";
// == Styles:
import "../../App.css";
import "./Sidebar.scss";


const Sidebar = () => {
  return (
    <div className="sidebar">

      <ul className="sidebar__list">
        
        {SidebarData.map((data, key) => {
          return (
            <li
              key={key}
              className={
                window.location.pathname === data.link
                  ? "sidebar__item active"
                  : "sidebar__item"
              }
              onClick={() => (window.location.pathname = data.link)}
            >
              <span className="sidebar__item-span--active"></span>
              <div className="sidebar__wrapper-img">
                <img className="sidebar__img" src={data.icon} />
              </div>

              <div className="sidebar__title">{data.title}</div>

              <div className="sidebar__wrapper-img-lock">
                <img className="sidebar__img-lock" src={data.iconLock} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
