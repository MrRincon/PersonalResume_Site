import styles from "./HeaderStyles.module.css";
import myHeroDark from "../../assets/myHeroDark.png";
import myHeroLight from "../../assets/myHeroLight.png";
import moonIcon from "../../assets/moon.svg";
import sunIcon from "../../assets/sun.svg";
import { useTheme } from "../../common/ThemeContext";

function Account() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sunIcon : moonIcon;
  const myHeroImg = theme === "light" ? myHeroLight : myHeroDark;

  return (
    <div
      className={`navbar-brand col-lg-4 col-md-2 ${styles.navbarBrand}`}
    >
      <span className={`dropdown`}>
        <img
          className={`img-fluid rounded-circle ${styles.themeIcon}`}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
          type="button"
        />
        <img
          className={`img-fluid rounded-circle border border-1 ${styles.heroImg}`}
          src={myHeroImg}
          alt="Profile Picture"
        />
        <span
          className={`border border-1 rounded-end-3 my-auto px-3 dropdown-toggle ${styles.dropdownMenu}`}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Alam Rincon
        </span>
        <ul className={`dropdown-menu dropdown-menu-end ${styles.dropdownContent}`}>
          <li>
            {/* <!-- WORKING HERE LATER --> */}
            <a className={`disabled dropdown-item ${styles.dropdownContent}`} href="#">
              Account Settings
            </a>
          </li>
        </ul>
      </span>
    </div>
  );
}

export default Account;
