import React from "react";
import headerImage from "../../assets/header-image.png";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";
import "./Header.css";
function Header() {
  return (
    <div id="header-container">
      <div className="header-description">
        <div className="title-with-divider">
          <span className="divider"></span>
          <h6>Ecem Nur Çetin</h6>
        </div>
        <h2>Creative thinker Minimalism lover</h2>
        <p>
          Hi, I’m Ecem. I’m a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable frontend products with great
          user experiences. Let’s shake hands with me.
        </p>
        <div className="social-media-icons">
          <a href="/">Hire Me</a>
          <a href="/">
            <img src={githubIcon} alt="github" />
            Github
          </a>
          <a href="/">
            <img src={linkedinIcon} alt="linkedin" />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="header-image">
        <img src={headerImage} alt="profile" />
      </div>
    </div>
  );
}

export default Header;
