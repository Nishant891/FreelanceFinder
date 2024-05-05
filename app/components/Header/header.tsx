import React from "react";
import Logo from "./logo";
import CallToAction from "./callToAction";
const Header = () => {
  return (
    <div className="w-[1232px] h-[111.17px] border border-[#EAEAEA] rounded-[65.28px] flex items-center justify-between p-4 m-2">
      <Logo/>
      <CallToAction/>
    </div>
  );
};

export default Header;
