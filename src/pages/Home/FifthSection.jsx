import Section from "../../components/section/Section";

const FifthSection = () => {
  return (
    <div className="w-full py-[48px] bg-[#F7F7F7]">
      <Section>
        <div className="flex justify-between items-center">
          <div className="w-[375.05px] h-[250px]">
            <img
              src="/images/african-man-test.jpeg"
              alt=""
              className=" w-full p-0 m-0"
            />
          </div>
          <div>
            <h3 className="text-[#363F44] text-4xl font-bold break-words mb-4">
              Get Bragtech — and so much more
            </h3>
            <div className="w-[707.19px]">
              <p className="text-[#54626A] text-lg leading-6 break-words mb-5">
                Build on Bragtech's strong authentication and device trust
                protections with more layers of defense against phishing and
                web-based attacks — in one step and all available as part of
                Bragtech's Security Step-Up promotion. Here's your chance to
                secure all of your critical attack vectors — email, web traffic
                and credential theft.
              </p>
              <span className="text-[#54626A] text-lg underline break-words">
                Get Started with Security Step-Up Now
              </span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FifthSection;
