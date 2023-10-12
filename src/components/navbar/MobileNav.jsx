import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import PrimaryButton from "../common/PrimaryButton";
import { useGlobalContext } from "../../context/GlobalContext";

const MobileNav = ({ toggle }) => {
  const { scrollToSection, solutions } = useGlobalContext();

  const navigate = useNavigate();

  const scrollToSolutions = () => {
    if (solutions.current === null) {
      navigate("/");
    } else {
      scrollToSection(solutions);
    }
  };

  return (
    <nav className="mobile-nav_content text-black">
      <div className="flex justify-between">
        <div className="max-w-[80px] max-h-[90px] flex justify-center items-center">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="logo"
              className=" w-full p-0 m-0"
            />
          </Link>
        </div>
        <span className="mobile-nav__close" onClick={toggle}>
          <FaTimes />
        </span>
      </div>
      <div className="mobile-nav_container mt-12">
        {/* {navbarMenus.map((nav) => (
          <NavLink
            to={nav.path}
            key={nav.id}
            className={({ isActive }) =>
              isActive ? " font-bold" : "font-normal"
            }
          >
            <ul className="mobile-menu py-6" onClick={toggle}>
              <li className="">{nav.title}</li>
            </ul>
          </NavLink>
        ))} */}
        <ul className="" onClick={toggle}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold" : "font-normal"
            }
          >
            <li className="py-6">Home</li>
          </NavLink>
          <li className="py-6 cursor-pointer" onClick={scrollToSolutions}>
            Solutions
          </li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "font-bold" : "font-normal"
            }
          >
            <li className="py-6">Services</li>
          </NavLink>
          <NavLink
            to="/our-clients"
            className={({ isActive }) =>
              isActive ? "font-bold" : "font-normal"
            }
          >
            <li className="py-6">Our Clients</li>
          </NavLink>
          <NavLink
            to="/partners"
            className={({ isActive }) =>
              isActive ? "font-bold" : "font-normal"
            }
          >
            <li className="py-6">Partners</li>
          </NavLink>
          <NavLink
            to="/why-bragtech"
            className={({ isActive }) =>
              isActive ? "font-bold" : "font-normal"
            }
          >
            <li className="py-6">Why Bragtech</li>
          </NavLink>
        </ul>
      </div>
      <div className="absolute bottom-5">
        <div className="w-full" onClick={toggle}>
          <PrimaryButton
            path="/contact-sales"
            title="Contact Sales"
            transparent={false}
          />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
