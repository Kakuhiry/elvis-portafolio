import React, { ReactElement } from "react";
import "./AboutMe.css";
import { CodeSnippet } from "carbon-components-react";


export default function AboutMe(): ReactElement {
  return (
    <div>
      <h1 className="frontEndText">{"</>"}Front end Web Developer</h1>
      <h2 className="name">Hi, i'm Elvis!</h2>
      <div>
        <p className="cover-letter">
          Passionate front-end web developer with a handful of opulent skills
          that go way beyond coding, such as a great ability to speak my mind,
          extremely proactive, and addicted to problem solving{" "}
        </p>
        <div style={{ marginTop: '5%' }}>
          <h4>My skillset: </h4>
          <div className='snipperGrid'>
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
    </div>
  );
}
