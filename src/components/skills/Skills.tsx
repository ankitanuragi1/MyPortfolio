import { skillsData } from "./skillsData";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";


function Skills() {
    return (
        <section
            id="skills"
            className="bg-black text-white py-24 px-6"
        >
            <div className="max-w-7xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="text-5xl font-bold text-center mb-4"
                >
                    My Skills
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.2,
                        duration: 0.7,
                    }}
                    className="text-center text-gray-400 mb-16"
                >
                    Technologies I use to build modern and scalable applications.
                </motion.p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {skillsData.map((category) => (
                        <SkillCard
                            key={category.title}
                            category={category}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Skills;