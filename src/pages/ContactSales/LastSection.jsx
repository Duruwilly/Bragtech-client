import React from "react";

const LastSection = () => {
  return (
    <div className="w-full py-12 pl-12 pr-[80px]">
      <div className="flex items-center justify-between">
        <div> {/* image here later */}</div>
        <div className="w-[467px] space-y-6">
          <h3 className="text-[#363F44] text-4xl font-bold">
            Bragtech’s Mobile
            <br />
            Application Security
            <br />
            Testing
          </h3>
          <p className="w-[455x] text-[#54626A] text-lg">
            Looking to add Bragtech to your security
            <br />
            offering? Join us on one of our daily Bragtech
            <br />
            AST Program overview calls, or sign up to
            <br />
            become a partner today.
          </p>

          <button className="p-4 bg-[#363F44] rounded-[4px] text-center text-white text-base">
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
