import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>

      <ul className="hidden sm:flex gap-8 text-base font-semibold tracking-wide text-gray-700 bg-white/80 px-6 py-2 rounded-full shadow-md">
        {[
          { to: "/", label: "HOME" },
          { to: "/collection", label: "COLLECTION" },
          { to: "/about", label: "ABOUT" },
          { to: "/contact", label: "CONTACT" },
          {
            to: "https://e-commerce-admin-zeta-sand.vercel.app",
            label: "ADMIN PANEL",
            external: true,
          },
        ].map(({ to, label, external }) => (
          <NavLink
            key={label}
            to={to}
            target={external ? "_blank" : undefined}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 transition-colors duration-200 ${
                isActive ? "text-black" : "hover:text-black"
              }`
            }
          >
            <span>{label}</span>
            <span
              className={`
          h-[2px] w-6 mt-1 rounded-full
          transition-all duration-300
          ${
            window.location.pathname === to
              ? "bg-gradient-to-r from-black via-gray-700 to-gray-400"
              : "bg-gray-300 group-hover:bg-gray-700"
          }
          ${
            window.location.pathname === to
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }
        `}
            ></span>
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        {/* Search Icon with hover effect */}
        <button
          onClick={() => {
            setShowSearch(true);
            navigate("/collection");
          }}
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Search"
        >
          <img src={assets.search_icon} className="w-5" alt="Search" />
        </button>

        {/* Profile Icon with dropdown */}
        <div className="group relative">
          <button
            onClick={() => (token ? null : navigate("/login"))}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Profile"
          >
            <img className="w-5" src={assets.profile_icon} alt="Profile" />
          </button>
          {/* Dropdown Menu */}
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-20">
              <div className="flex flex-col gap-2 w-40 py-3 px-5 bg-white text-gray-700 rounded-lg shadow-lg border">
                <p className="cursor-pointer hover:text-black transition">
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black transition"
                >
                  Orders
                </p>
                <p
                  onClick={logout}
                  className="cursor-pointer hover:text-red-600 transition"
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Cart Icon with badge */}
        <Link to="/cart" className="relative group">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
          <span className="absolute right-[-6px] bottom-[-6px] w-5 h-5 flex items-center justify-center bg-black text-white rounded-full text-[10px] font-bold border-2 border-white shadow group-hover:scale-110 transition">
            {getCartCount()}
          </span>
        </Link>

        {/* Hamburger Menu Icon for mobile */}
        <button
          onClick={() => setVisible(true)}
          className="p-2 rounded-full hover:bg-gray-100 transition sm:hidden"
          aria-label="Menu"
        >
          <img src={assets.menu_icon} className="w-5" alt="Menu" />
        </button>
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="https://e-commerce-admin-zeta-sand.vercel.app"
            target="_blank"
          >
            ADMIN PANEL
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
