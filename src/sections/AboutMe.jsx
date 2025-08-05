import React, { useState, useEffect } from "react";
import { useTheme } from "../common/ThemeContext";

function AboutMe({ USER, isLoading, hasError }) {

  const { theme, toggleTheme } = useTheme();
  const [EDUCATION, setEducation] = useState(null);
  const [eduLoading, setEduLoading] = useState(true);
  const [eduError, setEduError] = useState(false);

  useEffect(() => {
    if (!USER) return;

    fetch(`https://personalresume-server.onrender.com/Education/${USER.education[0]}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (!json) {
          console.warn("No education data received from the server.");
          setEducation(null);
          setEduError(true);
        } else {
          setEducation(json);
          setEduError(false);
        }
      })
      .catch((error) => {
        console.error(`Error fetching the education: ${error}`);
        setEducation(null);
        setEduError(true);
      })
      .finally(() => setEduLoading(false));
  }, [USER]);

  const AboutImg = USER?.hero?.[theme]?.link;
  const AboutImgAlt = USER?.hero?.[theme]?.alt || "Hero Image";

  const renderEducation = () => {
    if (eduLoading) return "Loading...";
    if (eduError || !EDUCATION) return "Error loading education";

    const attachmentBlocks = EDUCATION.attachments?.map((attachment, index) => (
      <React.Fragment key={index}>
        {/* Vertical Separator (skip before first) */}
        <div className="hidden md:block h-full w-px bg-gray-400 mx-4" />

        <div className="flex flex-col items-start">
          <span className="font-semibold mb-1">{attachment.filename}</span>
          <a href={attachment.file} target="_blank" rel="noopener noreferrer">
            <img
              src={attachment.file}
              alt={attachment.filename}
              className="max-w-[100px] h-auto border border-gray-300 rounded shadow object-contain"
            />
          </a>
        </div>
      </React.Fragment>
    ));

    return (
      <div className="flex flex-col md:flex-row md:items-start mt-4 md:mt-0">
        <div className="flex flex-col mb-4 md:mb-0">
          <span className="font-medium">{EDUCATION.qualification}</span><br />
          Grade: {EDUCATION.grade}<br />
          Achieved: {EDUCATION.achieved}<br />
          Institute: {EDUCATION.institute}
        </div>
        <div className="flex flex-col md:flex-row md:items-start md:ml-8">
          {attachmentBlocks}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black text-white py-20" id="aboutme&education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImg}
            alt={AboutImgAlt}
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              {isLoading
                ? "Loading..."
                : hasError
                  ? "Error loading owner."
                  : `${USER.aboutme.header} ${USER.aboutme.objective}`}
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-2">Education</h3>
              <div className="text-lg">{renderEducation()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
