import Section from "../../components/section/Section";
import { stripHtmlTags } from "../../utils/helpers";
import { usePageContext } from "./context/PageContext";

const FirstSection = () => {
  const { data } = usePageContext();

  return (
    <>
      {data?.who_are_we_status === "active" && (
        <div className="flex flex-col items-center py-9">
          <Section>
            <div className="">
              <h2 className="text-[#222222] text-4xl font-extrabold text-center">
                WHO WE ARE
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-0">
              <div className="max-w-[429px] max-h-[560px] flex justify-center items-center">
                <img
                  src={data?.who_are_we_image}
                  alt="whatsapp"
                  className=" w-full p-0 m-0"
                />
              </div>
              <div>
                <div className="">
                  <p className="lg:w-[530px] text-lg text-[#54626A] leading-6 break-words font-light">
                    {stripHtmlTags(data?.who_are_we_text)}
                  </p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      )}
    </>
  );
};

export default FirstSection;
