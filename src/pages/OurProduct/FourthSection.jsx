import React from "react";
import Section from "../../components/section/Section";

const FourthSection = () => {
  return (
    <div className="flex flex-col items-center bg-[#DAE4E6] py-24">
      <Section>
        <div className="flex flex-col lg:flex-row  justify-between items-center gap-7">
          <div className="max-w-[524.94px] max-h-[350px] rounded-[10px]">
            <img
              src="/images/front-view-woman-posing.png"
              alt=""
              className="w-full p-0 m-0"
            />
          </div>
          <div className="">
            <p className="text-[#363F44] text-4xl font-bold break-words">
              Bragtech Business Intelligent Tools
            </p>
            <p className="lg:w-[517px] text-[#54626A] text-lg break-words my-5">
              Bragtech’s world class business Intelligent Tools, are all about
              helping you understand trends and deriving insights from your data
              so that you can make tactical and strategic business decisions.
            </p>
            <button className="w-[159px] h-[58px] p-[10px] rounded-lg border border-black text-center text-[#222222] text-base break-words">
              Contact Us Now
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FourthSection;
