import Section from "../../components/section/Section";

const FourthSection = () => {
  return (
    <div className="flex flex-col items-center py-8">
      <Section>
        <h3 className="text-4xl font-bold break-words">
          <span className="text-[#363F44]">Our </span>
          <span className="text-[#B50A0C]">Services</span>
        </h3>
        <p className="text-[#54626A] font-light text-lg mt-3">
          Bragtech’s solutions for the workforce can help you satisfy industry
          compliance regulations
          <br />
          that require or recommend strong multi-factor authentication, access
          security controls
          <br />
          and device management. Learn more about how Bragtech can help you meet{" "}
          <br />
          your specific compliance requirements here.
        </p>
        <div className="grid grid-cols-3 homeseventhSection-grid mt-6 gap-7">
          {/* first */}
          <div>
            <div className="mb-4">
              <img src="/images/group.png" alt="" />
            </div>
            <p className="text-[#363F44] font-bold text-xs">
              We advice our partners
            </p>
            <p className="text-[#363F44] text-2xl font-bold">We are Advisory</p>
            <p className="text-[#54626A] font-light break-words text-lg mt-5">
              <span>
                Frameworks such as NIST, CIS/SANS
                <br />
                20 or ISO 27001 have separated
                <br />
                themselves as the best practice
                <br />
                frameworks for organizations to assess
                <br />
                their practices to protect sensitive data,
                <br />
                and provide secure access to critical
                <br />
                assets. Duo offers solutions that
                <br />
                provide organizations with the ability to
                <br />
                adopt the best practices outlined in
                <br />
                these frameworks by providing
                <br />
                organizations the tools to{" "}
              </span>
              <span className="underline">
                verify users
                <br />
              </span>
              and establish <span className="underline">
                access policies
              </span>{" "}
              for
              <br />
              systems while{" "}
              <span className="underline">
                permitting access only <br /> from known devices and sources
              </span>
            </p>
          </div>
          {/* second */}
          <div>
            <div className="mb-4">
              <img src="/images/cross.png" alt="" />
            </div>
            <p className="text-[#363F44] font-bold text-xs">
              Protect Patient Data
            </p>
            <p className="text-[#363F44] text-2xl font-bold">
              Information Technology
            </p>
            <p className="text-[#54626A] font-light break-words text-lg mt-5">
              <span>
                Bragtech helps healthcare organizations
                <br />
                meet HIPAA (Health Information
                <br />
                Portability and Accountability Act)
                <br />
                omnibus compliance requirements with
                <br />
                easy to use authentication and{" "}
              </span>
              <span className="underline">
                access <br /> policies{" "}
              </span>
              that don’t interfere with patient care. Bragtech’s ability to
              provide controls
              <br />
              for the enforcement of security posture
              <br />
              on the devices that are accessing
              <br />
              sensitive patient health information with
              <br />
              system reporting can help provide
              <br />
              evidence of device encryption in the
              <br />
              event that equipment is lost or stolen. <br />
              <span className="underline">
                Learn more about Bragtech for Info Tech.
              </span>
            </p>
          </div>
          {/* third */}
          <div>
            <div className="mb-4">
              <img src="/images/red-circle.png" alt="" />
            </div>
            <p className="text-[#363F44] font-bold text-xs">
              Helps manager data
            </p>
            <p className="text-[#363F44] text-2xl font-bold">
              Bragtech helps <br />
              Manage Services
            </p>
            <p className="text-[#54626A] font-light break-words text-lg mt-5">
              <span>
                Bragtech can help you meet PCI DSS
                <br />
                standards by protecting credentials
                <br />
                with strong{" "}
              </span>
              <span className="underline">
                two-factor authentication
                <br />
              </span>
              and limit access to cardholder data with <br /> strong{" "}
              <span className="underline">access controls</span>. Our{" "}
              <span className="underline">device insights</span> provide
              visibility into the devices being used to connect to systems
              storing sensitive information and enables organizations to
              establish security policies that prevent unauthorized access.{" "}
              <br />
              <span className="underline">
                Go to Bragtech's MAnager Solutions Page
              </span>
            </p>
          </div>
          {/* fourth */}
          <div>
            <p className="text-[#363F44] text-2xl font-bold">
              Data Privacy Guidelines
              <br />
              and Regulations
            </p>
            <div className="text-[#54626A] font-light break-words text-lg mt-5">
              <span>
                Regardless of whether your
                <br />
                organization is subject to regional data
                <br />
                privacy regulations like GDPR, or
                <br />
                PIPEDA, or if you need to adhere to
                <br />
                state specific legislation such as CCPA,
                <br />
                Duo helps you implement strong
                <br />
                technical controls to protect access to
                <br />
                backend systems that contain sensitive
                <br />
                data that falls under the
              </span>
              <span className="underline">
                data privacy guidelines and regulations
                <br />
              </span>
              .With Bragtech, organizations can check the{" "}
              <span className="underline">
                security hygiene of user devices
              </span>{" "}
              before granting access and
              <br />
              systems while{" "}
              <span className="underline">
                block users with risky devices
              </span>{" "}
              These controls protects sensitive resources by giving
              <br />
              organizations the ability to enforce
              <br />
              policies granting access only to verified
              <br />
              users from identified sources and
              <br />
              provides <span className="underline">reports</span> for audit
              purposes.
            </div>
          </div>
          {/* fifth */}
          <div>
            <p className="text-[#363F44] text-2xl font-bold">
              Bragtech for EPCS
            </p>
            <div className="text-[#54626A] font-light break-words text-lg mt-5">
              <span>
                The DEA (Drug Enforcement Agency)
                <br />
                requires practitioners to use strong
                <br />{" "}
              </span>
              <span className="underline">multi-factor authentication</span>
              to access
              <br />
              electronic prescription applications to
              <br />
              sign prescriptions for controlled
              <br />
              substances. That MFA solution must
              <br />
              meet at least the criteria of FIPS 140–2
              <br />
              Security Level 1. Bragtech’s authentication
              <br />
              methods were reviewed by Drummond
              <br />
              Group, a DEA accredited security
              <br />
              auditor, to meet EPCS requirements.
            </div>
          </div>
          {/* sixth */}
          <div>
            <p className="text-[#363F44] text-2xl font-bold">
              Bragtech for Financial
              <br />
              Services
            </p>
            <div className="text-[#54626A] font-light break-words text-lg mt-5">
              <span>
                Financial Services organizations —<br />
                insurance providers, banks, brokerage
                <br />
                firms and others — often have
                <br />
                regulatory controls beyond PCI DSS
                <br />
                that include things like FFIEC, NYDFS
                <br />
                and NAIC, which require not just the
                <br />
                implementation of strong
              </span>
              <span className="underline">authentication controls</span>, but
              require
              <span className="underline">ccess controls</span>
              to ensure that only verified internal or
              <br />
              external users can gain access to
              <br />
              systems. <br />
              <span className="underline">
                Get Bragtech for Financial Organizations
              </span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FourthSection;
