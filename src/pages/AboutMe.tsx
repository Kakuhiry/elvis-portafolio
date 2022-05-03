import React, { ReactElement } from "react";
import "../styles/AboutMe.css";
import { CodeSnippet } from "carbon-components-react";
import SocialCard from "../components/SocialCard";
import ContactCard from '../components/ContactCard';

export default function AboutMe(): ReactElement {
  return (
    <div className='abutMeWrapper' >
      <h1 className="frontEndText">{"</> "}Site Reliability Engineer</h1>
      <div>
        <h2 className="name">Hi, i'm Gilbert!</h2>
      </div>
      <div className='converAndContactWrapper'>
        <p className="cover-letter">
        I'm a passionate developer with a handful of valuable capabilities such as a great ability to speak my mind,
         extremely proactive, a good eye for growth and improvement as well as addicted to problem solving and thirsty for knoweldge.{" "}
        </p>
        <div className="socialCards">
          <div className="socialCard">
            <SocialCard
              socialImg={"logo--linkedin.svg"}
              name={"Elvis Gilbert Batista Pimentel"}
              link={
                "https://www.linkedin.com/in/elvis-gilbert-batista-pimentel-82b489207/"
              }
              active={true}
              
            />
          </div>
          <div className="socialCard">
            <SocialCard
              socialImg={"logo--github.svg"}
              name={"Kakuhiry"}
              link={"https://www.github.com/Kakuhiry"}
              active={true}

            />
          </div>
          <div className="socialCard">
            <SocialCard
              socialImg={"email.svg"}
              name={"GilbertBatista.k@gmail.com"}
              link={"#"}
              active={false}
            />
          </div>
          <div className="socialCard">
            <SocialCard
              socialImg={"phone.svg"}
              name={"+1 (829)-355-8895"}
              link={"#"}
              active={false}

            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "1%" }}>
        <h4>Tools/Skills:</h4>
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
      {/* <img style={{height: '25%', width: '25%', position: 'relative', bottom: 90,  marginLeft: '15%'}} src={require('../../Assets/mern_logo.png').default} alt=""/> */}
    </div>
  );
}
