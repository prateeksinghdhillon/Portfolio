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
  tripguide,
  threejs,
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
    date: "Feb 2022 - Present",
    points: [
      "Led the front-end development of a React-based Admin Dashboard, designing dynamic and responsive user interfaces for sports performance analytics, significantly improving user engagement.",
      "Designed and deployed a high-performance backend using Node.js, enabling efficient handling of high-volume data, real-time video streaming, and push notifications for a mobile app, enhancing user experience.",
      "Architected scalable application structures using AWS services such as Redis, CloudFront, and EC2, achieving 99.9% system uptime and ensuring seamless performance.",
      "Conducted R&D on live video streaming technologies, integrating an RTMP server with Node.js to enhance streaming efficiency by 25%, optimizing video streaming quality.",
    ],
  },
  {
    title: "Software Engineer L2",
    company_name: "Gemini Solutions",
    icon: gemini,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Present",
    points: [
      "Spearheaded the frontend development using Angular for the HRIS Dashboard, enhancing user interfaces and improving the client-side experience, leading to increased user satisfaction.",
      "Managed backend operations, including API integration and database management, achieving a 30% boost in system efficiency.",
      "Oversaw the entire project lifecycle, from requirement gathering to deployment, delivering the project on time.",
      "Developed an automated onboarding system that reduced personnel training time by 20%, streamlining employee training processes.",
    ],
  },
  {
    title: "Software Engineer L2",
    company_name: "Gemini Solutions",
    icon: gemini,
    iconBg: "#383E56",
    date: "Feb 2022 - Present",
    points: [
      "Designed and developed the front-end UI using React for the Document Intelligence Product, creating dynamic and user-friendly interfaces to enhance document upload and processing workflows.",
      "Utilized Firebase Authentication for secure API interactions and integrated the backend with ML services, enabling seamless document analysis by passing uploaded files to the ML engine.",
      "Implemented state management with React Context API, streamlining data flow and reducing page load times to improve performance and responsiveness.",
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
    name: "BioSecure Web App",
    description:
      "A biometric fingerprint authentication and attendance system using Raspberry Pi and R307 fingerprint sensor, enabling secure door access and real-time attendance tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/prateeksinghdhillon/BioSecure_WebApp",
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