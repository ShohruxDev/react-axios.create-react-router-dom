import { useContext } from "react";
import { createContext, useState } from "react";
const Context = createContext();
const Provider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
 return <Context.Provider
    value={{
      wishlist,
      setWishlist,
    }}
  >
    {children}
  </Context.Provider>;
};
export const useStatevalue = () => {
  return useContext(Context);
};
export default Provider;
