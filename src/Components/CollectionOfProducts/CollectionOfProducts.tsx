import React from "react";
import ProductPreview from "../ProductPreview/ProductPreview";

import "./CollectionOfProducts.scss";

const CollectionOfProducts = ({ title, items }) => {
  return (
    <div className="collection-container">
      <h1 className='title'>{title}</h1>
      <div className="products">
        {items.map((item) => (
          <ProductPreview
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionOfProducts;
