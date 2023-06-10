import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';

const Layout = () => {
  return (
    <>
      <div className='flex flex-col'>
        <Outlet />
        <Navbar />
      </div>
    </>
  );
};

export default Layout;
