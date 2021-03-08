import React from "react";
import "./Navbar.css";

function Navbar() {
  function goToAboutMe() {
    window.scrollTo({
      top: document.getElementById("Bio").offsetTop - 50,
      behavior: "smooth",
    });
  }

  function goToSkills() {
    window.scrollTo({
      top: document.getElementById("Skills").offsetTop - 50,
      behavior: "smooth",
    });
  }

  function goToExperience() {
    window.scrollTo({
      top: document.getElementById("Experience").offsetTop - 50,
      behavior: "smooth",
    });
  }
  function goToProjects() {
    window.scrollTo({
      top: document.getElementById("Projects").offsetTop - 50,
      behavior: "smooth",
    });
  }
  function goToContact() {
    window.scrollTo({
      top: document.getElementById("Contacts").offsetTop - 50,
      behavior: "smooth",
    });
  }

  return (
    <div className="Navbar-container">
      <button
        className="Navbar-button"
        title="About me"
        onClick={() => goToAboutMe()}
      >
        About me
      </button>
      <button
        className="Navbar-button"
        title="Skills"
        onClick={() => goToSkills()}
      >
        Skills
      </button>
      <button
        className="Navbar-button"
        title="Experience"
        onClick={() => goToExperience()}
      >
        Work experience
      </button>
      <button
        className="Navbar-button"
        title="Projects"
        onClick={() => goToProjects()}
      >
        Projects
      </button>
      <button
        className="Navbar-button"
        title="Contact"
        onClick={() => goToContact()}
      >
        Contact me
      </button>
    </div>
  );
}

export default Navbar;
