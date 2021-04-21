import React, { ReactElement } from "react";
import { Accordion, AccordionItem } from "carbon-components-react";

export default function AccordionComponent(): ReactElement {
  return (
    <div style={{ width: "100%" }}>
      <Accordion>
        <AccordionItem style={{width: '100%'}}>
          <div style={{ display: "flex", width: "100%" }}>
            <h1 style={{ marginBottom: 30 }}>Medbase</h1>
            <div style= {{width: '70%'}}>
              <p style={{ fontSize: 15, marginLeft: 30, width: "1200px" }}>
                MedBase is web application that will allow hospitals to keep
                records of their patient's condition as well as the treatment
                they apply for each one of them
              </p>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem>Hola2</AccordionItem>
        <AccordionItem>Hola3</AccordionItem>
      </Accordion>
    </div>
  );
}
