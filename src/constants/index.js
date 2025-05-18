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
  gemini,
  shopify,
  carrent,
  jobit,
  questfall,
  tripguide,
  threejs,
  shop,
  lywire,
} from "../assets";

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

const services = [
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
    title: "Frontend Developer",
    icon: creator,
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
    title: "Software Engineer L2",
    company_name: "Gemini Solutions",
    icon: gemini,
    iconBg: "#383E56",
    date: "April 2024 - Present",
    points: [
      "Led the front-end development of a React-based Admin Dashboard for sports performance analytics, enhancing user engagement.",
      "Designed and deployed a high-performance backend using Node.js for efficient data handling and real-time video streaming.",
      "Architected scalable applications with AWS services, achieving 99.9% system uptime.",
      "Integrated an RTMP server with Node.js, improving live video streaming efficiency by 25%.",
      "Developed a user-friendly front-end UI for the Document Intelligence Product using React, streamlining document workflows.",
      "Integrated backend services with ML engines and implemented secure API interactions using Firebase Authentication.",
      "Optimized state management with React Context API, reducing page load times and enhancing responsiveness.",
    ],
  },
  {
    title: "Software Engineer L1",
    company_name: "Gemini Solutions",
    icon: gemini,
    iconBg: "#E6DEDD",
    date: "Aus 2022 - March 2024",
    points: [
      "Spearheaded front-end development using Angular for the HRIS Dashboard, improving client-side experience and user satisfaction.",
      "Managed backend operations, including API integration and database management, boosting system efficiency by 30%.",
      "Oversaw the project lifecycle from requirements gathering to deployment, ensuring timely delivery.",
      "Developed an automated onboarding system, reducing training time by 20%.",
      "Led front-end development of a React-based Admin Dashboard for sports performance analytics, enhancing user engagement.",
      "Designed and deployed a high-performance backend with Node.js for efficient data handling and real-time video streaming.",
      "Architected scalable applications using AWS services, achieving 99.9% system uptime.",
    ],
  },
  {
    title: "Technical Trainee",
    company_name: "Gemini Solutions",
    icon: gemini,
    iconBg: "#383E56",
    date: "Feb 2022 - July 2022",
    points: [
      "Assisted in front-end development using Angular for the HRIS Dashboard, contributing to improved user interfaces.",
      "Supported backend operations, including API integration and database management.",
      "Participated in the development of an automated onboarding system to streamline employee training processes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Huge thanks to our developer for bringing Divine Fitness to life! The site perfectly captures our vision, making it seamless, engaging, and performance-driven.",
    name: "Shalabh Chaudhary",
    designation: "Owner",
    company: "Divine Fitness",
    image: "/shalabh.png",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Questfall",
    description:
      "A decentralized questing platform that rewards users with QFT tokens for completing meaningful on-chain tasks, promoting fair token distribution, creative engagement.",
    tags: [
      {
        name: "Web3",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: questfall,
    source_code_link: "https://www.questfall.xyz/",
  },
  {
    name: "Divine Fitness Site",
    description:
      "A performance optimization and elite fitness training platform, offering advanced workout programs, expert coaching, and recovery strategies to enhance endurance, strength, and overall peak performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/prateeksinghdhillon/DivineGymSite",
  },
  {
    name: "The Style Salad",
    description:
      "A full-featured online shopping platform designed for smooth navigation, real-time order tracking, inventory control, and personalized user interactions to drive sales and elevate digital storefront experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://www.thestylesalad.in/",
  },
  {
    name: "Lywire",
    description:
      "An intuitive and scalable e-commerce solution that streamlines product browsing, secure checkout, user authentication, and order management, delivering a seamless shopping experience across all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: lywire,
    source_code_link: "https://lywire.com/",
  },
  {
    name: "GoalGauge",
    description:
      "An interactive project tracking tool featuring a dynamic progress bar, action tracking, and a user-friendly interface to enhance productivity and focus.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "yellow-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/prateeksinghdhillon/GoalGauge",
  },
];

export { services, technologies, experiences, testimonials, projects };
