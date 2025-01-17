import styles from "./MainContentStyles.module.css";

function Projects() {
  return (
    <div
      className={`col-xl-3 col-lg-4 col-md-6 border-3 border-end ${styles.projects}`}
    >
      <div
        className={`my-2 mx-5 text-center my-5 py-2 border-2 rounded-4 ${styles.projectsContainer}`}
      >
        <div className={`mx-auto mt-2 mb-4`}>
          <h3>
            <strong>Projects</strong>
          </h3>
        </div>
        <div className={`my-2 mx-4 ${styles.projectCards}`} id="customCollapse">
          <div className="card mb-2">
            <div className="card-header">
              <button
                className="btn btn-link w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Custom Item #1
              </button>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              data-bs-parent="#customCollapse"
            >
              <div
                className={`card-body ${styles.projectCardBody}`}
              >
                <strong>This is the first item's body content.</strong> You can
                add scrollable content here using the `style` attribute or
                Bootstrap utilities. Adjust the height as needed for your
                design.
              </div>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-header">
              <button
                className="btn btn-link w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Custom Item #2
              </button>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              data-bs-parent="#customCollapse"
            >
              <div
                className={`card-body ${styles.projectCardBody}`}
              >
                <strong>This is the second item's body content.</strong> Here
                you can also add scrollable content, such as a long list or
                detailed descriptions. You can use any HTML content here.
              </div>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-header">
              <button
                className="btn btn-link w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Custom Item #3
              </button>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              data-bs-parent="#customCollapse"
            >
              <div
                className={`card-body ${styles.projectCardBody}`}
              >
                <strong>This is the third item's body content.</strong>{" "}
                Customize this area as needed. Scrollable content will be
                constrained to the specified height.
                <strong>This is the third item's body content.</strong>{" "}
                Customize this area as needed. Scrollable content will be
                constrained to the specified height.
                <strong>This is the third item's body content.</strong>{" "}
                Customize this area as needed. Scrollable content will be
                constrained to the specified height.
              </div>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-header">
              <button
                className="btn btn-link w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Custom Item #3
              </button>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              data-bs-parent="#customCollapse"
            >
              <div
                className={`card-body ${styles.projectCardBody}`}
              >
                <strong>This is the third item's body content.</strong>{" "}
                Customize this area as needed. Scrollable content will be
                constrained to the specified height.
                <strong>This is the third item's body content.</strong>{" "}
                Customize this area as needed. Scrollable content will be
                constrained to the specified height.
                <strong>This is the third item's body content.</strong>{" "}
                Customize this area as needed. Scrollable content will be
                constrained to the specified height.
              </div>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-header">
              <button
                className="btn btn-link w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Custom Item #3
              </button>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              data-bs-parent="#customCollapse"
            >
              <div
                className={`card-body ${styles.projectCardBody}`}
              >
                <strong>This is the third item's body content.</strong>{" "}
                Customize this area as needed. Scrollable content will be
                constrained to the specified height.
                <strong>This is the third item's body content.</strong>{" "}
                Customize this area as needed. Scrollable content will be
                constrained to the specified height.
                <strong>This is the third item's body content.</strong>{" "}
                Customize this area as needed. Scrollable content will be
                constrained to the specified height.
              </div>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-header">
              <button
                className="btn btn-link w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Custom Item #3
              </button>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              data-bs-parent="#customCollapse"
            >
              <div
                className={`card-body ${styles.projectCardBody}`}
              >
                <strong>This is the third item's body content.</strong>{" "}
                Customize this area as needed. Scrollable content will be
                constrained to the specified height.
                <strong>This is the third item's body content.</strong>{" "}
                Customize this area as needed. Scrollable content will be
                constrained to the specified height.
                <strong>This is the third item's body content.</strong>{" "}
                Customize this area as needed. Scrollable content will be
                constrained to the specified height.
              </div>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-header">
              <button
                className="btn btn-link w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Custom Item #3
              </button>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              data-bs-parent="#customCollapse"
            >
              <div
                className={`card-body ${styles.projectCardBody}`}
              >
                <strong>This is the third item's body content.</strong>{" "}
                Customize this area as needed. Scrollable content will be
                constrained to the specified height.
                <strong>This is the third item's body content.</strong>{" "}
                Customize this area as needed. Scrollable content will be
                constrained to the specified height.
                <strong>This is the third item's body content.</strong>{" "}
                Customize this area as needed. Scrollable content will be
                constrained to the specified height.
              </div>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-header">
              <button
                className="btn btn-link w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Custom Item #3
              </button>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              data-bs-parent="#customCollapse"
            >
              <div
                className={`card-body ${styles.projectCardBody}`}
              >
                <strong>This is the third item's body content.</strong>{" "}
                Customize this area as needed. Scrollable content will be
                constrained to the specified height.
                <strong>This is the third item's body content.</strong>{" "}
                Customize this area as needed. Scrollable content will be
                constrained to the specified height.
                <strong>This is the third item's body content.</strong>{" "}
                Customize this area as needed. Scrollable content will be
                constrained to the specified height.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
