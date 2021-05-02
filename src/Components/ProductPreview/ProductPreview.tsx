import React, {useContext} from "react";
import { CartContext } from "../../Hooks/CartContext";

import Button from "../Button/Button";

import "./ProductPreview.scss";

const ProductPreview = ({ title, description, imageUrl, price }) => {


  const {addProduct, cartItems, increase} = useContext(CartContext);

  
  return (
    <div className="product-item">
      <div
        className="product-item-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p className="price">{price}</p>

      <Button>Add Item to Cart</Button>
    </div>
  );
};

export default ProductPreview;
