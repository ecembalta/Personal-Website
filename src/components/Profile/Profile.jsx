import React from "react";
import "./Profile.css";
import { useSelector } from "react-redux";
import { translations } from "../../data/translations";

function Profile() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const currentLanguage = useSelector((state) => state.language.language);
  const texts = translations[currentLanguage];

  return (
    <div id="profile-container" className={`${darkMode ? "dark" : ""}`}>
      <h2>{texts.profile}</h2>
      <div className="profile-grid">
        <div className="profile-card">
          <h3>{texts.profile}</h3>
          {texts.profileData.map((item, index) => (
            <div key={index} className="profile-item">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="profile-card">
          <h3>{texts.aboutMe}</h3>
          <p>{texts.aboutMeDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
