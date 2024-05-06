"use client";
import React from "react";
import { useRouter } from "next/navigation";
const CallToAction = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center gap-[10px] sm:gap-[15.67px]">
      <button
        onClick={() => {
          router.push("/register");
        }}
        className="sm:p-0 sm:h-[77.22px] sm:w-[189.56px] p-3 flex justify-center items-center border-[1.31px] rounded-[107.06px] transition duration-300 ease-in-out hover:bg-[#F1F1F1]"
      >
        <h1 className="manrope text-[10px] sm:text-[14px] font-500">
          {" "}
          Get Projects
        </h1>
      </button>
      <button className="sm:h-[77.22px] sm:w-[223.39px] sm:p-0 p-3 flex justify-center items-center rounded-[107.06px] bg-[#1C1C1C] text-white transition duration-300 ease-in-out hover:bg-[#4E4E4E]">
        <h1 className="manrope sm:text-[14px] text-[10px] font-600">
          {" "}
          Onboard Talent
        </h1>
      </button>
    </div>
  );
};

export default CallToAction;
