import React from "react";
import HeadersCSS from "../components/Headers.module.css";
import sideLogo from "../img/new_logo.svg";
import { MovingCubes } from "../components/MovingCubes";

export const Headers = () => {
  const headerOne = "Xagly Montilva";
  const headerTwo = "Full-stack Web Developer";

  return (
    <>
      <div className={HeadersCSS.Container}>
        {/* <div className={HeadersCSS.Headers}> */}
        <div className={HeadersCSS.HeadersContainer}>
          <div className={HeadersCSS.Cubes}>
            <MovingCubes />
          </div>
          <div className={HeadersCSS.HeaderOne}>
            <h1>{headerOne}</h1>
          </div>
          <div className={HeadersCSS.HeaderTwo}>
            <h2>{headerTwo}</h2>
          </div>
        </div>
      </div>
      <div>
        <img className={HeadersCSS.SideLogo} src={sideLogo} alt="Side logo " />
      </div>
      {/* </div> */}
    </>
  );
};
