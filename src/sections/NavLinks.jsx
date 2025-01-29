import React from "react";
// Import images from the server side
// https://alam-rincon-resume-server.onrender.com
import linkedinIconDark from "../assets/linkedin-dark.svg";
import linkedinIconLight from "../assets/linkedin-light.svg";
import githubIconDark from "../assets/github-dark.svg";
import githubIconLight from "../assets/github-light.svg";
import resumeIconLight from "../assets/resume-light.svg";
import resumeIconDark from "../assets/resume-dark.svg";
import CV from "../assets/Alam Rincon CV.pdf";

function NavLinks({ theme }) {
  const githubIcon = theme === "light" ? githubIconLight : githubIconDark;
  const linkedinIcon = theme === "light" ? linkedinIconLight : linkedinIconDark;
  const resumeIcon = theme === "light" ? resumeIconLight : resumeIconDark;
  const PROFILE = [
    {
      type: "Github",
      link: "https://github.com/MrRincon",
      img: {
        src: githubIcon,
        alt: "Github Icon",
      },
    },
    {
      type: "Linkedin",
      link: "https://www.linkedin.com/in/alamrincon/",
      img: {
        src: linkedinIcon,
        alt: "Linkedin Icon",
      },
    },
    {
      type: "Resume",
      link: CV,
      img: {
        src: resumeIcon,
        alt: "Resume Icon",
      },
    },
  ];
  const LINKS = [];
  let linkIndex = 0;
  PROFILE.forEach((profile) => {
    if (profile.type === "Resume") {
      LINKS.push(
        <a key={linkIndex} href={`${profile.link}`} download>
          <img
            className="w-10 h-10"
            src={profile.img.src}
            alt={profile.img.alt}
          />
        </a>
      );
    } else {
      LINKS.push(
        <a
          key={linkIndex}
          href={`${profile.link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-10 h-10"
            src={profile.img.src}
            alt={profile.img.alt}
          />
        </a>
      );
    }
    linkIndex++;
  });

  return LINKS;
}

export default NavLinks;
