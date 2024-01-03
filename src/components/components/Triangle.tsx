import React from "react";
import { theme } from "../../theme";

type ResponsiveProp<T> = T[];

type Props = {
  color: keyof (typeof theme)["colors"];
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  width: ResponsiveProp<string>;
  height: ResponsiveProp<string>;
};

const Triangle: React.FC<Props> = ({
  color,
  position = "top-left",
  width,
  height,
}) => {
  const [y, x] = position.split("-");

  const borderColor = theme.colors[color] ?? theme.colors["text"];

  const customStyle = {
    [`border${capitalize(y)}`]: `${height[0]} solid ${borderColor}`,
    [`border${capitalize(invertX(x))}`]: `${width[0]} solid transparent`,
  };

  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  }[position];

  return (
    <div
      style={customStyle}
      className={`absolute w-0 h-0 -z-10 ${positionClasses}`}
    />
  );
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const invertX = (x: string) => (x === "right" ? "left" : "right");

export default Triangle;
