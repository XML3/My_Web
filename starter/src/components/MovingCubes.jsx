import React, { useState, useRef, useEffect } from "react";
import Sketch from "react-p5";

//Limit the rate, call after delay has passed.  Better performace for resizing events
const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

export const MovingCubes = () => {
  const [angle, setAngle] = useState(0);
  const angleRef = useRef(angle);

  //continuesly update the angle state of the rotating cubes... increments
  useEffect(() => {
    const updateAngle = () => {
      setAngle((prevAngle) => {
        const newAngle = prevAngle + 0.01;
        angleRef.current = newAngle;
        return newAngle;
      });
      requestAnimationFrame(updateAngle);
    };
    requestAnimationFrame(updateAngle);
  }, []);

  //Note to self: regular conditioanl statements do not work. Math.min() is the only approach to stop the continues resizing loop on Moblie devices
  const setup = (p5, canvasParentRef) => {
    p5.pixelDensity(1);
    let canvasWidth, canvasHeight;

    if (p5.windowWidth >= 1200) {
      canvasWidth = 1700;
      canvasHeight = 800;
    } else if (p5.windowWidth <= 768) {
      canvasWidth = Math.min(p5.windowWidth * 0.9, 320);
      canvasHeight = Math.min(p5.windowHeight * 0.7, 300);
    } else {
      canvasWidth = Math.min(p5.windowWidth * 0.9, 1700);
      canvasHeight = Math.min(p5.windowHeight * 0.7, 800);
    }
    p5.createCanvas(canvasWidth, canvasHeight, p5.WEBGL).parent(
      canvasParentRef
    );
  };

  const draw = (p5) => {
    p5.background(5, 22, 34);

    const baseWidth = 1200;
    const baseHeight = 800;

    const widthScale = p5.width / baseWidth;
    const heightScale = p5.height / baseHeight;
    const scaleFactor = Math.min(widthScale, heightScale);

    const boxSize = 150 * scaleFactor;
    const spacing = 200 * scaleFactor;

    const numCubesTopRow = 7;
    for (
      let i = -Math.floor(numCubesTopRow / 2);
      i <= Math.floor(numCubesTopRow / 2);
      i++
    ) {
      p5.push();
      p5.rectMode(p5.CENTER);
      p5.translate((i * spacing) / 1.5, 0, 0);
      p5.rotateY(angleRef.current);
      p5.rotateX(angleRef.current * 1.5);
      p5.rotateZ(angleRef.current * 1.2);
      p5.noFill();
      p5.stroke(252, 53, 76);
      p5.strokeWeight(1);
      p5.box(boxSize);
      p5.pop();
    }

    const numCubesBottomRow = 4;
    for (
      let i = -Math.floor(numCubesBottomRow / 2);
      i <= Math.floor(numCubesBottomRow / 2);
      i++
    ) {
      p5.push();
      p5.rectMode(p5.CENTER);
      p5.translate((i * spacing) / 2, spacing / 2, 0);
      p5.rotateY(angleRef.current);
      p5.rotateX(angleRef.current * 1.5);
      p5.rotateZ(angleRef.current * 1.2);
      p5.noFill();
      p5.stroke(252, 53, 76);
      p5.strokeWeight(1);
      p5.box(boxSize * 1);
      p5.pop();
    }
  };

  const debouncedResize = debounce((p5) => {
    let newWidth, newHeight;

    if (p5.windowWidth >= 1200) {
      newWidth = 1700;
      newHeight = 800;
    } else if (p5.windowWidth <= 768) {
      newWidth = Math.min(p5.windowWidth * 0.9, 320);
      newHeight = Math.min(p5.windowHeight * 0.7, 300);
    } else {
      newWidth = Math.min(p5.windowWidth * 0.9, 1700);
      newHeight = Math.min(p5.windowHeight * 0.7, 800);
    }

    if (p5.width !== newWidth || p5.height !== newHeight) {
      console.log(`Resizing canvas to: ${newWidth} x ${newHeight}`);
      p5.resizeCanvas(newWidth, newHeight);
    }
  }, 200);

  const windowResized = (p5) => {
    debouncedResize(p5);
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
//conatiner made need screen size changes