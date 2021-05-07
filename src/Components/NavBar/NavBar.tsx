import React, { useState, useEffect, useRef, useContext } from "react";

import { NavLink } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { BiCartAlt } from "react-icons/bi";
import { HiMenuAlt2,HiOutlineX } from "react-icons/hi";

import Dropdown from "../Dropdown/Dropdown";
import SideBar from "../SideBar/SideBar";
import { CartContext } from "../../Hooks/CartContext";

import "./NavBar.scss";

const NavBar = () => {
  const wrapper = useRef(null);

  const { itemCount } = useContext(CartContext);
  const [dropDown, setDropDown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSideBar, setShowSidebar] = useState(false);

  const handleScroll = () => {
    const offset = window.pageYOffset;
    offset > 100 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapper.current && !wrapper.current.contains(event.target)) {
      setDropDown(false);
      setShowSidebar(false);
    }
  };

  return (
    <div
      className={`navigation-container ${scrolled ? "scrolled" : null}`}
      ref={wrapper}
    >
      <div className="logo">
        <NavLink to="/">
          <h4>Smart Home</h4>
        </NavLink>
      </div>

      <div className="menu-bar">
        <HiMenuAlt2 onClick={() => setShowSidebar(!showSideBar)} />
      </div>

      {showSideBar ? <> <SideBar showSideBar={showSideBar} /> <HiOutlineX onClick={() => setShowSidebar(!showSideBar)} className='close'/> </> : null}

      <div className="search-box">
        <input placeholder="What are you looking for?"></input>
        <MdSearch className="search-icon" />
      </div>

      <div className="option-box">
        <NavLink to="/shop" className="option">
          Shop
        </NavLink>
        <NavLink to="/contact" className="option">
          About
        </NavLink>
        <NavLink to="/login" className="option">
          Log in
        </NavLink>
      </div>
      <div className="cart-icon-container">
        {itemCount !== 0 ? (
          <span className="number-of-items">{itemCount}</span>
        ) : null}

        <BiCartAlt
          className="cart-icon"
          onClick={() => setDropDown(!dropDown)}
        />
      </div>
      {dropDown ? <Dropdown /> : null}
    </div>
  );
};

export default NavBar;
