import React, { useState } from "react";
import xaglyWebLogo from "../img/xagly_web_logo.png";
import HeadersCSS from "../components/Headers.module.css";

export const Headers = () => {
  const headerOne = "Xagly Montilva";
  const headerTwo = "Full-stack Web Developer";
  const intro = "Strong focus on efficiency and an innate attention to detail.";

  //State to track hover status of navigation items
  const [hoveredItem, setHoveredItem] = useState({
    about: false,
    projects: false,
    contact: false,
  });

  //Function to handle hover / objext spread syntax to copy object and set it to true
  const handleMouseEnter = (item) => {
    setHoveredItem({ ...hoveredItem, [item]: true });
  };
  //Function to handle hover `Leave`
  const handleMouseLeave = (item) => {
    setHoveredItem({ ...hoveredItem, [item]: false });
  };

  return (
    <>
      <div className={HeadersCSS.Container}>
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
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={() => handleMouseLeave("about")}
            style={{ fontSize: hoveredItem.about ? "30px" : "15px" }}
          >
            About
          </a>
          <a
            href="#"
            onMouseEnter={() => handleMouseEnter("projects")}
            onMouseLeave={() => handleMouseLeave("projects")}
            style={{ fontSize: hoveredItem.projects ? "30px" : "15px" }}
          >
            Projects
          </a>
          <a
            href="#"
            onMouseEnter={() => handleMouseEnter("contact")}
            onMouseLeave={() => handleMouseLeave("contact")}
            style={{ fontSize: hoveredItem.contact ? "30px" : "15px" }}
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};
