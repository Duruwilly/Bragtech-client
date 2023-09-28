import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import WhatsappIco from "../WhatsappToggle";
import Header from "../header/Header";
import { ScrollToTop } from "../scrollToTop";

const Layouts = (props) => {
  return (
    <>
      <div className="">
        <ScrollToTop />
        <Header />
        <Navbar />
        {props.children}
        <WhatsappIco />
        <Footer />
      </div>
    </>
  );
};

export default Layouts;
