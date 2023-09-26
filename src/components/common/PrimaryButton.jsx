import { Link } from "react-router-dom";

const PrimaryButton = ({
  borderColor,
  color,
  background,
  path,
  title,
  transparent,
}) => {
  return (
    <Link
      to={path}
      className={`rounded-[4px] text-xs p-[10px] ${
        transparent
          ? `border border-[#363F44] text-${color}`
          : "bg-primary border border-primary text-white"
      }`}
    >
      <button>{title}</button>
    </Link>
  );
};

export default PrimaryButton;
