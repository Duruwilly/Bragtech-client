import Section from "../../components/section/Section";
import { stripHtmlTags } from "../../utils/helpers";
import { usePageContext } from "./context/PageContext";

const LastSection = () => {
  const { data } = usePageContext();

  return (
    <>
      {data?.why_choose_us_status === "active" && (
        <div className="flex flex-col items-center py-9">
          <Section>
            <div className="">
              <h2 className="text-[#222222] text-4xl font-extrabold text-center mb-3">
                WHY CHOOSE US
              </h2>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-0">
              <div>
                <p className="lg:w-[530px] text-lg text-black opacity-60 leading-6 break-words font-light">
                  {stripHtmlTags(data?.why_choose_us_text)}
                </p>
                <div className="mt-8 lg:w-[622px] space-y-5">
                  <div className="flex gap-5 items-center">
                    <div>
                      <p>TECHNICAL KNOW-HOW</p>
                      <p className=" text-sm text-black opacity-60">
                        Our partnership with seasoned cybersecurity companies
                        and professionals ensure we have a base of highly
                        qualified Security professionals to tailor value-based
                        solutions and services to our Customers.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div>
                      <p>AVAILABILITY & PROFESSIONAL SUPPORT</p>
                      <p className=" text-sm text-black opacity-60">
                        We are always available to listen and help our
                        Customers. We do not only provide businesses with
                        solutions; we also support them.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-[250px] max-h-[175px] hidden lg:flex justify-center items-center">
                  <img
                    src={data?.why_choose_us_image}
                    alt="whatsapp"
                    className=" w-full p-0 m-0"
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>
      )}
    </>
  );
};

export default LastSection;
