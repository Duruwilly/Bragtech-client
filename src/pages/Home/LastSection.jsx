import { Link } from "react-router-dom";

const LastSection = () => {
  return (
    <div className="flex flex-col items-center pt-[50px] bg-[#F5F6F8]">
      <div className="section-container px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0">
          <div>
            {" "}
            <span
              to="/services"
              className="text-[#363F44] text-3xl font-bold break-words mr-2"
            >
              Read More:
            </span>
            <Link
              to="/services"
              className="text-[#54626A] text-3xl break-words"
            >
              Experience Bragtech now with a free trial
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full">
        <img
          src="/images/lasthomeImg.txt"
          alt=""
          className="w-full p-0 m-0 object-cover"
        />
      </div>
    </div>
  );
};

export default LastSection;
