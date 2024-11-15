import React, { ReactElement } from "react";
import "../styles/AboutMe.css";
import { CodeSnippet } from "carbon-components-react";
import SocialCard from "../components/SocialCard";
import ContactCard from '../components/ContactCard';

export default function AboutMe(): ReactElement {
  return (
    <div className='abutMeWrapper' >
      <h1 className="frontEndText">{"</> "}Devops Engineer</h1>
      <div>
        <h2 className="name">Hi, i'm Gilbert!</h2>
      </div>
      <div className='converAndContactWrapper'>
        <p className="cover-letter">
          I'm a passionate developer with a handful of valuable capabilities such as a great ability to speak my mind,
          extremely proactive, a good eye for growth and improvement as well as addicted to problem solving.{" "}
        </p>
        <div className="socialCards">
          <div className="socialCard">
            <SocialCard
              socialImg={"logo--linkedin.svg"}
              name={"Elvis Gilbert Batista Pimentel"}
              link={
                "https://www.linkedin.com/in/egbpk/"
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
            {"Kubernetes"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"AWS"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"GCP"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"ArgoCD"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Api Gateway (AWS, GCP, Istio)"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Terraform"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Serverless (Lambda, Cloud Run, Fargate, ECS, EKS, Knative)"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Open Telemetry"}
          </CodeSnippet>
        </div>
      </div>
      {/* <img style={{height: '25%', width: '25%', position: 'relative', bottom: 90,  marginLeft: '15%'}} src={require('../../Assets/mern_logo.png').default} alt=""/> */}
    </div>
  );
}
