import React from "react";

const Section = ({ children }) => {
  return (
    <section className="section-container justify-center items-center px-6">
      {children}
    </section>
  );
};

export default Section;
