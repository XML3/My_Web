import React, { useState } from "react";
import { NavLinks } from "./NavLinks";
import { CgMenuGridO, CgCloseO } from "react-icons/cg";
import GridMenuCSS from "../components/GridMenu.module.css";

export const GridMenu = ({ aboutRef, projectRef, contactRef }) => {
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
      <nav className={GridMenuCSS.GridMenu}>
        {click ? GridMenuClose : GridMenuIcon}
        {click && (
          <NavLinks
            isClicked={true}
            closeMenu={closeMenu}
            aboutRef={aboutRef}
            projectRef={projectRef}
            contactRef={contactRef}
          />
        )}
      </nav>
    </>
  );
};