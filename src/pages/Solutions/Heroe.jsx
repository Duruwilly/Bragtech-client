import Section from "../../components/section/Section";

const Heroe = () => {
  return (
    <div className="flex flex-col items-center py-[64px] bg-[#F7F7F7]">
      <Section>
        <div className="flex justify-between">
          <div className="w-[572px]">
            <h3 className="text-[#363F44] text-4xl font-bold break-words">
              Bragtech for Everyone
            </h3>
            <p className="w-[463.83px] text-[#54626A] text-lg break-words">
              {" "}
              Bragtech’s access security is customizable, easy to set up, and
              simple to use, making it the perfect solution for a wide range of
              industries and use cases.
            </p>
          </div>
          <div className="max-w-[524.94px] max-h-[350px] rounded-[10px]">
            <img
              src="/images/front-view-woman-posin.png"
              alt=""
              className="w-full p-0 m-0"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Heroe;
