import { ProductsContext } from "../../Hooks/Products";
import { useContext } from "react";
import CollectionOfProducts from "../../Components/CollectionOfProducts/CollectionOfProducts";

import "./Shop.scss";

const Shop = () => {
  const { items } = useContext(ProductsContext);

  return (
    <div className="shop-container">
      <CollectionOfProducts title={"All products"} items={items} />
    </div>
  );
};

export default Shop;
