import {
  mobile,
  frontend,
  creator,
  web,
  javascript,
  typescript,
  nodejs,
  mongodb,
  git,
} from "../assets";

import synxa from '../assets/synxa.png';
import gssoc from "../assets/gssoc.png";
import tedx from "../assets/tedx.png";
import ms from '../assets/ms.png';
import salesforce from '../assets/salesforce.png';
import dt from '../assets/dt.png';

import reactlogo from '../assets/tech/reactjs.png';
import vitelogo from '../assets/tech/vite.png';
import tslogo from '../assets/tech/typescript.png';
import shadcnlogo from '../assets/tech/shadcn.png';
import supabaselogo from '../assets/tech/supabase.jpg';
import postgreslogo from '../assets/tech/postgres.png';
import tailwindlogo from '../assets/tech/tailwind.png';
import sclogo from "../assets/samarthanam_logo.jpg";
import flutterlogo from "../assets/tech/flutter.png";
import dartlogo from "../assets/tech/dart.png";
import firebaselogo from "../assets/tech/firebase.png";
import figmalogo from "../assets/tech/figma.png";
import ahanalogo from "../assets/ahanalogo.png";
import muilogo from "../assets/tech/mui.png";
import mongologo from "../assets/tech/mongodb.png";
import studyhub from "../assets/studyhub.png";
import canva from "../assets/tech/canva.svg";
import cpplogo from "../assets/tech/cpplogo.png";
import tailwind from "../assets/tech/tailwind.png";
import boltcode from "../assets/boltcode.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "My Work",
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
    title: "Pitch Deck Designer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Freelancer",
    icon: creator,
  },
];

