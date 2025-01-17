import styles from "./HeaderStyles.module.css";
import Account from "./Account";
import NavItems from "./NavItems";

function NavBar() {
  return (
    <div
      className={`col-lg-10 col-md border border-1 border-top-0 ${styles.navHeader}`}
    >
      <nav
        className={`navbar navbar-expand-lg navbar-expand-md row text-center mx-auto`}
      >
        <Account />
        <button
          className={`navbar-toggler mx-auto my-2 ${styles.navToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <h4>HOME</h4>
        </button>
        <NavItems />
      </nav>
    </div>
  );
}

export default NavBar;
