import type { IconType } from "react-icons";

interface SocialIconProps {
  href: string;
  icon: IconType;
  hoverColor: string;
  glowColor: string;
  label: string;
}

function SocialIcon({
  href,
  icon: Icon,
  hoverColor,
  glowColor,
  label,
}: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        group
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-zinc-700
        transition-all
        duration-300
        hover:-translate-y-1
      "
      style={
        {
          "--hover-color": hoverColor,
          "--glow-color": glowColor,
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = hoverColor;
        e.currentTarget.style.color = hoverColor;
        e.currentTarget.style.backgroundColor = `${hoverColor}1A`;
        e.currentTarget.style.boxShadow = `0 0 20px ${glowColor}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.color = "";
        e.currentTarget.style.backgroundColor = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <Icon size={22} />
    </a>
  );
}

export default SocialIcon;