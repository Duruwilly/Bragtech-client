import React, { Fragment } from "react";
import ContactForm from "./ContactForm";
import Header from "./Header";
import FirstSection from "./FirstSection";
import LastSection from "./LastSection";

const Contact = () => {
  return (
    <Fragment>
      <Header />
      <ContactForm />
      <FirstSection />
      <LastSection />
    </Fragment>
  );
};

export default Contact;
