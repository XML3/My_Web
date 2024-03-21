import React, { useRef, useState } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import styles from "./HorizontalScroll.module.css";

export const HorizontalScroll = ({ children }) => {
  const containerRef = useRef(null);
  const scrollProgress = useMotionValue(0);

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    const progress = scrollLeft / (scrollWidth - clientWidth);
    scrollProgress.set(progress);

    console.log("Horizontal scroll position:", progress);
  };

  const x = useTransform(scrollProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div className={styles.Main}>
      <section
        className={styles.HorizontalScroll}
        ref={containerRef}
        onScroll={handleScroll}
        style={{ overflowX: "auto", height: "500px" }}
      >
        <motion.div
          style={{
            display: "flex",
            overflowX: "auto",
            width: "fit-content",
            flexDirection: "row",
            x: x.get(),
          }}
          className={styles.ScrollContent}
          initial={{ x: 0 }}
          animate={{ x: x }}
        >
          {/* Your content here */}
          {children}
        </motion.div>
      </section>
    </div>
  );
};
