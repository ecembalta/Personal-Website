import React from "react";
import "./Skills.css";
import { useSelector } from "react-redux";
import { translations } from "../../data/translations";

function Skills() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const currentLanguage = useSelector((state) => state.language.language);
  const texts = translations[currentLanguage];

  return (
    <div id="skills-container" className={`${darkMode ? "dark" : ""}`}>
      <h2>{texts.skillsTitle}</h2>
      <div className="skills-grid">
        {texts.skillsList.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
