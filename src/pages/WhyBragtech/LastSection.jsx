import Section from "../../components/section/Section";

const LastSection = () => {
  return (
    <div className="w-full bg-[#F5F6F8]">
      <Section>
        <div className="pt-[64px] pb-[32px] pl-[64px] pr-[63.99px] flex justify-between items-center">
          <p className="text-[#54626A] text-3xl">
            Want to hear more about how
            <br />
            Bragtech’s multi-factor authentication
            <br />
            solution is the right choice for your
            <br />
            organization? Get your free trial
            <br />
            now!
          </p>
          <div className="">
            <button className="text-center text-white text-base pt-6 pb-6 px-16 bg-[#FF4500] rounded-[4px]">
              Get a Free Trial of Bragtech
            </button>
          </div>
        </div>
        {/* image here later  */}
      </Section>
    </div>
  );
};

export default LastSection;
