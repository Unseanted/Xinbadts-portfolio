import recipeImage from "@/components/images/recipe.jpg";
import bluehouseImage from "@/components/images/blueouse.jpg";
import scholarImage from "@/components/images/scholar.jpg";
import { StaticImageData } from "next/image";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Scholarship App",
    description: "A full-stack scholarship application built with Next.js, TypeScript, and PayStack integration. Features include product listings, shopping cart, user authentication, and payment processing.",
    image: scholarImage,
    tags: ["Next.js", "TypeScript", "PayStack", "Tailwind CSS", "MongoDB"],
    githubUrl: "https://github.com/unseanted/plateau-scholar-quiz-hub",
    demoUrl: "https://plateau-scholar-quiz-hub.vercel.app/",
    featured: true,
  },
  {
    id: "project-2",
    title: "BlueHouse Website",
    description: "An application for BlueHouse Technologies. Built with Next, Redux, and a Node.js backend with real-time updates.",
    image: bluehouseImage,
    tags: ["Next", "Redux", "Node.js", "Express", "Socket.io"],
    githubUrl: "https://github.com/unseanted/bluehouse_v2",
    demoUrl: "https://bluehouseng.com",
    featured: true,
  },
  {
    id: "project-3",
    title: "Weather Dashboard",
    description: "An interactive weather application that provides real-time weather data, forecasts, and historical trends. Utilizes multiple weather APIs and data visualization.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Chart.js", "API Integration", "Geolocation", "PWA"],
    githubUrl: "https://github.com/unseanted/weather-dashboard",
    demoUrl: "https://weather-app.vercel.app",
    featured: true,
  },
  {
    id: "project-4",
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS. Features responsive design, dark mode, and animated transitions.",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
    githubUrl: "https://github.com/unseanted/xinbadts-portfolio",
    demoUrl: "https://portfolio-demo.example.com",
    featured: false,
  },
  {
    id: "project-5",
    title: "Social Media Analytics",
    description: "A data visualization tool for social media metrics. Allows users to track engagement, follower growth, and content performance across platforms.",
    image: "https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "D3.js", "Firebase", "API Integration"],
    githubUrl: "https://github.com/unseanted/social-analytics",
    demoUrl: "https://analytics-demo.example.com",
    featured: false,
  },
  {
    id: "project-6",
    title: "Recipe Finder App",
    description: "A mobile-responsive application that helps users find recipes based on ingredients they have on hand. Includes filtering by dietary restrictions and meal types.",
    image: recipeImage,
    tags: ["React", "API Integration", "Responsive Design", "Filtering Algorithm"],
    githubUrl: "https://github.com/unseanted/recipe-finder",
    demoUrl: "https://recipe-finder-beryl.vercel.app/",
    featured: false,
  },
];
