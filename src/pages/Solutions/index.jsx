import { Fragment } from "react";
import Heroe from "./Heroe";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import LastSection from "./LastSection";

const Solutions = () => {
  return (
    <Fragment style={{ flex: 1 }}>
      <Heroe />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <LastSection />
    </Fragment>
  );
};

export default Solutions;
