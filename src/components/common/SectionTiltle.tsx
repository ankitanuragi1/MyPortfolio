import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

function SectionTitle({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <h2 className="text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>

      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-gray-400 leading-7">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;