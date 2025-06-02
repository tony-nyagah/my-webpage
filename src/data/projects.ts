export interface Project {
  title: string;
  description: string;
  tech: string[];
  status: string;
  category?: string;
  github?: string | null;
  demo?: string | null;
  image?: string;
  highlights?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Fedora Release Schedule Planner",
    description:
      "An application for planning and managing Fedora release schedules.",
    tech: ["Python", "FastAPI", "Docker"],
    status: "In Progress",
    category: "Open Source",
    featured: true,
  },
  {
    title: "Health Map",
    description:
      "An interactive web application allowing users view health facilities around them and even get directions to the nearest one. ",
    tech: ["TypeScript", "Maps", "Location Tracker"],
    github: "https://github.com/tony-nyagah/health-map",
    demo: "https://health-map.vercel.app/",
    status: "Completed",
    category: "Web Development",
    featured: true,
  },
];
