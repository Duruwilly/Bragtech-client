import PrimaryButton from "../../components/common/PrimaryButton";
import { Link } from "react-router-dom";

const Heroe = () => {
  return (
    <div className="w-full h-[85vh] pt-[64px] pb-[52p] bg-[#F7F7F7]">
      <section className="w-full pl-44 pr-[45px]">
        <div className="flex items-center gap-18">
          <div className=" flex-1">
            <h3 className=" text-[#363F44] text-[46px] font-bold leading-10 break-words">
              Easy, Flexible
              <br />
              Cybersecurity
              <br />
              Solutions for
              <br />
              Everyone
            </h3>
            <p className="mt-8 text-[#54626A] text-lg font-light leading-6 break-words">
              Securing your entire organization has never been easier.
              <br />
              Bragtech is ensuring the security of APIs, which are interfaces
              <br />
              that allow different software applications to communicate
              <br />
              and interact with each other. Properly assessing and managing
              <br />
              API security is crucial to protect sensitive data, prevent <br />
              unauthorized access, and maintain the integrity of software
              systems.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <PrimaryButton
                path="contact-sales"
                transparent={false}
                title="Contact Sales"
              />
              <PrimaryButton
                path="why-bragtech"
                transparent={true}
                title="Why Bragtech?"
                color="#B50A0C"
              />
            </div>
          </div>
          <div className="max-w-[600px] max-h-[500px] flex-4">
            <img
              src="/images/heroeImg.jpeg"
              alt="logo"
              className=" w-full p-0 m-0"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <ul className="flex item-center gap-3 text-[#54626A] font-light list-none">
            <p>Jump to:</p>
            <Link to="/our-product" className="underline">
              <li>Our Products</li>
            </Link>
            <Link to="why-bragtech" className="underline">
              <li>Why Pick Bragtech</li>
            </Link>
            <Link to="solutions" className="underline">
              <li>Security Solutions</li>
            </Link>
            <Link className="underline">
              <li>News & Updates</li>
            </Link>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Heroe;
