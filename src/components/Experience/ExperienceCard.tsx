import { motion } from "framer-motion";
import type { Experience } from "./experienceData";

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative pl-10"
    >
      {/* Timeline Line */}

      <div className="absolute left-3 top-0 h-full w-[2px] bg-purple-500"></div>

      {/* Timeline Circle */}

      <div className="absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-black bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,.8)]"></div>

      {/* Card */}

      <div className="rounded-xl border border-gray-800 bg-[#111] p-6 transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,.25)]">

        <p className="text-sm text-purple-400">
          {experience.year}
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          {experience.title}
        </h3>

        <p className="mt-1 text-gray-400">
          {experience.company}
        </p>

        <p className="mt-4 leading-7 text-gray-400">
          {experience.description}
        </p>

      </div>
    </motion.div>
  );
}

export default ExperienceCard;