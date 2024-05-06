import React from "react";
import Image from "next/image";
import Arrow from "@/public/arrow.svg";

const Explore = () => {
  return (
    <div className="w-[356.98px] h-[596.27px] flex flex-col justify-around mr-10">
      <div className="w-full h-[246px] flex flex-col justify-between">
        <p className="w-[398px] h-[192px] manrope text-[40px] font-[600] leading-[48px] tracking-[-2px] text-[#1C1C1C]">
          Enhance fortune 50 company’s insights teams research capabilities
        </p>
        <div className="flex gap-2 group">
          <span className="h-2 w-2 rounded-full bg-[#2DA950]"></span>
          <span className="h-2 w-2 rounded-full bg-[#E4E3E3] group-hover:bg-[#CAD0CB]"></span>
          <span className="h-2 w-2 rounded-full bg-[#E4E3E3]"></span>
        </div>
      </div>
      <button className="w-[245px] h-[88px] rounded-[100px] bg-[#1C1C1C] flex gap-[20px] justify-center items-center">
        <p className="manrope font-[500] text-[20px] leading-[27.32px] text-[#FFFFFF]">
          Explore More
        </p>
        <span className="">
          <Image src={Arrow} alt="arrow" />
        </span>
      </button>
    </div>
  );
};

export default Explore;
