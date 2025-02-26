import React from "react";
import headerImage from "../../assets/header-image.png";
import githubDarkIcon from "../../assets/github-dark.png";
import githubLightIcon from "../../assets/github-light.png";
import linkedinDarkIcon from "../../assets/LinkedIn-dark.png";
import linkedinLightIcon from "../../assets/LinkedIn-light.png";
import "./Header.css";
import { useSelector } from "react-redux";
import { translations } from "../../data/translations";

function Header() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const currentLanguage = useSelector((state) => state.language.language);
  const texts = translations[currentLanguage];

  return (
    <div id="header-container">
      <div className="header-description">
        <div className="title-with-divider">
          <span className="divider"></span>
          <h6>Ecem Nur Çetin</h6>
        </div>
        <h2>{texts.headerTitle}</h2>
        <p>{texts.headerDescription}</p>
        <div className={`social-media-icons ${darkMode ? "dark" : ""}`}>
          <a href="/">{texts.hireMe}</a>
          {darkMode ? (
            <a href="/">
              <img src={githubDarkIcon} alt="github" />
              Github
            </a>
          ) : (
            <a href="/">
              <img src={githubLightIcon} alt="github" />
              Github
            </a>
          )}
          {darkMode ? (
            <a href="/">
              <img src={linkedinDarkIcon} alt="linkedin" />
              LinkedIn
            </a>
          ) : (
            <a href="/">
              <img src={linkedinLightIcon} alt="linkedin" />
              LinkedIn
            </a>
          )}
        </div>
      </div>
      <div className="header-image">
        <img src={headerImage} alt="profile" />
      </div>
    </div>
  );
}

export default Header;
