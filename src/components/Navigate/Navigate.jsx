import React from "react";
import "./Navigate.css";


function Navigate() {
  return <div id="navigate-container">
    <div className="navigate-logo">E</div>
    <div className="navigate-links">
      <a href="#">Skills</a>
      <a href="#">Projects</a>
      <a className="active-link" href="#">Hire Me</a>
    </div>
  </div>;
}

export default Navigate;
