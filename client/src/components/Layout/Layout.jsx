import './body.css';
import { Outlet } from 'react-router';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function Layout() {
  return (
    <>
      <Header />
      <div className="body">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
