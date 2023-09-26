import React from "react";
import Section from "../../components/section/Section";
import { FaCheckCircle } from "react-icons/fa";

const LastSection = () => {
  return (
    <div className="w-full bg-[#363F44] py-24">
      <Section>
        <div className="flex justify-between">
          <div className="flex justify-center items-center w-[477px] h-[318px]">
            <img
              src="/images/Plantperson.png.png"
              alt="whatsapp"
              className=" w-full p-0 m-0"
            />
          </div>
          <div>
            <h3 className="text-white text-4xl font-bold">
              Learn how Bragtech is right-sized
              <br />
              for you:
            </h3>
            <div className="flex items-center gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <span className="text-white font-bold text-lg underline">
                Small and Medium-Sized Businesses
              </span>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <span className="text-white font-bold text-lg underline">
                Enterprise
              </span>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <span className="text-white font-bold text-lg underline">
                Federal Government and Contractors
              </span>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <span className="text-white font-bold text-lg underline">
                State and Local Government
              </span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default LastSection;
