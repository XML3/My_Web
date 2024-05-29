import React from "react";
import FooterCSS from "../components/Footer.module.css";

export const Footer = () => {
  const copyright = "© Copyright 2024 by Xagly Montilva";

  return (
    <>
      <div className={FooterCSS.FooterContainer}>
        <div className={FooterCSS.Footer}>
          <p>{copyright}</p>
        </div>
      </div>
    </>
  );
};
