import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./HorizontalScroll.module.css";
import Combo from "../img/one_wave_red.svg";

export const HorizontalScroll = ({ children }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      {/* <div className={styles.WaveCombo}>
        <img
          className={styles.Colors}
          src={Combo}
          alt=" two color Abstract waves"
        />
      </div> */}
      <div className={styles.MainScroll}>
        {/* <h2 className={styles.Projects}>Projects</h2> */}
        <motion.div className={styles.HorizontalScroll} ref={carousel}>
          <motion.div drag="x" dragConstraints={{ right: 0, left: -width }}>
            {/* children/Content component  here */}
            {children}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
