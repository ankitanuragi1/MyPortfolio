import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import type { Education } from "./educationData";

interface EducationCardProps {
    education: Education;
}

function EducationCard({ education }: EducationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: .8,
                ease: "easeOut"
            }}
            className="rounded-2xl border border-gray-800 bg-[#111] p-6 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,.3)] transition-all duration-300"
        >

            <FaGraduationCap className="text-4xl text-purple-500 mb-5" />

            <h3 className="text-2xl font-bold">
                {education.degree}
            </h3>

            <p className="mt-2 text-gray-400">
                {education.institute}
            </p>

            <p className="mt-2 text-purple-400">
                {education.duration}
            </p>

            <p className="mt-4">
                {education.score}
            </p>

        </motion.div>
    );
}

export default EducationCard;