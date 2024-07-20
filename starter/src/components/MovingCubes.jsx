import React, { useState, useRef, useEffect } from "react";
import Sketch from "react-p5";

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
  // angleRef.current = angle;
  const resizeTimeoutRef = useRef(null);

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

  const setup = (p5, canvasParentRef) => {
    p5.pixelDensity(1);

    p5.createCanvas(
      p5.windowWidth * 0.9,
      p5.windowHeight * 0.7,
      p5.WEBGL
    ).parent(canvasParentRef);
  };

  const draw = (p5) => {
    console.log("Canvas size:", p5.width, p5.height); ////remove after
    p5.background(5, 22, 34);

    // Base resolution dimensions for consistency
    const baseWidth = 1200;
    const baseHeight = 800;

    // Scaling factors based on the current canvas size compared to the base resolution
    const widthScale = p5.width / baseWidth;
    const heightScale = p5.height / baseHeight;
    const scaleFactor = Math.min(widthScale, heightScale);

    // Define the number of cubes, box size, and spacing based on the base resolution and scale factor
    // const numCubes = Math.floor((baseWidth - 50) / 100);
    const boxSize = 150 * scaleFactor; // Base box size is 80
    const spacing = 200 * scaleFactor; // Base spacing is 120

    //First row
    // for (let x = -330; x < 330; x += 100) {
    const numCubesTopRow = 7;
    for (
      let i = -Math.floor(numCubesTopRow / 2);
      i <= Math.floor(numCubesTopRow / 2);
      i++
    ) {
      p5.push();
      p5.rectMode(p5.CENTER);
      p5.translate((i * spacing) / 1.5, 0, 0);
      p5.rotateY(angleRef.current); //changed from angle to angleRef
      p5.rotateX(angleRef.current * 1.5);
      p5.rotateZ(angleRef.current * 1.2);
      p5.noFill();
      //p5.stroke(94, 234, 212);
      p5.stroke(252, 53, 76);
      p5.strokeWeight(1);
      p5.box(boxSize);
      p5.pop();
    }

    //Second row of cubes
    // for (let x = -133; x < 133; x += 80) {
    const numCubesBottomRow = 4;
    for (
      let i = -Math.floor(numCubesBottomRow / 2);
      i <= Math.floor(numCubesBottomRow / 2);
      i++
    ) {
      p5.push();
      p5.rectMode(p5.CENTER);
      p5.translate((i * spacing) / 2, spacing / 2, 0);
      p5.rotateY(angleRef.current); // chagned from angle to angleRef.current
      p5.rotateX(angleRef.current * 1.5);
      p5.rotateZ(angleRef.current * 1.2);
      p5.noFill();
      //p5.stroke(94, 234, 212);
      p5.stroke(252, 53, 76);
      p5.strokeWeight(1);
      p5.box(boxSize * 1);
      p5.pop();
    }
    // setAngle(angle + 0.02);
  };

  // const windowResized = (p5) => {
  //   p5.resizeCanvas(p5.windowWidth * 0.9, p5.windowHeight * 0.7);
  // };

  // Debounced resize handler
  const debouncedResize = debounce((p5) => {
    const newWidth = p5.windowWidth * 0.9;
    const newHeight = p5.windowHeight * 0.7;

    // Only resize if the new size is different from the current size
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
