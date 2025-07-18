import React, { useState, useEffect } from "react";
import { useTheme } from "../common/ThemeContext";
const AboutImage = "https://personalresume-server.onrender.com/myHeroLight.png";

function AboutMe({ USER, isLoading, hasError }) {
  const { theme } = useTheme();

  return (
    <div className="bg-black text-white py-20" id="aboutme&education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
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
              <p className="text-lg">
                <span className="font-medium">BSc in Computer Science</span><br />
                Grade: First Class Honours<br />
                Achieved: July 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
