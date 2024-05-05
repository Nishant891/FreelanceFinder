"use client"
import React from "react";
import { useRouter } from "next/navigation";
const CallToAction = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center gap-[15.67px]">
      <button
        onClick={() => {
          router.push("/register");
        }}
        className="flex justify-center items-center h-[77.22px] w-[189.56px] border-[1.31px] rounded-[107.06px] hover:bg-[#F1F1F1]"
      >
        <h1 className="manrope text-[18px] font-500"> Get Projects</h1>
      </button>
      <button className="flex justify-center items-center h-[77.22px] w-[223.39px] rounded-[107.06px] bg-[#1C1C1C] text-white hover:bg-[#4E4E4E]">
        <h1 className="manrope text-[18px] font-600"> Onboard Talent</h1>
      </button>
    </div>
  );
};

export default CallToAction;
