import React from "react";
import "./Projects.css";
import { useSelector } from "react-redux";
import project1 from "../../assets/projects1.png";
import project2 from "../../assets/projects2.png";
import project3 from "../../assets/projects3.png";
import { translations } from "../../data/translations";

function Projects() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const currentLanguage = useSelector((state) => state.language.language);
  const texts = translations[currentLanguage];

  const projectImages = [project1, project2, project3];

  return (
    <div id="projects-container" className={`${darkMode ? "dark" : ""}`}>
      <h2>{texts.projectsTitle}</h2>
      <div className="projects-grid">
        {texts.projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-details">
              <img src={projectImages[index]} alt={project.title} />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="skills">
                {project.skills
                  ? project.skills.map((skill, skillIndex) => (
                      <span key={skillIndex}>{skill}</span>
                    ))
                  : null}
              </div>
            </div>
            <div className="project-links">
              <a href={project.github || "#"}>{texts.github || "Github"}</a>
              <a href={project.viewSite || "#"}>{texts.viewSite}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
