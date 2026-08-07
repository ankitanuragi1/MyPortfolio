import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit";
}

function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
}: ButtonProps) {

  const baseStyle =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,.5)]",

    outline:
      "border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white hover:scale-105",

    ghost:
      "text-gray-300 hover:text-white hover:bg-zinc-800",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </motion.button>
  );
}

export default Button;