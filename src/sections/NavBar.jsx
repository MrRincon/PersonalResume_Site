import React, { useState, useEffect } from "react";
import styles from "./sectionStyles.module.css";
import NavLinks from "./NavLinks";
import { useTheme } from "../common/ThemeContext";

function NavElements({ onClick }) {
  const ELEMENTS = [
    "Home",
    "About Me & Education",
    "Skills",
    "Projects",
    "Contact",
  ];

  return ELEMENTS.map((element, elementIndex) => {
    const hrefId = element.replace(/\s+/g, "").toLowerCase();
    return (
      <a
        key={elementIndex}
        href={`#${hrefId}`}
        className="block md:inline hover:text-gray-400 py-2 md:py-0"
        onClick={onClick} // Close mobile menu when link is clicked
      >
        {element}
      </a>
    );
  });
}

function Navbar({ USER, isLoading, hasError }) {

  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`px-8 md:px-16 lg:px-24 sticky-top ${styles.navBar}`}>
      <div className="container py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">
          {isLoading
            ? "Loading..."
            : hasError
            ? "Error loading owner."
            : `${USER.name} ${USER.surname}`}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavElements />
          <div className="bg-gradient-to-r from-green-400 to-blue-500 inline-flex transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full space-x-4 items-center">
            <NavLinks USER={USER} theme={theme} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 py-2 space-y-2">
          <NavElements onClick={closeMenu} />
          <div className="bg-gradient-to-r from-green-400 to-blue-500 inline-flex w-full justify-center px-4 py-2 rounded-full items-center mt-2">
            <NavLinks USER={USER} theme={theme} />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
