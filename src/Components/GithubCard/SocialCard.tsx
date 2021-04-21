import React, { ReactElement } from "react";
import "./SocialCard.css";

interface Props {
  socialImg: string,
  name: string,
  link: string
}

export default function GithubCard({socialImg, name, link}: Props): ReactElement {
  console.log(socialImg)
  return (
    <div>
      <a style={{ color: "inherit", textDecoration: 'none', display: "flex", width: "100%" }} href={link}>
        <img
          style={{ width: "45px", height: "45px" }}
          src={require(`../../Assets/${socialImg}`).default}
          alt=""
        />
        <h4 className="nameTxt">{name}</h4>
      </a>
    </div>
  );
}
