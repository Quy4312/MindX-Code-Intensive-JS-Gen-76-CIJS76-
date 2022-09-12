import React from "react";
import { useState } from "react";
import "./trafficlights.css";

export const Trafficlights = (props) => {
  const { color, indexx, number } = props;
  let style = {
    backgroundColor: color,
  };
  if (indexx == number) {
    style.opacity = "1";
  }
  //   console.log(style);

  return (
    <div className="trafficlight_ctn">
      <div className="trafficlight" style={style}></div>
    </div>
  );
};
