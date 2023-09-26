import React from "react";
import Section from "../../components/section/Section";

const FirstSection = () => {
  return (
    <div className="w-full py-[35px]">
      <Section>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center w-[351.56px] h-[450px]">
            <img
              src="/images/cheerful-young-man.png"
              alt="whatsapp"
              className=" w-full p-0 m-0"
            />
          </div>
          <div className="">
            <h3 className="text-[#363F44] text-4xl font-bold">
              {" "}
              Access Security to Meet Any
              <br />
              Need
            </h3>
            <div>
              <p className="text-[#54626A] text-lg">
                {" "}
                At Bragtech, we believe there's no one-size-fits-all approach to
                access
                <br />
                security. Your organization has unique security needs, and we're
                <br />
                here to help you meet them. Maybe you need to meet industry-
                <br />
                specific compliance standards, or protect highly sensitive
                <br />
                customer data. Perhaps you're looking for a solution to a
                <br />
                particular security concern — like phishing attacks or BYOD. We
                <br />
                can even help you future-proof your security strategy with
                <br />
                industry-leading{" "}
                <span className="underline">zero trust for the workforce</span>.
                Whatever your
                <br />
                circumstances, Bragtech has you covered.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FirstSection;
