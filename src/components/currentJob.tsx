import React, { ReactElement } from "react";
import { Accordion, AccordionItem, CodeSnippet } from "carbon-components-react";
import "../styles/xd.css";

export default function currentJob(): ReactElement {
  return (
    <div style={{ width: "100%" }}>
      <div>
        <div className="githubCard">
          <div className="dateAndCard">
            <p style={{ fontSize: 15 }}>
              <a href="https://github.com/Kakuhiry/medbase">
                <img
                  className="currentJob-logo"
                  src={require("../images/MediaRevolution1.jpeg").default}
                  alt="Github repo card"
                />
              </a>
            </p>
            <div className="dates">
              <CodeSnippet light type="inline">
                {"From: May 07"}
              </CodeSnippet>
              <br />
              <CodeSnippet light type="inline">
                {"To: Present"}
              </CodeSnippet>
            </div>
          </div>
        </div>
        <br />
      </div>
      <div>
          <h1 style={{ fontSize: "45px" }}>Media Revolution SRL.</h1>
      </div>
      <br />
<br />
      <div>
        <h4>Position</h4>
      </div>
      <div>
        <h3>Full-stack developer</h3>
      </div>
    </div>
  );
}
