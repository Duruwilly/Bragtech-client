import Section from "../../components/section/Section";

const ThirdSection = () => {
  return (
    <div className="flex flex-col items-center bg-[#F5F6F8]">
      <Section>
        <div className="pt-[64px] pb-[32px] pl-[64px] pr-[63.99px] flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
          <p className="text-[#54626A] text-3xl">
            Want zero trust security that's both
            <br />
            effective and easy to use? You need
            <br />
            Bragtech.
          </p>
          <div className="">
            <button className="text-center text-white text-base pt-6 pb-6 px-16 bg-primary rounded-[4px] border border-primary justify-end items-start flex">
              Try it Now
            </button>
          </div>
        </div>
        {/* image here later  */}
      </Section>
    </div>
  );
};

export default ThirdSection;
