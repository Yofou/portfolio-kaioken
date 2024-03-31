import { useCursor } from "$/hook/useCursor";
import "../../styles/Cursor.css"

export const Cursor = () => {
  const {
    x,
    y,
    width,
    height,
    rounded,
    opacity,
    scale,
    color,
    bounding,
  } = useCursor();

  return (
    <div
      className={`
      w-12 
      h-12 
      fixed 
      top-0 
      left-0 
      pointer-events-none 
      cursor
      ${bounding?.width === 0 ? "" : "cursor-morph"}
    `}
      style={`
      --x: ${x}px;
      --y: ${y}px;
      --width: ${width}px;
      --height: ${height}px;
      --rounded: ${rounded}px;
      --scale: ${scale};
      --color: ${color ?? "unset"};
      --opacity: ${opacity}
    `}
    ></div>
  );
};
