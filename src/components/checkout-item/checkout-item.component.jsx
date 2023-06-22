import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { BsTrash } from 'react-icons/bs';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);

  const addItemToCartHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const deleteItemHandler = () => deleteItemFromCart(cartItem);

  return (
    <div className="flex flex-row shadow rounded overflow-hidden">
      <div className="w-[11vh] h-[10vh] ">
        <img src={imageUrl} alt="Product" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-row items-center w-full  justify-between px-3">
        <div className="flex flex-col">
          <p className="font-normal text-lg">{name}</p>
          <p className="font-bold text-md">${price}</p>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <div className="flex flex-row gap-3 border-r border-gray-400 pr-4">
            <button
              onClick={removeItemHandler}
              className="hover:bg-gray-200 w-5 h-5 items-center justify-center rounded-full flex transition-all duration-200 active:bg-gray-500"
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              onClick={addItemToCartHandler}
              className="hover:bg-gray-200/100 bg-gray-200/0 w-5 h-5 items-center justify-center rounded-full flex transition-all duration-200 active:bg-gray-500"
            >
              +
            </button>
          </div>
          <BsTrash size={20} className="cursor-pointer" onClick={deleteItemHandler} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
