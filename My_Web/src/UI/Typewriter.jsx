import { delay } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && text && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [inView, currentIndex, delay, text]);

  return (
    <>
      <span ref={ref}>{currentText}</span>
    </>
  );
};
