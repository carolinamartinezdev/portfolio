import TopBar from "./components/topbar/TopBar.jsx";
import Intro from "./components/intro/Intro.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import About from "./components/about/About.jsx";
import "./app.scss";
import React, { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <About />
        <Contact />
        <workone />
      </div>
    </div>
  );
}

export default App;
