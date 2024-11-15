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
                {"Sep 2021 - Oct 2022"}
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
            {"Google Cloud Platform (GCP)"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Kubernetes (GKE)"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Github Actions"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"FluxCD"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Docker"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Terraform"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"GraphQL"}
          </CodeSnippet>
        </div>
    </div>
  );
}
