import { useContext } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { CartContext } from "../../Hooks/CartContext";

import "./CheckoutCartItem.scss";

interface CheckoutCartItemProps {
  product: any;
}

const CheckoutCartItem: React.FC<CheckoutCartItemProps> = ({ product }) => {
  const { removeProduct } = useContext(CartContext);

  const { imageUrl, price, title, quantity } = product;

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
