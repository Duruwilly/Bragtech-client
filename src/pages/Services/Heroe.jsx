import Section from "../../components/section/Section";

const Heroe = () => {
  return (
    <div className="flex flex-col items-center h-[336p] pt-[64px] pb-[52px] bg-[#F7F7F7]">
      <Section>
        <div className="flex flex-col-reverse xl:flex-row items-center gap-5 xl:gap-14">
          <div className="lg:w-[689px]">
            <h3 className="lg:w-[267.83p] text-[#363F44] text-[46px] font-bold break-words">
              Access Security for Everyone, from Any Device, Anywhere
            </h3>
            <p className="lg:w-[267.83p] text-[#54626A] text-lg break-words mt-5">
              For organizations of all sizes that need to protect sensitive data
              at scale, Bragtech is the user-friendly zero-trust security
              platform for all users, all devices and all applications
            </p>
            <button
              data-text="Watch Our Product Overview Video"
              className=" py-5 px-4 bg-[#B50A0C] rounded-[4px] hover:bg-transparent hover:text-[#343a40] text-center text-white mt-6 thm-btn"
            >
              Watch Our Product Overview Video
            </button>
          </div>
          <div className="max-w-[479.41px] max-h-[320px] flex4">
            <img
              src="/images/charming-woman-standing.png"
              alt="logo"
              className=" w-full p-0 m-0"
            />
          </div>
        </div>
        <div>
          <p className="text-[#363F44] text-2xl font-bold mt-7">
            With Bragtech, you can:
          </p>
          <div className="flex flex-wrap justify-between mt-10">
            {/* first row */}
            <div>
              <div className="w-[140px] h-[90px] mb-4">
                <img src="/images/oemImg1.svg.png" alt="" />
              </div>
              <span className="text-center text-[#363F44] text-base font-bold break-words">
                Confirm user identities in
                <br />a snap.
              </span>
            </div>
            {/* second row */}
            <div>
              <div className="w-[140px] h-[90px] mb-4">
                <img src="/images/device_icon.svg.png" alt="" />
              </div>
              <span className="text-center text-[#363F44] text-base font-bold break-words">
                Monitor the data
                <br />
                base of your customers
              </span>
            </div>
            {/* third row */}
            <div>
              <div className="w-[140px] h-[90px] mb-4">
                <img src="/images/adaptive_icon.svg.png" alt="" />
              </div>
              <span className="text-center text-[#363F44] text-base font-bold break-words">
                Enginnered <br />
                System
              </span>
            </div>
            {/* third row */}
            <div>
              <div className="w-[140px] h-[90px] mb-4">
                <img src="/images/svg4.svg.png" alt="" />
              </div>
              <span className="text-center text-[#363F44] text-base font-bold break-words">
                Network and data
                <br />
                Centred Products
              </span>
            </div>
            {/* last row */}
            <div>
              <div className="w-[140px] h-[90px] mb-4">
                <img src="/images/rectangle-57.png" alt="" />
              </div>
              <span className="text-center text-[#363F44] text-base font-bold break-words">
                Provide security-backed,
                <br />
                Servers
              </span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Heroe;
