import Section from "../../components/section/Section";
import PrimaryButton from "../../components/common/PrimaryButton";

const ThirdSection = () => {
  return (
    <div className="flex flex-col items-center pt-[30px] pb-[32px]">
      <Section>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-9">
          <div className="flex justify-center items-center">
            <img
              src="/images/thirdHomeImg.png"
              alt="whatsapp"
              className=" w-full p-0 m-0"
            />
          </div>
          <div>
            <h4 className=" text-[#363F44] text-4xl font-bold leading-9 break-words mb-3">
              Security Orchestration, Automation <br />
              and Response (SOAR)
            </h4>
            <div className="lg:w-[689px]">
              <p className=" text-[#54626A] text-lg font-light leading-6 break-words mb-3">
                Security Orchestration, Automation, and Response (SOAR) is a
                strategy that integrates security tools, automates tasks, and
                coordinates incident response to enhance cybersecurity
                operations.
              </p>
              <p className=" text-[#54626A] text-lg font-light leading-6 break-words">
                Using SOAR we improves efficiency, consistency, and scalability
                in security operations, while also addressing challenges like
                complexity and ongoing maintenance. It aims to streamline
                incident response, minimize manual effort, and elevate an
                organization's overall security posture.
              </p>
              <div className="mt-3">
                <PrimaryButton
                  transparent={false}
                  title="Contact Sales"
                  path="contact-sales"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ThirdSection;
