import React from "react";
import Intro from "./intro";
import Hero from "./hero";
import Explore from "./explore";

const Body = () => {
  return (
    <div className="lg:w-[1233px] w-full sm:h-[886px] absolute top-[79px] left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-between">
      <Intro title="Success Stories" description="Every success journey we’ve encountered."/>
      <div className="w-full flex lg:flex-row lg:justify-between lg:items-end flex-col mt-6">
        <Hero/>
        <Explore/>
      </div>
    </div>
  );
};

export default Body;
