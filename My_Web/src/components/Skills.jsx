import { forwardRef, useState, useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";
import SkillsCSS from "../components/Skills.module.css";

export const Skills = forwardRef((props, ref) => {
  const headTitle = "Skills";
  const underTitle = "Object Relational Mapping";

  const [skillsData, setSkillsData] = useState([]);

  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const boxes = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("http://localhost:3000/skills");
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
            variants={container}
            initial="hidden"
            animate={skillsData.length > 0 ? "visible" : "hidden"}
          >
            {/* <div className={SkillsCSS.DarkContainer}> */}
            {skillsData.length > 0 ? (
              skillsData.map((item) => (
                <motion.div
                  key={item.id}
                  className={SkillsCSS.Skills}
                  variants={boxes}
                  // custom={index}
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
            {/* </div> */}
          </motion.div>
        </div>
      </div>
    </>
  );
});

Skills.displayName = "Skills";
