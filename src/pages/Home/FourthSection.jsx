import { Link } from "react-router-dom";
import Section from "../../components/section/Section";
import { FaCheckCircle } from "react-icons/fa";
import { useHomeContext } from "./context/HomeContext";

const FourthSection = () => {
  const { data } = useHomeContext();
  return (
    <>
      {data?.section_2?.status === "active" && (
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
              {data?.section_2?.solutions.slice(0, 9).map((item, index) => (
                <div key={index}>
                  <div className="w-[100px] h-[50px] lg:w-[140px] lg:h-[90px] mb-4">
                    <img src={item.image} alt="" />
                  </div>
                  <span className="text-[#363F44] text-lg font-bold">
                    {item.title}
                  </span>
                  <p className=" text-[#54626A] text-lg mt-4">
                    {item.description}
                  </p>
                  {item.link && (
                    <div className="flex items-center gap-4 mt-6">
                      <FaCheckCircle color="#B50A0C" size={20} />
                      <Link to={item.link}>
                        <span className="text-[#B50A0C] text-lg underline">
                          Get Fast MFA
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {data?.section_2?.view_more_status === "active" && (
              <Link
                to={data?.section_2?.view_more_link}
                // to="/solutions"
                className="w-full flex items-center justify-center"
              >
                <button
                  data-text={data?.section_2?.view_more_text}
                  className="py-3 px-8 bg-[#B50A0C] rounded-[4px] hover:bg-transparent hover:text-[#343a40] text-center text-white mt-6 thm-btn"
                >
                  {data?.section_2?.view_more_text}
                </button>
              </Link>
            )}
          </Section>
        </div>
      )}
    </>
  );
};

export default FourthSection;
