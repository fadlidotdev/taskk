import {InputHTMLAttributes, forwardRef} from "react";
import {classes} from "../../../utils/core";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  divClass?: string;
  labelClass?: string;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({className, id, label, divClass, labelClass, error, ...otherProps}, ref) => {
    return (
      <div className={classes("space-y-1", divClass)}>
        <div className="flex items-baseline gap-2">
          <input
            type="checkbox"
            id={id}
            className={classes(
              "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 ",
              className,
            )}
            ref={ref}
            {...otherProps}
          />

          {label ? (
            <label
              htmlFor={id}
              className={classes(
                "relative block mb-2 font-medium -top-0.5 dark:text-gray-100",
                labelClass,
              )}>
              {label}
            </label>
          ) : null}
        </div>

        {error ? <p className="mt-2 text-xs text-red-600">{error}</p> : null}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
