import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import terrainImg from "@/public/3dTerrainViz.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "UBC Emerging Media Lab",
    location: "Vancouver, BC",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "2022.05-2022.12",
  },
  {
    title: "BGC Engineering",
    location: "Vancouver, BC",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "2023.01-2023.09",
  },
  {
    title: "iQIYI",
    location: "",
    description:
      "",
    icon: React.createElement(FaReact),
    date: "2024.01 - present",
  },
  {
    title: "University of British Columbia",
    location: "Vancouver, BC",
    desription:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "2019.09 - 2024.05",
  }

] as const;

export const projectsData = [
  {
    title: "3D Terrain Visualization",
    description:
      "Terrain data pipeline and OpenGL-based 3D terrain visualization, as part of my internship at BGC Engineering.",
    tags: ["C#", "Unity", "OpenGL", "Python", "SQLite"],
    imageUrl: terrainImg,
  },
  {
    title: "Course Database API + Website",
    description:
      "",
    tags: [],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Meeting Planner",
    description:
      "",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Ray-tracing Shader",
    description:
      "WebGL and ThreeJS based ray-tracing scene with multiple levels of reflection and refraction.",
      tags: ["JavaScript", "WebGL", "ThreeJS"],
      imageUrl: corpcommentImg,
  },
  {
    title: "DSL Language Compiler",
    description:
      "Java and Antlr-based AST parser in a browser-hosted website for writing 2D games in a custom language. ",
    tags: ["Java", "ANTLR", "Javascript"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Unity 3D Tactics Game",
    description:
      "A* Pathfinding in a grid-based 3D terrain, in a deployed Steam game.",
    tags: ["C#", "Unity", "A* Search"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "C#",
  "Unity",
  "Java",
  "JavaScript",
  "TypeScript",
  "SQL",
  "React",
  "Vue",
  "Node.js",
  "Git",
  "MongoDB",
] as const;