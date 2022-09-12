import React from "react";
import { useState } from "react";
import { Trafficlights } from "./trafficlights";
import "./next.css";

export const Next = () => {
  const [index, setIndex] = useState(1);
  const nextBtn = () => {
    if (index === 3) {
      setIndex(1);
      console.log("toi so 3");
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <>
      <div className="nextBtn-ctn">
        <button className="nextBtn" onClick={nextBtn}>
          next
        </button>
      </div>
      <div className="flex">
        <Trafficlights color="red" indexx={index} number="1" />
        <Trafficlights color="yellow" indexx={index} number="2" />
        <Trafficlights color="green" indexx={index} number="3" />
      </div>
    </>
  );
};
