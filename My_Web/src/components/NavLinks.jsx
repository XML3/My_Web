import React, { useState, forwardRef } from "react";
import NavLinksCSS from "../components/NavLinks.module.css";

export const NavLinks = forwardRef(
  ({ aboutRef, projectRef, skillsRef, contactRef, closeMenu }, ref) => {
    //State to track hover status of navigation items
    const [hoveredItem, setHoveredItem] = useState({
      about: false,
      projects: false,
      skills: false,
      contact: false,
    });

    //Function to handle hover / object spread syntax to copy object and set it to true
    const handleMouseEnter = (item) => {
      setHoveredItem({ ...hoveredItem, [item]: true });
    };
    //Function to handle hover `Leave`
    const handleMouseLeave = (item) => {
      setHoveredItem({ ...hoveredItem, [item]: false });
    };

    //Function that handles the onClick for two functions: scrollToSection and closeMenu() (closeMenu is passed as a prop from GridMenu component)
    const handleClick = (ref) => {
      scrollToSection(ref);
      closeMenu();
    };

    //Scroll function to direct users to each section after clicking on nav items
    const scrollToSection = (ref) => {
      ref.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <>
        {/* navigation */}

        <nav className={NavLinksCSS.Navigation}>
          <a
            href="#"
            onClick={() => handleClick(aboutRef)}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={() => handleMouseLeave("about")}
            // style={{ fontSize: hoveredItem.about ? "20px" : "17px" }}
            className={hoveredItem.about ? NavLinksCSS.hovered : ""}
          >
            About
          </a>
          <a
            href="#"
            onClick={() => handleClick(projectRef)}
            onMouseEnter={() => handleMouseEnter("projects")}
            onMouseLeave={() => handleMouseLeave("projects")}
            // style={{ fontSize: hoveredItem.projects ? "20px" : "17px" }}
            className={hoveredItem.projects ? NavLinksCSS.hovered : ""}
          >
            Projects
          </a>
          <a
            href="#"
            onClick={() => handleClick(skillsRef)}
            onMouseEnter={() => handleMouseEnter("skills")}
            onMouseLeave={() => handleMouseLeave("skills")}
            // style={{ fontSize: hoveredItem.projects ? "20px" : "17px" }}
            className={hoveredItem.projects ? NavLinksCSS.hovered : ""}
          >
            Skills
          </a>
          <a
            href="#"
            onClick={() => handleClick(contactRef)}
            onMouseEnter={() => handleMouseEnter("contact")}
            onMouseLeave={() => handleMouseLeave("contact")}
            // style={{ fontSize: hoveredItem.contact ? "20px" : "17px" }}
            className={hoveredItem.contact ? NavLinksCSS.hovered : ""}
          >
            Contact
          </a>
        </nav>
      </>
    );
  }
);

NavLinks.displayName = "NavLinks";
