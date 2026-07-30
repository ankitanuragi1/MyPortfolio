import { motion } from "framer-motion";
import { educationData } from "./educationData";
import EducationCard from "./EducationCard";

function Education() {
    return (
        <section
            id="education"
            className="bg-black text-white py-24 px-6"
        >

            <div className="max-w-6xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                    className="text-5xl font-bold text-center mb-4"
                >
                    Education
                </motion.h2>

                <p className="text-center text-gray-400 mb-16">
                    My academic journey.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {educationData.map((education) => (

                        <EducationCard
                            key={education.degree}
                            education={education}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Education;