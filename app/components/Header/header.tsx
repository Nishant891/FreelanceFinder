import React from "react";
import Logo from "./logo";
import CallToAction from "./callToAction";
const Header = () => {
  return (
    <div className="h-[111.17px] w-full flex items-center justify-between sm:p-4 sm:border sm:border-[#EAEAEA] sm:rounded-[65.28px]">
      <Logo />
      <CallToAction />
    </div>
  );
};

export default Header;
