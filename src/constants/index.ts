import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  _66bit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Frontend-developer",
    companyName: "Brunoyam",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      `Developed new functionality for the online course editor, business logic and interface
       refinement, personal account My competence included the fulfillment of the tasks of the frontend part of the project,
       interaction with the backend and designer, conducting a code review.`,
      `Improved site performance by optimizing loading and speeding up interface response;`,
      `Implemented the functionality of creating and editing courses.`
    ],
  },
  {
    title: "Frontend-developer",
    companyName: "66bit",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Jan 2023",
    points: [
      "Development of a website for conducting surveys, with visual output of the results in the form of a heat map.",
      "Technology stack- JS, React, SCSS, docker, Leaflet.",
      "Architecture building, development of the client side of the site;",
      "Managing and interacting with the team;",
      "DevOps."
    ],
  },
  {
    title: "Web Developer",
    companyName: "InnovixTech",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2021 - Apr 2022",
    points: [
      "Participation in the development and support of an internal web portal designed for convenient and effective interaction of employees within the company.",
      "Developed the user interface of the portal using React, providing intuitive components.",
      "Implemented an authorization and authentication system, the ability to upload and share files",
      "Stack- JS, TS, Next.js, SCSS, node js",
    ],
  },
  {
    title: "Web-developer, software engineer",
    companyName: "freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2020",
    points: [
      "Working with websites and CMS, adaptive layout (html, css/less), writing scripts. JavaScript, CMS drupal, python",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Matvey proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Matvey does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Matvey optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Brunoyam",
    description:
      "Brunoyam is a training school offering both online and in-person courses in several fields: IT (programming, QA, 1С), analytics, design, marketing, video editing, and soft skills. Founded around 2010 and with headquarters in Saint Petersburg, Russia, they also have a branch in Belgrade, Serbia",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "66Bit",
    description:
      `A custom software development and IT consulting company founded in 2004.
      Headquarters in Yekaterinburg with branches in Moscow and Astana.
      They emphasize a thorough business-driven approach: gathering requirements, system design, engineering, testing, deployment, and one-stop support with lengthy experience since 2004
      `,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: _66bit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "InnovixTech",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
