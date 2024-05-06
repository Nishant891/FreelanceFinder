import React from "react";
interface IntroProps {
    title: string;
    description: string;
}
const Intro = ({title, description} : IntroProps) => {
  return (
    <div className="h-[178px] flex flex-col items-center justify-between sm:w-[588px] w-full ">
      <p className="covered-by-your-grace-regular text-[36px] text-[#2DA950] font-[400]">
        {title}
      </p>
      <p className="manrope tracking-[-1.7px] lg:leading-[67.2px] sm:text-[56px] leading-[47px] text-[44px] font-[600] text-center">
        {description}
      </p>
    </div>
  );
};

export default Intro;
