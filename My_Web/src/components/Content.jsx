import React from "react";
import { useState, useEffect } from "react";
import ContentCSS from "../components/Content.module.css";

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

  return (
    <>
      <div className={ContentCSS.Content}>
        <div className={ContentCSS.ContentCards}>
          {contentData && contentData.length > 0 ? (
            contentData.map((item) => (
              <div key={item.id} className={ContentCSS.Card}>
                <h2>{item.title}</h2>
                <div className={ContentCSS.CardText}>
                  <p>{item.text}</p>
                </div>
                <h3 className={ContentCSS.Tools}>Tools</h3>
                <div className={ContentCSS.TextTool}>
                  <p>{item.tools}</p>
                </div>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <button className={ContentCSS.btn}>Github</button>
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
};
