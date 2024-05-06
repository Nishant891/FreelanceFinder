import React from "react";
import ListFaqs from "./faqsList";
const FAQS = () => {
  return (
    <div className="h-[813px] w-full">
      <div className="w-full h-[749px] flex rounded-[40px] pt-12 bg-[#E8EEE7] md:flex-row md:items-start md:gap-[7.5rem] flex-col items-center gap-[1rem]">
        <div className="flex flex-col md:w-[491px] md:h-full md:items-end md:justify-end md:gap-[4rem] w-full h-[106px] items-center justify-center gap-[6px] ">
          <div className="flex flex-col gap-[12px] md:w-[405px] md:h-[111px] md:pl-0 w-full h-full pl-4">
            <h1 className="covered-by-your-grace-regular text-[32px] font-[400] leading-[35.2px] tracing-[-2px] text-[#9E9D9D]">
              What’s on your mind
            </h1>
            <p className="manrope font-[600] leading-[66px] tracing-[-1px] text-[#1C1C1C] md:text-[58px] text-[40px]">
              Ask Questions
            </p>
          </div>
          <div className="w-[476.49px] h-[514.61px] mr-4 hidden md:block">
            <svg
              width="491"
              height="475"
              viewBox="0 0 491 475"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M251.005 123.04H14.5072V0H255.167C369.093 0 401.151 14.6756 444.456 57.9807C477.934 91.7389 490.999 135.444 490.999 205.385V514.607H349.717V205.385C349.717 204.652 349.706 203.921 349.685 203.191L275.051 253.194L275.078 253.215L144.958 340.344C136.345 346.116 130.769 355.335 130.769 365.723C130.769 383.206 146.563 397.378 166.047 397.378L166.077 397.393H283.781V514.592H166.077H166.05C74.3429 514.592 0 447.884 0 365.596C0 313.559 29.7294 267.753 74.779 241.107L251.005 123.04Z"
                fill="url(#paint0_linear_0_212)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_212"
                  x1="245.5"
                  y1="2.84126e-08"
                  x2="245"
                  y2="457.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <ul className="h-[538px] overflow-scroll list-scrollbar md:w-[581px] md:p-0 md:mt-[2.3rem] w-full p-3">
          <ListFaqs />
        </ul>
      </div>
    </div>
  );
};

export default FAQS;
