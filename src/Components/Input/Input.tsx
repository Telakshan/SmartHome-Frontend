import React from "react";

import "./Input.scss";

interface InputProps {
  handleChange: any;
  label: string;
}

const Input: React.FC<InputProps> = ({
  handleChange,
  label,
  ...otherProps
}) => {
  return (
    <label className="input">
      <input
        className="input__field"
        type="text"
        {...otherProps}
        onChange={handleChange}
      />
      <span className="input__label">Some Fancy Label</span>
    </label>
  );
};

export default Input;
