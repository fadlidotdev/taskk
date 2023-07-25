import {HTMLProps, ReactNode} from "react";
import {classes} from "../../../utils/core";

interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({children, className, ...otherProps}: Props) => {
  return (
    <div
      className={classes(
        "w-full px-4 py-3 shadow bg-white rounded-lg ",
        className,
      )}
      {...otherProps}>
      {children}
    </div>
  );
};

export default Card;
