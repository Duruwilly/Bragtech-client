import { Link } from "react-router-dom";

const WhatsappIco = () => {
  return (
    <div className="max-w-[80px] max-h-[90px] flex justify-center items-center fixed bottom-6 right-9 z-10">
      <Link to="/">
        <img
          src="/images/whatsapp-icon.gif"
          alt="whatsapp"
          className=" w-full p-0 m-0"
        />
      </Link>
    </div>
  );
};

export default WhatsappIco;
