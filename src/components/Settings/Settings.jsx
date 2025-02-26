import React, { useEffect } from "react";
import { Label, Input, Form, FormGroup } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../redux/actions/languageActions";
import { translations } from "../../data/translations";
import "./Settings.css";

function Settings() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const currentLanguage = useSelector((state) => state.language.language);
  const texts = translations[currentLanguage];

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== currentLanguage) {
      dispatch(setLanguage(savedLanguage));
    }
  }, []);

  const handleDarkModeChange = (event) => {
    const isChecked = event.target.checked;
    dispatch({ type: "SET_DARK_MODE", payload: isChecked });
  };

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === "tr" ? "en" : "tr";
    dispatch(setLanguage(newLanguage));
  };

  return (
    <div id="settings-container">
      <div className="setting-item">
        <Form>
          <FormGroup switch className="custom-switch">
            <Input
              type="switch"
              checked={darkMode}
              onChange={handleDarkModeChange}
            />
            <Label check>
              {texts.darkMode} {darkMode ? texts.darkModeOn : texts.darkModeOff}
            </Label>
          </FormGroup>
        </Form>
      </div>
      <div className="separator">|</div>
      <div className="setting-item">
        <button className="language-button" onClick={handleLanguageChange}>
          {texts.languageSwitch}
        </button>
      </div>
    </div>
  );
}

export default Settings;
