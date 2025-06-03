import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Request", to: "/request" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "About", to: "/about" }
  ];

  return (
    <nav className="bg-black border-b border-blue-500 shadow-md shadow-blue-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_0.35rem_#38bdf8] hover:drop-shadow-[0_0_0.6rem_#38bdf8] transition duration-300"
        >
          BizSites
        </Link>
        <div className="flex space-x-6 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`relative px-2 py-1 transition-transform transform hover:scale-110 ${
                location.pathname === link.to
                  ? "text-blue-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400"
                  : "text-gray-300 hover:text-blue-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
