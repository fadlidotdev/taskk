import {cva, VariantProps} from "class-variance-authority";
import {classes} from "../../../utils/core";

const baseStyles =
  "inline-flex flex-grow-0 items-center flex-shrink-0 px-5 py-2 font-medium text-white";

export const button = cva(baseStyles, {
  variants: {
    variant: {
      main: "text-white bg-gray-800 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-950",
      ghost:
        "text-gray-700 bg-transparent rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-white/5",
      alternate:
        "text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:bg-gray-700 dark:border-gray-800 dark:text-gray-100",
    },
    size: {
      small: "text-xs h-8",
      base: "text-sm h-10",
    },
  },
  defaultVariants: {
    variant: "main",
    size: "base",
  },
});

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export type ButtonProps = Props;

const Button = (props: Props) => {
  const {className, variant, size, children, ...otherProps} = props;

  return (
    <button
      className={classes(button({variant, size, className}))}
      {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
