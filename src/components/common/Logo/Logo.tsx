import {classes} from "../../../utils/core";

const Logo = ({width = 24, height = 24, className = ""}) => (
  <img
    className={classes("block mx-auto w-auto h-auto", className)}
    src="/logo.svg"
    width={width}
    height={height}
    alt="Company logo"
  />
);

export default Logo;
