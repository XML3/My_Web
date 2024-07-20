import { forwardRef, useEffect, useState } from "react";
import AboutCSS from "../components/About.module.css";
import { AnimateSphere } from "./AnimateSphere";
import { API_URL } from "../UI/constants";

// prettier does not recognise this code style, but it does work accordingly = solution: About.displayName = "About"; at the end of component
export const About = forwardRef((props, ref) => {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch(`${API_URL}/about`);
        const aboutData = await response.json();
        setAboutData(aboutData[0]);
      } catch (error) {
        console.error("Error fetching data from about:", error);
      }
    };
    fetchAbout();
  }, []);

  return (
    <>
      <div ref={ref} className={AboutCSS.AboutContainer}>
        <div className={AboutCSS.About}>
          <div className={AboutCSS.Section}>
            <h2>{aboutData.title || "About Me"}</h2>
            <div className={AboutCSS.AboutText}>
              <p>{aboutData.AboutMe}</p>
            </div>
          </div>
        </div>

        {/* P5 js component */}
        <div
          className={`${AboutCSS.AnimateSphereContainer} ${AboutCSS.CanvasContainer}`}
        >
          <AnimateSphere />
        </div>
      </div>
    </>
  );
});
About.displayName = "About";
