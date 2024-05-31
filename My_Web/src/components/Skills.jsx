import { forwardRef, useState, useEffect } from "react";
import React from "react";
import SkillsCSS from "../components/Skills.module.css";

export const Skills = forwardRef((props, ref) => {
  const headTitle = "Skills";
  const underTitle = "Object Relational Mapping";

  const [skillsData, setSkillsData] = useState([]);

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
          <div className={SkillsCSS.DarkContainer}>
            {skillsData && skillsData.length > 0 ? (
              skillsData.map((item) => (
                <div key={item.id} className={SkillsCSS.Skills}>
                  <div className={SkillsCSS.Logos}>
                    <img
                      className={SkillsCSS.Logo}
                      alt="Logos for HTML, CSS, JS, React, MySQl, Node.js, and Prisma"
                      src={item.logo}
                    />
                  </div>
                  <div className={SkillsCSS.Titles}>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              ))
            ) : (
              <p>No content available</p>
            )}
            <div className={SkillsCSS.BottomSection}>
              <h3>{underTitle}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

Skills.displayName = "Skills";
