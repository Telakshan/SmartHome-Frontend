import ProductPreview from "../../Components/ProductPreview/ProductPreview";
import { ProductsContext } from "../../Hooks/Products";
import "./Shop.scss";
import { useContext } from "react";
import DUMMY from "../../DUMMY";
import CollectionOfProducts from "../../Components/CollectionOfProducts/CollectionOfProducts";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="shop-container">
      <div className="products">
        {products.map(({id, categoryName, items }) => (
          <CollectionOfProducts key={id} title={categoryName} items={items} />
        ))}

      </div>
    </div>
  );
};

export default Shop;
