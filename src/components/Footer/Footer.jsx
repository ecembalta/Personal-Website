import React from "react";
import "./Footer.css";
import { useSelector } from "react-redux";
import { translations } from "../../data/translations";

function Footer() {
  const currentLanguage = useSelector((state) => state.language.language);
  const texts = translations[currentLanguage];

  return (
    <div id="footer-container">
      <h2>{texts.footerTitle}</h2>
      <div className="footer-content">
        <a href="mailto:ecemnurbalta@gmail.com">ecemnurbalta@gmail.com</a>
        <div className="footer-social">
          <a href="/">{texts.personalBlog}</a>
          <a href="https://github.com/ecembalta">Github</a>
          <a href="https://www.linkedin.com/in/ecem-nur-balta-3bb088108/">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
