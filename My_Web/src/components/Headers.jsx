import React from "react";
import HeadersCSS from "../components/Headers.module.css";

export const Headers = () => {
  const headerOne = "Xagly Montilva";
  const headerTwo =
    "Full-stack Web Developer with a strong focus on efficiency and an innate attention to detail";

  return (
    <>
      <div className={HeadersCSS.Headers}>
        <div className={HeadersCSS.HeaderOne}>
          <h1>{headerOne}</h1>
        </div>
        <div className={HeadersCSS.HeaderTwo}>
          <h3>{headerTwo}</h3>
        </div>
      </div>
    </>
  );
};
