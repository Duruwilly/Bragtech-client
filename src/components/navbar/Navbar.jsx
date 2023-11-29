import { Link, NavLink } from "react-router-dom";
import PrimaryButton from "../common/PrimaryButton";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileNav from "./MobileNav";
import { useGlobalContext } from "../../context/GlobalContext";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const { menusData, companySettings } = useGlobalContext();

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
                src={companySettings?.company_logo}
                alt="logo"
                className=" w-full p-0 m-0"
              />
            </Link>
          </div>
          {/* menus */}
          <ul className="hidden navMenu items-center text-[#54626A] text-base list-none">
            {menusData?.main_menus.map((route) => (
              <>
                {route.status === "active" && (
                  <NavLink
                    to={route.url}
                    key={route.id}
                    className={({ isActive }) =>
                      isActive ? "font-bold" : "font-normal"
                    }
                  >
                    <li className="pl-4">{route.name}</li>
                  </NavLink>
                )}
              </>
            ))}
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
