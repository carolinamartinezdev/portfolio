import React, { useEffect } from "react";
import "./intro.scss";
import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <div className="Intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile3.png" alt="profile-art" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello! My name is</h2>
          <h1>Carolina Martinez</h1>
          <h3>
            <span>
              <Typewriter
                options={{
                  strings: ["Developer"],
                  autoStart: true,
                  delay: 75,
                  loop: true,
                }}
              />
            </span>
            with a passion for creating.
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/arrow-down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
