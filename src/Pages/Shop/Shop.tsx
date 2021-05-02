import ProductPreview from "../../Components/ProductPreview/ProductPreview";
import { ProductsContext } from "../../Hooks/Products";
import "./Shop.scss";
import { useContext } from "react";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="shop-container">
      <div className="products">
        {products.map(({ id, title, description, price, imageUrl }) => (
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
