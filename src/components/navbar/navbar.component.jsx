import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.util';
import { Button, CartIcon } from '../';
import { CartContext } from '../../contexts/cart.context';

const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  const { isCartOpen } = useContext(CartContext);

  console.log(isCartOpen);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <div className="fixed w-full">
      <div className="relative flex justify-between items-center max-w-5xl mx-auto py-5">
        <Link to="/">
          <p className="font-bold text-2xl">ENIGMA</p>
        </Link>
        <div className="flex flex-row gap-5 text-sm font-medium items-center">
          <Link to="/" className="hover:text-gray-500 transition-colors">
            HOME
          </Link>
          <Link to="/shop" className="hover:text-gray-500 transition-colors">
            SHOP
          </Link>
          {currentUser ? (
            <button
              onClick={signOutHandler}
              className="hover:text-gray-500 transition-colors"
            >
              SIGN OUT
            </button>
          ) : (
            <Link to="/auth" className="hover:text-gray-500 transition-colors">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && (
          <div className="absolute right-0 top-[70px] w-[250px] bg-white shadow-lg p-2 rounded h-[340px] flex flex-col justify-between text-center">
            <div>Product Item</div>
            <Button variant={'normal'} className="">
              CHECKOUT
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
