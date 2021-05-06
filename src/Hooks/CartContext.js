import React, { createContext, useReducer, useContext } from "react";
import { ProductsContext } from "../Hooks/Products";
import { Reducer } from "./Reducer";
import { sumItems } from "./Store";

export const CartContext = createContext();

let productIdArray = [];

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const initialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkout: false,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  const addProduct = (payload) => {
    dispatch({ type: "ADD_ITEM", payload });
    console.log(payload);
  };

  const removeProduct = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleCheckOut = () => {
    dispatch({ type: "CHECKOUT" });
  };

  const ContextValues = {
    removeProduct,
    addProduct,
    increase,
    decrease,
    clearCart,
    handleCheckOut,
    ...state,
  };

  const {products} = useContext(ProductsContext);

  products.map(({items}) => (
        items.map(({id}) => (
            productIdArray.push(id)
        ))
    ))

  return (
    <CartContext.Provider value={ContextValues}>
      {children}
    </CartContext.Provider>
  );
};

export {productIdArray};

export default CartContextProvider;
