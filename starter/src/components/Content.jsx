import React from "react";
import { forwardRef, useState, useEffect } from "react";
import ContentCSS from "../components/Content.module.css";
import arrow from "/img/back_arrow.png";
import { API_URL } from "../UI/constants";

export const Content = forwardRef((props, ref) => {
  const [contentData, setContentData] = useState([]);
  const [flip, setFlip] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`${API_URL}/content`);
        const jsonData = await response.json();
        setContentData(jsonData);
        setFlip(new Array(jsonData.length).fill(false));
      } catch (error) {
        console.error("Error fetching data from content:", error);
      }
    };
    fetchContent();
  }, []);
  //handle flipped cards state
  const handleFlip = (index) => {
    setFlip((prev) => prev.map((item, idx) => (idx === index ? !item : item)));
  };

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
            contentData.map((item, index) => (
              <div
                key={item.id}
                className={`${ContentCSS.Card} ${
                  flip[index] ? ContentCSS.Flip : ""
                }`}
              >
                <div className={ContentCSS.FlipCardInner}>
                  <div className={ContentCSS.FlipCardFront}>
                    <img
                      className={ContentCSS.ProjectImage}
                      alt="project's images"
                      src={item.front}
                    />

                    <button
                      className={ContentCSS.FlipButtonFront}
                      onClick={() => handleFlip(index)}
                    >
                      FLIP CARD
                    </button>
                  </div>

                  <div className={ContentCSS.FlipCardBack}>
                    {/* Header with Link */}
                    <div className={ContentCSS.BackHeader}>
                      <h3>{item.title}</h3>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={ContentCSS.CardLink}
                      >
                        {/* Red Link SVG */}
                        <img
                          className={ContentCSS.LinkImage}
                          alt="link arrow svg"
                          src={item.img}
                        />
                      </a>
                    </div>

                    <div className={ContentCSS.CardText}>
                      <p>{item.text}</p>
                    </div>

                    <div className={ContentCSS.TextTool}>
                      {renderStyledTools(item.tools)}
                    </div>
                    {/* </a> */}
                    <div className={ContentCSS.BackButtons}>
                      <div className={ContentCSS.FlipBackWrapper}>
                        <button
                          className={ContentCSS.FlipButtonBack}
                          onClick={() => handleFlip(index)}
                        >
                          FLIP BACK
                        </button>
                      </div>
                      <div className={ContentCSS.ReadMoreWrapper}>
                        <a
                          className={ContentCSS.ReadMoreButton}
                          href={item.ReadMore}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
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
});

Content.displayName = "Content";
