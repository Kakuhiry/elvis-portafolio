import React, { ReactElement } from "react";
import "./AboutMe.css";

export default function AboutMe(): ReactElement {
  return (
    <div className="box-wrapper">
      <h1 className= 'frontEndText'>{'</>'}Front end Web Developer</h1>
      <h2 className= 'name'>Hi, i'm Elvis!</h2>
      <p className= 'cover-letter'>
        Passionate front-end web developer with a handful of opulent skills that
        go way beyond coding, such as a great ability to speak my mind,
        extremely proactive, and addicted to problem solving{" "}
      </p>
    </div>
  );
}
