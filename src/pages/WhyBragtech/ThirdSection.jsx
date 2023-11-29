import Section from "../../components/section/Section";
import { stripHtmlTags } from "../../utils/helpers";
import { usePageContext } from "./context/PageContext";

const ThirdSection = () => {
  const { data } = usePageContext();

  return (
    <>
      {data?.our_vision_status === "active" && (
        <div className="flex flex-col items-center py-9">
          <Section>
            <div className="">
              <h2 className="text-[#222222] text-4xl font-extrabold text-center mb-3">
                OUR VISSION
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-0">
              <div>
                <div className="max-w-[420px] max-h-[275px] flex justify-center items-center">
                  <img
                    src={data?.our_vision_image}
                    alt="whatsapp"
                    className=" w-full p-0 m-0"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-[#22222] text-2xl font-bold leading-9 break-words mb-3">
                  Our vission statement
                </h4>
                <p className="lg:w-[530px] text-lg text-black opacity-60 leading-6 break-words font-light">
                  {stripHtmlTags(data?.our_vision_text)}
                </p>
              </div>
            </div>
          </Section>
        </div>
      )}
    </>
  );
};

export default ThirdSection;
