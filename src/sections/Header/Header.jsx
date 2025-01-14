import styles from "./HeaderStyles.module.css";
import Account from "./Account";
import NavItems from "./NavItems";
import Social from "./Social";

function Header() {
  return (
    <section
      id="header"
      className={`text-center row sticky-top bg-black border-bottom border-2 ${styles.header}`}
    >
      <div
        className={`col-lg-10 col-md border border-1 border-top-0 ${styles.navHeader} ${styles.roundedBottomEnd3} ${styles.colorModeContainer}`}
      >
        <nav
          className={`navbar navbar-expand-lg navbar-expand-md row text-center mx-auto`}
        >
          <Account />
          <button
            className={`navbar-toggler mx-auto my-2 ${styles.navToggler} ${styles.nav_hw_px}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon`}></span>
          </button>
          <NavItems />
        </nav>
      </div>
      <Social />
    </section>
  );
}

export default Header;
