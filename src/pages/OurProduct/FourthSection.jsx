import React from "react";
import Section from "../../components/section/Section";

const FourthSection = () => {
  return (
    <div className="w-full bg-[#DAE4E6] py-24">
      <Section>
        {/* <div style="width: 100%; height: 100%; padding-left: 131.20px; padding-right: 131.21px; justify-content: center; align-items: center; gap: 64px; display: inline-flex">
          <img
            style="width: 524.94px; height: 350px; border-radius: 10px"
            src="https://via.placeholder.com/525x350"
          />
          <div style="width: 489.59px; height: 270px; position: relative">
            <div style="padding-bottom: 1px; padding-right: 21.59px; left: -18px; top: -1px; position: absolute; justify-content: flex-start; align-items: flex-start; display: inline-flex">
              <div style="color: #363F44; font-size: 36px; font-family: Helvetica Neue; font-weight: 700; line-height: 38px; word-wrap: break-word">
                Bragtech Business Intelligent
                <br />
                Tools
              </div>
            </div>
            <div style="left: -12px; top: 92px; position: absolute; justify-content: flex-start; align-items: flex-start; display: inline-flex">
              <div style="width: 517px; color: #54626A; font-size: 18px; font-family: Helvetica Neue; font-weight: 400; line-height: 24px; word-wrap: break-word">
                Bragtech’s world class business Intelligent Tools, are all about
                helping you understand trends and deriving insights from your
                data so that you can make tactical and strategic business
                decisions.
              </div>
            </div>
            <div style="width: 159px; height: 58px; padding: 10px; left: -11.67px; top: 211.29px; position: absolute; background: #DAE4E6; border-radius: 8px; border: 1px black solid; justify-content: center; align-items: center; gap: 8px; display: inline-flex">
              <div style="text-align: center; color: #222222; font-size: 16px; font-family: Helvetica Neue; font-weight: 400; line-height: 16px; word-wrap: break-word">
                Contact Us Now
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex justify-between">
          <div className="max-w-[524.94px] max-h-[350px] rounded-[10px]">
            <img
              src="/images/front-view-woman-posing.png"
              alt=""
              className="w-full p-0 m-0"
            />
          </div>
          <div className="">
            <p className="text-[#363F44] text-4xl font-bold break-words">
              Bragtech Business Intelligent
              <br />
              Tools
            </p>
            <p className="w-[517px] text-[#54626A] text-lg break-words my-5">
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
