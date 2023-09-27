import Section from "../../components/section/Section";
import { FiArrowUpRight } from "react-icons/fi";
import { BiDumbbell } from "react-icons/bi";
import { BsBricks } from "react-icons/bs";
import { RiSpeedLine } from "react-icons/ri";

const FirstSection = () => {
  return (
    <div className="w-full py-9">
      <Section>
        <div className="">
          <h2 className="text-[#363F44] text-4xl font-bold">
            4 Reasons to Choose Bragtech
          </h2>
          <p className="text-[#54626A] text-lg break-words mt-4">
            Bragtech provides the best of both worlds: a multi-factor
            authentication solution that is
            <br />
            strong and easy-to use.
          </p>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className=" my-7">
            <FiArrowUpRight />
            <h3 className="text-[#363F44] text-4xl font-bold my-3">
              Next Level MFA
            </h3>
            <p className="text-[#54626A] text-lg mb-4">
              Counter the new wave of cyber threats with phishing-resistant
              <br />
              MFA measures that rewrite the playbook on how to verify users.
            </p>
            <span className="text-[#363F44] text-lg font-bold">
              Discover Bragtech's MFA
            </span>
          </div>
          <div className=" my-7">
            <BiDumbbell />
            <h3 className="text-[#363F44] text-4xl font-bold my-3">
              Protection and Productivity
            </h3>
            <p className="text-[#54626A] text-lg mb-4">
              Protect your environment while empowering your workforce to
              <br />
              operate from anywhere and on any device.
            </p>
            <span className="text-[#363F44] text-lg font-bold">
              Explore Risk-Based Authentication
            </span>
          </div>
          <div className="my-7">
            <BsBricks />
            <h3 className="text-[#363F44] text-4xl font-bold my-3">
              Complete Coverage
            </h3>
            <p className="text-[#54626A] text-lg mb-4">
              Eliminate the gaps in your perimeter like no other solution can,
              <br />
              with easy-to-use integrations that bring all applications and
              <br />
              operations under one secure roof.
            </p>
            <span className="text-[#363F44] text-lg font-bold">
              Learn About Bragtech's App Integration
            </span>
          </div>
          <div className="my-7">
            <RiSpeedLine />
            <h3 className="text-[#363F44] text-4xl font-bold my-3">
              Speed to Security
            </h3>
            <p className="text-[#54626A] text-lg mb-4">
              Launch new protections quickly and smoothly, without burning
              <br />
              through your IT team or their budget. Put enrollment and
              <br />
              remediation in the hands of your users so your security experts
              <br />
              are free to monitor the big picture.
            </p>
            <span className="text-[#363F44] text-lg font-bold">
              Learn About User Friendly MFA
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-[#363F44] text-4xl my-4 font-bold">
            Don’t compromise on your own security
            <br />
            solution
          </h3>
          <p className="text-[#54626A] text-lg">
            Other multi-factor authentication vendors talk about ease-of-use and
            building great
            <br />
            customer experiences but fall flat when facing complex situations.
            Bragtech has evolved with
            <br />
            the hybrid enterprise in mind, knowing that you need strong security
            at every point of
            <br />
            your perimeter. Bragtech doesn’t make exceptions - it handles
            whatever you throw at it – to
            <br />
            keep your business running at full speed. 
          </p>
        </div>
      </Section>
    </div>
  );
};

export default FirstSection;
