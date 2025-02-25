import React from "react";
import { Label, Input, Form, FormGroup } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import "./Settings.css";

function Settings() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    dispatch({ type: "SET_DARK_MODE", payload: isChecked });
  };

  return (
    <div id="settings-container">
      <div className="setting-item">
        <Form>
          <FormGroup switch className="custom-switch">
            <Input type="switch" checked={darkMode} onChange={handleChange} />
            <Label check>DARK MODE {darkMode ? "ON" : "OFF"}</Label>
          </FormGroup>
        </Form>
      </div>
      <div className="separator">|</div>
      <div className="setting-item">
        <button
          className="language-button"
          onClick={() => setLanguage(language === "en" ? "tr" : "en")}
        >
          TÜRKÇE
        </button>
        'YE GEÇ
      </div>
    </div>
  );
}

export default Settings;
