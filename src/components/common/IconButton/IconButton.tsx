import {cva} from "class-variance-authority";

import {button, ButtonProps} from "../Button/Button";
import {classes} from "../../../utils/core";

const iconButton = cva("p-0 flex items-center justify-center", {
  variants: {
    size: {
      small: "w-8 h-8",
      base: "w-10 h-10",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

export const IconButton = (props: ButtonProps) => {
  const {className, variant, size, children, ...otherProps} = props;

  return (
    <button
      className={classes(button({variant, className}), iconButton({size}))}
      {...otherProps}>
      {children}
    </button>
  );
};

export default IconButton;
