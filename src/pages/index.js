import React, { useState } from "react";
import "../styles/App.css";
import ContentSwitcher from "../components/ContentSwitcherComponent";
import AboutMe from './AboutMe';
import Jobs from '../components/Jobs';
import Education from './Education';
// Import Document and Page from react-pdf


function App() {
  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <div>
      <div className="contentSwitcher">
        <ContentSwitcher passPage={setSelectedPage} />
      </div>

      {selectedPage === 1 ? (
        <div className="switcher">
          <AboutMe />
        </div>
      ) : null}

      {selectedPage === 2 ? (
        <div className="switcher">
          <Jobs />
        </div>
      ) : null}

      {selectedPage === 3 ? (
        <div className="switcher">
          <Education />
        </div>
      ) : null}

    </div>
  );
}

export default App;
