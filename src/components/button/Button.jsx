import React from "react";

export default function Button(props) {
  //console.log(props);
  return <button className="button-group__button" onClick={props.changeTimeframe}>{props.title}</button>;
}
