import React from "react";
import Button from "../../Components/Button/Button";
import ProductPreview from "../../Components/ProductPreview/ProductPreview";

import "./Shop.scss";

import DUMMY_DATA from "./Assets/DUMMY";

const Shop = () => {
  return (
    <div className="shop-container">
      <div className="products">
        {DUMMY_DATA.map(({ id, title, description, price, imageUrl }) => (
          <ProductPreview
            key={id}
            title={title}
            description={description}
            price={price}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
