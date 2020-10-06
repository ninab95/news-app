import React from "react";
import Info from "./Info";
import "./InfoCss.css";

function InfoContainer() {
  const informations = [
    {
      title: "Welcome to Ghost",
      date: "By Ghost in Getting Started on 10 Jul 2019",
      description:
        "Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time.…",
    },
    {
      title: "Writing posts with Ghost ",
      date: "By Ghost in Getting Started on 10 Jul 2019",
      description:
        "Getting started with the editor is simple, with familiar formatting options in a functional toolbar and the ability to add dynamic content seamlessly.…",
    },
    {
      title: "Publishing options",
      date: "By Ghost in Getting Started on 10 Jul 2019",
      description:
        "The Ghost editor has everything you need to fully optimise your content. This is where you can add tags and authors, feature a post, or turn a post into a page.…",
    },
    {
      title: "Managing admin settings",
      date: "By Ghost in Getting Started on 10 Jul 2019",
      description:
        "There are a couple of things to do next while you're getting set up: making your site private and inviting your team.…",
    },
    {
      title: "Organising your content",
      date: "By Ghost in Getting Started on 10 Jul 2019",
      description:
        "Ghost has a flexible organisational taxonomy called tags which can be used to configure your site structure using dynamic routing.…",
    },
    {
      title: "Apps & integrations",
      date: "By Ghost in Getting Started on 10 Jul 2019",
      description:
        "There are three primary ways to work with third-party services in Ghost: using Zapier, editing your theme, or using the Ghost API.…",
    },
    {
      title: "Creating a custom theme",
      date: "By Ghost in Getting Started on 10 Jul 2019",
      description:
        "Ghost comes with a beautiful default theme called Casper, which is designed to be a clean, readable publication layout and can be easily adapted for most purposes.…",
    },
  ];
  return (
    <div>
      {informations.map((information, key) => {
        return <Info key={key} information={information} />;
      })}
    </div>
  );
}

export default InfoContainer;
