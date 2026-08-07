interface BadgeProps {
  children: React.ReactNode;
  color?: "purple" | "blue" | "green" | "red";
}

function Badge({
  children,
  color = "purple",
}: BadgeProps) {

  const colors = {
    purple:
      "bg-purple-500/15 text-purple-400 border-purple-500/30",

    blue:
      "bg-blue-500/15 text-blue-400 border-blue-500/30",

    green:
      "bg-green-500/15 text-green-400 border-green-500/30",

    red:
      "bg-red-500/15 text-red-400 border-red-500/30",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-3
        py-1
        text-sm
        font-medium
        transition-all
        duration-300
        hover:scale-105
        ${colors[color]}
      `}
    >
      {children}
    </span>
  );
}

export default Badge;