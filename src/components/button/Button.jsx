import React from "react";
import './Button.css'

export default function Button(props) {
  //console.log(props);
  return <button className="button-group__button" onClick={props.changeTimeframe}>{props.title}</button>;
}
