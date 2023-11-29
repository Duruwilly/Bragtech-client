import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { useGlobalContext } from "../../context/GlobalContext";

function Footer() {
  const { menusData, companySettings } = useGlobalContext();
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#222222] w-full px-10 pt-20 pb-9 relative">
      <div
        className="max-w-[80px] max-h-[90px] absolute right-9 top-12 cursor-pointer"
        onClick={scrollTop}
      >
        <img
          src="/images/arrow-up.gif"
          alt="whatsapp"
          className=" w-full p-0 m-0"
        />
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between">
        <div className="lg:w-[292px]">
          <div className="max-w-[80px] max-h-[90px]">
            <Link to="/">
              <img
                src={companySettings?.company_logo}
                alt="logo"
                className="w-full p-0 m-0"
              />
            </Link>
          </div>
          <p className="text-[#D7D7D7] text-base font-medium mt-5">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <ul className="list-none text-[#D7D7D7] space-y-6 mr-8 w-[152px]">
          <li className="text-2xl lg:text-xl font-semibold mb-4">About</li>
          {/* <li className="text-base font-medium">How it works</li> */}
          {/* <li className="text-base font-medium">Featured</li> */}
          <Link to="/partners">
            <li className="text-base font-medium">Partnership</li>
          </Link>
          {/* <li className="text-base font-medium">Business Relation</li> */}
        </ul>
        <ul className="list-none text-[#D7D7D7] space-y-6 mr-8 w-[152px]">
          <li className="text-2xl lg:text-xl  font-semibold mb-4">Community</li>
          <li className="text-base font-medium">Events</li>
          <li className="text-base font-medium">Blog</li>
          <li className="text-base font-medium">Podcast</li>
          <li className="text-base font-medium">Invite a friend</li>
        </ul>
        <ul className="list-none text-[#D7D7D7] space-y-6 w-[152px]">
          <li className="text-2xl lg:text-xl  font-semibold mb-4">Socials</li>
          <li className="text-base font-medium">Discord</li>
          <li className="text-base font-medium">Instagram</li>
          <li className="text-base font-medium">Twitter</li>
          <li className="text-base font-medium">Facebook</li>
        </ul>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-9 mt-12">
        <div>
          <p className="text-white text-xl font-medium">Follow Us</p>
          <div className="flex items-center gap-10 mt-2">
            <a href={companySettings?.facebook_link} target="_blank">
              <FaFacebookSquare color="white" size={30} />
            </a>
            <a href={companySettings?.twitter_link} target="_blank">
              <BsTwitter color="white" size={30} />
            </a>
            <a href={companySettings?.instagram_link} target="_blank">
              <BsInstagram color="white" size={30} />
            </a>
            <a href={companySettings?.linkedin_link} target="_blank">
              <BsLinkedin color="white" size={30} />
            </a>
            <a href={companySettings?.whatspp_chat_number} target="_blank">
              <IoLogoWhatsapp color="white" size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <div>
          <p className="text-white text-xs font-bold">&copy; 2023 Bragtech</p>
          <div className="flex flex-wrap items-center">
            {menusData?.footer_menus?.map((item) => (
              <>
                {item.status === "active" && (
                  <Link key={item.id} to={item.url}>
                    <p className="text-white text-[11.20px] mr-1">
                      {item.name} |
                    </p>
                  </Link>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
