import React from "react";

import { NavLink } from "react-router-dom";

function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/projects", label: "Projects" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-lg font-bold tracking-tight text-white">
          Madush
        </span>
        <ul className="flex gap-6">
          {links.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end
                className={({isActive}) => 
                  `text-sm transition-colors duration-200  ${isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-white"}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
