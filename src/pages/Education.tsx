import React, { ReactElement } from "react";
import "../styles/Education.css";
import { CodeSnippet } from "carbon-components-react";

export default function Education(): ReactElement {
  return (
    <div>
      
      <div className="educationBody">
      <img
        className="intecLogo"
        src={require("../images/logo-intec-primario.jpg").default}
        alt=""
      />
        <div className="description">
          <h1 style={{ fontSize: "45px", fontWeight: 700 }}>
            Intec university
          </h1>
          <div className="descriptionAndDates">
            <div>
            <p className='descriptionIntec'>
              Instituto Tecnológico de Santo Domingo —or Santo Domingo Institute
              of Technology, is a private university located in Santo Domingo,
              Dominican Republic. Is considered the best institute of technology
              in the country.
            </p>
            </div>
            <div className="startEndDate">
              <h5>Graduation date</h5>
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
      <h4>Bachelor's degree:</h4>
      <h3>Software Engineer</h3>
      </div>

    </div>
  );
}
