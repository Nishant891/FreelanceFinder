import React from "react";
import Background from "./background";
import Body from "./body";

const About = () => {
  return (
    <div className="w-full flex justify-end items-center overflow-hidden relative lg:h-[1044px] h-[1440px]">
      <Background />
      <Body />
    </div>
  );
};

export default About;
