import styles from "./HeaderStyles.module.css";
import linkedinIconDark from "../../assets/linkedin-dark.svg";
import linkedinIconLight from "../../assets/linkedin-light.svg";
import githubIconDark from "../../assets/github-dark.svg";
import githubIconLight from "../../assets/github-light.svg";
import CV from "../../assets/Alam Rincon CV.pdf";
import { useTheme } from "../../common/ThemeContext";

function Social() {
  const {theme, toggleTheme} = useTheme();
  const githubIcon = theme === "light" ? githubIconLight : githubIconDark;
  const linkedinIcon = theme === "light" ? linkedinIconLight : linkedinIconDark;
  
  return (
    <div className={`col-lg-2 col-md my-auto ${styles.info}`}>
      <a href="https://github.com/MrRincon" target="_blank">
        <img src={githubIcon} alt="Github Icon" />
      </a>
      <a href="https://www.linkedin.com/in/alamrincon/" target="_blank">
        <img src={linkedinIcon} alt="Linkedin Icon" />
      </a>
      <a href={CV} className={`link-underline link-underline-opacity-0`} download>
        <h4
          className={`${styles.info} ${styles.navLink}`}
          type="button"
        >
          Resume
        </h4>
      </a>
    </div>
  );
}

export default Social;
