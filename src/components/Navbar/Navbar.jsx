import React, { useState } from "react";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const onClickHandler = (url) =>{
    setMenu(false);
    navigate(`${url}`);
  }
  return (
    <div className="portfolio__navbar__container">
      <div className="logo__container">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="Logo of this website!"
        />
      </div>
      <div className="menu__icons">
        {!menu ? (
          <FaBars onClick={() => setMenu(true)} size={22} />
        ) : (
          <ImCross onClick={() => setMenu(false)} size={22} />
        )}
      </div>
      <div className={`menu__container ${menu ? "active" : ""}`}>
        <ul>
          <li
            className={`${location.pathname === "/" ? "active" : ""}`}
            onClick={() => onClickHandler("/")}
          >
            Home
          </li>
          <li
            className={`${location.pathname === "/about" ? "active" : ""}`}
            onClick={() => onClickHandler("/about")}
          >
            About
          </li>
          <li
            className={`${location.pathname === "/portfolio" ? "active" : ""}`}
            onClick={() => onClickHandler("/portfolio")}
          >
            Portfolio
          </li>
          {/* <li
            className={`${location.pathname === "/blog" ? "active" : ""}`}
            onClick={() => onClickHandler("/blog")}
          >
            Blog
          </li> */}
          <li
            className={`${location.pathname === "/contact" ? "active" : ""}`}
            onClick={() => onClickHandler("/contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
