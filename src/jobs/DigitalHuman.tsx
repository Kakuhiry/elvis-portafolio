import React, { ReactElement } from "react";
import { CodeSnippet } from "carbon-components-react";
import "../styles/xd.css";

export default function Lemontech(): ReactElement {
  return (
    <div style={{paddingBottom: "8%"}}>
      <div className="educationBody">
        <img
          className="intecLogo"
          src={require("../images/digitalhuman_ai_logo.jpeg").default}
          alt=""
        />
        <div className="description">
          <h1 style={{ fontSize: "45px", fontWeight: 700 }}>
            Digital Human
          </h1>
          <div className="descriptionAndDates">
            <div>
              <p className="descriptionIntec">
                At Digital Human, we develop mission-critical AI software, creating reliable solutions for high-stakes environments. Our expertise ensures seamless integration with complex systems, delivering impactful results.
              </p>
            </div>
            <div className="startEndDate">
              <h5>Date</h5>
              <CodeSnippet type="inline" light>
                {"Sep 2024 - Present"}
              </CodeSnippet>
            </div>
          </div>
        </div>
        <div className="degree">
        <h4>Position:</h4>
        <h3>Golang Backend Engineer · Part-time</h3>
        </div>
      </div>
      <h4>Technologies: </h4>
      <div className="snipperGrid">
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Golang"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"MongoDB (Atlas)"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Google Cloud Platform (GCP)"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Cloud Functions"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Cloud Run"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Api Gateway"}
          </CodeSnippet>

        </div>
    </div>
  );
}
