import Section from "../../components/section/Section";
import { PiMouse } from "react-icons/pi";
import { BsPencil } from "react-icons/bs";
import { useGlobalContext } from "../../context/GlobalContext";

const FirstSection = () => {
  const { companySettings } = useGlobalContext();

  return (
    <div className="flex flex-col items-center py-16 bg-[#363F43]">
      <Section>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-[110px]">
          <div className="flex flex-col items-center gap-4">
            <PiMouse color="white" size={60} />
            <p className="text-center text-white text-lg font-bold">
              Need product help?
            </p>
            <a
              href={`tel:${companySettings?.company_phone}`}
              className="w-full py-4 px- bg-white rounded-[4px] color: #222222 text-center text-base"
            >
              <button>Talk to support</button>
            </a>
          </div>
          <div className="flex flex-col items-center gap-4">
            <BsPencil color="white" size={60} />
            <p className="text-center text-white text-lg font-bold">
              Have a media inquiry?
            </p>
            <a
              href={`mailto:${companySettings?.support_email}`}
              className="w-full py-4 px- bg-white rounded-[4px] color: #222222 text-center text-base"
            >
              <button>Contact Us</button>
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FirstSection;
