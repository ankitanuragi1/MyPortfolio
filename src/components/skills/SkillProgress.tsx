import { motion } from "framer-motion";

interface SkillProgressProps {
  name: string;
  level: number;
}

function SkillProgress({ name, level }: SkillProgressProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-purple-400">{level}%</span>
      </div>

      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">

        {/* Animate the data-driven percentage only after this bar enters the viewport. */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
        />

      </div>
    </div>
  );
}

export default SkillProgress;
