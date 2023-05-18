import classNames from "classnames";

const Button = ({
  type,
  text,
  size,
  color,
  border,
  onClick,
  children,
  className,
  isFullWidth,
}) => {
  let buttonSize = "";
  switch (size) {
    case "extra-small":
      buttonSize = "px-3 py-2 text-xs";
      break;
    case "small":
      buttonSize = "px-3 py-2 text-sm";
      break;
    case "large":
      buttonSize = "px-5 py-3 text-base";
      break;
  }

  return (
    <button
      type={type || "button"}
      onClick={() => onClick && onClick()}
      className={classNames(
        color,
        border,
        buttonSize,
        "px-4 py-2 rounded-md",
        {
          "w-full": isFullWidth,
        },
        className
      )}
    >
      {text || children}
    </button>
  );
};

export default Button;
