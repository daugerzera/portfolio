import { SkillIconProps } from "./types";
import html5 from "@/public/icons/html5.svg";
import css3 from "@/public/icons/css3.svg";
import react from "@/public/icons/react.svg";
import next from "@/public/icons/next.svg";
import javascript from "@/public/icons/javascript.svg";
import typescript from "@/public/icons/typescript.svg";
import firebase from "@/public/icons/firebase.svg";
import git from "@/public/icons/git.svg";
import github from "@/public/icons/github.svg";
import node from "@/public/icons/node.svg";
import tailwindcss from "@/public/icons/tailwindcss.svg";
import postgresql from "@/public/icons/postgresql.svg";
import prisma from "@/public/icons/prisma.svg";
import sequelize from "@/public/icons/sequelize.svg";
import gcp from "@/public/icons/gcp.svg";

export const skillsData: SkillIconProps[] = [
  { key: "html5", src: html5.src, title: 'HTML', alt: 'HTML Icon' },
  { key: "css3", src: css3.src, title: 'CSS', alt: 'CSS Icon' },
  { key: "javascript", src: javascript.src, title: 'JS', alt: 'JS Icon' },
  { key: "typescript", src: typescript.src, title: 'TS', alt: 'TS Icon' },
  { key: "react", src: react.src, title: 'REACT', alt: 'REACT Icon' },
  { key: "next", src: next.src, title: 'NEXT.JS', alt: 'NEXT Icon' },
  { key: "reactnative", src: react.src, title: 'REACT NATIVE', alt: 'REACT NATIVE Icon' },
  { key: "node", src: node.src, title: 'NODE', alt: 'NODE Icon' },
  { key: "tailwindcss", src: tailwindcss.src, title: 'TAILWIND', alt: 'TAILWIND Icon' },
  { key: "postgresql", src: postgresql.src, title: 'POSTGRE', alt: 'POSTGRE Icon' },
  { key: "sequelize", src: sequelize.src, title: 'SEQUELIZE', alt: 'SEQUELIZE Icon' },
  { key: "prisma", src: prisma.src, title: 'PRISMA', alt: 'PRISMA Icon' },
  { key: "gcp", src: gcp.src, title: 'GOOGLE CLOUD', alt: 'GOOGLE CLOUD Icon' },
  { key: "firebase", src: firebase.src, title: 'FIREBASE', alt: 'FIREBASE Icon' },
  { key: "git", src: git.src, title: 'GIT', alt: 'GIT Icon' },
  { key: "github", src: github.src, title: 'GITHUB', alt: 'GITHUB Icon' },
];