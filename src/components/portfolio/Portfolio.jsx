import React from "react";
import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>

      <div className="container">
        <div className="item">
          <img src="assets/Portfolio1.png" alt="" />
          <h3>Finance Web App</h3>
        </div>
      </div>
    </div>
  );
}