const technologies = [
  {
    id: 0,
    name: "figma",
    icon: figmalogo,
  },
  {
    id: 1,
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    id: 2,
    name: "Material UI",
    icon: muilogo,
  },
  {
    id: 3,
    name: "shadcn",
    icon: shadcnlogo,
  },
  {
    id: 4,
    name: "JavaScript",
    icon: javascript,
  },
  {
    id: 5,
    name: "React JS",
    icon: reactlogo,
  },
  {
    id: 6,
    name: "Node JS",
    icon: nodejs,
  },
  {
    id: 7,
    name: "TypeScript",
    icon: typescript,
  },
  {
    id: 8,
    name: "Firebase",
    icon: firebaselogo,
  },
  {
    id: 9,
    name: "MongoDB",
    icon: mongodb,
  },
  {
    id: 10,
    name: "Supabase",
    icon: supabaselogo,
  },
  {
    id: 11,
    name: "Git",
    icon: git,
  },
  {
    id: 12,
    name: "Canva",
    icon: canva,
  },
  {
    id: 13,
    name: "C++",
    icon: cpplogo,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Synxa IT Private Limited",
    icon: synxa,
    iconBg: "#ffffff",
    date: "July 2023 - July 2024",
    points: [
      "Built responsive and user-friendly web pages for the company website using React.js, focusing on delivering a seamless frontend experience.",
      "Led a team of 10 developers, guiding them in building UI components, reviewing their code, and helping debug issues to ensure consistent and high-quality output."
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Boltcode",
    icon: boltcode,
    iconBg: "#ffffff",
    date: "Aug 2023 - Apr 2024",
    points: [
      "Converted Figma designs into responsive and dynamic web pages using React and Tailwind CSS, ensuring pixel-perfect implementation.",
      "Contributed to the development of Ovii’s main website, focusing on performance, design accuracy, and cross-device compatibility."
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "Girlscript Summer of Code",
    icon: gssoc,
    iconBg: "#ffffff",
    date: "May 2024 - Aug 2024",
    points: [
      "Actively contributed to GirlScript Summer of Code (GSSoC) with 37 merged pull requests, securing a top 100 rank (#76) among 2.5k+ contributors.",
      "Worked on 20+ open-source projects, enhancing UI responsiveness and building new features using React, Tailwind CSS, MUI, JavaScript, and HTML."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Deep Thought",
    icon: dt,
    iconBg: "#ffffff",
    date: "June 2024 - Sep 2024",
    points: [
      "Built and integrated WhatsApp automation using the Chatspaz API, enhancing communication efficiency and customer engagement.",
      "Analyzed and structured sales data to uncover trends and drive strategic decisions, leading to improved sales performance."
    ],
  },
  {
    title: "Web Development Head",
    company_name: "TEDxPESU",
    icon: tedx,
    iconBg: "#000000",
    date: "Sep 2024 - Mar 2025",
    points: [
      "Led the Web Development team for TEDxPESU, building a responsive website that highlighted the event’s theme Mosaics of Modernity using React and Tailwind.",
      "Implemented key features including speaker profiles, ticketing instructions, and team member sections in collaboration with the design and content teams."
    ],
  },
  {
    title: "Product Jam 2025 - Winners",
    company_name: "Salesforce",
    icon: salesforce,
    iconBg: "#ffffff",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Developed “Ahana”, a menstrual health and wellness app using Flutter, Dart, and Firebase, featuring virtual doctor appointments, traditional food purchases, and symptom-based recommendations.",
      "Presented the app at Salesforce’s Bangalore office as one of the top 4 teams selected by Salesforce Global Design Leaders during the Product Jam 2025."
    ],
  },
  {
    title: "Code to Give 2025 - Top #4",
    company_name: "Morgan Stanley",
    icon: ms,
    iconBg: "#003366",
    date: "Mar 2025 - Mar 2025",
    points: [
      "Developed a scalable full-stack Event Management web application for Samarthanam Trust, with a strong focus on accessibility features for visually impaired users.",
      "Selected among the top 4 teams in Morgan Stanley Code to Give 2025; recognized as one of the top 144 finalists out of 5,000+ participants."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working with Hemashree closely during her time at Boltcode. She showed exceptional promise as a frontend dev, specially with React.Js, consistently delivering high-quality code that met and exceeded our project requirements. She also showcased impressive adaptability and a strong work ethic when faced with tight deadlines and challenging tasks. She remained focused, organized, and detail-oriented, ensuring that our projects were delivered on time and within budget.Beyond her technical expertise, Hemashree is a genuine team player and a pleasure to work with. She consistently demonstrated professionalism, integrity, and a genuine passion for frontend development.",
    name: "Manodyna K H",
    designation: "Founder",
    company: "Ovii",
  },
];


const projectsData = [
  {
    id: 0,
    name: "Samarth Connect",
    description: "Built a scalable full-stack Event Management web application during the Morgan Stanley India Code to Give 2025 Hackathon, focusing on accessibility for visually impaired users. I contributed to the frontend, designing user-friendly screens and implementing accessibility features such as high contrast mode and speech-to-text input to enhance usability and inclusion.",
    tags: [
      {
        name: "vite",
        color: "text-blue-400",
        path: vitelogo,
      },
      {
        name: "Typescript",
        color: "text-gray-400",
        path: tslogo,
      },
      {
        name: "tailwind",
        color: "text-gray-400",
        path: tailwindlogo,
      },
      {
        name: "shadcn",
        color: "text-gray-400",
        path: shadcnlogo,
      },
      {
        name: "postgres",
        color: "text-blue-600",
        path: postgreslogo,
      },
      {
        name: "supabase",
        color: "text-purple-400",
        path: supabaselogo,
      },
    ],
    image: sclogo,
    source_code_link: "https://github.com/dheerajcl/samarthanam",
    live_site_link: "https://samarthconnect.vercel.app/",
    video_url: "https://youtu.be/-ihiphkKIxo?feature=shared",
  },
  {
    id: 1,
    name: "Ahana",
    description:
      "Developed a menstrual wellness app during the Salesforce Product Jam 2025, aimed at supporting holistic health for users. I contributed to key modules like authentication, payment integration, symptom-based recommendations, and the cart page. The app includes features such as virtual doctor appointments, a community forum, and the option to purchase traditional wellness foods, creating a complete support ecosystem.",
    tags: [
      {
        name: "figma",
        color: "text-purple-400",
        path: figmalogo,
      },
      {
        name: "flutter",
        color: "blue-text-gradient",
        path: flutterlogo,
      },
      {
        name: "dart",
        color: "text-blue-600",
        path: dartlogo,
      },
      {
        name: "firebase",
        color: "text-purple-400",
        path: firebaselogo,
      },
    ],
    image: ahanalogo,
    source_code_link: null,
    live_site_link: "https://docs.google.com/presentation/d/1_8Ik4zB2Pl4EE33O5-DnQuEHvGr9u87t/edit?usp=sharing&ouid=115086529627292712875&rtpof=true&sd=true",
    video_url: "https://youtu.be/sZQTOFAQ52Q",
  },
  {
    id: 2,
    name: "Study Hub",
    description:
      "Built a web app tailored for students to enable one-to-one communication, file sharing, task scheduling, and video meetings with screen sharing. I specifically worked on implementing the direct messaging feature and the community space, where users can post and engage with peers. The platform promotes seamless collaboration and productivity for academic use.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
        path: reactlogo,
      },
      {
        name: "materialui",
        color: "text-purple-400",
        path: muilogo,
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
        path: mongologo,
      },
      {
        name: "firebase",
        color: "text-purple-400",
        path: firebaselogo,
      },
    ],
    image: studyhub,
    source_code_link: "https://github.com/Hemashree21/Study-Hub",
    live_site_link: null,
    video_url: "https://youtu.be/B-Jq7oLpONY",
  },
];

export { services, technologies, experiences, testimonials, projectsData };
