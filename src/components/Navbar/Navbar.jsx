import React from "react";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="portfolio__navbar__container">
      <div className="logo__container">
        <p>thi is logo</p>
      </div>
      <div className="menu__container">
        <ul>
          <li
            className={`${location.pathname === "/" ? "active" : ""}`}
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className={`${location.pathname === "/about" ? "active" : ""}`}
            onClick={() => navigate("/about")}
          >
            About
          </li>
          <li
            className={`${location.pathname === "/portfolio" ? "active" : ""}`}
            onClick={() => navigate("/portfolio")}
          >
            Portfolio
          </li>
          <li
            className={`${location.pathname === "/blog" ? "active" : ""}`}
            onClick={() => navigate("/blog")}
          >
            Blog
          </li>
          <li
            className={`${location.pathname === "/contact" ? "active" : ""}`}
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
