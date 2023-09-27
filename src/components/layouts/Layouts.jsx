import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import WhatsappIco from "../WhatsappToggle";
import Header from "../header/Header";

const Layouts = (props) => {
  return (
    <>
      <div className="">
        <Header />
        <Navbar />
        {props.children}
        {/* <WhatsappIco /> */}
        <Footer />
      </div>
    </>
  );
};

export default Layouts;
