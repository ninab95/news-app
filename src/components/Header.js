import React from "react";
import "./HeaderCss.css";

function Header() {
  return (
    <div className="header">
      <div className="header-bar">
        <div className="nav-bar">
          <li>Home</li>
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
      <div className="title">
        <h1>Attila</h1>
        <p>Ghost Theme Demo</p>
      </div>
    </div>
  );
}

export default Header;
