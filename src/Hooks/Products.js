import axios from "axios";
import axiosRetry from "axios-retry";
import React, { createContext, useEffect, useState } from "react";
import { productUrl } from "../api/constants";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  axiosRetry(axios, { retries: 10 });

  useEffect(() => {
    axios.get(`${productUrl}?page=0&size=31`).then((res) => {
      setItems(res.data._embedded.products);
    });
  }, []);

  return (
    <ProductsContext.Provider value={{ items }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
