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
    title: "Scholarship App",
    description: "A full-stack scholarship application built with Next.js, TypeScript, and PayStack integration. Features include product listings, shopping cart, user authentication, and payment processing.",
    image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "TypeScript", "PayStack", "Tailwind CSS", "MongoDB"],
    githubUrl: "https://github.com/unseanted/plateau-scholar-quiz-hub",
    demoUrl: "https://plateau-scholar-quiz-hub.vercel.app/",
    featured: true,
  },
  {
    id: "project-2",
    title: "BlueHouse Website",
    description: "An application for BlueHouse Technologies. Built with Next, Redux, and a Node.js backend with real-time updates.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "API Integration", "Responsive Design", "Filtering Algorithm"],
    githubUrl: "https://github.com/unseanted/recipe-finder",
    demoUrl: "https://recipe-finder-beryl.vercel.app/",
    featured: false,
  },
  {
    id: "project-7",
    title: "Learning Management System",
    description: "A learning Management system for learners across Africa. Allows users to learn,engage, grow, develop, contribute to forums and content performance across platforms.",
    image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "vite", "Node.js", "MongoDB", "API Integration", "google-oauth"],
    githubUrl: "https://github.com/unseanted/african-intelligence",
    demoUrl: "https://africanintelligence.tech",
    featured: false,
  },
  {
    id: "project-8",
    title: "Kobo App",
    description: "A finance/e-commerce mobile app built with AI",
    image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "vite", "Supabase", "TypeScript", "Tailwind CSS", "API Integration"],
    githubUrl: "https://github.com/Unseanted/kobo-shop-finance-hub",
    demoUrl: "",
    featured: false,
  },
  {
    id: "project-9",
    title: "Mashira travel App",
    description: "A travel application for users to book hotels, and cars. It also allows users to view the weather of the destination they are traveling to.",
    image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "vite", "Supabase", "TypeScript", "Tailwind CSS", "API Integration"],
    githubUrl: "https://github.com/Unseanted/mashira-glow",
    demoUrl: "",
    featured: false,
  },
  {
    id: "project-10",
    title: "ace tickets",
    description: "A ticket booking application for events and concerts",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "MongoDB", "TypeScript", "Tailwind CSS", "API Integration"],
    githubUrl: "https://github.com/Unseanted/ace-tickets",
    demoUrl: "",
    featured: false,
  },
];