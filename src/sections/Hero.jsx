import React from "react";
import styles from "./sectionStyles.module.css";
import heroLight from "../assets/myHeroLight.png";
import heroDark from "../assets/myHeroDark.png";
import moonIcon from "../assets/moon.svg";
import sunIcon from "../assets/sun.svg";
import linkedinIconDark from "../assets/linkedin-dark.svg";
import linkedinIconLight from "../assets/linkedin-light.svg";
import githubIconDark from "../assets/github-dark.svg";
import githubIconLight from "../assets/github-light.svg";
import resumeIconLight from "../assets/resume-light.svg";
import resumeIconDark from "../assets/resume-dark.svg";
import CV from "../assets/Alam Rincon CV.pdf";
import { useTheme } from "../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sunIcon : moonIcon;
  const heroImg = theme === "light" ? heroDark : heroLight;
  const githubIcon = theme === "light" ? githubIconLight : githubIconDark;
  const linkedinIcon = theme === "light" ? linkedinIconLight : linkedinIconDark;
  const resumeIcon = theme === "light" ? resumeIconLight : resumeIconDark;

  return (
    <div className={`text-center py-16 ${styles.hero}`}>
      <img
        src={heroImg}
        alt="My Hero Image"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
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
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Alam Rincon
        </span>
        , Software Developer
      </h1>
      <p className="mt-4 text-lg">
        I specialise in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-pink-500 to-yellow-500 inline-flex
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full space-x-4 text-center"
        >
          <a href="https://github.com/MrRincon" target="_blank">
            <img className="w-7 h-7" src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/alamrincon/" target="_blank">
            <img className="w-7 h-7" src={linkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href={CV} download>
            <img className="w-7 h-7" src={resumeIcon} alt="Resume Icon" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
