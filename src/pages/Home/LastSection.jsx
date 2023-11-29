import { useHomeContext } from "./context/HomeContext";

const LastSection = () => {
  const { data } = useHomeContext();

  return (
    <>
      {data?.section_5?.status === "active" && (
        <div className="flex flex-col items-center pt-[50px] bg-[#F5F6F8]">
          <div className="mt-8 w-full">
            <img
              src={data?.section_5?.section5_image}
              alt=""
              className="w-full p-0 m-0 object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LastSection;
