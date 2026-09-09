export interface Skill {
    name: string;
    level: number;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

// `level` drives the visual progress bar and represents a self-assessed proficiency percentage.
export const skillsData: SkillCategory[] = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", level: 95 },
            { name: "CSS", level: 90 },
            { name: "JavaScript", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "React", level: 90 },
            { name: "Tailwind CSS", level: 95 },
        ],
    },

    {
        title: "Backend",
        skills: [
            { name: "Node.js", level: 80 },
            { name: "Express.js", level: 80 },
        ],
    },

    {
        title: "Database",
        skills: [
            { name: "MongoDB", level: 85 },
            { name: "MySQL", level: 80 },
        ],
    },

    {
        title: "Programming",
        skills: [
            { name: "C++", level: 90 },
            { name: "Python", level: 80 },
        ],
    },

    {
        title: "Tools",
        skills: [
            { name: "Git", level: 90 },
            { name: "GitHub", level: 90 },
            { name: "VS Code", level: 95 },
            { name: "Postman", level: 75 },
        ],
    },
];
