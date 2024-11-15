import React, { ReactElement } from "react";
import { CodeSnippet } from "carbon-components-react";
import "../styles/xd.css";

export default function Lemontech(): ReactElement {
  return (
    <div style={{paddingBottom: "8%"}}>
      <div className="educationBody">
        <img
          className="lemontechLogo"
          src={require("../images/lemontech1.png").default}
          alt=""
        />
        <div className="description">
          <h1 style={{ fontSize: "45px", fontWeight: 700 }}>
            Lemontech
          </h1>
          <div className="descriptionAndDates">
            <div>
              <p className="descriptionIntec">
                Software designed to optimize trial management and productivity in law firms, improving efficiency and profitability. My experience has focused on solutions that automate tasks and optimize project planning.
              </p>
            </div>
            <div className="startEndDate">
              <h5>Date</h5>
              <CodeSnippet type="inline" light>
                {"Nov 2022 - May 2024"}
              </CodeSnippet>
            </div>
          </div>
        </div>
        <div className="degree">
        <h4>Position:</h4>
        <h3>Devops Engineer</h3>
        </div>
      </div>
      <h4>Technologies: </h4>
      <div className="snipperGrid">
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Amazon Web Services (AWS)"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Kubernetes (EKS)"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Terraform"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"DroneCI"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"ArgoCD"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Helm Charts"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Datadog"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Serverless Framework"}
          </CodeSnippet>
        </div>
    </div>
  );
}
