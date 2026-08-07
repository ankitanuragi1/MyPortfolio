import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8 } : undefined}
      transition={{
        duration: 0.3,
      }}
      className={`
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/60
        backdrop-blur-md
        p-6
        transition-all
        duration-300

        ${
          hover
            ? `
        hover:border-purple-500/70
        hover:shadow-[0_0_35px_rgba(168,85,247,.25)]
        `
            : ""
        }

        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default Card;