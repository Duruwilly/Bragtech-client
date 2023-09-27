import PrimaryButton from "../../components/common/PrimaryButton";
import { Link } from "react-router-dom";

const Heroe = () => {
  return (
    <div className="flex flex-col items-center pt-[64px] pb-[52px] bg-[#F7F7F7]">
      <section className="section-container px-6">
        <div className="flex flex-col-reverse xl:flex-row items-center gap-14">
          <div className="flex-1">
            <h3 className=" text-[#363F44] text-[46px] font-bold leading-10 break-words">
              Easy, Flexible Cybersecurity Solutions for Everyone
            </h3>
            <p className="mt-8 text-[#54626A] text-lg font-light leading-6 break-words">
              Securing your entire organization has never been easier. Bragtech
              is ensuring the security of APIs, which are interfaces that allow
              different software applications to communicate and interact with
              each other. Properly assessing and managing API security is
              crucial to protect sensitive data, prevent unauthorized access,
              and maintain the integrity of software systems.
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
        <div className="flex justify-center items-center mt-8">
          <ul className="flex flex-wrap item-center gap-3 text-[#54626A] font-light list-none">
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
