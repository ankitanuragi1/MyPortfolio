export interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    live: string;
}

export const projectData: Project[] = [
    {
        title: "Career Guide",
        description:
            "AI Powered Career Guidance Platform built using MERN Stack.",
        image: "/projects/career-guide.png",
        technologies: [
            "React",
            "Node",
            "Express",
            "MongoDB"
        ],
        github: "#",
        live: "#"
    },
    {
        title: "Portfolio",
        description:
            "Modern Portfolio Website built using React and TypeScript.",
        image: "/projects/portfolio.png",
        technologies: [
            "React",
            "TypeScript",
            "Tailwind"
        ],
        github: "#",
        live: "#"
    }
];
