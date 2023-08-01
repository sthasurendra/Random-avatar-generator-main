import React from "react";
import "./Link.scss";

function Link({ href, icon }) {
  return (
    <a className="link" href={href} target="_blank" rel="noreferrer">
      <img className="icons" src={icon} alt="github" />
    </a>
  );
}

export default Link;
