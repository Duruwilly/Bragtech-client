import { useEffect, useState } from "react";
import Section from "../../components/section/Section";
import axios from "axios";
import { BASE_URL } from "../../constants/Base-urls";

const SecondSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/services`);
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
    <div className="flex flex-col items-center py-[60px] bg-[#F7F7F7]">
      <Section>
        <h2 className="text-[#363F44] text-4xl font-bold break-words mb-10">
          Services
        </h2>
        <div className="grid grid-cols-3 homeseventhSection-grid">
          {/* first row */}
          {data?.map((item) => (
            <>
              {item.status === "active" && (
                <div key={item.id}>
                  <div className="max-w-[315px] max-h-[180px]">
                    <img
                      src={item.image}
                      alt="whatsapp"
                      className=" w-full p-0 m-0"
                    />
                  </div>
                  <h3 className="text-[#363F44] text-2xl font-bold break-words">
                    {item.title}
                  </h3>
                  <p className="lg:w-[331px] text-[#54626A] text-lg break-words mt-5">
                    {item.description}
                  </p>
                </div>
              )}
            </>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default SecondSection;
