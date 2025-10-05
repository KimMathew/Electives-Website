import { link } from "fs";
import React from "react";

export const TABS = [
  { label: "Basic Info" },
  { label: "Projects" },
  { label: "Hobbies"},
];

export const CARDS = [
  [
    {
      image: "/mirror.jpg",
      title: "Basic Info",
      content: (
        <>
          I’m Kim Mathew C. Bautista, born on August 29, 2004.
        </>
      ),
    },
    {
      image: "/coding1.jpg",
      title: "Education",
      content: (
        <>
          I study Computer Science at Batangas State University.
        </>
      ),
    },
    {
      image: "/san-juan.png",
      title: "Location",
      content: (
        <>
          I live in Coloconto, San Juan, Batangas, Philippines.
        </>
      ),
    },
  ],
  [
    {
      image: "/smartplate.png",
      title: "SmartPlate",
      link: "https://smart-plate-git-master-kimmathewbautista11-gmailcoms-projects.vercel.app/",
      content: <>
        SmartPlate is an intelligent meal planner that offers personalized plans, AI-powered recipes, 
        and nutrition tracking to help users reach their health goals.
      </>,
    },
    {
      image: "/travelmate.png",
      title: "TravelMate",
      link: "https://github.com/adnalow/TravelMate",
      content: <>
        TravelMate is an Android app built with Dart that serves as your personal travel companion 
        wherever you go.
      </>,
    },
    {
      image: "/rpn.png",
      title: "RPN Simulator",
      link: "https://github.com/adnalow/RPN-Simulator",
      content: <>
        RPN Simulator is an interactive website that visualizes and simulates Reverse Polish Notation using the 
        Shunting Yard Algorithm and stack operations.
      </>,
    },
  ],
  [
    {
      image: "/gym.jpg",
      title: "Working Out",
      content: <>Lately, I am focusing on my fitness and working out regularly.</>,
    },
    {
      image: "/genshin.jpg",
      title: "Gaming",
      content: <>I like playing mobile and PC games, but now I only play Genshin Impact.</>,
    },
    {
      image: "/nj.jpg",
      title: "Music",
      content: <>I like listening to music and my favorite genre is K-Pop.</>,
    },
  ],
];