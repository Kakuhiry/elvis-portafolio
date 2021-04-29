import React, { ReactElement } from "react";
import { Accordion, AccordionItem, CodeSnippet } from "carbon-components-react";
import "../styles/xd.css";

export default function AccordionComponent(): ReactElement {
  return (
    <div>
      <Accordion>
        <AccordionItem title={"MedBase"} style={{ width: "100%" }}>
          <div style={{ width: "100%" }}>
            <div>
              <div className="githubCard">
                <div style={{ display: "flex" }}>
                  <p style={{ fontSize: 15 }}>
                    <a href="https://github.com/Kakuhiry/medbase">
                      <img
                        src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/Kakuhiry/medbase.png"
                        alt="Github repo card"
                        width="460px"
                      />
                    </a>
                  </p>
                  <div className="dates">
                    <CodeSnippet light type="inline">
                      {"From: August 2020"}
                    </CodeSnippet>
                    <br />
                    <CodeSnippet light type="inline">
                      {"To: December 2020"}
                    </CodeSnippet>
                  </div>
                </div>
              </div>
              <br />
            </div>
            <div className="techs">
              <CodeSnippet type="inline">{"Node"}</CodeSnippet>
              <CodeSnippet
                style={{ marginLeft: 10, marginBottom: 5 }}
                type="inline"
              >
                {"MongoDB"}
              </CodeSnippet>
              <CodeSnippet
                style={{ marginLeft: 10, marginBottom: 5 }}
                type="inline"
              >
                {"React"}
              </CodeSnippet>
              <CodeSnippet
                style={{ marginLeft: 10, marginBottom: 5 }}
                type="inline"
              >
                {"Express"}
              </CodeSnippet>
              <CodeSnippet
                style={{ marginLeft: 10, marginBottom: 5 }}
                type="inline"
              >
                {"Redux"}
              </CodeSnippet>
              <CodeSnippet
                style={{ marginLeft: 10, marginBottom: 5 }}
                type="inline"
              >
                {"Jwt"}
              </CodeSnippet>
              <CodeSnippet
                style={{ marginLeft: 10, marginBottom: 5 }}
                type="inline"
              >
                {"Axios"}
              </CodeSnippet>
              <CodeSnippet style={{ marginLeft: 10 }} type="inline">
                {"Javascript"}
              </CodeSnippet>
              
            </div>
          </div>
        </AccordionItem>
        <AccordionItem title={"Weather Application"}>
          <div style={{ width: "100%" }}>
            <div className="githubCard">
              <div style={{ display: "flex" }}>
                <p style={{ fontSize: 15 }}>
                  <a href="https://github.com/Kakuhiry/weatherapp">
                    <img
                      src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/Kakuhiry/weatherapp.png"
                      width="460px"
                      alt= 'weatherapp Github card'
                    />
                  </a>
                </p>
                <div className="dates">
                  <CodeSnippet light type="inline">
                    {"From: October 2020"}
                  </CodeSnippet>
                  <br />
                  <CodeSnippet light type="inline">
                    {"To: December 2020"}
                  </CodeSnippet>
                </div>
              </div>
              <br />
            </div>
            <div className="techs">
              <CodeSnippet type="inline">{"Node"}</CodeSnippet>
              <CodeSnippet
                style={{ marginLeft: 10, marginBottom: 5 }}
                type="inline"
              >
                {"Axios"}
              </CodeSnippet>
              <CodeSnippet
                style={{ marginLeft: 10, marginBottom: 5 }}
                type="inline"
              >
                {"React"}
              </CodeSnippet>
              <CodeSnippet style={{ marginLeft: 10 }} type="inline">
                {"Javascript"}
              </CodeSnippet>
              
            </div>
          </div>
        </AccordionItem>
        <AccordionItem title={"Field Find"}>
          <div style={{ width: "100%" }}>
            <div className="githubCard">
              <div style={{ display: "flex" }}>
                <p style={{ fontSize: 15 }}>
                  <a href="https://github.com/FieldFind/FrontEnd">
                    <img
                      src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/FieldFind/FrontEnd.png"
                      alt="Field find repo card"
                      width="460px"
                    />
                  </a>
                </p>
                <div className="dates">
                  <CodeSnippet light type="inline">
                    {"From: Febrary 2021"}
                  </CodeSnippet>
                  <br />
                  <CodeSnippet light type="inline">
                    {"To: Ongoing"}
                  </CodeSnippet>
                </div>
              </div>
              <br />
            </div>
            <div className="techs">
              <CodeSnippet
                style={{ marginLeft: 10, marginBottom: 5 }}
                type="inline"
              >
                {"Netlify"}
              </CodeSnippet>
              <CodeSnippet
                style={{ marginLeft: 10, marginBottom: 5 }}
                type="inline"
              >
                {"React Native"}
              </CodeSnippet>
            
              <CodeSnippet style={{ marginLeft: 10 }} type="inline">
                {"Javascript"}
              </CodeSnippet>
              <CodeSnippet
                style={{ marginLeft: 10, marginBottom: 5 }}
                type="inline"
              >
                {"Expo"}
              </CodeSnippet>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
