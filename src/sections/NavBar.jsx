import React, { useState, useEffect } from "react";
import styles from "./sectionStyles.module.css";
import NavLinks from "./NavLinks";
import { useTheme } from "../common/ThemeContext";

function NavElements() {
  const ELEMENTS = [
    "Home",
    "About Me & Education",
    "Skills",
    "Projects",
    "Contact",
  ];
  const NAV = [];
  let elementIndex = 0;
  ELEMENTS.forEach((element) => {
    const hrefId = element.replace(/\s+/g, "").toLowerCase();
    NAV.push(
      <a key={elementIndex} href={`#${hrefId}`} className="hover:text-gray-400">
        {element}
      </a>
    );
    elementIndex++;
  });

  return NAV;
}

function Navbar() {
  const { theme } = useTheme();
  const [USER, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch("https://alam-rincon-resume-server.onrender.com/Owner")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (!json || json.length === 0) {
          console.warn("No owner data received from the server.");
          setUser(null);
          setHasError(true);
        } else {
          setUser(json[0]);
          setHasError(false);
        }
      })
      .catch((error) => {
        console.error(`Error fetching the Owner: ${error}`);
        setUser(null);
        setHasError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <nav className={`px-8 md:px-16 lg:px-24 sticky-top ${styles.navBar}`}>
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">
          {isLoading
            ? "Loading..."
            : hasError
            ? "Error loading owner."
            : `${USER.name} ${USER.surname}`}
        </div>
        <div className="space-x-6">
          <NavElements />
        </div>
        <div
          className="bg-gradient-to-r from-green-400 to-blue-500 hidden md:inline-flex
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full space-x-4 items-center"
        >
          <NavLinks theme={theme} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
