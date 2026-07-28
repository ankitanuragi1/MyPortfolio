import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "./projectData";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="overflow-hidden rounded-2xl border border-gray-800 bg-[#111] hover:border-purple-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,.3)]"
    >
      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-60 w-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-5">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-3 mb-6">

          {project.technologies.map((tech: string) => (

            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 text-sm"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
          >
            <FaGithub />

            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
          >
            <FaExternalLinkAlt />

            Live Demo
          </a>

        </div>

      </div>

    </motion.div>
  );
}

export default ProjectCard;
