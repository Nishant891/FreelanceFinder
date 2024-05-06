import React from "react";
import Intro from "./intro";
import Hero from "./hero";
import Explore from "./explore";

const Body = () => {
  return (
    <div className="flex flex-col gap-[2rem] items-center lg:w-[1233px] lg:h-[886px] lg:top-[79px] lg:justify-between w-full h-full absolute top-[0px] left-1/2 justify-evenly transform -translate-x-1/2">
      <Intro
        title="Success Stories"
        description="Every success journey we’ve encountered."
      />
      <div className="w-full mt-6 flex lg:flex-row lg:justify-between lg:items-end lg:gap-[0rem] flex-col justify-center items-center gap-[15rem]">
        <Hero />
        <Explore />
      </div>
    </div>
  );
};

export default Body;
