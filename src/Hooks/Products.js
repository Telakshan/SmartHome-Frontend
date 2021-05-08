import  { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {

  const [items, setItems] = useState([]);

  useEffect( () => {
     axios.get(`http://localhost:8080/api/products`).then((res) => {
      setItems(res.data._embedded.products);
    })
  }, []);

  return (
    <ProductsContext.Provider value={{ items }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
