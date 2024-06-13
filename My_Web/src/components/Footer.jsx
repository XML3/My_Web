import React from "react";
import FooterCSS from "../components/Footer.module.css";
import RedLogo from "../assets/img/web_red_logo.png";

export const Footer = () => {
  const copyright = "© Copyright 2024 by Xagly Montilva";

  return (
    <>
      <div className={FooterCSS.FooterContainer}>
        <div className={FooterCSS.Footer}>
          <p>{copyright}</p>
        </div>
        <div className={FooterCSS.Logo}>
          <img
            className={FooterCSS.RedLogo}
            alt="Personal logo red hexagon, inisde </x>"
            src={RedLogo}
          />
        </div>
      </div>
    </>
  );
};
