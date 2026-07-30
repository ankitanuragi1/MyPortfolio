import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "./experienceData";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-center text-5xl font-bold"
        >
          Experience
        </motion.h2>

        <p className="mb-16 text-center text-gray-400">
          My journey as a developer.
        </p>

        <div className="space-y-12">

          {experienceData.map((experience) => (
            <ExperienceCard
              key={experience.title}
              experience={experience}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;