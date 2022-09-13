import React from "react";
import { Link } from "react-router-dom";

import { Tab, ListGroup, Image } from "react-bootstrap";
import { SidebarData } from "./data";

import "./index.css";

const Navbar = () => {
  const [sidebarIsVisible, setSidebarIsVisible] = React.useState(true);
  const [activeItem, setActiveItem] = React.useState(null);

  const showSidebar = () => {
    setSidebarIsVisible(!sidebarIsVisible);
  };

  return (
    <>
      <nav className="nav-menu active">
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
