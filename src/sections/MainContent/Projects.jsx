import styles from "./MainContentStyles.module.css";

function Projects() {
  return (
    <div
      className={`col-xl-3 col-lg-4 col-md-6 border-3 border-end ${styles.projects}`}
    >
      <div
        className={`mx-5 text-center my-5 py-2 border-2 rounded-4 ${styles.projectsContainer}`}
      >
        <span>
          <h3>
            <strong>Projects</strong>
          </h3>
        </span>
        <div className={`accordion`} id="accordionExample">
          <div className={`accordion-item`}>
            <h2 className={`accordion-header`}>
              <button
                className={`accordion-button`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className={`accordion-collapse collapse show`}
              data-bs-parent="#accordionExample"
            >
              <div className={`accordion-body`}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                className={``} classes that we use to style each element. These className={``} classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className={`accordion-item`}>
            <h2 className={`accordion-header`}>
              <button
                className={`accordion-button collapsed`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className={`accordion-collapse collapse`}
              data-bs-parent="#accordionExample"
            >
              <div className={`accordion-body`}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate className={``} classes that we use to style each element. These
                className={``} classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className={`accordion-item`}>
            <h2 className={`accordion-header`}>
              <button
                className={`accordion-button collapsed`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className={`accordion-collapse collapse`}
              data-bs-parent="#accordionExample"
            >
              <div className={`accordion-body`}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate className={``} classes that we use to style each element. These
                className={``} classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <div className={`card col-10 mx-auto my-2 ${styles.projectCard}`}></div>
        <div className={`card col-10 mx-auto my-2 ${styles.projectCard}`}></div>
        <div className={`card col-10 mx-auto my-2 ${styles.projectCard}`}></div>
      </div>
    </div>
  );
}

export default Projects;
