export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application built with Next.js, TypeScript, and Stripe integration. Features include product listings, shopping cart, user authentication, and payment processing.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "MongoDB"],
    githubUrl: "https://github.com/username/ecommerce-platform",
    demoUrl: "https://ecommerce-demo.example.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "A productivity application that helps users organize tasks, set deadlines, and track progress. Built with React, Redux, and a Node.js backend with real-time updates.",
    image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Redux", "Node.js", "Express", "Socket.io"],
    githubUrl: "https://github.com/username/task-management",
    demoUrl: "https://tasks-demo.example.com",
    featured: true,
  },
  {
    id: "project-3",
    title: "Weather Dashboard",
    description: "An interactive weather application that provides real-time weather data, forecasts, and historical trends. Utilizes multiple weather APIs and data visualization.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Chart.js", "API Integration", "Geolocation", "PWA"],
    githubUrl: "https://github.com/username/weather-dashboard",
    demoUrl: "https://weather-demo.example.com",
    featured: true,
  },
  {
    id: "project-4",
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS. Features responsive design, dark mode, and animated transitions.",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
    githubUrl: "https://github.com/username/portfolio",
    demoUrl: "https://portfolio-demo.example.com",
    featured: false,
  },
  {
    id: "project-5",
    title: "Social Media Analytics",
    description: "A data visualization tool for social media metrics. Allows users to track engagement, follower growth, and content performance across platforms.",
    image: "https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "D3.js", "Firebase", "API Integration"],
    githubUrl: "https://github.com/username/social-analytics",
    demoUrl: "https://analytics-demo.example.com",
    featured: false,
  },
  {
    id: "project-6",
    title: "Recipe Finder App",
    description: "A mobile-responsive application that helps users find recipes based on ingredients they have on hand. Includes filtering by dietary restrictions and meal types.",
    image: "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "API Integration", "Responsive Design", "Filtering Algorithm"],
    githubUrl: "https://github.com/username/recipe-finder",
    demoUrl: "https://recipe-demo.example.com",
    featured: false,
  },
];