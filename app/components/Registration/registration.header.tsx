"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Logo from "../Header/logo";

interface RegistrationHeaderProps {
  submitSuccess: boolean;
}

const RegistrationHeader = ({ submitSuccess }: RegistrationHeaderProps) => {
  const router = useRouter();
  return (
    <div className="h-[97.39px] w-full flex justify-between items-center">
      <Logo/>
      {submitSuccess ? null : (
        <button
          onClick={() => {
            router.push("/");
          }}
          className="h-[64px] w-[64px] sm:mr-8 mr-1 p-[16px] border rounded-[40px]"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_11_216)">
              <path
                d="M24 8L8 24"
                stroke="#0C1319"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 8L24 24"
                stroke="#0C1319"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_11_216">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      )}
    </div>
  );
};

export default RegistrationHeader;
