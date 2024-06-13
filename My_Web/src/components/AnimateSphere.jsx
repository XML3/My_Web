import React, { useEffect } from "react";
import Sketch from "react-p5";

export const AnimateSphere = () => {
  let r = 200;

  const setup = (p5, canvasParentRef) => {
    //Set canvas size based on screen width
    let canvasWidth;
    if (p5.windowWidth <= 300) {
      canvasWidth = p5.windowWidth - 20;
    } else if (p5.windowWidth <= 400) {
      canvasWidth = p5.windowWidth - 40;
    } else if (p5.windowWidth <= 700) {
      canvasWidth = p5.windowWidth - 60;
    } else {
      canvasWidth = p5.windowWidth / 2.8;
    }

    p5.createCanvas(
      canvasWidth,

      p5.windowHeight / 2,
      p5.WEBGL
    ).parent(canvasParentRef);
    p5.colorMode(p5.HSB);
    p5.angleMode(p5.DEGREES);
    p5.stroke(199, 89, 88);
    p5.strokeWeight(0.5);
    p5.noFill();
    //p5.rotateX(60);
    p5.frameRate(30); // Limit to improve performance
  };

  const draw = (p5) => {
    p5.background("#051622");

    p5.orbitControl(4, 4);

    for (let p = 0; p < 680; p += 3) {
      for (let t = 0; t < 380; t += 3) {
        let x = r * p5.cos(p5.frameCount * 2 + p / 2);
        let y = r * p5.sin(p) * p5.sin(t);
        let z = r * p5.sin(p5.frameCount * 2 + p * p5.windowWidth) * p5.cos(t);
        p5.point(x, y, z);
      }
    }
  };

  const windowResized = (p5) => {
    let canvasWidth;
    if (p5.windowWidth <= 300) {
      canvasWidth = p5.windowWidth - 20;
    } else if (p5.windowWidth <= 400) {
      canvasWidth = p5.windowWidth - 40;
    } else if (p5.windowWidth <= 700) {
      canvasWidth = p5.windowWidth - 60;
    } else {
      canvasWidth = p5.windowWidth / 2.8;
    }
    p5.resizeCanvas(canvasWidth, p5.windowHeight / 2);
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
