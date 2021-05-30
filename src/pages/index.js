import React, { useState } from "react";
import "../styles/App.css";
import ContentSwitcher from "../components/ContentSwitcherComponent";
import AboutMe from './AboutMe';
import AccordionComponent from '../components/AccordionComponent';
import Education from './Education'
function App() {
  const [selectedPage, setSelectedPage] = useState(1);
  return (
    <div>
      <div className="contentSwitcher">
        <ContentSwitcher passPage={setSelectedPage} />
      </div>
      {selectedPage === 1 ? (
        <div className="switcher">
          <AboutMe  />
        </div>
      ) : null}

      {selectedPage === 2 ? (
        <div className="switcher">
          <AccordionComponent/>
        </div>
      ) : null}

      {selectedPage === 3 ? (
        <div className="switcher">
          <Education/>
        </div>
      ) : null}
    </div>
  );
}

export default App;
