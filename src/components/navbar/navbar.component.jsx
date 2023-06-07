import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed w-full">
      <div className="flex justify-between items-center max-w-5xl mx-auto py-5">
        <Link to="/">
          <p className="font-bold text-2xl">ENIGMA</p>
        </Link>
        <div className="flex flex-row gap-5 text-sm font-medium">
          <Link to="/" className="hover:text-gray-500 transition-colors">
            HOME
          </Link>
          <Link to="/shop" className="hover:text-gray-500 transition-colors">
            SHOP
          </Link>
          <Link to="/sign-in" className="hover:text-gray-500 transition-colors">
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
