import { useEffect, useState } from "react";
import AboutCSS from "../components/About.module.css";
import AboutImage from "../img/blue_buble.svg";

export const About = () => {
  const [aboutData, setAboutData] = useState({});
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch("http://localhost:3000/about");
        //console.log("Response:", response);
        const aboutData = await response.json();
        //console.log("about data:", aboutData);
        setAboutData(aboutData[0]);
      } catch (error) {
        //console.error("Error fetching data from about:", error);
      }
    };
    fetchAbout();
  }, []);
  //console.log("about data state:", aboutData);

  return (
    <>
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
