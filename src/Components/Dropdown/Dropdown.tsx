import React from "react";
import Button from "../Button/Button";

import "./Dropdown.scss";

interface DropdownProps {
 
}

const Dropdown: React.FC<DropdownProps> = () => {
  return (
    <div className="dropdown">
      <div className="cart-items"></div>

      <Button>
        Check out
      </Button>
    </div>
  );
};

export default Dropdown;
