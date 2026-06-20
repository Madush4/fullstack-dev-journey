import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0 bg-zinc-900">
      <nav className="flex flex-wrap justify-between items-center mx-auto max-w-7xl md:p-4 p-2">
        <Link to="/" className="flex items-center">
          <img
            src="https://i.pinimg.com/736x/94/46/87/944687932e27307f6e4f7aacc1449846.jpg"
            alt="Logo"
            className="ml-4 h-12 rounded-full p-2"
          />
        </Link>

        <div className="flex justify-center items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm ${isActive ? "text-white font-bold" : " text-zinc-300 font-light"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            end
            className={({ isActive }) =>
              `text-sm ${isActive ? "text-white font-bold" : " text-zinc-300 font-light"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            end
            className={({ isActive }) =>
              `text-sm ${isActive ? "text-white font-bold" : " text-zinc-300 font-light"}`
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/products"
            end
            className={({ isActive }) =>
              `text-sm ${isActive ? "text-white font-bold" : " text-zinc-300 font-light"}`
            }
          >
            Products
          </NavLink>
        </div>
        <NavLink
          to="/login"
          end
          className={({ isActive }) =>
            `px-2 py-1 font-medium rounded-lg  shadow ${isActive ? "text-white bg-red-900" : "text-zinc-50 bg-red-500  hover:bg-red-900"}`
          }
        >
          Log In
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
