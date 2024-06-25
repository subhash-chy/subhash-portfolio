import { useTheme } from "next-themes";
const colors = require("../constants/colors");

export const useRoadmap = (data) => {
  const theme = useTheme();
  const lines = [];
  const color =
    theme.resolvedTheme === "dark" ? colors.accent_dark : colors.accent;

  for (let i = 0; i < data.length - 1; i++) {
    lines.push({
      start: `dot${i + 1}`,
      end: `dot${i + 2}`,
      color: color,
      headSize: 0,
      strokeWidth: 2,
      curveness: 0.001, //.001 to make straight line
      startAnchor: "middle",
      endAnchor: "middle",
      dashness: { strokeLen: 40, nonStrokeLen: 20, animation: 0.3 },
    });
  }

  return { lines };
};
