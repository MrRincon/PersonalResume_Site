import React from "react";
import styles from "./sectionStyles.module.css";
import linkedinIconDark from "../assets/linkedin-dark.svg";
import linkedinIconLight from "../assets/linkedin-light.svg";
import githubIconDark from "../assets/github-dark.svg";
import githubIconLight from "../assets/github-light.svg";
import resumeIconLight from "../assets/resume-light.svg";
import resumeIconDark from "../assets/resume-dark.svg";
import CV from "../assets/Alam Rincon CV.pdf";
import { useTheme } from "../common/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const githubIcon = theme === "light" ? githubIconLight : githubIconDark;
  const linkedinIcon = theme === "light" ? linkedinIconLight : linkedinIconDark;
  const resumeIcon = theme === "light" ? resumeIconLight : resumeIconDark;

  return (
    <nav className={`px-8 md:px-16 lg:px-24 ${styles.navBar}`}>
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Alam Rincon</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#skill" className="hover:text-gray-400">
            Skills
          </a>
          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <div
          className="bg-gradient-to-r from-green-400 to-blue-500 hidden md:inline-flex
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full space-x-4 items-center"
        >
          <a href="https://github.com/MrRincon" target="_blank">
            <img className="w-10 h-10" src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/alamrincon/" target="_blank">
            <img className="w-10 h-10" src={linkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href={CV} download>
            <img className="w-10 h-10" src={resumeIcon} alt="Resume Icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
