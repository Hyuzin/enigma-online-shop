import { useContext } from 'react';
import { CartContext } from '../../../contexts/cart.context';
import { Button, CheckoutItem } from '../../../components';

const Checkout = () => {
  const {
    cartItems,
    cartCount,
    priceTotal
  } = useContext(CartContext);

  return (
    <div className="w-full mt-[4.2rem] max-w-5xl mx-auto px-3 pb-5">
      <h1 className="text-3xl font-semibold">Cart</h1>
      <div className="bg-gray-300 mb-5 w-full h-0.5" />
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-5  w-[70%]">
          {cartItems.map((cartItem) => {
            return (
              <CheckoutItem cartItem={cartItem} key={cartItem.id} />
            );
          })}
        </div>
        <div className="sticky top-16 bg-white w-[30%] shadow-xl py-5 rounded px-5 h-full">
          <p className="text-center font-semibold pb-2">Summary</p>
          <hr />
          <p className="font-normal py-3">
            Total (<span className="font-semibold">{cartCount}</span>) :{' '}
            <span className="font-semibold">${priceTotal}</span>{' '}
          </p>
          <Button variant={'normal'}>CHECKOUT</Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
