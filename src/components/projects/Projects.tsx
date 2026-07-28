import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectData } from "./projectData";
import type { Project } from "./projectData";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-5xl font-bold text-center mb-4"
        >
          Featured Projects
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          Some of my recent work.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {projectData.map((project: Project) => (

            <ProjectCard
              key={project.title}
              project={project}
            />

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;