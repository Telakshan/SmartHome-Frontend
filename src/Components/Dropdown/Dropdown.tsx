import React, { useContext } from "react";
import { CartContext } from "../../Hooks/CartContext";
import CartItem from '../CartItem/CartItem';
import Button from "../Button/Button";

import "./Dropdown.scss";

interface DropdownProps {}

const Dropdown: React.FC<DropdownProps> = () => {
  const { itemCount, ...other } = useContext(CartContext);
  return (
    <div className="dropdown">
      <div className="cart-items">
        {other.cartItems.map((item) => (
          <CartItem key={item.id} name={item.title} imageUrl={item.imageUrl} price={item.price} quantity={item.quantity}/>
        ))}

      </div>
      <p>Total: ${other.total}</p>
      <Button inverted={false}>Check out</Button>
    </div>
  );
};

export default Dropdown;
