import React from "react";
import Section from "../../components/section/Section";

const ThirdSection = () => {
  return (
    <div className="w-full pb-12 bg-[#363F44]">
      <Section>
        <h3 className="text-white text-2xl font-bold break-words">
          Risk-Based Authentication
        </h3>
        <p className="text-white text-lg break-words mb-5">
          Bragtech’s dynamic solution detects and responds to potential threat
          signals to secure trusted
          <br />
          users and frustrate attackers.
        </p>
        <span className="text-white text-lg underline">
          Learn more about Risk-Based Authentication at Bragtech
        </span>
        <div className="flex justify-center items-center w-[348.16px] h-[209.98px]">
          <img
            src="/images/on-Solution.png.png"
            alt="whatsapp"
            className=" w-full p-0 m-0"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center w-[348.16px] h-[222.52px]">
            <img
              src="/images/graphic-customer.png.png"
              alt="whatsapp"
              className=" w-full p-0 m-0"
            />
          </div>
          <div className="">
            <h3 className="text-white text-2xl font-bold break-words mb-3">
              Success Stories from Bragtech Customers
            </h3>
            <p className="text-white text-lg break-words mb-5">
              No matter what industry you're in, which compliance requirements
              you're trying to meet,
              <br />
              and which security needs you're facing, Bragtech customers have
              insight for you
            </p>
            <span className="text-white text-lg underline">
              Explore Bragtech Customer Stories
            </span>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ThirdSection;
