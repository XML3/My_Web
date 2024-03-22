import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import styles from "./HorizontalScroll.module.css";

export const HorizontalScroll = ({ children }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className={styles.Main}>
      <motion.div className={styles.HorizontalScroll} ref={carousel}>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }}>
          {/* children/Content component  here */}
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};
