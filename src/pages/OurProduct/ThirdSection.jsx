import Section from "../../components/section/Section";

const ThirdSection = () => {
  return (
    <div className="w-full bg-[#F5F6F8]">
      <Section>
        <div className="pt-[64px] pb-[32px] pl-[64px] pr-[63.99px] justify-between flex">
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
