import React from "react";
import logoImg from "../../assets/images/logo.png";
import "./style.css";

export function Navbar() {
  return (
    <header>
      <nav id="nav-bar">
        <div className="nav-brand">
          <img src={logoImg} alt="" />
          <h1>Space Flight News</h1>
        </div>
        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Trending</a>
          </li>
          <li>
            <a href="/">Categories</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
