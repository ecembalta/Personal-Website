import React from "react";
import "./Projects.css";
import { useSelector } from "react-redux";
import project1 from "../../assets/projects1.png";
import project2 from "../../assets/projects2.png";
import project3 from "../../assets/projects3.png";

const projects = [
  {
    id: 1,
    image: project1,
    title: "Workintech",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    skills: ["react", "redux", "axios"],
  },
  {
    id: 2,
    image: project2,
    title: "Random Jokes",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    skills: ["react", "redux", "axios"],
  },
  {
    id: 3,
    image: project3,
    title: "Journey",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    skills: ["react", "redux", "axios"],
  },
];

function Projects() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div id="projects-container" className={`${darkMode ? "dark" : ""}`}>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card">
            <div className="project-details">
              <img src={project.image} alt={project.title} />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="skills">
                {project.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
            <div className="project-links">
              <a href="/">Github</a>
              <a href="/">View Site</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
