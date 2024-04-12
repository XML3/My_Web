import React from "react";
import { useState, useEffect } from "react";
import ContentCSS from "../components/Content.module.css";
import githibIcon from "../img/github_cyan.svg";

export const Content = () => {
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

  const renderStyledTools = (tools) => {
    return tools.split(", ").map((tool, index) => (
      <span key={index} className={ContentCSS.Tool}>
        {tool}
      </span>
    ));
  };

  return (
    <>
      <div className={ContentCSS.Content}>
        <div className={ContentCSS.ContentCards}>
          {contentData && contentData.length > 0 ? (
            contentData.map((item) => (
              <div key={item.id} className={ContentCSS.Card}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={githibIcon}
                    alt="Github Icon"
                    className={ContentCSS.githubIcon}
                  />
                </a>
                <h2>{item.title}</h2>
                <div className={ContentCSS.CardText}>
                  <p>{item.text}</p>
                </div>

                <div className={ContentCSS.TextTool}>
                  {renderStyledTools(item.tools)}
                </div>
              </div>
            ))
          ) : (
            <p>No content available</p>
          )}
        </div>
      </div>
    </>
  );
};
