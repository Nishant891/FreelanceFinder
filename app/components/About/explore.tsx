import React from "react";

const Explore = () => {
  return (
    <div className="flex flex-col lg:w-[356.98px] lg:h-[596.27px] lg:justify-around lg:items-start lg:p-0 lg:mr-10 w-full h-[386px] items-center justify-center p-2 mr-0">
      <div className="w-full h-[246px] flex flex-col lg:justify-between lg:items-start justify-center items-center">
        <p className="manrope h-[192px] leading-[48px] tracking-[-2px] text-[#1C1C1C] lg:w-[398px] lg:text-[40px] w-full text-[30px] font-[600]">
          Enhance fortune 50 company’s insights teams research capabilities
        </p>
        <div className="flex gap-2 group ml-2">
          <span className="h-2 w-2 rounded-full bg-[#2DA950]"></span>
          <span className="h-2 w-2 rounded-full bg-[#E4E3E3] group-hover:bg-[#CAD0CB]"></span>
          <span className="h-2 w-2 rounded-full bg-[#E4E3E3]"></span>
        </div>
      </div>
      <button className="group w-[245px] h-[88px] rounded-[100px] bg-[#1C1C1C] flex gap-[20px] justify-center items-center transition duration-300 ease-in-out hover:bg-green-700">
        <p className="manrope font-[500] text-[20px] leading-[27.32px] text-[#FFFFFF]">
          Explore More
        </p>
        <span className="">
          <svg
            className="group-hover:text-black"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1716 10.9999L4 10.9999L4 12.9999L16.1716 12.9999L10.8076 18.3638L12.2218 19.778L20 11.9999L12.2218 4.22168L10.8076 5.63589L16.1716 10.9999Z"
              fill="white"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Explore;
