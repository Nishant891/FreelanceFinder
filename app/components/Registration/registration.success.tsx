import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const RegistrationSuccess = () => {
  const [count, setCount] = useState(5);
  const router = useRouter();
  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    setTimeout(() => {
      router.push("/");
    }, 5000);
    return () => clearInterval(countdown);
  }, []);
  return (
    <div className="flex flex-col gap-[5rem]">
      <div className="h-[357px] sm:w-[718px] w-full flex flex-col gap-[41px] justify-center items-center mt-[3rem] mb-[1rem]">
        <span>
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40.5" cy="40.5" r="28" fill="white" />
            <path
              d="M40.0014 73.3219C21.5919 73.3219 6.66809 58.3979 6.66809 39.9886C6.66809 21.5791 21.5919 6.65527 40.0014 6.65527C58.4107 6.65527 73.3347 21.5791 73.3347 39.9886C73.3347 58.3979 58.4107 73.3219 40.0014 73.3219ZM36.6768 53.3219L60.2471 29.7517L55.5331 25.0377L36.6768 43.8939L27.2488 34.4656L22.5347 39.1799L36.6768 53.3219Z"
              fill="#28B246"
            />
          </svg>
        </span>
        <div className="h-[236px] sm:w-[718px] w-full flex flex-col gap-[16px] justify-center items-center">
          <p className="covered-by-your-grace-regular text-[36px] font-[400] leading-[39.6px] tracing-[-2px] text-[#2DA950]">
            Success Submitted
          </p>
          <p className="manrope sm:text-[56px] text-[44px] font-[600] leading-[67.2px] tracing-[-2px] text-[#1C1C1C]">
            Congratulations
          </p>
          <p className="manrope sm:text-[27px] text-[15px] font-[500] leading-[35.1px] text-[#727272] text-center">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
        </div>
      </div>
      <div className="w-full">
        <p className="manrope sm:text-[20px] text-[10px] font-[500] leading-[26px] text-center text-[#727272]">
          Redirecting you to Homepage in{" "}
          <span className="text-[#1C1C1C]">
            <span className="text-[#1C1C1C]">{count}</span> Seconds
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
