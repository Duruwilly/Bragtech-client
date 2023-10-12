import { Link, NavLink, useNavigate } from "react-router-dom";
// import { navbarMenus } from "../Navmenus";
import PrimaryButton from "../common/PrimaryButton";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileNav from "./MobileNav";
import { useGlobalContext } from "../../context/GlobalContext";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const { scrollToSection, solutions } = useGlobalContext();

  const navigate = useNavigate();

  const scrollToSolutions = () => {
    if (solutions.current === null) {
      navigate("/");
    } else {
      scrollToSection(solutions);
    }
  };

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className="left-0 top-0 right-0 h-24 px-4 bg-[#F7F7F7] flex justify-center">
      <div className="section-container flex justify-between items-center">
        <div className="flex items-center">
          {/* logo */}
          <div className="max-w-[80px] max-h-[90px] flex justify-center items-center">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="logo"
                className=" w-full p-0 m-0"
              />
            </Link>
          </div>
          {/* menus */}
          <ul className="hidden navMenu items-center text-[#54626A] text-sm list-none">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
              <li className="pl-4">Home</li>
            </NavLink>
            <li className="pl-4 cursor-pointer" onClick={scrollToSolutions}>
              Solutions
            </li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
              <li className="pl-4">Services</li>
            </NavLink>
            <NavLink
              to="/our-clients"
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
              <li className="pl-4">Our Clients</li>
            </NavLink>
            <NavLink
              to="/partners"
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
              <li className="pl-4">Partners</li>
            </NavLink>
            <NavLink
              to="/why-bragtech"
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
              <li className="pl-4">Why Bragtech</li>
            </NavLink>
          </ul>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <PrimaryButton
            path="/contact-sales"
            title="Contact Sales"
            transparent={true}
          />
        </div>
        {/* bar */}
        <div className="relative navBarToggle cursor-pointer">
          <FaBars size={30} className="textxl" onClick={toggleMobileNav} />
        </div>
        {/* mobile nav */}
        <div
          className={`${
            mobileNav ? "left0" : "left-100"
          } navMobileVisibility mobile-wrapper`}
        >
          <div className="mobile-overlay" onClick={toggleMobileNav}></div>
          <MobileNav toggle={toggleMobileNav} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
