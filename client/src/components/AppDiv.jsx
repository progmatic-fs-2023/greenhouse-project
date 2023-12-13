import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import "./style.css"

const AppDiv = () => {
  return (
    <div className="appDiv">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default AppDiv