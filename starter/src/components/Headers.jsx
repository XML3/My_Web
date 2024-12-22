import React from "react";
import HeadersCSS from "../components/Headers.module.css";

import { MovingCubes } from "../components/MovingCubes";

export const Headers = () => {
  const headerOne = "Xagly Montilva";
  const headerTwo = "Full-stack Web Developer";

  return (
    <>
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
    </>
  );
};
