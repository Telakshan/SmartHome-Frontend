import React, { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { BiCartAlt } from "react-icons/bi";

import Dropdown from "../Dropdown/Dropdown";

import "./NavBar.scss";

const NavBar = () => {
  const wrapper = useRef(null);
  const [dropDown, setDropDown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    }
  };

  return (
    <div className={`navigation-container ${scrolled ? 'scrolled' : null}`} ref={wrapper}>
      <div className="logo">
        <Link to="/">
          <h4>Smart Home</h4>
        </Link>
      </div>

      <div className="search-box">
        <input placeholder="Start searching"></input>
        <MdSearch className="search-icon" />
      </div>

      <div className="option-box">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/shop" className="option">
          Contact
        </Link>
        <Link to="/login" className="option">
          Log in
        </Link>
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
