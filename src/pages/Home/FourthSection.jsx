import { Link } from "react-router-dom";
import Section from "../../components/section/Section";
import { FaCheckCircle } from "react-icons/fa";

const FourthSection = () => {
  return (
    <div className="flex flex-col items-center h-[68p] pb-[32px]">
      <Section>
        <div>
          <span className=" text-[#363F44] text-2xl font-bold leading-7">
            OEM
          </span>
          <span className="text-[#B50A0C] text-2xl font-bold leading-7 ml-2">
            Products
          </span>
          <p className="text-[#54626A] text-lg font-light mt-2">
            Partner Solutions we offer
          </p>
        </div>
        {/* first row */}
        <div className="mt-16 grid lg:grid-cols-3 homeseventhSection-grid gap-20 pb-8">
          {/* 1 */}
          <div>
            <div className="w-[100px] h-[50px] lg:w-[140px] lg:h-[90px] mb-4">
              <img src="/images/oemImg1.svg.png" alt="" />
            </div>
            <span className="text-[#363F44] text-lg font-bold">
              Infracstructure Management
            </span>
            <p className=" text-[#54626A] text-lg mt-4">
              Quickly and securely verify user trust
              <br />
              with every access attempt.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <Link to="/contact-sales">
                <span className="text-[#B50A0C] text-lg underline">
                  Get Fast MFA
                </span>
              </Link>
            </div>
          </div>
          {/* 2 */}
          <div>
            <div className="w-[100px] h-[50px] lg:w-[140px] lg:h-[90px] mb-4">
              <img src="/images/remote_icon.svg.jpg" alt="" />
            </div>
            <span className="text-[#363F44] text-lg font-bold">
              Network and Data Centre Products
            </span>
            <p className=" text-[#54626A] text-lg mt-4">
              Establish strong security for your
              <br />
              remote users.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <Link to="/contact-sales">
                <span className="text-[#B50A0C] text-lg underline">
                  Secure Remote Access
                </span>
              </Link>
            </div>
          </div>
          {/* 3 */}
          <div>
            <div className="w-[100px] h-[50px] lg:w-[140px] lg:h-[90px] mb-4">
              <img src="/images/adaptive_icon.svg.png" alt="" />
            </div>
            <span className="text-[#363F44] text-lg font-bold">
              Engineered Systems
            </span>
            <p className=" text-[#54626A] text-lg mt-4">
              Get granular security tailored to your
              <br />
              users and their access context.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <Link to="/contact-sales">
                <span className="text-[#B50A0C] text-lg underline">
                  Discover Adaptive Access
                </span>
              </Link>
            </div>
          </div>
          {/* 1 */}
          <div>
            <div className="w-[100px] h-[50px] lg:w-[140px] lg:h-[90px] mb-4">
              <img src="/images/database-icon.png" alt="" />
            </div>
            <span className="text-[#363F44] text-lg font-bold">Data Base</span>
            <p className=" text-[#54626A] text-lg mt-4">
              Know the health of every device
              <br />
              accessing your applications, managed
              <br />
              or not.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <Link to="/contact-sales">
                <span className="text-[#B50A0C] text-lg underline">
                  Explore Device Trust
                </span>
              </Link>
            </div>
          </div>
          {/* 2 */}
          <div>
            <div className="w-[100px] h-[50px] lg:w-[140px] lg:h-[90px] mb-4">
              <img src="/images/sso_icon.svg.png" alt="" />
            </div>
            <span className="text-[#363F44] text-lg font-bold">
              Enterprise Management
            </span>
            <p className=" text-[#54626A] text-lg mt-4">
              Provide simpler, safer access with just
              <br />
              one username and password.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <Link to="/contact-sales">
                <span className="text-[#B50A0C] text-lg underline">
                  Learn About SSO
                </span>
              </Link>
            </div>
          </div>
          {/* 3 */}
          <div>
            <div className="w-[100px] h-[50px] lg:w-[140px] lg:h-[90px] mb-4">
              <img src="/images/Rectangle-57.png" alt="" />
            </div>
            <span className="text-[#363F44] text-lg font-bold">Servers</span>
            <p className=" text-[#54626A] text-lg mt-4">
              Get to know how Bragtech meets your
              <br />
              security needs.
            </p>
            <div className="flex gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <Link to="/contact-sales">
                <span className="text-[#B50A0C] text-lg underline">
                  Find the Right Security Product
                </span>
              </Link>
            </div>
          </div>
          {/* 1 */}
          <div>
            <div className="w-[100px] h-[50px] lg:w-[140px] lg:h-[90px] mb-4">
              <img src="/images/device_icon.svg.png" alt="" />
            </div>
            <span className="text-[#363F44] text-lg font-bold">MiddleWare</span>
            <p className=" text-[#54626A] text-lg mt-4">
              Know the health of every device
              <br />
              accessing your applications, managed
              <br />
              or not.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <Link to="/contact-sales">
                <span className="text-[#B50A0C] text-lg underline">
                  Explore Device Trust
                </span>
              </Link>
            </div>
          </div>
          {/* 2 */}
          <div>
            <div className="w-[100px] h-[50px] lg:w-[140px] lg:h-[90px] mb-4">
              <img src="/images/visuals.png" alt="" />
            </div>
            <span className="text-[#363F44] text-lg font-bold">
              Virtualisation
            </span>
            <p className=" text-[#54626A] text-lg mt-4">
              Provide simpler, safer access with just
              <br />
              one username and password.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <Link to="/contact-sales">
                <span className="text-[#B50A0C] text-lg underline">
                  Learn About SSO
                </span>
              </Link>
            </div>
          </div>
          {/* 3 */}
          <div>
            <div className="w-[100px] h-[50px] lg:w-[140px] lg:h-[90px] mb-4">
              <img src="/images/software.png" alt="" />
            </div>
            <span className="text-[#363F44] text-lg font-bold">Software</span>
            <p className=" text-[#54626A] text-lg mt-4">
              Get to know how Bragtech meets your
              <br />
              security needs.
            </p>
            <div className="flex gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <Link to="/contact-sales">
                <span className="text-[#B50A0C] text-lg underline">
                  Find the Right Security Product
                </span>
              </Link>
            </div>
          </div>
          {/* 1 */}
          <div>
            <div className="w-[100px] h-[50px] lg:w-[140px] lg:h-[90px] mb-4">
              <img src="/images/application.png" alt="" />
            </div>
            <span className="text-[#363F44] text-lg font-bold">
              Application
            </span>
            <p className=" text-[#54626A] text-lg mt-4">
              Know the health of every device
              <br />
              accessing your applications, managed
              <br />
              or not.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <Link to="/contact-sales">
                <span className="text-[#B50A0C] text-lg underline">
                  Explore Device Trust
                </span>
              </Link>
            </div>
          </div>
          {/* 2 */}
          <div>
            <div className="w-[100px] h-[50px] lg:w-[140px] lg:h-[90px] mb-4">
              <img src="/images/bigData.png" alt="" />
            </div>
            <span className="text-[#363F44] text-lg font-bold">Big Data</span>
            <p className=" text-[#54626A] text-lg mt-4">
              Provide simpler, safer access with just
              <br />
              one username and password.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <Link to="/contact-sales">
                <span className="text-[#B50A0C] text-lg underline">
                  Learn About SSO
                </span>
              </Link>
            </div>
          </div>
          {/* 3 */}
          <div>
            <div className="w-[100px] h-[50px] lg:w-[140px] lg:h-[90px] mb-4">
              <img src="/images/security.png" alt="" />
            </div>
            <span className="text-[#363F44] text-lg font-bold">
              Security Products
            </span>
            <p className=" text-[#54626A] text-lg mt-4">
              Get to know how Bragtech meets your
              <br />
              security needs.
            </p>
            <div className="flex gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <Link to="/contact-sales">
                <span className="text-[#B50A0C] text-lg underline">
                  Find the Right Security Product
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FourthSection;
