import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <button
      className={`button-group__button ${props.activeBtn}`}
      onClick={props.handleClick}>
      {props.title}
    </button>
  );
}
