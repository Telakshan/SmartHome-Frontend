import React from "react";

import Button from "../Button/Button";

import "./ProductPreview.scss";

const ProductPreview = ({ title, description, imageUrl, price }) => {
  return (
    <div className="product-item">
      <div className="product-item-image"

// style={
//    { backgroundImage: `url('../../Assets/Images/p1.jpg')`}
// }
      
      >
        <img src={imageUrl}
        />
       
      </div>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p className="price">{price}</p>
      
        <Button>Add Item to Cart</Button>
      
    </div>
  );
};

export default ProductPreview;
