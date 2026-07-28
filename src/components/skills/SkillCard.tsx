import SkillProgress from "./SkillProgress";
import type { SkillCategory } from "./skillsData";
import { motion } from "framer-motion";

interface SkillCardProps {
    category: SkillCategory;
}

function SkillCard({ category }: SkillCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            className="bg-[#111] border border-gray-800 rounded-2xl p-6 backdrop-blur-xl hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,.35)] transition-all duration-500"
        >

            <h3 className="text-2xl font-bold mb-6 text-purple-400">
                {category.title}
            </h3>

            {category.skills.map((skill) => (
                <SkillProgress
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                />
            ))}

        </motion.div>
    );
}

export default SkillCard;