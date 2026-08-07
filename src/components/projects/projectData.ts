import careerguide from '../../assets/projects/careerguide.png';
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
        image: careerguide,
        technologies: [
            "React",
            "Node",
            "Express",
            "MongoDB"
        ],
        github: "https://github.com/ankitanuragi1/CareerGuide-web",
        live: "https://careerguide-web.netlify.app/"
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
        github: "https://github.com/ankitanuragi1/MyPortfolio",
        live: "#"
    }
];
