import Section from "../../components/section/Section";
import { PiMouse } from "react-icons/pi";
import { BsPencil } from "react-icons/bs";

const FirstSection = () => {
  return (
    <div className="w-full py-16 bg-[#363F43]">
      <Section>
        <div className="flex justify-center items-center gap-[110px]">
          <div className="flex flex-col items-center gap-4">
            <PiMouse color="white" size={60} />
            <p className="text-center text-white text-lg font-bold">
              Need product help?
            </p>
            <button className="w-full py-4 px- bg-white rounded-[4px] color: #222222 text-center text-base">
              Talk to support
            </button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <BsPencil color="white" size={60} />
            <p className="text-center text-white text-lg font-bold">
              Have a media inquiry?
            </p>
            <button className="w-full py-4 px3 bg-white rounded-[4px] color: #222222 text-center text-base">
              Contact Us
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FirstSection;
