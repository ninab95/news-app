import React from "react";
import "./ShareCss.css";

function SharePage() {
  return (
    <div className="main">
      <div className="topic">
        <span>Topic</span>
        <button>Getting Started</button>
      </div>
      <div className="share">
        <span>Share</span>
        <div className="twitter">
          <i className="fab fa-twitter"></i>
        </div>
        <div className="fb">
          <i className="fab fa-facebook-f"></i>
        </div>
        <div className="linkedin">
          <i className="fab fa-linkedin-in"></i>
        </div>
        <div className="envelope">
          <i className="fas fa-envelope"></i>
        </div>
      </div>
    </div>
  );
}

export default SharePage;
