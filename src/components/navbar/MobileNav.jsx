import React from "react";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../common/PrimaryButton";
import { navbarMenus } from "../Navmenus";

const MobileNav = ({ toggle }) => {
  return (
    <nav className="mobile-nav_content text-black">
      <span className="mobile-nav__close" onClick={toggle}>
        <FaTimes />
      </span>
      <div className="mobile-nav_container mt-12">
        {navbarMenus.map((nav) => (
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
        ))}
      </div>
      <div className="absolute bottom-5">
        <div className="flex gap-7" onClick={toggle}>
          <PrimaryButton
            path="/contact-sales"
            title="Contact Sales"
            transparent={true}
          />

          <PrimaryButton
            path="/free-trials"
            title="Free Trial"
            transparent={false}
          />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
