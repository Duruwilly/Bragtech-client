import { Link } from "react-router-dom";
import Section from "../../components/section/Section";
import why from "../../../src/assets/Why.png";
import { usePageContext } from "./context/PageContext";

const heroeBg = {
  width: "100%",
  padding: "0",
  backgroundImage: `url(${why})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  // height: "70vh",
  position: "relative",
  textAlign: "center",
  color: "white",
};

const Heroe = () => {
  const { data } = usePageContext();
  return (
    <>
      <div
        style={heroeBg}
        className="flex flex-col items-center pt-[52px] pb-[64px] flex-1"
      >
        <Section>
          <div className="heroe-overlay flex flex-col items-center justify-center">
            <div className="xl:w-[730px]">
              <h3 className=" text-5xl font-bold pb-6">{data?.header_title}</h3>
              <p className="w-[] text-lg">{data?.header_description}</p>
              {data?.header_button_status === "active" && (
                <Link to={data?.header_button_link}>
                  <button
                    data-text={data?.header_button_text}
                    className="py-5 px-8 bg-primary rounded-[4px] hover:bg-transparent hover:text-white text-center text-white mt-6 thm-btn"
                  >
                    {data?.header_button_text}
                  </button>
                </Link>
              )}
            </div>
          </div>
        </Section>
      </div>
      <div className="bg-primary w-full py-4 flex items-center justify-center gap-4 lg:px-[130x]">
        <Section>
          <div className="flex red-bg items-center justify-between">
            <p className="font-bold text-white text-xl text-center">
              Are you in search of quality cybersecurity services or solutions?
            </p>
            <Link to="/contact-sales">
              <button className="py-3 px-8 bg-white rounded-[4px] hover:bg-white hover:text-black text-center text-black">
                CONTACT US NOW
              </button>
            </Link>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Heroe;
