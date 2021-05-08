import  { useContext } from "react";
import { CartContext } from "../../Hooks/CartContext";
import Button from "../Button/Button";

import "./ProductPreview.scss";

const ProductPreview = ({ item }) => {
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const itemIsInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <div className="product-item">
      <div
        className="product-item-image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <p className="title">{item.name}</p>
      <p className="description">{item.description}</p>
      <p className="price">${item.price}</p>

      {itemIsInCart(item) && (
        <Button
          inverted={true}
          onClick={() => {
            increase(item);
          }}
        >
          Add More
        </Button>
      )}

     { !itemIsInCart(item) && <Button
        inverted={false}
        onClick={() => {
          addProduct(item);
        }}
      >
        Add Item to Cart
      </Button>}
    </div>
  );
};

export default ProductPreview;
