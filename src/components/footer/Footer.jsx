import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
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
      <div className="container mx-auto flex justify-between items-cente">
        <div className="w-[292px]">
          <div className="max-w-[80px] max-h-[90px]">
            <Link to="/">
              <img
                src="/images/logo.png"
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
          <li className="text-xl font-semibold mb-4">About</li>
          <li className="text-base font-medium">How it works</li>
          <li className="text-base font-medium">Featured</li>
          <li className="text-base font-medium">Partnership</li>
          <li className="text-base font-medium">Business Relation</li>
        </ul>
        <ul className="list-none text-[#D7D7D7] space-y-6 mr-8 w-[152px]">
          <li className="text-xl font-semibold mb-4">Community</li>
          <li className="text-base font-medium">Events</li>
          <li className="text-base font-medium">Blog</li>
          <li className="text-base font-medium">Podcast</li>
          <li className="text-base font-medium">Invite a friend</li>
        </ul>
        <ul className="list-none text-[#D7D7D7] space-y-6 w-[152px]">
          <li className="text-xl font-semibold mb-4">Socials</li>
          <li className="text-base font-medium">Discord</li>
          <li className="text-base font-medium">Instagram</li>
          <li className="text-base font-medium">Twitter</li>
          <li className="text-base font-medium">Facebook</li>
        </ul>
      </div>
      <div className="container mx-auto flex justify-between mt-12">
        <div>
          <p className="text-white text-xl font-medium">Follow Us</p>
          <div className="flex items-center gap-10 mt-2">
            <FaFacebookSquare color="white" size={30} />
            <BsTwitter color="white" size={30} />
            <BsInstagram color="white" size={30} />
            <BsLinkedin color="white" size={30} />
            <IoLogoWhatsapp color="white" size={30} />
          </div>
        </div>
        <div>
          <div className=" pb-2 border-b-[3px] border-[#979797]">
            <p className=" text-white text-xl font-medium">
              International Resources:
            </p>
          </div>
          <span className="text-white text-base flex justify-between mt-3">
            <p>Select Language</p>
            <MdOutlineKeyboardArrowDown className="font-bold" size={20} />
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <div>
          <p className="text-white text-xs font-bold">&copy; 2023 Bragtech</p>
          <div className="flex items-center">
            <p className="text-white text-[11.20px] mr-1">Terms of Service |</p>
            <p className="text-white text-[11.20px] mr-1">
              Privacy Statement |
            </p>
            <p className="text-white text-[11.20px] mr-1">
              Bragtech Data Sheet |
            </p>
            <p className="text-white text-[11.20px] mr-1">
              Copyright Dispute Policy |
            </p>
            <p className="text-white text-[11.20px] mr-1">
              Service Level Agreement |
            </p>
            <p className="text-white text-[11.20px] mr-1">
              Security Response |
            </p>
            <p className="text-white text-[11.20px] mr-1">
              Business Continuity During COVID-19
            </p>
            <p className="text-white text-[11.20px] mr-1">
              Manage Cookie Preferences
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
