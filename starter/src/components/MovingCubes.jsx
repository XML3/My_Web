import React, { useRef, useEffect } from "react";
import Sketch from "react-p5";

// Function to debounce calls to the resize handler
const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

export const MovingCubes = () => {
  const angleRef = useRef(0);
  const canvasRef = useRef(null);

  // Function to update angle for animation
  const updateAngle = () => {
    angleRef.current += 0.01;
    requestAnimationFrame(updateAngle);
  };

  useEffect(() => {
    // Start angle update loop
    updateAngle();
  }, []);

  // Setup function for p5.js
  const setup = (p5, canvasParentRef) => {
    p5.pixelDensity(1);
    const canvas = p5.createCanvas(
      p5.windowWidth * 0.9,
      p5.windowHeight * 0.7,
      p5.WEBGL
    );
    canvas.parent(canvasParentRef);
    canvasRef.current = canvas;
  };

  // Draw function for p5.js
  const draw = (p5) => {
    p5.background(5, 22, 34);

    // Base resolution dimensions
    const baseWidth = 1200;
    const baseHeight = 800;

    // Scaling factors based on canvas size
    const widthScale = p5.width / baseWidth;
    const heightScale = p5.height / baseHeight;
    const scaleFactor = Math.min(widthScale, heightScale);

    // Box size and spacing
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

  // Resize handler with debounce
  const debouncedResize = debounce((p5) => {
    const newWidth = p5.windowWidth * 0.9;
    const newHeight = p5.windowHeight * 0.7;
    if (
      canvasRef.current &&
      (canvasRef.current.width !== newWidth ||
        canvasRef.current.height !== newHeight)
    ) {
      p5.resizeCanvas(newWidth, newHeight);
    }
  }, 200);

  const windowResized = (p5) => {
    debouncedResize(p5);
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
