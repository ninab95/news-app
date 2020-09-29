import React from "react";
import "./WelcomeCss.css";

function WelcomePage() {
  return (
    <div className="welcome">
      <div className="welcome-image">
        <div className="welcome-header">
          <h4>Article - Getting Started</h4>
          <h1>Welcome to Ghost</h1>
        </div>
        <div className="profile-info">
          <img src={require("../img/ghost.png")} alt="avatar" />
          <div className="profile-name">
            <h4>Ghost</h4>
            <p>10 Jul 2019 - 1 min read</p>
          </div>
        </div>
      </div>
      <div className="about">
        <p>Welcome, it's great to have you here.</p>
        <h4>
          We know that first impressions are important, so we've populated your
          new site with some initial getting started posts that will help you
          get familiar with everything in no time. This is the first one!
        </h4>
        <h4>
          We know that first impressions are important, so we've populated your
          new site with some initial getting started posts that will help you
          get familiar with everything in no time. This is the first one!
        </h4>
        <h4>
          We know that first impressions are important, so we've populated your
          new site with some initial getting started posts that will help you
          get familiar with everything in no time. This is the first one!
        </h4>
      </div>
    </div>
  );
}

export default WelcomePage;
