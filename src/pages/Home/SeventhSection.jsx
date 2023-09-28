import Section from "../../components/section/Section";

const SeventhSection = () => {
  return (
    <div className="flex flex-col items-center py-[60px] bg-[#F7F7F7]">
      <Section>
        <h2 className="text-[#363F44] text-4xl font-bold break-words mb-10">
          New and Noteworthy
        </h2>
        <div className="grid grid-cols-3 homeseventhSection-grid">
          {/* first row */}
          <div>
            <div className="max-w-[315px] max-h-[180px]">
              <img
                src="/images/phishin.png"
                alt="whatsapp"
                className=" w-full p-0 m-0"
              />
            </div>
            <h3 className="text-[#363F44] text-2xl font-bold break-words">
              Security Awareness Anti- <br />
              Phishing Simulation
              <br />& Training
            </h3>
            <p className="lg:w-[331px] text-[#54626A] text-lg break-words mt-5">
              Our fully-customizable enterprise ready Anti-phishing Simulation
              solution creates phishing emails or messages to assess employees'
              susceptibility to attacks and trains them how to identify these
              threats and phishing attempts.
            </p>
          </div>
          {/* second row */}
          <div>
            <div className="max-w-[315px] max-h-[180px]">
              <img
                src="/images/phone-man.png"
                alt="whatsapp"
                className=" w-full p-0 m-0"
              />
            </div>
            <h3 className="text-[#363F44] text-2xl font-bold break-words">
              Mobile Device <br />
              Management (MDM)
            </h3>
            <p className="lg:w-[331px] text-[#54626A] text-lg break-words mt-5">
              In today's digital world, it is difficult for businesses to
              compete without a sound mobility strategy. Our MDM solution
              addresses complex mobile device management and security These
              features ensure simple, safe and easy ways to manage variety of
              corporate owned as well as BYO devices.
            </p>
          </div>
          {/* third row */}
          <div>
            <div className="max-w-[315px] max-h-[180px]">
              <img
                src="/images/phone-man.png"
                alt="whatsapp"
                className=" w-full p-0 m-0"
              />
            </div>
            <h3 className="text-[#363F44] text-2xl font-bold break-words">
              Eliminate Interruptions,
              <br />
              Boost Productivity,
              <br />
              Enhance Security
            </h3>
            <p className="lg:w-[331px] text-[#54626A] text-lg break-words mt-5">
              Streamline user authentication for an
              <br />
              uninterrupted access experience for
              <br />
              your workforce. Follow Bragtech's journey in
              <br />
              bringing this new capability to market
              <br />
              by clicking below
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SeventhSection;
