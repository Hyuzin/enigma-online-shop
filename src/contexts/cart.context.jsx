import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const addProductToCard = (cartItems, productToAdd) => {
  const existingProducts = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if (existingProducts) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingProducts = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingProducts.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  cartCount: 0,
  priceTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addProductToCard(cartItems, productToAdd));
  };

  const deleteItemFromCart = (productToRemove) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== productToRemove.id));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const priceCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setPriceTotal(priceCount);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    deleteItemFromCart,
    priceTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
