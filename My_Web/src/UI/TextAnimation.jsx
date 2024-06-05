import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Animation variants
const letVariants = {
  hidden: { x: "-10vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const rightVariants = {
  hidden: { x: "10vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

export const TextAnimation = ({ children, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [isAniumating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (inView && !isAniumating) {
      controls.start("visible");
      setIsAnimating(true);
    } else if (!inView && isAniumating) {
      controls.start("hidden");
      setIsAnimating(false);
    }
  }, [controls, inView, isAniumating]);

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={index % 2 === 0 ? letVariants : rightVariants}
      >
        {children}
      </motion.div>
    </>
  );
};
