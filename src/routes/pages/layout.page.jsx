import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';

const Layout = () => {
  return (
    <>
      <div className="flex flex-col font-inter">
        <Outlet />
        <Navbar />
      </div>
    </>
  );
};

export default Layout;
