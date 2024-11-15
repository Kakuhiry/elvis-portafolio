import React, { ReactElement } from "react";
import { CodeSnippet } from "carbon-components-react";
import "../styles/xd.css";

export default function Lemontech(): ReactElement {
  return (
    <div style={{paddingBottom: "8%"}}>
      <div className="educationBody">
        <img
          className="intecLogo"
          src={require("../images/naxmek.png").default}
          alt=""
        />
        <div className="description">
          <h1 style={{ fontSize: "45px", fontWeight: 700 }}>
            Naxmek Business, S.R.L
          </h1>
          <div className="descriptionAndDates">
            <div>
              <p className="descriptionIntec">
                Team of experts delivering tailored, comprehensive solutions across multiple platforms. Our focus is on providing innovative and scalable project support, ensuring quality and measurable results from concept to deployment.
              </p>
            </div>
            <div className="startEndDate">
              <h5>Date</h5>
              <CodeSnippet type="inline" light>
                {"Jun 2024 - Present"}
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
            {"Cloudwatch"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Python"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Terraform"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Serverless"}
          </CodeSnippet>
        </div>
    </div>
  );
}
