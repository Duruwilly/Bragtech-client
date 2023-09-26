import { Link } from "react-router-dom";

const LastSection = () => {
  return (
    <div className="w-full pt-[50px] bg-[#F5F6F8]">
      <div className="w-full px-60">
        <div className="flex justify-between items-center">
          <div>
            {" "}
            <span className="text-[#363F44] text-3xl font-bold break-words mr-2">
              Your Next Step:
            </span>
            <span className="text-[#54626A] text-3xl break-words">
              Experience Bragtech now
              <br />
              with a free trial
            </span>
          </div>
          <Link
            to=""
            className="rounded-[4px] w-[222px] h-[58px] text-xs py-[20p] px-[45px] bg-primary text-white"
          >
            <button className="mt-4 text-base text-center tracking-[0.80px]">
              Try Bragtech
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-8 w-full">
        <img
          src="/images/lasthomeImg.txt"
          alt="logo"
          className="w-full p-0 m-0 object-cover"
        />
      </div>
    </div>
  );
};

export default LastSection;
