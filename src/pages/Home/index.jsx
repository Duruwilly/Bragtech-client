import { Fragment } from "react";
import Heroe from "./Heroe";
import FourthSection from "./FourthSection";
import SixthSection from "./SixthSection";
import SeventhSection from "./SeventhSection";
import LastSection from "./LastSection";
import HomeContextProvider from "./context/HomeContext";

const Home = () => {
  return (
    <HomeContextProvider>
      <Fragment style={{ flex: 1 }}>
        <Heroe />
        <FourthSection />
        <SixthSection />
        <SeventhSection />
        <LastSection />
      </Fragment>
    </HomeContextProvider>
  );
};

export default Home;
