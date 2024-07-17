import { forwardRef, useState, useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";
import SkillsCSS from "../components/Skills.module.css";
import { useInView } from "react-intersection-observer";
import { API_URL } from "../UI/constants";

export const Skills = forwardRef((props, ref) => {
  const headTitle = "Skills";
  const underTitle = "Object Relational Mapping";

  const [skillsData, setSkillsData] = useState([]);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(`${API_URL}/skills`);
        const jsonData = await response.json();
        setSkillsData(jsonData);
      } catch (error) {
        console.error("Error fetching data from skills", error);
      }
    };
    fetchSkills();
  }, []);

  return (
    <>
      <div ref={ref} className={SkillsCSS.SkillsMainContainer}>
        <div className={SkillsCSS.MainHeader}>
          <h1>{headTitle}</h1>
        </div>

        <div className={SkillsCSS.SecondContainer}>
          <motion.div
            className={SkillsCSS.DarkContainer}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ delayChildren: 0.3, staggerChildren: 0.2 }}
            ref={inViewRef}
          >
            {skillsData.length > 0 ? (
              skillsData.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={SkillsCSS.Skills}
                  initial={{ y: 20, opacity: 0 }}
                  animate={
                    inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                  }
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={SkillsCSS.Logos}>
                    <img
                      className={SkillsCSS.Logo}
                      alt={`Logo for ${item.title}`}
                      src={item.logo}
                    />
                  </div>
                  <div className={SkillsCSS.Titles}>
                    <h3>{item.title}</h3>
                  </div>
                </motion.div>
              ))
            ) : (
              <p>No content available</p>
            )}

            <div className={SkillsCSS.BottomSection}>
              <h3>{underTitle}</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
});

Skills.displayName = "Skills";
