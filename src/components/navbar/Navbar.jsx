import { Link, NavLink } from "react-router-dom";
import { navbarMenus } from "../Navmenus";
import PrimaryButton from "../common/PrimaryButton";

const Navbar = () => {
  return (
    <header className="left-0 top-0 right-0 h-24 px-4 bg-[#F7F7F7] flex justify-center">
      <div className="w-full max-w-screen-l pl-[155px] pr-44 flex justify-between items-center">
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
          <ul className="flex items-center text-[#54626A] text-sm list-none">
            {navbarMenus.map((nav) => (
              <NavLink
                to={nav.path}
                key={nav.id}
                className={({ isActive }) =>
                  isActive ? " font-bold" : "font-normal"
                }
              >
                <li className="pl-4">{nav.title}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2">
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
    </header>
  );
};

export default Navbar;
