import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import heart from "../../assets/heart3.png";
import { useStatevalue } from "../../context/Context";
import ModallWrapper from "../ModallWrapper/ModallWrapper";
const Header = () => {
  const { wishlist, search, setSearch } = useStatevalue();
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <>
      <header>
        <div className="input">
          <p>AsaxiyClone</p>
          <input
            value={search}
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            className="inputt"
            type="text"
          />
          <button className="btn" onClick={() => setisModalOpen(true)}>
            Modal Open
          </button>
          {isModalOpen && (
            <ModallWrapper
              open={isModalOpen}
              onClose={() => setisModalOpen((prev) => !prev)}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, cumque saepe? Soluta!
              </p>
              <button onClick={() => setisModalOpen(false)} className="btn btn-header">
                Close
              </button>
            </ModallWrapper>
          )}
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
