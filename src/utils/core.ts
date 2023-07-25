import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export const empty = (value: string | null | undefined) => {
  return value === "";
};

export const classes = (...inputs: ClassValue[]) => twMerge(clsx(...inputs));