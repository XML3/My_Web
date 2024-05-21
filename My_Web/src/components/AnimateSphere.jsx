import React, { useState, useEffect } from "react";
import Sketch from "react-p5";
import Multiwaves from "../img/multitwo_wave_combo.svg";

export const AnimateSphere = () => {
  const [angle, setAngle] = useState(0);
  const [img, setImg] = useState(null);

  useEffect(() => {
    console.log("AnimateSphere component mounted");
    return () => {
      console.log("AnimateSphere component unmounted");
    };
  }, []);

  const setup = (p5, canvasParentRef) => {
    console.log("Setup called");
    p5.createCanvas(700, 550, p5.WEBGL).parent(canvasParentRef);

    p5.loadImage(Multiwaves, (loadImage) => {
      setImg(loadImage);
    });
  };

  const draw = (p5) => {
    p5.background(5, 22, 34);

    //BLUE CUBE
    // for (let x = -330; x < 330; x += 100) {
    p5.push();
    p5.rectMode(p5.CENTER);
    //translate(x, 0, 0);
    p5.rotateY(angle);
    p5.rotateX(angle * 0.2);
    p5.rotateZ(angle * 0.1);
    p5.noFill();
    p5.stroke(94, 234, 212);
    //stroke(252, 53, 76);
    p5.strokeWeight(2);
    p5.box(250);
    p5.pop();
    //}

    //Center Sphere
    if (img) {
      p5.push();
      p5.rotateX(angle);
      p5.rotateY(angle * 0.1);
      p5.rotateZ(angle * 1.2);
      p5.noStroke();
      p5.texture(img);
      p5.sphere(70);
      p5.pop();
    }

    //RED LINES ACROSS
    p5.push();
    for (let i = 0; i < 12; i++) {
      p5.fill(p5.random(150), 10, 34);
      p5.noStroke();
      p5.rectMode(p5.CENTER);
      p5.rect(
        (i + p5.width) / 1000,
        (i * p5.height) / 150 - 30,
        p5.width,
        (i * p5.height) / 800
      );
    }
    p5.pop();

    setAngle(angle + 0.02);
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
