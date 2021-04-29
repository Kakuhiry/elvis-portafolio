import React, { ReactElement } from "react";
import "../styles/AboutMe.css";
import { CodeSnippet } from "carbon-components-react";
import SocialCard from "../components/SocialCard";

export default function AboutMe(): ReactElement {
  return (
    <div className='abutMeWrapper' >
      <h1 className="frontEndText">{"</> "}Front end Web Developer</h1>
      <div>
        <h2 className="name">Hi, i'm Elvis!</h2>
      </div>
      <div className='converAndContactWrapper'>
        <p className="cover-letter">
          Passionate front-end web developer with a handful of opulent skills
          that go way beyond coding, such as a great ability to speak my mind,
          extremely proactive, and addicted to problem solving{" "}
        </p>
        <div className="socialCards">
          <div className="socialCard">
            <SocialCard
              socialImg={"logo--linkedin.svg"}
              name={"Elvis Gilbert Batista Pimentel"}
              link={
                "https://www.linkedin.com/in/elvis-gilbert-batista-pimentel-82b489207/"
              }
            />
          </div>
          <div className="socialCard">
            <SocialCard
              socialImg={"logo--github.svg"}
              name={"Kakuhiry"}
              link={"https://www.github.com/Kakuhiry"}
            />
          </div>
          <div className="socialCard">
            <SocialCard
              socialImg={"email.svg"}
              name={"GilbertBatista.k@gmail.com"}
              link={""}
            />
          </div>
          <div className="socialCard">
            <SocialCard
              socialImg={"phone.svg"}
              name={"+1 (829)-355-8895"}
              link={""}
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "1%" }}>
        <h4>My skillset: </h4>
        <div className="snipperGrid">
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"React"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"HTML"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"CSS"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Typescript"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Node"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"MongoDB"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Git"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Docker"}
          </CodeSnippet>
        </div>
      </div>
      {/* <img style={{height: '25%', width: '25%', position: 'relative', bottom: 90,  marginLeft: '15%'}} src={require('../../Assets/mern_logo.png').default} alt=""/> */}
    </div>
  );
}
