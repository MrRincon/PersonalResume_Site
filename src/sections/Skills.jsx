import React, { useState, useEffect } from "react";

function Skills({ USER }) {

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

  const groupedSkills = SKILLS.reduce((accumulator, skill) => {
    if (!accumulator[skill.type]) accumulator[skill.type] = [];
    accumulator[skill.type].push(skill);
    return accumulator;
  }, {});

  const groupByValidSubtype = (skills) => {
    const withSubtype = {};
    const noSubtype = [];

    for (const skill of skills) {
      if (skill.subtype && skill.subtype !== "None") {
        if (!withSubtype[skill.subtype]) withSubtype[skill.subtype] = [];
        withSubtype[skill.subtype].push(skill);
      } else {
        noSubtype.push(skill);
      }
    }

    return { withSubtype, noSubtype };
  };

  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 px-2 snap-x snap-mandatory">
          {Object.entries(groupedSkills).map(([type, skills]) => {
            const { withSubtype, noSubtype } = groupByValidSubtype(skills);

            return (
              <div
                key={type}
                className="snap-start min-w-[300px] max-w-sm flex-shrink-0 bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  {type}
                </h3>
                <ul className="space-y-1 text-sm text-gray-200 mb-4">
                  {noSubtype.map((skill) => (
                    <li key={skill.id} className="flex items-center gap-2">
                      {/* {skill.img?.src && (
                        <img
                          src={skill.img.src}
                          alt={skill.img.alt || skill.skill}
                          className="w-5 h-5 object-contain"
                        />
                      )} */}
                      <span>{skill.skill}</span>
                    </li>
                  ))}
                </ul>
                {Object.entries(withSubtype).map(([subtype, subSkills]) => (
                  <div key={subtype} className="mb-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">
                      {subtype}
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-200">
                      {subSkills.map((skill) => (
                        <li key={skill.id} className="flex items-center gap-2">
                          {/* {skill.img?.src && (
                            <img
                              src={skill.img.src}
                              alt={skill.img.alt || skill.skill}
                              className="w-5 h-5 object-contain"
                            />
                          )} */}
                          <span>{skill.skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
