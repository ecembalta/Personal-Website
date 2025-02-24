import React, { useState } from "react";
import { Label, Input, Form, FormGroup } from "reactstrap";
import "./Settings.css";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setDarkMode(isChecked);
  };
  return (
    <div id="settings-container">
      <div className="setting-item">
      <Form>
        <FormGroup switch className="custom-switch">
          <Input
            type="switch"
            checked={darkMode}
            onChange={handleChange}
          />
          <Label check>DARK MODE  </Label>
          </FormGroup>
      </Form>
      </div>
      <div className="separator">|</div>
      <div className="setting-item">
            <button 
              className="language-button"
              onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
            >
              TÜRKÇE
            </button>
            'YE GEÇ
          </div>
    </div>
  );
}

export default Settings;
