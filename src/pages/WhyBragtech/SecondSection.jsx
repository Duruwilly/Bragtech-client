import React from "react";
import Section from "../../components/section/Section";
import { usePageContext } from "./context/PageContext";
import { stripHtmlTags } from "../../utils/helpers";

const SecondSection = () => {
  const { data } = usePageContext();

  return (
    <>
      {data?.our_mission_status === "active" && (
        <div className="flex flex-col items-center py-9">
          <Section>
            <div className="">
              <h2 className="text-[#222222] text-4xl font-extrabold text-center mb-3">
                OUR MISSION
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-0">
              <div>
                <h4 className="text-[#22222] text-2xl font-bold leading-9 break-words mb-3">
                  {stripHtmlTags(data?.our_mission_text)}
                </h4>
                {/* <p className="lg:w-[530px] text-lg text-black opacity-60 leading-6 break-words font-light">
              To provide innovative solutions to our Customers by linking
              people, technologies and ideas.
            </p> */}
              </div>
            </div>
          </Section>
        </div>
      )}
    </>
  );
};

export default SecondSection;
