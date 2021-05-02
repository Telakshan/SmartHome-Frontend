import DUMMY_DATA from "../Pages/Shop/Assets/DUMMY";
import React, { createContext, useState } from "react";
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(DUMMY_DATA);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
