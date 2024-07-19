import React, { useState } from "react";
import Sketch from "react-p5";

export const MovingCubes = () => {
  const [angle, setAngle] = useState(0);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(
      p5.windowWidth * 0.9,
      p5.windowHeight * 0.7,
      p5.WEBGL
    ).parent(canvasParentRef);
  };

  const draw = (p5) => {
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
      p5.rotateY(angle);
      p5.rotateX(angle * 1.5);
      p5.rotateZ(angle * 1.2);
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
      p5.rotateY(angle);
      p5.rotateX(angle * 1.5);
      p5.rotateZ(angle * 1.2);
      p5.noFill();
      //p5.stroke(94, 234, 212);
      p5.stroke(252, 53, 76);
      p5.strokeWeight(1);
      p5.box(boxSize * 1);
      p5.pop();
    }
    setAngle(angle + 0.02);
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth * 0.9, p5.windowHeight * 0.7);
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
