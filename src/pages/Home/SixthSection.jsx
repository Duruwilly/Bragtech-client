import { Link } from "react-router-dom";
import Section from "../../components/section/Section";
import { FaCheckCircle } from "react-icons/fa";
import { useHomeContext } from "./context/HomeContext";
import { stripHtmlTags } from "../../utils/helpers";

const SixthSection = () => {
  const { data } = useHomeContext();

  return (
    <div className="flex-1">
      {data?.section_3.status === "active" && (
        <div className="flex flex-col items-center py-[60px] bg-[#222222]">
          <Section>
            <div className="flex flex-col lg:flex-row justify-between items-cente lg:items-star pb-[48px] gap-8 lg:gap-0">
              <div className="max-w-[500p] max-h[650px]">
                <img
                  src={data?.section_3?.left_image}
                  alt=""
                  className=" w-full p-0 m-0"
                />
              </div>
              <div className="lg:w-[522.23px]">
                <h2 className="text-white text-4xl font-bold leading-9 break-words mb-4">
                  {data?.section_3?.title_1}
                </h2>
                <p className=" text-white text-lg break-words mb-5">
                  {stripHtmlTags(data?.section_3?.description_1)}
                </p>
                <Link
                  to={data?.section_3?.button_1_link}
                  className="rounded-[4px] w-full h-[58px] text-xs py-[20px] px-[45px] border border-white text-white"
                >
                  <button className="mt-4 text-base text-center tracking-[0.80px]">
                    {data?.section_3?.button_1_text}
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-7 lg:gap-0">
              {/* second row */}
              <div className="lg:w[522.23px]">
                <h4 className="text-white text-2xl font-bold mb-5">
                  Supporting Your Security Goals
                </h4>
                {data?.section_3?.bullet_1_status === "active" && (
                  <div className="flex items-cente gap-4 mt-3">
                    <FaCheckCircle color="#B50A0C" size={40} />
                    <p>
                      <span className="text-white text-lg font-bold">
                        {data?.section_3?.bullet_1_title}
                      </span>
                      <span className="text-white text-lg break-words">
                        {" "}
                        {data?.section_3?.bullet_1_description}
                      </span>
                    </p>
                  </div>
                )}
                {/*  */}
                {data?.section_3?.bullet_2_status === "active" && (
                  <div className="flex items-cente gap-4 mt-3">
                    <FaCheckCircle color="#B50A0C" size={40} />
                    <p>
                      <span className="text-white text-lg font-bold">
                        {data?.section_3?.bullet_2_title}
                      </span>
                      <span className="text-white text-lg break-words">
                        {" "}
                        {data?.section_3?.bullet_2_description}
                      </span>
                    </p>
                  </div>
                )}
                {/*  */}
                {data?.section_3?.bullet_3_status === "active" && (
                  <div className="flex items-cente gap-4 mt-3">
                    <FaCheckCircle color="#B50A0C" size={35} />
                    <p>
                      <span className="text-white text-lg font-bold">
                        {data?.section_3?.bullet_3_title}
                      </span>
                      <span className="text-white text-lg break-words">
                        {" "}
                        {data?.section_3?.bullet_3_description}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Section>
        </div>
      )}
    </div>
  );
};

export default SixthSection;
