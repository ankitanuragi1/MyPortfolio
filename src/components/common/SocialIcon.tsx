import type { IconType } from "react-icons";

interface SocialIconProps {
  href: string;
  icon: IconType;
  label: string;
  color: string;
  glow: string;
  size?: "sm" | "md" | "lg";
}

function SocialIcon({
  href,
  icon: Icon,
  label,
  color,
  glow,
  size = "md",
}: SocialIconProps) {
  const sizes = {
    sm: "h-10 w-10 text-lg",
    md: "h-12 w-12 text-xl",
    lg: "h-14 w-14 text-2xl",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`
        group
        relative
        flex
        items-center
        justify-center
        rounded-full
        border
        border-zinc-700
        text-gray-300
        transition-all
        duration-300
        hover:-translate-y-1
        ${sizes[size]}
      `}
      style={{
        transition: "all .3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.color = color;
        e.currentTarget.style.backgroundColor = `${color}15`;
        e.currentTarget.style.boxShadow = `0 0 25px ${glow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.color = "";
        e.currentTarget.style.backgroundColor = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <Icon />

      {/* Tooltip */}
      <span
        className="
          absolute
          -top-10
          scale-0
          rounded-md
          bg-zinc-800
          px-2
          py-1
          text-xs
          text-white
          transition-all
          duration-300
          group-hover:scale-100
        "
      >
        {label}
      </span>
    </a>
  );
}

export default SocialIcon;