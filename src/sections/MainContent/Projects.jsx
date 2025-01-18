import styles from "./MainContentStyles.module.css";

function ProjectCard() {
  var AmountofCards = 8;
  const cards = [];
  for (let cardIndex = 1; cardIndex <= AmountofCards; cardIndex++) {
    cards.push(
      <div
        className={`card mb-2 ${styles.projectCard}`}
        key={`card-${cardIndex}`}
      >
        <div className={`card-header ${styles.cardHeader}`}>
          <button
            className={`btn w-100 text-start d-flex align-items-center`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${cardIndex}`}
            aria-expanded="false"
            aria-controls={`collapse${cardIndex}`}
          >
            <img
              src="..."
              className={`img-fluid rounded me-2 ${styles.cardImg}`}
              alt="Project"
            />
            <h5 className="overflow-x-hidden">
              <strong>Custom Item #{cardIndex}</strong>
            </h5>
          </button>
        </div>
        <div
          id={`collapse${cardIndex}`}
          className={`collapse`}
          data-bs-parent="#customCollapse"
        >
          <div className={`card-body`}>
            <strong>This is the item #{cardIndex}'s body content.</strong> You
            can add scrollable content here using the `style` attribute or
            Bootstrap utilities. Adjust the height as needed for your design.
          </div>
        </div>
      </div>
    );
  }

  return cards;
}

function Projects() {
  return (
    <div
      className={`col-xl-3 col-lg-4 col-md-6 border border-2 border-top-0 ${styles.projects}`}
    >
      <div
        className={`mx-5 text-center my-5 py-2 border-2 rounded-4 ${styles.projectsContainer}`}
      >
        <div className={`mx-auto mt-2 mb-4`}>
          <h3>
            <strong>Projects</strong>
          </h3>
        </div>
        <div className={`my-2 mx-4 ${styles.projectCards}`} id="customCollapse">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default Projects;
