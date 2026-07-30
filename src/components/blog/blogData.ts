export interface Blog {

    title: string;

    category: string;

    readingTime: string;

    description: string;

    link: string;

}

export const blogData: Blog[] = [

    {

        title: "React Hooks Complete Guide",

        category: "React",

        readingTime: "12 min",

        description:
            "Learn useState, useEffect, useMemo and custom hooks with examples.",

        link: "#"

    },

    {

        title: "TypeScript Generics Explained",

        category: "TypeScript",

        readingTime: "15 min",

        description:
            "Master Generics with practical examples and real-world use cases.",

        link: "#"

    },

    {

        title: "JavaScript Event Loop",

        category: "JavaScript",

        readingTime: "10 min",

        description:
            "Understand the Call Stack, Callback Queue and Event Loop visually.",

        link: "#"

    }

];