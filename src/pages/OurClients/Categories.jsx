import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Categories = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`w-full py-5 px-8 bg-[#222222] rounded-[5px] border border-[#B50A0C] ${
          isOpen ? "mb-2" : "mb-8"
        }`}
        onClick={toggleAccordion}
      >
        <div className="flex justify-between items-center">
          <p className="text-[#D7D7D7] text-3xl font-bold break-words">
            {title}
          </p>
          <IoIosArrowDown
            color="white"
            size={20}
            className="cursor-pointer"
            onClick={toggleAccordion}
          />
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-wrap gap-8 mt-2 mb-8">
          {items.map((item, index) => (
            <div className="" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="flex justify-center items-center">
                <span className="text-center text-[#404040] text-xs">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
