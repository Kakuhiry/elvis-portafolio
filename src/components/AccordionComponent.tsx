import React, { ReactElement } from "react";
import { CodeSnippet } from "carbon-components-react";
import "../styles/xd.css";

export default function AccordionComponent(): ReactElement {
  return (
    <div>
      <div className="educationBody">
        <img
          className="intecLogo"
          src={require("../images/MediaRevolution1.jpeg").default}
          alt=""
        />
        <div className="description">
          <h1 style={{ fontSize: "45px", fontWeight: 700 }}>
            Media Revolution SRL.
          </h1>
          <div className="descriptionAndDates">
            <div>
              <p className="descriptionIntec">
              A company dedicated to the development of platforms and software, located in Santo Domingo, National District.
              </p>
            </div>
            <div className="startEndDate">
              <h5>Date</h5>
              <CodeSnippet type="inline" light>
                {"May 07 2021 - Present"}
              </CodeSnippet>
            </div>
          </div>
        </div>
        <div className="degree">
        <h4>Position:</h4>
        <h3>Full Stack Developer</h3>
        </div>
      </div>
      <h4>Technologies: </h4>
      <div className="snipperGrid">
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Typescript"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Type-GraphQL"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"TypeORM"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Express"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Git"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Postgres"}
          </CodeSnippet>
        </div>
    </div>
  );
}
