import React, { createContext, useContext, useState } from "react";

export const myListContext = createContext();
export const useMyList = () => {
  return useContext(myListContext);
};
const MyListContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("movie"))
  );

  function addCart(obj) {
    let data = JSON.parse(localStorage.getItem("movie")) || [];
    data.push(obj);
    localStorage.setItem("movie", JSON.stringify(data));
  }

  function readCart() {
    let cart = JSON.parse(localStorage.getItem("movie")) || [];
    setCartData(cart);
  }

  function delCart(id) {
    let data = JSON.parse(localStorage.getItem("movie")) || [];
    let newData = data.filter((el) => el.id !== id);
    localStorage.setItem("movie", JSON.stringify(newData));
    readCart();
  }

  let values = {
    addCart,
    readCart,
    cartData,
    delCart,
  };

  return (
    <myListContext.Provider value={values}>{children}</myListContext.Provider>
  );
};

export default MyListContextProvider;
