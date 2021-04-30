import React, { ReactNode } from "react";

import "./Button.scss";

interface ButtonProps{

    children?: ReactNode,
    inverted?: Boolean,
    otherProps?: any
    onClick?: any
}

const Button: React.FC<ButtonProps> = ({ children, inverted, onClick, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} custom-button`}
      {...onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;