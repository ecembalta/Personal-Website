import React from "react";
import "./Navigate.css";
import { useSelector } from "react-redux";

function Navigate() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div id="navigate-container">
      <div className="navigate-logo">E</div>
      <div className="navigate-links">
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a className={`active-link ${darkMode ? "dark" : ""}`} href="#">
          Hire Me
        </a>
      </div>
    </div>
  );
}

export default Navigate;
