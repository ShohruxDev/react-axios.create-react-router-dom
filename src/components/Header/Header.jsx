import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header>
        <div>
          <p>AsaxiyClone</p>
        </div>
        <div className="navlink">
          <NavLink to="/homepage">HomePage</NavLink>
          <NavLink to="/about">AboutPage</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/newspage">NewsPage</NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
