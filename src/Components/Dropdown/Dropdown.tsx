import React, { useContext } from "react";
import { CartContext } from "../../Hooks/CartContext";
import CartItem from "../CartItem/CartItem";
import { withRouter } from "react-router-dom";
import Button from "../Button/Button";
import {History} from 'history';

import "./Dropdown.scss";

interface DropdownProps {
  history: History
}

const Dropdown: React.FC<DropdownProps> = ({history}) => {
  const { itemCount, ...other } = useContext(CartContext);
  return (
    <div className="dropdown">
      <div className="cart-items">
        {other.cartItems.map((item) => (
          <CartItem
            key={item.id}
            name={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <p>Total: ${other.total}</p>
      {/* <Link to="/checkout" className="checkout-button"> */}

        <Button inverted={false}
        onClick={() => history.push('/checkout')}
        >Check out</Button>
    </div>
  );
};

export default withRouter(Dropdown);
