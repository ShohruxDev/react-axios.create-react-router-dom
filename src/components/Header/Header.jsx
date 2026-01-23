import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import heart from "../../assets/heart3.png";
import { useStatevalue } from "../../context/Context";
const Header = () => {
  const { wishlist } = useStatevalue();
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
          <NavLink to="/newspage">
            <div className="newsflex">
              NewsPage <p className="newsp">{wishlist.length}</p>
              <img className="heart" src={heart} alt="" />
            </div>
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
