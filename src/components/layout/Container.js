import classNames from "classnames";

const Container = ({ children, className }) => {
  return (
    <div className={classNames("container mx-auto lg:px-[6rem]", className)}>
      {children}
    </div>
  );
};

export default Container;
