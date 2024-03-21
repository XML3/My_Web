import React from "react";
import "../src/App.css";
import { Headers } from "./components/Headers";
import { About } from "./components/About";
import { HorizontalScroll } from "./UI/HorizontalScroll";
import { Content } from "./components/Content";

function App() {
  return (
    <>
      <div className="App">
        <div className="Container">
          <Headers />
          <About />
          <HorizontalScroll>
            <Content />
          </HorizontalScroll>
        </div>
      </div>
    </>
  );
}

export default App;
