import { Fragment } from "react";
import Heroe from "./Heroe";
// import SecondSection from "./SecondSection";
// import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
// import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import SeventhSection from "./SeventhSection";
import LastSection from "./LastSection";

const Home = () => {
  return (
    <Fragment style={{ flex: 1 }}>
      <Heroe />
      {/* <SecondSection /> */}
      {/* <ThirdSection /> */}
      <FourthSection />
      {/* <FifthSection /> */}
      <SixthSection />
      <SeventhSection />
      <LastSection />
    </Fragment>
  );
};

export default Home;
