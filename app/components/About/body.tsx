import React from "react";
import Intro from "./intro";
import Hero from "./hero";
import Explore from "./explore";

const Body = () => {
  return (
    <div className="w-[1233px] h-[886px] absolute top-[79px] right-[62px] flex flex-col items-center justify-between pl-14">
      <Intro title="Success Stories" description="Every success journey we’ve encountered."/>
      <div className="w-full h-[5966px] flex justify-between items-end">
        <Hero/>
        <Explore/>
      </div>
    </div>
  );
};

export default Body;
