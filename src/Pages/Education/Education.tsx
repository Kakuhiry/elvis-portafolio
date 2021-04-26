import React, { ReactElement } from "react";
import "./Education.css";
import { CodeSnippet } from "carbon-components-react";

export default function Education(): ReactElement {
  return (
    <div>
      <img
        className="intecLogo"
        src={require("../../Assets/logo-intec-primario.jpg").default}
        alt=""
      />
      <div className="educationBody">
        <div className="description">
          <h1 style={{ fontSize: "45px", fontWeight: 700 }}>
            Intec university
          </h1>
          <div className="descriptionAndDates">
            <p style={{ fontSize: "30px" }}>
              Instituto Tecnológico de Santo Domingo —or Santo Domingo Institute
              of Technology, is a private university located in Santo Domingo,
              Dominican Republic. Is considered the best institute of technology
              in the country.
            </p>
            <div className="startEndDate">
              <h5>Expected conclusion</h5>
              <CodeSnippet type="inline" light>
                {"October 2021"}
              </CodeSnippet>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <h4>Bachelor degree:</h4>
      <h3>Software engineer</h3>
    </div>
  );
}
