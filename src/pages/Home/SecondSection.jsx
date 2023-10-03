import React from "react";
import Section from "../../components/section/Section";
import PrimaryButton from "../../components/common/PrimaryButton";
import { Link } from "react-router-dom";

const SecondSection = () => {
  return (
    <div className="flex flex-col items-center h[50vh] pt-[70px] pb-[px]">
      <Section>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-9">
          <div>
            <h4 className="text-[#363F44] text-4xl font-bold leading-9 break-words mb-3">
              Risk & Exposure Management
            </h4>
            <div className="selfstretch">
              <p className="lg:w-[730px] text-lg text-[#54626A] leading-6 break-words font-light">
                Bragtech helps in identifying, assessing, and mitigating risks
                that could affect an organization's assets, operations, and
                reputation. It includes identifying threats and vulnerabilities,
                evaluating their potential impact, and prioritizing risks.
                Mitigation strategies, such as security controls and contingency
                plans, are implemented to minimize risks.
              </p>
            </div>
            <div className="mt-3">
              <Link to="/contact-sales">
                <button
                  type="button"
                  data-text="Contact Sales"
                  className="rounded-[4px] text-xs p-[10px] hover:bg-transparent hover:text-[#343a40] bg-primary text-white thm-btn"
                >
                  Contact Sales
                </button>
              </Link>
            </div>
          </div>
          <div className="max-w-[340px] max-h-[250px] flex justify-center items-center">
            <img
              src="/images/secondHomeImg.png"
              alt="whatsapp"
              className=" w-full p-0 m-0"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SecondSection;
