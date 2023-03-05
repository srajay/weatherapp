import React from "react";
import "./location.css";
const Location = () => {
  return (
    <div className="location">
      <h1>Connect With Me</h1>
      <div className="social-container">
        <div className="social-box">
          <a
            href="https://github.com/srajay"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <div className="social-box">
          <a
            href="https://www.linkedin.com/in/ajay-chaudhary-b64214242/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="social-box">
          <a
            href="https://www.instagram.com/__ajaychaudhary/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Location;
