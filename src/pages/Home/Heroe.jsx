import PrimaryButton from "../../components/common/PrimaryButton";
import { Link } from "react-router-dom";
import { useHomeContext } from "./context/HomeContext";
import { stripHtmlTags } from "../../utils/helpers";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/Base-urls";
import { useGlobalContext } from "../../context/GlobalContext";

const Heroe = () => {
  const { data } = useHomeContext();
  const { menusData } = useGlobalContext();

  return (
    <>
      {data?.section_1?.status === "active" && (
        <div className="flex flex-col items-center pt-[64px] pb-[52px] bg-[#F7F7F7]">
          <section className="section-container px-6">
            <div className="flex flex-col-reverse xl:flex-row items-center gap-14">
              <div className="flex-1">
                <h3 className=" text-[#363F44] text-[46px] font-bold leading-10 break-words">
                  {data?.section_1?.title}
                </h3>
                <p className="mt-8 text-[#54626A] text-lg font-light leading-6 break-words">
                  {stripHtmlTags(data?.section_1?.description)}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  {data?.section_1?.button_1_status === "active" && (
                    <PrimaryButton
                      path={data?.section_1?.button_1_link}
                      transparent={false}
                      title={data?.section_1?.button_1_text}
                    />
                  )}
                  {data?.section_1?.button_2_status === "active" && (
                    <PrimaryButton
                      path={data?.section_1?.button_2_link}
                      transparent={true}
                      title={data?.section_1?.button_2_text}
                      color="#B50A0C"
                    />
                  )}
                </div>
              </div>
              <div className="max-w-[500px] max-h-[500px] flex-4">
                <img
                  src={data?.section_1?.image}
                  alt="logo"
                  className="w-full p-0 m-0 hover:scale-105 duration-500 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-8">
              <ul className="flex flex-wrap item-center gap-3 text-[#54626A] font-light list-none">
                <p>Jump to:</p>
                {menusData?.jump_menus.map((item) => (
                  <Link key={item.id} to={item.url} className="underline">
                    <li>{item.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Heroe;
