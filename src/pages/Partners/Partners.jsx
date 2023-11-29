import { useEffect, useState } from "react";
import Section from "../../components/section/Section";
import axios from "axios";
import { BASE_URL } from "../../constants/Base-urls";

const Partners = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/partners`);
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
        <div className="px-[72px] pt-10">
          <div className="pt-[7px] pb-2 pl-6 border-l-4 border-[#DA251C]">
            <div>
              <span className="text-[#222222] text-4xl font-bold">Our </span>
              <span className="text-[#B50A0C] text-4xl font-bold">
                Partners
              </span>
            </div>
          </div>
          <div className="mt-10 mb-8 flex flex-wrap gap-5">
            {data?.map((item) => (
              <div
                key={item.id}
                className="bg-white px-6 w-ful h-ful shadow-xl flex justify-center items-center"
              >
                <img className="w-[170px]" src={item.image} alt="" />
              </div>
            ))}
            {/* {Array.from({ length: 42 }, (_, index) => (
              <div
                key={index}
                className="bg-white px-6 w-ful h-ful shadow-xl flex justify-center items-center"
              >
                <img
                  className="w-[170px]"
                  src={`/images/client${index + 1}.jpg.png`}
                  alt=""
                />
              </div>
            ))} */}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Partners;
