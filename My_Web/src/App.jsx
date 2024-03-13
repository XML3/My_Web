import React from "react";
import "../src/App.css";
import xaglyWebLogo from "./img/xagly_web_logo.png";
import { Content } from "./components/Content";
import { Headers } from "./components/Headers";

function App() {
  return (
    <>
      <div className="App">
        <div className="Container">
          <nav className="nav">
            <img src={xaglyWebLogo} alt="website logo" />
          </nav>
          <Headers />
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
