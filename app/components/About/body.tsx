import React from "react";
import Intro from "./intro";
import Hero from "./hero";
import Explore from "./explore";

const Body = () => {
  return (
    <div className="lg:w-[1233px] w-full lg:h-[886px] h-full absolute lg:top-[79px] top-[0px] left-1/2 transform -translate-x-1/2 flex flex-col gap-[2rem] items-center lg:justify-between justify-evenly">
      <Intro title="Success Stories" description="Every success journey we’ve encountered."/>
      <div className="w-full flex lg:flex-row lg:justify-between lg:items-end flex-col justify-center items-center mt-6">
        <Hero/>
        <Explore/>
      </div>
    </div>
  );
};

export default Body;
