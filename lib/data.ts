import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { StaticImageData } from "next/image";
import terrainImg from "@/public/3dTerrainViz.png";
import API2Img from "@/public/API1-alt.png";
import meetingPlannerImg from "@/public/meetingPlanner-1.png";
import raytracingImg from "@/public/raytracing.png";
import jetejImg from "@/public/jetej-1.png";
import tangoImg from "@/public/constTango.jpg";

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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  // {
  //   name: "Skills",
  //   hash: "#skills",
  // },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
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

export interface ProjectProps{
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  github?: string;
  link?: string;
}

export const projectsData: ProjectProps[] = [
  {
    title: "3D Terrain Visualization",
    description:
      "Terrain data pipeline and OpenGL-based 3D terrain visualization, as part of my internship at BGC Engineering.",
    tags: ["C#", "Unity", "OpenGL", "Python", "SQLite"],
    imageUrl: terrainImg,
  },
  {
    title: "Course Database API + Website",
    github: "https://github.com/tommo217/course-database-ts",
    description:
      "RESTful API for filtering, sorting, aggregation and transformation of course data, with parser for a custom query language.",
    tags: ["Typescript", "Node.js", "TDD"],
    imageUrl: API2Img,
  },
  {
    title: "Meeting Planner",
    link: "https://meeting-planner.pages.dev/",
    description:
      "Responsive web app for scheduling meetings, with user authentication and MongoDB database.",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    imageUrl: meetingPlannerImg,
  },
  {
    title: "Ray-tracing Shader",
    description:
      "WebGL and ThreeJS based ray-tracing scene with multiple levels of reflection and refraction.",
      tags: ["JavaScript", "WebGL", "ThreeJS"],
      imageUrl: raytracingImg,
  },
  {
    title: "DSL Language & Compiler",
    github: "https://github.com/tommo217/jetej",
    description:
      "Java and Antlr-based AST parser in a browser-hosted website for writing 2D games in a custom language. ",
    tags: ["Java", "ANTLR", "Javascript"],
    imageUrl: jetejImg,
  },
  {
    title: "Constellation Tango - A 2.5D Tactics Game",
    link: "https://store.steampowered.com/app/1721360/Constellation_Tango/",
    description:
      "A* Pathfinding in a grid-based 3D terrain written for a steam-deployed tactics game.",
    tags: ["C#", "Unity", "A* Algorithm"],
    imageUrl: tangoImg,
  },
] as const;

export const skillsData = [
  "C#",
  "Java",
  "TypeScript",
  "Unity",
  "React",
  "Vue",
  "Git",
] as const;