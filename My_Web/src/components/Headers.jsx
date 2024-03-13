import React from "react";
import xaglyWebLogo from "../img/xagly_web_logo.png";
import HeadersCSS from "../components/Headers.module.css";

export const Headers = () => {
  const headerOne = "Xagly Montilva";
  const headerTwo = "Full-stack Web Developer";
  const intro = "Strong focus on efficiency and an innate attention to detail.";

  return (
    <>
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
      <nav className={HeadersCSS.Navigation}>
        <a href="#">About</a>
        <a href="#"> Projects</a>
        <a href="#">Contact</a>
      </nav>
    </>
  );
};
