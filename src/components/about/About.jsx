import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="About" id="about">
      <div className="left">
        <div className="wrapper">
          <h2>About Me</h2>

          <p>
            Hello again! I am located in <strong>Atlanta, Georgia</strong>📍 I
            recently gained my bachelor's degree from
            <strong> Kennesaw State University</strong> 🎓 in Software
            Engineering. I love to learn about new technology and be creative, I
            value open-mindness, collaboration and proactivity.
          </p>
          <p>
            When I'm not coding I spend most of my time shopping for new plants
            🌱, taking care of my two cats 🐱 Miso and Gordo or playing Animal
            Crossing 🎮
          </p>

          <h2>Education</h2>
          <p>B.S in Software Engineering | Kennesaw State University</p>
          <p>
            <opa>Aug 2019 - Dec 2021</opa>
          </p>
          <p>
            The Complete 2022 Web Development Bootcamp by Dr. Angela Yu | Udemy
          </p>
          <p>
            <opa>Jan 2022 - June 2022</opa>
          </p>

          <h2>My Toolkit</h2>
          <h1>Development</h1>
          <p>
            <opa>HTML | CSS | Javascript | React | NPM </opa>
          </p>

          <h1>Tools</h1>
          <p>
            <opa> Figma | Trello </opa>
          </p>
        </div>
      </div>

      <div className="right">
        <div className="imgContainer">
          <img src="assets/IMG_2148.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
