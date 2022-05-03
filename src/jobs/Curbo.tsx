import React, { ReactElement } from "react";
import { CodeSnippet } from "carbon-components-react";
import "../styles/xd.css";

export default function Curbo(): ReactElement {
  return (
    <div style={{paddingBottom: "8%"}}>
      <div className="educationBody">
        <img
          className="intecLogo"
          src={require("../images/curbo.png").default}
          alt=""
        />
        <div className="description">
          <h1 style={{ fontSize: "45px", fontWeight: 700 }}>
            Curbo Technologies
          </h1>
          <div className="descriptionAndDates">
            <div>
              <p className="descriptionIntec">
                A digitalized car marketplace. Curbo change the way people buy cars by simplifying the whole process and providing safety and accessibility.
              </p>
            </div>
            <div className="startEndDate">
              <h5>Date</h5>
              <CodeSnippet type="inline" light>
                {"October 04 2021 - present"}
              </CodeSnippet>
            </div>
          </div>
        </div>
        <div className="degree">
        <h4>Position:</h4>
        <h3>Devops/Site Reliability Engineer</h3>
        </div>
      </div>
      <h4>Technologies: </h4>
      <div className="snipperGrid">
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"CI/CD (Github Actions + GCP)"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Bash"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Docker"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Linux Sysadmin"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"IaC (Infrastructure as Code)"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Kubernetes (GKE)"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"DevSecOps"}
          </CodeSnippet>
        </div>
    </div>
  );
}
