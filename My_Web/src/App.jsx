import React from "react";
import "../src/App.css";

import { Content } from "./components/Content";
import { Headers } from "./components/Headers";

function App() {
  return (
    <>
      <div className="App">
        <div className="Container">
          <Headers />
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
