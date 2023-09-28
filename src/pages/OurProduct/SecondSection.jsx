import Section from "../../components/section/Section";
import { FaCheckCircle } from "react-icons/fa";

const SecondSection = () => {
  return (
    <div className="flex flex-col items-center h-[336p] pt-[64px] pb-[52px]">
      <Section>
        <div className="pb-16">
          <h3 className="text-[#363F44] text-4xl font-bold break-words">
            Your Journey to Zero Trust Starts Here
          </h3>
          <p className="xl:w-[718px] text-[#54626A] text-lg break-words mt-5">
            {" "}
            Zero trust takes security beyond the corporate network perimeter,
            protecting your data at
            <br />
            every access attempt, from any device, anywhere. It's the future of
            information security —<br />
            and Bragtech is your rock-solid foundation.
          </p>
        </div>
        <div className="grid grid-cols-3 homeseventhSection-grid">
          <div>
            <div className="max-w-[341.33px] max-h-[250.44px] flex4">
              <img
                src="/images/zero_trust.jpeg.png"
                alt="logo"
                className="w-full p-0 m-0"
              />
            </div>
            <p className="text-[#363F44] text-lg font-bold">
              {" "}
              Verify User Trust
            </p>
            <p className="text-[#54626A] text-lg">
              Ensure users are who they say they are at
              <br />
              every access attempt, and regularly
              <br />
              reaffirm their trustworthiness.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <span className="text-[#B50A0C] text-lg underline">
                Explore Multi-Factor Authentication
              </span>
            </div>
          </div>
          {/* second */}
          <div>
            <div className="max-w-[341.33px] max-h-[250.44px] flex4">
              <img
                src="/images/zero-trust-2.jpg.png"
                alt="logo"
                className="w-full p-0 m-0"
              />
            </div>
            <p className="text-[#363F44] text-lg font-bold">
              {" "}
              Establish Device Trust
            </p>
            <p className="text-[#54626A] text-lg">
              See every device used to access your
              <br />
              applications, and continuously verify
              <br />
              device health and security posture.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <span className="text-[#B50A0C] text-lg underline">
                Explore Device Trust
              </span>
            </div>
            <div className="flex items-center gap-4">
              <FaCheckCircle color="#B50A0C" size={20} />
              <span className="text-[#B50A0C] text-lg underline">
                Watch our Zero Trust Webinar
              </span>
            </div>
          </div>
          {/* thrid */}
          <div>
            <div className="max-w-[341.33px] max-h-[250.44px] flex4">
              <img
                src="/images/zero-trust-3.jpg.png"
                alt="logo"
                className="w-full p-0 m-0"
              />
            </div>
            <p className="text-[#363F44] text-lg font-bold">
              {" "}
              Enforce Adaptive Policies
            </p>
            <p className="text-[#54626A] text-lg">
              Assign granular and contextual access
              <br />
              policies, limiting exposure of your
              <br />
              information to as few users and devices as
              <br />
              possible.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <span className="text-[#B50A0C] text-lg underline">
                Explore Adaptive Access Policies
              </span>
            </div>
          </div>
          {/* fourth */}
          <div>
            <div className="max-w-[341.33px] max-h-[250.44px] flex4">
              <img
                src="/images/zero-trust-4.jpg.png"
                alt="logo"
                className="w-full p-0 m-0"
              />
            </div>
            <p className="text-[#363F44] text-lg font-bold">
              {" "}
              Secure Access for Every User
            </p>
            <p className="text-[#54626A] text-lg">
              Provide appropriate permissions for every
              <br />
              user accessing any application, anytime
              <br />
              and from anywhere.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <span className="text-[#B50A0C] text-lg underline">
                Explore Remote Access
              </span>
            </div>
          </div>
          {/* fifth */}
          <div>
            <div className="max-w-[341.33px] max-h-[250.44px] flex4">
              <img
                src="/images/zero-trust-5.jpg.png"
                alt="logo"
                className="w-full p-0 m-0"
              />
            </div>
            <p className="text-[#363F44] text-lg font-bold">
              {" "}
              Secure Access to Every Application
            </p>
            <p className="text-[#54626A] text-lg">
              Reduce the risk of credential theft by
              <br />
              enabling users to securely access their
              <br />
              applications with a single username and
              <br />
              password.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <FaCheckCircle color="#B50A0C" size={20} />
              <span className="text-[#B50A0C] text-lg underline">
                Explore Single Sign-On (SSO)
              </span>
            </div>
            <div className="flex gap-4">
              <FaCheckCircle color="#B50A0C" size={25} />
              <span className="text-[#B50A0C] text-lg underline">
                The Five Key Factors for Simpler, More Secure SSO
              </span>
            </div>
            <div className="flex gap-4">
              <FaCheckCircle color="#B50A0C" size={20} />
              <span className="text-[#B50A0C] text-lg underline">
                Discover the Life and Death of Passwords
              </span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SecondSection;
