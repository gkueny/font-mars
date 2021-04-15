import React, { useState } from "react";
import { Link } from "gatsby";
import useWindowSize from "../../hooks/useWindowSize";

const MOBILE_MAX_WIDTH = 1023;

const Header = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();

  const isOpen = open || width > MOBILE_MAX_WIDTH;

  return (
    <header>
      <nav className="flex items-center justify-between bg-white p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <h1 className="font-semibold text-xl tracking-tight text-gray-800">
            <Link to="/">Domaine Font-Mars</Link>
          </h1>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-800 border-teal-400 hover:font-semibold hover:border-white"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`absolute w-full block flex justify-center z-20 top-75 left-0 bg-white lg:flex lg:static lg:items-center lg:w-auto${
            isOpen ? "" : " hidden"
          }`}
        >
          <div className="text-xl lg:text-base lg:flex-grow">
            <Link
              to="/notre-terroire"
              className="block m-4 text-center lg:inline-block text-gray-800 hover:font-semibold"
            >
              Notre terroir
            </Link>
            <Link
              to="/les-vins"
              className="block m-4 text-center lg:inline-block text-gray-800 hover:font-semibold"
            >
              Les Vins
            </Link>
            <Link
              to="/histoire"
              className="block m-4 text-center lg:inline-block text-gray-800 hover:font-semibold"
            >
              Histoire
            </Link>
            <Link
              to="/location"
              className="block m-4 text-center lg:inline-block text-gray-800 hover:font-semibold"
            >
              Location
            </Link>
            <Link
              to="/nous-contacter"
              className="block m-4 text-center lg:inline-block text-gray-800 hover:font-semibold"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
