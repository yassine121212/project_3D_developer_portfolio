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
  jobit,
  tripguide,
  threejs,
} from "../assets";
import { Github, Linkedin, Twitter } from "lucide-react";

export const navLinks = [
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
const profiles = [
  {
    platform: "LinkedIn",
    username: "EL-Ouazzani Yassine",
    description: "Software Enginer | Full Stack Developer | Devops Architect",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C4E03AQFT2ZsGrmvg-w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1656530377344?e=1736985600&v=beta&t=yNgY0cLfKKPQuFfHmb1earLU00WG45YY_xwuk703sCk",
    icon: Linkedin,
    bgColor: "bg-[#0077B5]",
    link: "https://www.linkedin.com/in/yassine-el-ouazzani/",
  },
  {
    platform: "GitHub",
    username: "yassine121212",
    description: "Open source enthusiast. 500+ contributions",
    imageUrl: "https://avatars.githubusercontent.com/u/80113396?v=4",
    icon: Github,
    bgColor: "bg-[#24292e]",
    link: "https://github.com/yassine121212",
  },
  {
    platform: "Twitter",
    username: "@Yassine_ElDev",
    description: "Tweeting about web development, React, and tech innovations",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1618810230279704576/gNjTZHdE_400x400.jpg",
    icon: Twitter,
    bgColor: "bg-black",
    link: "https://x.com/Yassine_ElDev",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
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

const experiences = [
  {
    title: "Full Stack Developer - Mobile App",
    company_name: "Capitaltech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2024 - August 2024",
    points: [
      "Redesigning the private tutoring platform expliquemoipythagore.fr with a focus on Full Stack work across front-end (web and mobile), back-end (Hono.js), database management, and software design.",
      "Developing user-facing features like dynamic dashboards, search and filter functionalities, and optimizing mobile and web interfaces.",
      "Refactoring code and improving front-end performance using React and React Native.",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    company_name: "Allip",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2023 - Septembre 2023",
    points: [
      "Designing and developing a versatile web application for managing internal operations and customer interactions.",
      "Implementing solutions with React.js and Firebase, ensuring efficient data management and an engaging user experience.",
      "Ensuring responsive design and cross-browser compatibility, allowing seamless access across various devices.",
    ],
  },
  {
    title: "Front-end Back-end Developer",
    company_name: "VITSEY",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2022 - August 2022",
    points: [
      "Developing the administration section of the Motopickup mobile app, enhancing user experience and facilitating backend communication.",
      "Building an intuitive, efficient interface with React.js and Firebase, focusing on scalability and performance.",
      "Collaborating with cross-functional teams to ensure the app aligns with business requirements and user expectations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
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
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  profiles,
};
