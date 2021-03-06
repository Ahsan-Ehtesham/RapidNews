import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex my-3 justify-content-center">
      <div className="ripple-loader">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
