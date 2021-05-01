import React, { ReactElement } from "react";
import "../styles/SocialCard.css";
import { CodeSnippet } from "carbon-components-react";
import { link } from "node:fs";
interface Props {
  socialImg: string;
  name: string;
  link: string;
}

export default function ContactCard({ socialImg, name, link }: Props): ReactElement {
  return (
    <div>
      <a
        style={{
          color: "inherit",
          textDecoration: "none",
          display: "flex",
          width: "100%",
        }}

        href={"/"}
        onClick={e => e.preventDefault()}
      >
        <img
          className="companyLogo"
          src={require(`../images/${socialImg}`).default}
          alt=""
        />
        <CodeSnippet light className= "nameTxt">{name}</CodeSnippet>
      </a>
    </div>
  );
}
