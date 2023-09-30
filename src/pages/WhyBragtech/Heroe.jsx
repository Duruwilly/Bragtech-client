import Section from "../../components/section/Section";

const Heroe = () => {
  return (
    <div className="flex flex-col items-center bg-[#F7F7F7] pt-[52px] pb-[64px] flex-1">
      <Section>
        <div className="flex flex-col-reverse xl:flex-row justify-between items-center xl:gap-0 gap-7">
          <div className="xl:w-[572.63px]">
            <h3 className="text-[#363F44] text-4xl font-semibold leading-[48px] pb-6">
              Why Bragtech?
            </h3>
            <p className="text-[#54626A] text-xl font-normal leading-[24px]">
              Cyber attackers are a persistent bunch. They’ve found
              <br />
              new ways to circumvent weaker multi-factor
              <br />
              authentication solutions, placing at risk what you had
              <br />
              once secured. Some MFA providers have responded with
              <br />
              blunt new defenses that keep bad actors out, but also
              <br />
              make it more difficult for trusted employees to get in. This
              <br />
              doesn’t work in our new world of hybrid work, where
              <br />
              people expect flexibility and rely on the speed and
              <br />
              consistency of their remote access to get the job done.
              <br />
              We need stronger security that works smarter, not just
              <br />
              harder, to protect organizations.
            </p>
          </div>
          <div className="max-w-[450px] h[382px] ">
            <img src="/images/whyHeroe.png" alt="" className="w-full p-0" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Heroe;
