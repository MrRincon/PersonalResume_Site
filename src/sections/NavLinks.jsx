import React, { useState, useEffect } from "react";
import linkedinIconDark from "../assets/linkedin-dark.svg";
import linkedinIconLight from "../assets/linkedin-light.svg";
import githubIconDark from "../assets/github-dark.svg";
import githubIconLight from "../assets/github-light.svg";
import resumeIconLight from "../assets/resume-light.svg";
import resumeIconDark from "../assets/resume-dark.svg";

function NavLinks({ USER, theme }) {
  
  const githubIcon = theme === "light" ? githubIconLight : githubIconDark;
  const linkedinIcon = theme === "light" ? linkedinIconLight : linkedinIconDark;
  const resumeIcon = theme === "light" ? resumeIconLight : resumeIconDark;
  const [LINKS, setLinks] = useState([]);
  const [LinkLoading, setLinksLoading] = useState(true);
  const [LinkError, setLinksError] = useState(false);

  useEffect(() => {
    if (!USER) return;

    fetch(`https://personal-projects-server-p6x4.onrender.com/Links/${USER._id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (json.length === 0)
          console.warn("No links received from the server.");
        setLinks(json);
        setLinksError(false);
      })
      .catch((error) => {
        console.error(`Error fetching the links: ${error}`);
        setLinks([]);
        setLinksError(true);
      })
      .finally(() => setLinksLoading(false));
  }, [USER]);

  if (LinkLoading) return <p>Loading links...</p>;
  if (LinkError) return <p>Error loading links. Please try again later.</p>;
  
  const ALLLINKS = [];
  LINKS.forEach((link, index) => {
    switch (link.type) {
      case "Resume":
        ALLLINKS.push(
          <a key={index} href={`${link.link}`} download>
            <img
              className="w-10 h-10"
              src={resumeIcon}
              alt={link.img?.alt || "Resume"}
            />
          </a>
        );
        break;
      case "Linkedin":
        ALLLINKS.push(
          <a
            key={index}
            href={`${link.link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10 h-10"
              src={linkedinIcon}
              alt={link.img?.alt || "Linkedin"}
            />
          </a>
        );
        break;
      case "Github":
        ALLLINKS.push(
          <a
            key={index}
            href={`${link.link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10 h-10"
              src={githubIcon}
              alt={link.img?.alt || "Github"}
            />
          </a>
        );
        break;
    }
  });

  return <>{ALLLINKS}</>;
}

export default NavLinks;
