import { useContext } from "react";
import { createContext, useState } from "react";
const Context = createContext();
const Provider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  return (
    <Context.Provider
      value={{
        wishlist,
        setWishlist,
        search,
        setSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStatevalue = () => {
  return useContext(Context);
};
export default Provider;
