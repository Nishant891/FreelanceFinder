"use client";
import React from "react";
import { useState, ChangeEvent, FormEvent } from "react";
import RegistrationSuccess from "./registration.success";

//This intro is reused from the Intro component in the About folder
import Intro from "../About/intro";

interface RegistrationFormProps {
  submitSuccess: boolean;
  setSubmitSuccess: Function;
}

const RegistrationForm = ({
  submitSuccess,
  setSubmitSuccess,
}: RegistrationFormProps) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const verifyEmail = (email: string) => {
    const regex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, name: event.target.value });
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, email: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    verifyEmail(user.email) ? setSubmitSuccess(true) : setErrorMessage(true);
  };
  return (
    <>
      {submitSuccess ? (
        <RegistrationSuccess />
      ) : (
        <div className="h-[538.22px] flex flex-col gap-[62px] items-center sm:w-[588px] w-full mt-[3rem] mb-[1rem]">
          <Intro
            title="Registration Form"
            description="Start your success Journey here!"
          />
          <form
            onSubmit={handleSubmit}
            className="h-[298.22px] flex flex-col gap-[57px] sm:w-[417px] sm:mt-0 w-full mt-4"
          >
            <div className="h-[174px] flex flex-col gap-[24px] sm:w-[417px] w-full">
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={(event) => {
                  handleNameChange(event);
                }}
                placeholder="Enter your name"
                className="manrope w-full h-[75px] pt-[24px] pr-[36px] pb-[24px] pl-[36px] bg-[#EFEFEF] border rounded-[64px] text-[20px] font-[500] leading-[27.32px] text-[#827A7A] focus:outline-none"
              ></input>
              <div className="flex flex-col gap-[7px]">
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={(event) => {
                    handleEmailChange(event);
                  }}
                  placeholder="Enter your email"
                  className="manrope w-full h-[75px] pt-[24px] pr-[36px] pb-[24px] pl-[36px] bg-[#EFEFEF] border rounded-[64px] text-[20px] font-[500] leading-[27.32px] text-[#827A7A] focus:outline-none"
                ></input>
                {errorMessage ? (
                  <span className="w-[255px] h-[22px] flex gap-[7px]">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="8.89941"
                        y="6.00024"
                        width="3.2"
                        height="8"
                        fill="white"
                      />
                      <path
                        d="M10.5016 16.6666C6.81973 16.6666 3.83496 13.6818 3.83496 9.99992C3.83496 6.31802 6.81973 3.33325 10.5016 3.33325C14.1835 3.33325 17.1683 6.31802 17.1683 9.99992C17.1683 13.6818 14.1835 16.6666 10.5016 16.6666ZM9.83496 11.9999V13.3332H11.1683V11.9999H9.83496ZM9.83496 6.66658V10.6666H11.1683V6.66658H9.83496Z"
                        fill="#FF0808"
                      />
                    </svg>
                    <p className="manrope font-[500] text-[16px] leading-[21.86px] text-[#FF0808]">
                      Enter a valid email address
                    </p>
                  </span>
                ) : null}
              </div>
            </div>
            <button
              disabled={user.name === "" || user.email === ""}
              className={`h-[77.22px] sm:w-[417px] w-full rounded-[107.06px] bg-[#1C1C1C] disabled:bg-[#C9C9C9] focus:outline-none`}
            >
              <p className="manrope text-[18px] font-[600] leading-[24.59px] text-[#FFFFFF]">
                Submit
              </p>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default RegistrationForm;
