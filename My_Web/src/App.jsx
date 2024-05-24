import { React, useRef } from "react";
import "../src/App.css";
import { Headers } from "./components/Headers";
import { About } from "./components/About";
import { HorizontalScroll } from "./UI/HorizontalScroll";
import { Content } from "./components/Content";
import { ContactForm } from "./components/Contact";
import { GridMenu } from "./components/GridMenu";

function App() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <div className="App">
        <div className="Container">
          <Headers
            aboutRef={aboutRef}
            projectRef={projectRef}
            contactRef={contactRef}
          />

          <GridMenu
            aboutRef={aboutRef}
            projectRef={projectRef}
            contactRef={contactRef}
          />

          <About ref={aboutRef} />

          <HorizontalScroll>
            <Content ref={projectRef} />
          </HorizontalScroll>

          <ContactForm ref={contactRef} />
        </div>
      </div>
    </>
  );
}

export default App;
