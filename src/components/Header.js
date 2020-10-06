import React, { useState } from "react";
import "./HeaderCss.css";
import { Link } from "react-router-dom";

function Header(props) {
  const [isMenuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <div className="header-bar">
        <div onClick={() => setMenuOpened(true)} className="bars">
          <div className="line"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div
          onClick={() => setMenuOpened(false)}
          className={`nav-bar ${isMenuOpened && "opened"}`}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <li>Tag</li>
          <li>Author</li>
          <li>Download</li>
        </div>
        <div className="icon-bar">
          <li>
            <i className="fab fa-twitter"></i>
          </li>
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
          <li>
            <i className="fas fa-rss"></i>
          </li>
          <li>
            <i className="fas fa-search"></i>
          </li>
        </div>
      </div>
      {props.isHomePage && (
        <div className="title">
          <h1>Attila</h1>
          <p>Ghost Theme Demo</p>
        </div>
      )}
    </div>
  );
}

export default Header;
