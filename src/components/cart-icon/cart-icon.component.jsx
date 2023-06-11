import { useContext } from 'react';
import { BiCartAlt } from 'react-icons/bi';
import { CartContext } from '../../contexts/cart.context';
import { ProductsContext } from '../../contexts/products.context';
const CartIcon = () => {

    const {isCartOpen, setIsCartOpen} = useContext(CartContext)
    const handleClick = () => setIsCartOpen(!isCartOpen)
    const {products} = useContext(ProductsContext)

    const productsCount = products.length;

  return (
    <button className="relative items-center flex cursor-pointer" onClick={handleClick}>
      <BiCartAlt size={23} />
      <div className="bg-blue-500 w-4 h-3 items-center justify-center flex text-center  rounded-full text-white text-[10px] absolute -top-0.5 -right-1.5">
        {productsCount}
      </div>
    </button>
  );
};

export default CartIcon;
