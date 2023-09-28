import React from "react";
import Section from "../../components/section/Section";
import { GoCheckCircleFill } from "react-icons/go";

const SecondSection = () => {
  return (
    <div className="flex flex-col items-center pt-6 py-1 overflow-x-auto">
      <Section>
        <table>
          <thead className="w-full border-b-[20px] border-[#DAE4E6] py-[10x]">
            <tr className="">
              <td>
                <div className="w-[352px] h-14"></div>
              </td>
              <td>
                <div className="w-[368x] text-center text-[#363F44] text-lg font-semibold px-[92.5px] py-4 bg-[#EFF3F5] flex flex-col justify-center items-start">
                  Competitor Solutions
                </div>
              </td>
              <td>
                <div className="w-[368x] text-center text-[#FF4500] text-lg font-semibold py-4 pl-[165.5px] pr-[166.5px] flex flex-col justify-center items-start">
                  Bragtech
                </div>
              </td>
            </tr>
          </thead>
          <tbody className="w-full border-b-[20px] border-[#DAE4E6]">
            <tr className="border-b border-black">
              <td>
                <div className="text-[#363F44] text-lg font-bold">
                  Fast Development
                </div>
              </td>
              <td>
                <div className="pl-[56.31px] pr-[20px] bg-[#EFF3F5] flex justify-between items-center gap-[60px]">
                  <div className="h-[40px] pt-[16.80px] pb-[16.80px] bg-[#A13E33] rounded-full">
                    <div className="w-[40px] h-[6.40px] p-[3.20px] justify-center items-center flex">
                      <div className="w-[33.60px] h-0 border-[4.80px] border-white"></div>
                    </div>
                  </div>
                  <div className="text-[#54626A] text-lg">
                    Complicated application
                    <br />
                    protection and policy
                    <br />
                    that have specific
                    <br />
                    technical limits
                  </div>
                </div>
              </td>
              <td>
                <div className="borderb borderblack h-full py4 pl-[56.31px] pr-[20px] flex items-center gap-[60px]">
                  <GoCheckCircleFill color="#FF4500" size={40} />
                  <div className="pr-[25.22px] flex items-start">
                    <div className="text-[#54626A] text-lg font-normal">
                      Flexible application
                      <br />
                      protection and policy
                      <br />
                      that works with what
                      <br />
                      you have
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b border-black">
              <td>
                <div className="text-[#363F44] text-lg font-bold">
                  Frictionless for Users
                </div>
              </td>
              <td>
                <div className="pl-[56.31px] pr-[20px] bg-[#EFF3F5] flex justify-between items-center gap-[60px]">
                  <div className="h-[40px] pt-[16.80px] pb-[16.80px] bg-[#A13E33] rounded-full">
                    <div className="w-[40px] h-[6.40px] p-[3.20px] justify-center items-center flex">
                      <div className="w-[33.60px] h-0 border-[4.80px] border-white"></div>
                    </div>
                  </div>
                  <div className="text-[#54626A] text-lg">
                    Limit user productivity
                    <br />
                    and increase IT burden
                    <br />
                    with friction-based
                    <br />
                    access; lack self-service
                    <br />
                    and remediation
                  </div>
                </div>
              </td>
              <td>
                <div className="h-full py4 pl-[56.31px] pr-[20px] flex items-center gap-[60px]">
                  <GoCheckCircleFill color="#FF4500" size={40} />
                  <div className="pr-[25.22x] flex items-start">
                    <div className="text-[#54626A] text-lg font-normal">
                      Boost user productivity
                      <br />
                      adn reduce IT burden
                      <br />
                      with frictionless access,
                      <br />
                      self-service, and
                      <br />
                      remediation
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b border-black">
              <td>
                <div className="text-[#363F44] text-lg font-bold">
                  Total Cost of Ownership
                </div>
              </td>
              <td>
                <div className="pl-[56.31px] pr-[20px] bg-[#EFF3F5] flex justify-between items-center gap-[60px]">
                  <div className="h-[40px] pt-[16.80px] pb-[16.80px] bg-[#A13E33] rounded-full">
                    <div className="w-[40px] h-[6.40px] p-[3.20px] justify-center items-center flex">
                      <div className="w-[33.60px] h-0 border-[4.80px] border-white"></div>
                    </div>
                  </div>
                  <div className="text-[#54626A] text-lg">
                    Disjointed pricing that’s
                    <br />
                    complicated to predict
                    <br />
                    and understand
                  </div>
                </div>
              </td>
              <td>
                <div className="pl-[56.31px] pr-[20px] flex items-center gap-[60px]">
                  <GoCheckCircleFill color="#FF4500" size={40} />
                  <div className="pr-[25.22px] flex items-start">
                    <div className="text-[#54626A] text-lg font-normal">
                      Simple pricing you can
                      <br />
                      rely on and understand
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b border-black">
              <td>
                <div className="text-[#363F44] text-lg font-bold">
                  Gapless Security Coverage
                </div>
              </td>
              <td>
                <div className="pl-[56.31px] pr-[20px] bg-[#EFF3F5] flex justify-between items-center gap-[60px]">
                  <div className="h-[40px] pt-[16.80px] pb-[16.80px] bg-[#A13E33] rounded-full">
                    <div className="w-[40px] h-[6.40px] p-[3.20px] justify-center items-center flex">
                      <div className="w-[33.60px] h-0 border-[4.80px] border-white"></div>
                    </div>
                  </div>
                  <div className="text-[#54626A] text-lg">
                    Gaps in app and device
                    <br />
                    coverage that affect
                    <br />
                    overall security strategy
                  </div>
                </div>
              </td>
              <td>
                <div className="pl-[56.31px] pr-[20px] flex items-center gap-[60px]">
                  <GoCheckCircleFill color="#FF4500" size={40} />
                  <div className="pr-[25.22px] flex items-start">
                    <div className="text-[#54626A] text-lg font-normal">
                      Deploy protection to
                      <br />
                      virtually any application
                      <br />
                      or device in a single
                      <br />
                      solution
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b border-black">
              <td>
                <div className="text-[#363F44] text-lg font-bold">
                  Seamless Zero Trust
                </div>
              </td>
              <td>
                <div className="pl-[56.31px] pr-[20px] bg-[#EFF3F5] flex justify-between items-center gap-[60px]">
                  <div className="h-[40px] pt-[16.80px] pb-[16.80px] bg-[#A13E33] rounded-full">
                    <div className="w-[40px] h-[6.40px] p-[3.20px] justify-center items-center flex">
                      <div className="w-[33.60px] h-0 border-[4.80px] border-white"></div>
                    </div>
                  </div>
                  <div className="text-[#54626A] text-lg">
                    Complicated to deploy
                    <br />
                    zero trust policy and
                    <br />
                    technical requirements
                  </div>
                </div>
              </td>
              <td>
                <div className="pl-[56.31px] pr-[20px] flex items-center gap-[60px]">
                  <GoCheckCircleFill color="#FF4500" size={40} />
                  <div className="pr-[25.22px] flex items-start">
                    <div className="text-[#54626A] text-lg font-normal">
                      Seamlessly start zero
                      <br />
                      trust journey with
                      <br />
                      adaptive and flexible
                      <br />
                      zero trust policy
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b border-black">
              <td>
                <div className="text-[#363F44] text-lg font-bold">
                  Managed & BYO Device Support
                </div>
              </td>
              <td>
                <div className="pl-[56.31px] pr-[20px] bg-[#EFF3F5] flex justify-between items-center gap-[60px]">
                  <div className="h-[40px] pt-[16.80px] pb-[16.80px] bg-[#A13E33] rounded-full">
                    <div className="w-[40px] h-[6.40px] p-[3.20px] justify-center items-center flex">
                      <div className="w-[33.60px] h-0 border-[4.80px] border-white"></div>
                    </div>
                  </div>
                  <div className="text-[#54626A] text-lg">
                    Limited support for BYO
                    <br />
                    devices and specific
                    <br />
                    technical requirements
                    <br />
                    for managed devices
                  </div>
                </div>
              </td>
              <td>
                <div className="pl-[56.31px] pr-[20px] flex items-center gap-[60px]">
                  <GoCheckCircleFill color="#FF4500" size={40} />
                  <div className="pr-[25.22px] flex items-start">
                    <div className="text-[#54626A] text-lg font-normal">
                      All-encompassing
                      <br />
                      support for virtually any
                      <br />
                      device, whether
                      <br />
                      managed or
                      <br />
                      unmanaged, worker or
                      <br />
                      contractor
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b border-black">
              <td>
                <div className="text-[#363F44] text-lg font-bold">
                  Frictionless for Admins
                </div>
              </td>
              <td>
                <div className="pl-[56.31px] pr-[20px] bg-[#EFF3F5] flex justify-between items-center gap-[60px]">
                  <div className="h-[40px] pt-[16.80px] pb-[16.80px] bg-[#A13E33] rounded-full">
                    <div className="w-[40px] h-[6.40px] p-[3.20px] justify-center items-center flex">
                      <div className="w-[33.60px] h-0 border-[4.80px] border-white"></div>
                    </div>
                  </div>
                  <div className="text-[#54626A] text-lg">
                    Limit admin productivity
                    <br />
                    and increase IT burden
                    <br />
                    with complicated policy,
                    <br />
                    reports, and logging
                  </div>
                </div>
              </td>
              <td>
                <div className="pl-[56.31px] pr-[20px] flex items-center gap-[60px]">
                  <GoCheckCircleFill color="#FF4500" size={40} />
                  <div className="pr-[25.22px] flex items-start">
                    <div className="text-[#54626A] text-lg font-normal">
                      Boost admin
                      <br />
                      productvitiy and reduce
                      <br />
                      IT burden with easy to
                      <br />
                      deploy policy, reports,
                      <br />
                      and logging
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b border-black">
              <td>
                <div className="text-[#363F44] text-lg font-bold">
                  Support Experience
                </div>
              </td>
              <td>
                <div className="pl-[56.31px] pr-[20px] bg-[#EFF3F5] flex justify-between items-center gap-[60px]">
                  <div className="h-[40px] pt-[16.80px] pb-[16.80px] bg-[#A13E33] rounded-full">
                    <div className="w-[40px] h-[6.40px] p-[3.20px] justify-center items-center flex">
                      <div className="w-[33.60px] h-0 border-[4.80px] border-white"></div>
                    </div>
                  </div>
                  <div className="text-[#54626A] text-lg">
                    Constraining, time-
                    <br />
                    consuming support
                    <br />
                    experience
                  </div>
                </div>
              </td>
              <td>
                <div className="pl-[56.31px] pr-[20px] flex items-center gap-[60px]">
                  <GoCheckCircleFill color="#FF4500" size={40} />
                  <div className="pr-[25.22px] flex items-start">
                    <div className="text-[#54626A] text-lg font-normal">
                      Knowledgeable support
                      <br />
                      team that enables
                      <br />
                      success
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Section>
    </div>
  );
};

export default SecondSection;
