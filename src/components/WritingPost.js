import React from "react";
import "./WritingPost.css";

function WritingPost() {
  return (
    <div className="container">
      <div className="empty"></div>
      <div className="filled">
        <div className="text">
          <h3>Writing posts with Ghost</h3>
          <h4>
            Getting started with the editor is simple, with familiar formatting
            options in a...
          </h4>
          <p>10 Jul 2019</p>
        </div>
        <div className="arrow-icon">
          <i className="fas fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
}

export default WritingPost;
