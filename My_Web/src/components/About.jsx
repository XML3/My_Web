import { useEffect, useState } from "react";
import AboutCSS from "../components/About.module.css";
import AboutImage from "../img/blue_buble.svg";
import waves from "../img/one_wave_combo.svg";

export const About = () => {
  const [aboutData, setAboutData] = useState({});
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch("http://localhost:3000/about");
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
      <div className={AboutCSS.TopImg}>
        <img className={AboutCSS.Waves} src={waves} alt="Abstract waves" />
      </div>
      <div className={AboutCSS.AboutContainer}>
        <div className={AboutCSS.About}>
          <div className={AboutCSS.Section}>
            <h2>{aboutData.title || "About Me"}</h2>
            <div className={AboutCSS.AboutText}>
              <p>{aboutData.AboutMe}</p>
            </div>
          </div>
        </div>
        <img
          className={AboutCSS.AboutImage}
          src={AboutImage}
          alt="complementary abstract image"
        />
      </div>
    </>
  );
};
