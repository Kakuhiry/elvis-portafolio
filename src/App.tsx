import React, { useState } from "react";
import "./App.css";
import ContentSwitcher from "./Components/ContentSwitcherComponent";
import AboutMe from './Pages/AboutMe/AboutMe'

function App() {
  const [selectedPage, setSelectedPage] = useState(1);
  return (
    <div>
      <div className="contentSwitcher">
        <ContentSwitcher passPage={setSelectedPage} />
      </div>
      {selectedPage === 1 ? (
        <div >
          <AboutMe  />
        </div>
      ) : null}

      {selectedPage === 2 ? (
        <div>
          <h1>OLA2</h1>
        </div>
      ) : null}

      {selectedPage === 3 ? (
        <div>
          <h1>OLA3</h1>
        </div>
      ) : null}
    </div>
  );
}

export default App;
