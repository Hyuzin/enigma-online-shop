import { useContext } from 'react';
import { Button } from '../';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = ({ onClick }) => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className="absolute right-0 top-[70px] w-[290px] bg-white shadow-lg p-2 rounded h-[340px] flex flex-col justify-between ">
      <div className="overflow-auto flex flex-col gap-3 pb-2 px-1">
        {cartItems.map((products) => (
          <CartItem key={products.id} {...products} />
        ))}
      </div>
      <div className="bg-white pt-2">
        <Button variant={'normal'} onClick={onClick}>
          CHECKOUT
        </Button>
      </div>
    </div>
  );
};

export default CartDropdown;
