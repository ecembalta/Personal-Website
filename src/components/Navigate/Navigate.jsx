import React from "react";
import "./Navigate.css";
import { useSelector } from "react-redux";
import { translations } from "../../data/translations";

function Navigate() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const currentLanguage = useSelector((state) => state.language.language);
  const texts = translations[currentLanguage];

  return (
    <div id="navigate-container">
      <div className="navigate-logo">E</div>
      <div className="navigate-links">
        <a href="#">{texts.skill}</a>
        <a href="#">{texts.project}</a>
        <a
          className={`active-link ${darkMode ? "dark" : ""}`}
          href="mailto:ecemnurbalta@gmail.com"
        >
          {texts.hireMe}
        </a>
      </div>
    </div>
  );
}

export default Navigate;
