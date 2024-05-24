import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { InView, useView } from "react-intersection-observer";

export const TextAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 30,
        transition: {
          duration: 2,
          delay: 1,
        },
      });
    }
  }, [controls, inView]);
};
