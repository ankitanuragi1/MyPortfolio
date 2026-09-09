import careerguide from '../../assets/projects/careerguide.png';
import portfolioImg from '../../assets/projects/portfolioImg.png';
export interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    live: string;
}

// ProjectCard consumes this configuration, making new portfolio entries data-only changes.
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
        image: portfolioImg,
        technologies: [
            "React",
            "TypeScript",
            "Tailwind"
        ],
        github: "https://github.com/ankitanuragi1/MyPortfolio",
        live: "#"
    }
];
