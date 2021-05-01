import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ sidebar }) => {
  return (
    <nav className={sidebar ? "nav-menu active" : " nav-menu"}>
      <NavLink to="/#">Shop</NavLink>
      <NavLink to="/#">Contact</NavLink>
      <NavLink to="/#">Log in</NavLink>
    </nav>
  );
};

export default SideBar;
