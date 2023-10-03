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
    // <Link
    //   to={path}
    //   className={`rounded-[4px] text-xs p-[10px] ${
    //     transparent
    //       ? `border border-[#363F44] text-${color}`
    //       : "bg-primary border border-primary text-white"
    //   }`}
    // >
    //   <button>{title}</button>
    // </Link>
    <Link to={path}>
      {!transparent ? (
        <button
          type="button"
          data-text={title}
          className="rounded-[4px] text-xs p-[10px] hover:bg-transparent hover:text-[#343a40] bg-primary text-white thm-btn"
        >
          {title}
        </button>
      ) : (
        <button
          type="button"
          data-text={title}
          className="rounded-[4px] text-xs p-[10px] border border-[#363F44] bg-transparent"
        >
          {title}
        </button>
      )}
    </Link>
  );
};

export default PrimaryButton;
