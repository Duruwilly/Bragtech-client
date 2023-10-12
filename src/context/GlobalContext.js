import React, { useContext, createContext, useRef } from "react";

const StateContext = createContext();

export const ContextWrapper = ({ children }) => {
  const solutions = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef?.current?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <StateContext.Provider
      value={{
        solutions,
        scrollToSection,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalContext = () => useContext(StateContext);
