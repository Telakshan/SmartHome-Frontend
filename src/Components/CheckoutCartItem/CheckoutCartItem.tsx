import React, { useContext } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaTimesCircle } from "react-icons/fa";
import { CartContext } from "../../Hooks/CartContext";

import "./CheckoutCartItem.scss";

const CheckoutCartItem = ({ product }) => {
  const { increase, decrease, removeProduct } = useContext(CartContext);

  const {imageUrl, title, quantity, price} = product;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{title}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className="remove-button">
        <FaTimesCircle onClick={() => removeProduct(product)} />
      </div>
    </div>
  );
};

export default CheckoutCartItem;
