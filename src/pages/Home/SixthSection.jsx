import { Link } from "react-router-dom";
import Section from "../../components/section/Section";
import { FaCheckCircle } from "react-icons/fa";

const SixthSection = () => {
  return (
    <div className="w-full py-[60px] bg-[#222222]">
      {/* <div className="max-w-[80px] max-h-[90px] absolute right-9 bottom-6">
        <Link to="/">
          <img
            src="/images/whatsapp-icon.gif"
            alt="whatsapp"
            className=" w-full p-0 m-0"
          />
        </Link>
      </div> */}
      <Section>
        <div className="flex justify-between pb-[48px]">
          <div className="w-[410px] h-[300px]">
            <img
              src="/images/happy-african-man.jpeg"
              alt=""
              className=" w-full p-0 m-0"
            />
          </div>
          <div className="w-[522.23px]">
            <h2 className="text-white text-4xl font-bold leading-9 break-words mb-4">
              Solutions for Every Security
              <br />
              Goal
            </h2>
            <p className=" text-white text-lg break-words mb-5">
              From compliance to planning for security’s future, Bragetch has
              the access and authentication tools to help you get where you need
              to be. See what we can do for you.{" "}
            </p>
            <Link
              to=""
              className="rounded-[4px] w-full h-[58px] text-xs py-[20px] px-[45px] border border-white text-white"
            >
              <button className="mt-4 text-base text-center tracking-[0.80px]">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[522.23px]">
            <h4 className="text-white text-2xl font-bold">
              Use Cases for Simple Security Strategies
            </h4>
            <div className="flex items-cente gap-4 mt-3">
              <FaCheckCircle color="#B50A0C" size={40} />
              <p>
                <span className="text-white text-lg font-bold">
                  Zero Trust:
                </span>
                <span className="text-white text-lg break-words">
                  {" "}
                  Secure the perimeterless, work-from-anywhere world with our
                  Zero Trust capabilities for the workforce.
                </span>
              </p>
            </div>
            {/*  */}
            <div className="flex items-cente gap-4 mt-3">
              <FaCheckCircle color="#B50A0C" size={40} />
              <p>
                <span className="text-white text-lg font-bold">
                  Passwordless:
                </span>
                <span className="text-white text-lg break-words">
                  {" "}
                  Give users a frictionless login experience, while
                  strengthening against overall security risks.
                </span>
              </p>
            </div>
            {/*  */}
            <div className="flex items-cente gap-4 mt-3">
              <FaCheckCircle color="#B50A0C" size={40} />
              <p>
                <span className="text-white text-lg font-bold">
                  Phishing Prevention:
                </span>
                <span className="text-white text-lg break-words">
                  {" "}
                  Secure your workforce against phishing attacks with strong
                  multi-factor authentication, device trust and more.
                </span>
              </p>
            </div>
          </div>
          {/* second row */}
          <div className="w-[522.23px]">
            <h4 className="text-white text-2xl font-bold">
              Supporting Your Security Goals
            </h4>
            <div className="flex items-cente gap-4 mt-3">
              <FaCheckCircle color="#B50A0C" size={40} />
              <p>
                <span className="text-white text-lg font-bold">
                  Meet Compliance with Bragtech:
                </span>
                <span className="text-white text-lg break-words">
                  {" "}
                  Meet requirements for compliant, effective security in your
                  industry and company.
                </span>
              </p>
            </div>
            {/*  */}
            <div className="flex items-cente gap-4 mt-3">
              <FaCheckCircle color="#B50A0C" size={40} />
              <p>
                <span className="text-white text-lg font-bold">
                  Bragtech Documentation:
                </span>
                <span className="text-white text-lg break-words">
                  {" "}
                  Bragtech supports your devices and applications with
                  easy-to-use installation and configuration documents
                </span>
              </p>
            </div>
            {/*  */}
            <div className="flex items-cente gap-4 mt-3">
              <FaCheckCircle color="#B50A0C" size={35} />
              <p>
                <span className="text-white text-lg font-bold">
                  Our Care <span className="underline">Quick Start</span>:
                </span>
                <span className="text-white text-lg break-words">
                  {" "}
                  Our experts are at your service with premium user-friendly
                  customer support.
                </span>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SixthSection;
