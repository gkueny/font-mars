import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import useWindowSize from "../../hooks/useWindowSize";

const MOBILE_MAX_WIDTH = 1023;

const Header = ({ lang = "fr" }) => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("/");
  const { width } = useWindowSize();

  const isOpen = open || width > MOBILE_MAX_WIDTH;

  React.useEffect(() => {
    if (typeof window !== "undefined" && window && window.location) {
      setUrl(window.location.pathname);
    }
  }, []);

  const currentFrLink = lang === "fr" ? url : url.replace("/en/", "/");
  const currentEnLink = lang === "en" ? url : `/en${url}`;

  return (
    <header>
      <nav className="flex items-center justify-between bg-white p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <h1 className="font-semibold text-xl tracking-tight text-gray-800">
            <Link to={`/${lang === "en" ? "en/" : ""}`}>Domaine Font-Mars</Link>
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
          className={`absolute w-full flex justify-center z-20 top-75 left-0 bg-white lg:flex lg:static lg:items-center lg:w-auto${
            isOpen ? "" : " hidden"
          }`}
        >
          <div className="text-xl lg:text-base lg:flex-grow">
            <Link
              to={`/${lang === "en" ? "en/" : ""}notre-terroire`}
              className="block m-4 text-center lg:inline-block text-gray-800 hover:font-semibold"
            >
              {lang === "fr" ? "Notre terroir" : "Our land"}
            </Link>
            <Link
              to={`/${lang === "en" ? "en/" : ""}les-vins`}
              className="block m-4 text-center lg:inline-block text-gray-800 hover:font-semibold"
            >
              {lang === "fr" ? "Les Vins" : "Wines"}
            </Link>
            <Link
              to={`/${lang === "en" ? "en/" : ""}histoire`}
              className="block m-4 text-center lg:inline-block text-gray-800 hover:font-semibold"
            >
              {lang === "fr" ? "Histoire" : "History"}
            </Link>
            <Link
              to={`/${lang === "en" ? "en/" : ""}location`}
              className="block m-4 text-center lg:inline-block text-gray-800 hover:font-semibold"
            >
              {lang === "fr" ? "Location" : "Renting"}
            </Link>
            <Link
              to={`/${lang === "en" ? "en/" : ""}nous-contacter`}
              className="block m-4 text-center lg:inline-block text-gray-800 hover:font-semibold"
            >
              {lang === "fr" ? "Nous contacter" : "Contact us"}
            </Link>
            <button
              onClick={() => {
                navigate(`${lang === "en" ? currentFrLink : currentEnLink}`);
              }}
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  e.preventDefault();
                  navigate(`${lang === "en" ? currentFrLink : currentEnLink}`);
                }
              }}
              className="block m-4 text-center lg:inline-block text-gray-800 hover:font-semibold"
            >
              {lang === "fr" ? (
                <img
                  className="h-4 pt-1"
                  alt="United States"
                  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                />
              ) : (
                <img
                  className="h-4 pt-1"
                  alt="United States"
                  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"
                />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
