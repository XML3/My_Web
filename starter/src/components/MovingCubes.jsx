import React, { useState, useRef, useEffect } from "react";
import Sketch from "react-p5";

// Debounce function to limit resize handling frequency
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
  const canvasRef = useRef(null);

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
    const canvas = p5
      .createCanvas(p5.windowWidth * 0.9, p5.windowHeight * 0.7, p5.WEBGL)
      .parent(canvasParentRef);
    canvasRef.current = canvas;
  };

  const draw = (p5) => {
    // Log canvas size to debug resizing issues
    console.log("Canvas size:", p5.width, p5.height);
    p5.background(5, 22, 34);

    // Base resolution dimensions for consistency
    const baseWidth = 1200;
    const baseHeight = 800;

    // Scaling factors based on the current canvas size compared to the base resolution
    const widthScale = p5.width / baseWidth;
    const heightScale = p5.height / baseHeight;
    const scaleFactor = Math.min(widthScale, heightScale);

    // Define box size and spacing based on scale factor
    const boxSize = 150 * scaleFactor;
    const spacing = 200 * scaleFactor;

    // Draw the first row of cubes
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

    // Draw the second row of cubes
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
      p5.box(boxSize);
      p5.pop();
    }
  };

  // Debounced resize handler
  const debouncedResize = debounce((p5) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const newWidth = p5.windowWidth * 0.9;
      const newHeight = p5.windowHeight * 0.7;

      // Only resize if the new size is different from the current size
      if (canvas.width !== newWidth || canvas.height !== newHeight) {
        console.log(`Resizing canvas to: ${newWidth} x ${newHeight}`);
        canvas.resizeCanvas(newWidth, newHeight);
      }
    }
  }, 200);

  const windowResized = (p5) => {
    debouncedResize(p5);
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
