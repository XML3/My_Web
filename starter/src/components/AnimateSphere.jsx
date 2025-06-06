import React from "react";
import Sketch from "react-p5";

export const AnimateSphere = () => {
  let r = 200;

  const setup = (p5, canvasParentRef) => {
    p5.pixelDensity(1);
    setCanvasSize(p5, canvasParentRef);
    p5.colorMode(p5.HSB);
    p5.angleMode(p5.DEGREES);
    p5.stroke(199, 89, 88);
    p5.strokeWeight(0.5);
    p5.noFill();
  };

  const draw = (p5) => {
    p5.background("#051622");

    p5.orbitControl(2, 2); // Reduced from 4 / 4
    p5.frameRate(p5.windowWidth <= 400 ? 15 : 30); // Dynamically adjust frame rate

    const pointStep = p5.windowWidth <= 400 ? 8 : p5.windowWidth <= 700 ? 6 : 3; // Adjust point step dynamically

    for (let p = 0; p < 680; p += pointStep) {
      for (let t = 0; t < 380; t += pointStep) {
        let x = r * p5.cos(p5.frameCount * 2 + p / 2);
        let y = r * p5.sin(p) * p5.sin(t);
        let z = r * p5.sin(p5.frameCount * 2 + p * p5.windowWidth) * p5.cos(t);
        p5.point(x, y, z);
      }
    }
  };

  const windowResized = (p5) => {
    setCanvasSize(p5);
  };

  const setCanvasSize = (p5, canvasParentRef = null) => {
    let canvasWidth = p5.windowWidth * 0.9;
    let canvasHeight = 400;

    if (canvasParentRef) {
      p5.createCanvas(canvasWidth, canvasHeight, p5.WEBGL).parent(
        canvasParentRef
      );
    } else {
      p5.resizeCanvas(canvasWidth, canvasHeight);
    }
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
