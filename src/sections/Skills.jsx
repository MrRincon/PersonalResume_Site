import React, { useState, useEffect } from "react";
import { useTheme } from "../common/ThemeContext";

const skills = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
  },
];
function Skills({ USER, isLoading, hasError }) {

  const [SKILLS, setSkills] = useState([]);
  const [SkillsLoading, setSkillsLoading] = useState(true);
  const [SkillsError, setSkillsError] = useState(false);

  useEffect(() => {
    if (!USER) return;

    fetch(`https://personalresume-server.onrender.com/Skills/${USER.id}`)
      .then((res) => {
        console.log(res);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (json.length === 0)
          console.warn("No skills received from the server.");
        setSkills(json);
        setSkillsError(false);
      })
      .catch((error) => {
        console.error(`Error fetching the skills: ${error}`);
        setSkills([]);
        setSkillsError(true);
      })
      .finally(() => setSkillsLoading(false));
  }, [USER]);

  if (SkillsLoading) return <p>Loading skills...</p>;
  if (SkillsError) return <p>Error loading skills. Please try again later.</p>;

  const ALLSKILLS = [];
  SKILLS.forEach((skill, index) => {

  });

  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skills) => (
            <div
              key={skills.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {skills.id}
              </div>
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500"
              >
                {skills.title}
              </h3>
              <p className="mt-2 text-gray-300">{skills.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
