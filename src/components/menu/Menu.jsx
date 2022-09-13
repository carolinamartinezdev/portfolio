import "./menu.scss";
import React, { useEffect } from "react";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <div class="wrapper">
          <li onClick={() => setMenuOpen(false)}>
            <a href="#intro">Home</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#contact">Contact</a>
          </li>
        </div>
      </ul>
    </div>
  );
}
