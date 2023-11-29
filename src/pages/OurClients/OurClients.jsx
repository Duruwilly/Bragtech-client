import { useEffect, useState } from "react";
import Section from "../../components/section/Section";
import { Categories } from "./Categories";
import axios from "axios";
import { BASE_URL } from "../../constants/Base-urls";

const OurClients = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/categories-and-clients`
        );
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
    <div className="flex flex-col items-center bg-[#F7F7F7] flex-1">
      <Section>
        <div className="pt-10">
          <div className="pt-[7px] pb-2 pl-6 border-l-4 border-[#DA251C]">
            <div>
              <span className="text-[#222222] text-4xl font-bold">Our </span>
              <span className="text-[#B50A0C] text-4xl font-bold">Clients</span>
            </div>
          </div>
          <div className="py-10">
            {data.map((category, index) => (
              <Categories
                key={index}
                title={category.title}
                items={category.client}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default OurClients;
