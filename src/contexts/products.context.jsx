import { createContext, useState } from 'react';
import PRODUCTS from '.././constants/shop-data.json';

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };
  return <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>;
};
