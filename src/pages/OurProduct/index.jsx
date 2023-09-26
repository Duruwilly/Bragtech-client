import { Fragment } from "react";
import Heroe from "./Heroe";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import LastSection from "./LastSection";

const OurProduct = () => {
  return (
    <Fragment style={{ flex: 1 }}>
      <Heroe />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <LastSection />
    </Fragment>
  );
};

export default OurProduct;
