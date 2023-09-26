import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
