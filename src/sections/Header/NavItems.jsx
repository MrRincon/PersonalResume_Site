import styles from "./HeaderStyles.module.css";

function NavItems() {
  return (
    <div
      className={`scrollspy-example text-center collapse navbar-collapse col-xl-6 ${styles.info}`}
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-root-margin="0px 0px -40%"
      id="navbarSupportedContent"
      data-bs-smooth-scroll="true"
      tabindex="0"
    >
      <ul className={`navbar-nav mx-auto d-flex flex-column flex-md-row justify-content-md-center align-items-md-center`}>
        <li className={`nav-item`}>
          <button
            className={`nav-link ${styles.navLink}`}
            href="#scrollspyHeading1"
          >
            About Me
          </button>
        </li>
        <li className={`nav-item`}>
          <button
            className={`nav-link ${styles.navLink}`}
            href="#scrollspyHeading2"
          >
            Skills
          </button>
        </li>
        <li className={`nav-item`}>
          <button
            className={`nav-link ${styles.navLink}`}
            href="#scrollspyHeading3"
          >
            Experience
          </button>
        </li>
        <li className={`nav-item`}>
          <button
            className={`nav-link ${styles.navLink}`}
            href="#scrollspyHeading4"
          >
            Educations
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavItems;
