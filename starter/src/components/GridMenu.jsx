import React, { useState } from "react";
import { NavLinks } from "./NavLinks";
import { CgMenuGridO, CgCloseO } from "react-icons/cg";
import GridMenuCSS from "../components/GridMenu.module.css";
import sideLogo from "/img/webgold_logo.png";

export const GridMenu = ({ aboutRef, projectRef, contactRef, skillsRef }) => {
  const [click, setClick] = useState(false);

  // Nav Grid Icon / Open Menu on Click
  const GridMenuIcon = (
    <CgMenuGridO
      className={GridMenuCSS.GridMenu}
      size="50px"
      onClick={() => setClick(!click)}
    />
  );

  // Nav Grid Icon / Close Menu on Click
  const GridMenuClose = (
    <CgCloseO
      className={GridMenuCSS.GridMenuClose}
      // size="50px"
      onClick={() => setClick(!click)}
    />
  );

  //Close Menu for Nav Menu to disappear when selecting items
  const closeMenu = () => setClick(false);

  return (
    <>
      <div className={GridMenuCSS.NavBarContainer}>
        <div>
          <img
            className={GridMenuCSS.SideLogo}
            src={sideLogo}
            alt="Side logo "
          />
        </div>
        <nav className={GridMenuCSS.GridMenu}>
          {click ? GridMenuClose : GridMenuIcon}
          {click && (
            <NavLinks
              isClicked={true}
              closeMenu={closeMenu}
              aboutRef={aboutRef}
              projectRef={projectRef}
              skillsRef={skillsRef}
              contactRef={contactRef}
            />
          )}
        </nav>
      </div>
    </>
  );
};
