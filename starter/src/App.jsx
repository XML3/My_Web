import { React, useRef } from "react";
import "../src/App.css";
import { Headers } from "./components/Headers";
import { About } from "./components/About";
import { HorizontalScroll } from "./UI/HorizontalScroll";
import { Content } from "./components/Content";
import { ContactForm } from "./components/Contact";
import { GridMenu } from "./components/GridMenu";
import { PortText } from "./components/PortText";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills";
import { Multimedia } from "./components/Multimedia";

function App() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const multimediaRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <div className="App">
        <div className="Container">
          <Headers
            aboutRef={aboutRef}
            projectRef={projectRef}
            skillsRef={skillsRef}
            multimediaRef={multimediaRef}
            contactRef={contactRef}
          />

          <GridMenu
            aboutRef={aboutRef}
            projectRef={projectRef}
            skillsRef={skillsRef}
            multimediaRef={multimediaRef}
            contactRef={contactRef}
          />

          <About ref={aboutRef} />

          <PortText />

          <HorizontalScroll>
            <Content ref={projectRef} />
          </HorizontalScroll>

          <Skills ref={skillsRef} />
          <Multimedia ref={multimediaRef} />
          <ContactForm ref={contactRef} />

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
