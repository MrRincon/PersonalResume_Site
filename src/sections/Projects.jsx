import React, { useEffect, useState } from "react";

function Projects({ USER }) {

  const [PROJECTS, setProjects] = useState([]);
  const [ProjectsLoading, setProjectsLoading] = useState(true);
  const [ProjectsError, setProjectsError] = useState(false);

  useEffect(() => {
    if (!USER?._id) return;

    fetch(`https://personal-projects-server-p6x4.onrender.com/Projects/${USER._id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (!Array.isArray(json) || json.length === 0) {
          console.warn(`No projects received from the server.`);
          setProjects([]);
          setProjectsError(false);
          return;
        }
        setProjects(json);
        setProjectsError(false);
      })
      .catch((error) => {
        console.error(`Error fetching the projects: ${error}`);
        setProjects([]);
        setProjectsError(true);
      })
      .finally(() => setProjectsLoading(false));
  }, [USER]);

  if (ProjectsLoading) return "Loading Projects...";
  if (ProjectsError) return "Error loading projects.";

  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project._id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-green-400 font-semibold mb-1">{project.subcategory}</p>
              <p className="mb-1"><strong>Status:</strong> {project.status}</p>
              <p className="mb-4"><strong>Main Language:</strong> {project.mainpl}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.links.github && project.links.github.includes("github.io") ? (
                  <a
                    href={project.links.github}
                    className="bg-gradient-to-r from-indigo-400 to-pink-500 text-white px-4 py-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Page
                  </a>
                ) : project.links.github && project.links.github.includes("github.com") ? (
                  <a
                    href={project.links.github}
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </a>
                ) : null}
                {project.links["front-end"] && project.links["front-end"] !== "" && (
                  <a
                    href={project.links["front-end"]}
                    className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Front-End Repo
                  </a>
                )}
                {project.links["back-end"] && project.links["back-end"] !== "" && (
                  <a
                    href={project.links["back-end"]}
                    className="bg-gradient-to-r from-yellow-400 to-red-500 text-white px-4 py-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Back-End Repo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
