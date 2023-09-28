import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-[#DAE4E6] pt-8 pb-2">
      <div className="w-full max-w-screen-lg pr-6">
        <div className="text-right">
          <span className="text-[#54626A] text-xs underline">Our Blog</span>
          <span className="text-[#A0A0A0] font-light mx-6">|</span>
          <span className="text-[#54626A] text-xs underline">
            Docs & Support
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
