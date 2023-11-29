import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SolutionsData = ({ data }) => {
  return (
    <div>
      <div className="w-[100px] h-[50px] lg:w-[140px] lg:h-[90px] mb-4">
        <img src={data.image} alt="" />
      </div>
      <span className="text-[#363F44] text-lg font-bold">{data.title}</span>
      <p className=" text-[#54626A] text-lg mt-4">{data.description}</p>
      {data.link && (
        <div className="flex items-center gap-4 mt-6">
          <FaCheckCircle color="#B50A0C" size={20} />
          <Link to={data.link}>
            <span className="text-[#B50A0C] text-lg underline">
              Get Fast MFA
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SolutionsData;
