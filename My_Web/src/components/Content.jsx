import React from "react";
import { forwardRef, useState, useEffect } from "react";
import ContentCSS from "../components/Content.module.css";

export const Content = forwardRef((props, ref) => {
  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("http://localhost:3000/content");
        const jsonData = await response.json();
        setContentData(jsonData);
      } catch (error) {
        console.error("Error fetching data from content:", error);
      }
    };
    fetchContent();
  }, []);

  //Map thought tools in order to style each indivual one
  const renderStyledTools = (tools) => {
    return tools.split(", ").map((tool, index) => (
      <span key={index} className={ContentCSS.Tool}>
        {tool}
      </span>
    ));
  };

  return (
    <>
      <div ref={ref} className={ContentCSS.Content}>
        <div className={ContentCSS.ContentCards}>
          {contentData && contentData.length > 0 ? (
            contentData.map((item) => (
              <div key={item.id} className={ContentCSS.Card}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ContentCSS.CardLink}
                >
                  <div className={ContentCSS.ImageLink}>
                    <img
                      className={ContentCSS.Image}
                      alt="Logo Icons for each project's hosting sites"
                      src={item.img}
                    />
                  </div>

                  <h3>{item.title}</h3>
                  <div className={ContentCSS.CardText}>
                    <p>{item.text}</p>
                  </div>

                  <div className={ContentCSS.TextTool}>
                    {renderStyledTools(item.tools)}
                  </div>
                </a>
              </div>
            ))
          ) : (
            <p>No content available</p>
          )}
        </div>
      </div>
    </>
  );
});

Content.displayName = "Content";
