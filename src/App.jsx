// import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./sections/NavBar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {

  const [USER, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch("https://personalresume-server.onrender.com/Owner")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (!json || json.length === 0) {
          console.warn("No owner data received from the server.");
          setUser(null);
          setHasError(true);
        } else {
          setUser(json[0]);
          setHasError(false);
        }
      })
      .catch((error) => {
        console.error(`Error fetching the Owner: ${error}`);
        setUser(null);
        setHasError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <Navbar USER={USER} isLoading={isLoading} hasError={hasError} />
      <Home USER={USER} isLoading={isLoading} hasError={hasError} />
      <AboutMe USER={USER} isLoading={isLoading} hasError={hasError} />
      <Skills USER={USER} />
      <Projects USER={USER} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
