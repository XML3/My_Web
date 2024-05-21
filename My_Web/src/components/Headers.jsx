import React, { useState } from "react";
import xaglyWebLogo from "../img/xagly_web_logo_dots2.png";
import HeadersCSS from "../components/Headers.module.css";
import waves from "../img/one_wave_combo.svg";

export const Headers = ({ aboutRef, projectRef, contactRef }, ref) => {
  const headerOne = "Xagly Montilva";
  const headerTwo = "Full-stack Web Developer";
  const intro = "Strong focus on efficiency and an innate attention to detail.";

  //State to track hover status of navigation items
  const [hoveredItem, setHoveredItem] = useState({
    about: false,
    projects: false,
    contact: false,
    github: false,
  });

  //Function to handle hover / objext spread syntax to copy object and set it to true
  const handleMouseEnter = (item) => {
    setHoveredItem({ ...hoveredItem, [item]: true });
  };
  //Function to handle hover `Leave`
  const handleMouseLeave = (item) => {
    setHoveredItem({ ...hoveredItem, [item]: false });
  };

  //Scroll function to direct users to each section after clicking on nav items
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={HeadersCSS.Container}>
        <img className={HeadersCSS.Waves} src={waves} alt="Abstract waves" />
        <div className={HeadersCSS.HeadersContainer}>
          <div className={HeadersCSS.Headers}>
            <img className={HeadersCSS.Logo} src={xaglyWebLogo} alt="Logo" />

            <div className={HeadersCSS.HeaderOne}>
              <h1>{headerOne}</h1>
            </div>
            <div className={HeadersCSS.HeaderTwo}>
              <h2>{headerTwo}</h2>
            </div>
            <div className={HeadersCSS.Intro}>
              <h3>{intro}</h3>
            </div>
          </div>
        </div>
        {/* navigation */}

        <nav className={HeadersCSS.Navigation}>
          <a
            href="#"
            onClick={() => scrollToSection(aboutRef)}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={() => handleMouseLeave("about")}
            style={{ fontSize: hoveredItem.about ? "20px" : "17px" }}
          >
            About
          </a>
          <a
            href="#"
            onClick={() => scrollToSection(projectRef)}
            onMouseEnter={() => handleMouseEnter("projects")}
            onMouseLeave={() => handleMouseLeave("projects")}
            style={{ fontSize: hoveredItem.projects ? "20px" : "17px" }}
          >
            Projects
          </a>
          <a
            href="#"
            onClick={() => scrollToSection(contactRef)}
            onMouseEnter={() => handleMouseEnter("contact")}
            onMouseLeave={() => handleMouseLeave("contact")}
            style={{ fontSize: hoveredItem.contact ? "20px" : "17px" }}
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};
