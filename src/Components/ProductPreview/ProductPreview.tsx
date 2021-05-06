import React, {useContext} from "react";
import { CartContext } from "../../Hooks/CartContext";
import { ProductsContext } from "../../Hooks/Products";

import Button from "../Button/Button";

import "./ProductPreview.scss";

const ProductPreview = ({item}) => {


  const {addProduct, cartItems, increase} = useContext(CartContext);
  const {products} = useContext(ProductsContext);


  
  return (
    <div className="product-item">
      <div
        className="product-item-image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <p className="title">{item.title}</p>
      <p className="description">{item.description}</p>
      <p className="price">{item.price}</p>

      {/* <button onClick={() => addProduct(item)}>Add to cart</button> */}

      <Button inverted={false} onClick={() => {addProduct(item); console.log(item)}}>Add Item to Cart</Button>
    </div>
  );
};

export default ProductPreview;
