import React, { useEffect, useState } from "react";
import PortTextCSS from "../components/PortText.module.css";
import { TextAnimation } from "../UI/TextAnimation";

export const PortText = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPort = async () => {
      try {
        const response = await fetch("http://localhost:3000/port");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data from port:", error);
      }
    };
    fetchPort();
  }, []);

  return (
    <>
      <div className={PortTextCSS.Main}>
        <div className={PortTextCSS.Cards}>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <TextAnimation key={item.id} index={index}>
                <div className={PortTextCSS.Card}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </TextAnimation>
            ))
          ) : (
            <p>No content available</p>
          )}
        </div>
      </div>
    </>
  );
};
