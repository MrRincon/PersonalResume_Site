import React from "react";
import styles from "./sectionStyles.module.css";
import moonIcon from "../assets/moon.svg";
import sunIcon from "../assets/sun.svg";
import NavLinks from "./NavLinks";
import { useTheme } from "../common/ThemeContext";
const heroLight = "https://personalresume-server.onrender.com/myHeroLight.png";
const heroDark = "https://personalresume-server.onrender.com/myHeroDark.png";

function Home({ USER, isLoading, hasError }) {

  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sunIcon : moonIcon;
  const heroImg = theme === "light" ? heroDark : heroLight;

  const renderUser = () => {
    if (isLoading) return "Loading...";
    if (hasError || !USER) return "Error loading user";

    return (
      <>
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          {USER.name} {USER.surname}
        </span>
        , {USER.role}
      </>
    );
  };

  return (
    <div className={`text-center py-16 ${styles.hero}`} id="home">
      <img
        src={heroImg}
        alt="My Hero Image"
        className="mx-auto mt-4 mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <img
        src={themeIcon}
        alt=""
        className="mx-auto mb-8 w-10 h-10 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
        onClick={toggleTheme}
        type="button"
      />
      <h1 className="text-4xl font-bold">{renderUser()}</h1>
      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 inline-flex
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full space-x-4 text-center"
        >
          <NavLinks theme={theme} />
        </button>
      </div>
    </div>
  );
};

export default Home;

