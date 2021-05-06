import React, { ReactNode } from "react";

import "./Button.scss";


const Button = ({ children, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} custom-button`}
      // {...onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;