import React, { Fragment } from "react";
import Heroe from "./Heroe";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import LastSection from "./LastSection";
import ThirdSection from "./ThirdSection";
import PageContextProvider from "./context/PageContext";

const Why = () => {
  return (
    <PageContextProvider>
      <Fragment>
        <Heroe />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <LastSection />
      </Fragment>
    </PageContextProvider>
  );
};

export default Why;
