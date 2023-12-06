import { Link } from "react-router-dom";
import Section from "../../components/section/Section";
import { useHomeContext } from "./context/HomeContext";

const SeventhSection = () => {
  const { data } = useHomeContext();

  return (
    <div className="flex-1">
      {data?.section_4?.read_more_status === "active" && (
        <div className="flex flex-col items-center py-[60px] bg-[#F7F7F7]">
          <Section>
            <h2 className="text-[#363F44] text-4xl font-bold break-words mb-10">
              Services
            </h2>
            <div className="grid grid-cols-3 homeseventhSection-grid">
              {/* first row */}
              {data?.section_4?.services.map((item) => (
                <div>
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
              ))}
            </div>
            {data?.section_4?.read_more_status && (
              <div className="text-center mt-6">
                {" "}
                <Link
                  to={data?.section_4?.read_more_link}
                  className="text-[#363F44] text-3xl font-bold"
                >
                  {data?.section_4?.read_more_text}
                </Link>
              </div>
            )}
          </Section>
        </div>
      )}
    </div>
  );
};

export default SeventhSection;
