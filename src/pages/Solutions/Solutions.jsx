import React, { useEffect, useState } from "react";
import SolutionsData from "./SolutionsData";
import Section from "../../components/section/Section";
import { BASE_URL } from "../../constants/Base-urls";
import axios from "axios";

const SolutionsList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/homepage`);
        if (response.data.message === "success") {
          setData(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center h-[68p] pb-[32px] pt-[70px]">
      <Section>
        <div>
          <span className=" text-primary text-2xl font-bold leading-7">
            Solutions
          </span>
          <p className="text-[#54626A] text-lg font-light mt-2">
            Partner Solutions we offer
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-3 homeseventhSection-grid gap-20 pb-8">
          {data?.section_2?.solutions.map((item, index) => (
            <SolutionsData data={item} key={index} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default SolutionsList;
